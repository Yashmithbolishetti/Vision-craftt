import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Send, RefreshCw, User as UserIcon, LogOut, ArrowLeft, 
  CheckCircle, AlertCircle, Bookmark, FileText, Globe, MessageSquare, 
  HelpCircle, Eye, CornerUpLeft, Check, Lock, SendHorizontal
} from 'lucide-react';
import { googleSignIn, initAuth, logout, getAccessToken, setAccessToken } from '../utils/firebase';
import { User } from 'firebase/auth';

interface GmailHubProps {
  isDark: boolean;
  lang: 'en' | 'te';
  onBackToHome: () => void;
}

interface GmailMessageHeader {
  name: string;
  value: string;
}

interface ParsedGmailMessage {
  id: string;
  snippet: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  body: string;
}

export default function GmailHub({ isDark, lang, onBackToHome }: GmailHubProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setToken] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [loadingEmails, setLoadingEmails] = useState<boolean>(false);
  const [emails, setEmails] = useState<ParsedGmailMessage[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<ParsedGmailMessage | null>(null);
  const [activeTab, setActiveTab] = useState<'inbox' | 'compose'>('inbox');
  
  // Compose Email Fields
  const [toField, setToField] = useState('');
  const [subjectField, setSubjectField] = useState('');
  const [bodyField, setBodyField] = useState('');
  
  // Statuses
  const [sendingEmail, setSendingEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [selectedTemplateName, setSelectedTemplateName] = useState<string | null>(null);
  
  // Security send confirmation dialog modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Initialize Auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setCurrentUser(user);
        setToken(token);
        setLoadingUser(false);
        fetchRecentEmails(token);
      },
      () => {
        setCurrentUser(null);
        setToken(null);
        setLoadingUser(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      setLoadingUser(true);
      const res = await googleSignIn();
      if (res) {
        setCurrentUser(res.user);
        setToken(res.accessToken);
        setLoadingUser(false);
        fetchRecentEmails(res.accessToken);
      }
    } catch (err: any) {
      console.error('Google authorization failed:', err);
      setLoadingUser(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
    setToken(null);
    setEmails([]);
    setSelectedEmail(null);
  };

  const decodeBase64Url = (base64Url: string): string => {
    try {
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      return decodeURIComponent(escape(atob(base64)));
    } catch (e) {
      try {
        return atob(base64Url.replace(/-/g, '+').replace(/_/g, '/'));
      } catch {
        return "(Decryption fallback error: Content is binary or non-UTF8 encoded)";
      }
    }
  };

  const parseEmailBody = (payload: any): string => {
    if (!payload) return "";
    if (payload.body && payload.body.data) {
      return decodeBase64Url(payload.body.data);
    }
    if (payload.parts) {
      for (const part of payload.parts) {
        if (part.mimeType === "text/plain" && part.body && part.body.data) {
          return decodeBase64Url(part.body.data);
        }
        if (part.mimeType === "text/html" && part.body && part.body.data) {
          // Keep as is or strip simple tags for text view
          const htmlContent = decodeBase64Url(part.body.data);
          return htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        }
        if (part.parts) {
          const nested = parseEmailBody(part);
          if (nested) return nested;
        }
      }
    }
    return "";
  };

  const fetchRecentEmails = async (token: string) => {
    if (!token) return;
    setLoadingEmails(true);
    try {
      const listResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=8', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const listData = await listResponse.json();
      if (!listData.messages || listData.messages.length === 0) {
        setEmails([]);
        setLoadingEmails(false);
        return;
      }

      const emailPromises = listData.messages.map(async (msg: { id: string }) => {
        const detailResponse = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=full`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const detail = await detailResponse.json();
        
        const headers: GmailMessageHeader[] = detail.payload?.headers || [];
        const subjectHeader = headers.find(h => h.name.toLowerCase() === 'subject');
        const fromHeader = headers.find(h => h.name.toLowerCase() === 'from');
        const toHeader = headers.find(h => h.name.toLowerCase() === 'to');
        const dateHeader = headers.find(h => h.name.toLowerCase() === 'date');

        const body = parseEmailBody(detail.payload);

        return {
          id: msg.id,
          snippet: detail.snippet || '',
          subject: subjectHeader ? subjectHeader.value : '(No Subject)',
          from: fromHeader ? fromHeader.value : 'Unknown Sender',
          to: toHeader ? toHeader.value : 'Unknown Recipient',
          date: dateHeader ? dateHeader.value : '',
          body: body || detail.snippet || '(No Message Content)'
        };
      });

      const parsedEmails = await Promise.all(emailPromises);
      setEmails(parsedEmails);
    } catch (error) {
      console.error('Failed to fetch emails via Google REST API', error);
    } finally {
      setLoadingEmails(false);
    }
  };

  // Compose MIME email and POST raw to Gmail
  const sendGmailMessage = async () => {
    if (!accessToken) return;
    setSendingEmail(true);
    setSubmissionStatus(null);
    setShowConfirmModal(false);

    try {
      const mimeHeaders = [
        `To: ${toField}`,
        `Subject: ${subjectField}`,
        'Content-Type: text/plain; charset=utf-8',
        'MIME-Version: 1.0',
        '',
        bodyField
      ].join('\r\n');

      const encodedMime = btoa(unescape(encodeURIComponent(mimeHeaders)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          raw: encodedMime
        })
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || 'Gmail API failed to send raw payload');
      }

      setSubmissionStatus({
        success: true,
        message: lang === 'en' 
          ? 'Email dispatched successfully! View details in your Gmail Sent folder.' 
          : 'ఈమెయిల్ విజయవంతంగా పంపబడింది! మీ జెమెయిల్ సెంట్ ఫోల్డర్‌లో చూడవచ్చు.'
      });

      // Reset fields
      setToField('');
      setSubjectField('');
      setBodyField('');
      setSelectedTemplateName(null);
      
      // Auto return back to inbox after 3s and refresh
      setTimeout(() => {
        setActiveTab('inbox');
        fetchRecentEmails(accessToken);
        setSubmissionStatus(null);
      }, 3000);

    } catch (error: any) {
      console.error('Failed to send email:', error);
      setSubmissionStatus({
        success: false,
        message: lang === 'en' 
          ? `Error sending message: ${error.message || 'unknown network trigger API failure'}` 
          : `ఈమెయిల్ పంపడం విఫలమైంది: ${error.message || 'నెట్‌వర్క్ అంతరాయం'}`
      });
    } finally {
      setSendingEmail(false);
    }
  };

  // Preset Local Business Templates
  const templates = [
    {
      nameEn: "Basic Website Quote (₹4,999)",
      nameTe: "వెబ్‌సైట్ ప్యాకేజ్ కొటేషన్ (₹4,999)",
      category: "sales",
      subjectEn: "VisionCraft Website Design Proposal & Pricing Details",
      subjectTe: "మీ వ్యాపారం కోసం విజన్‌క్రాఫ్ట్ వెబ్‌సైట్ డిజైన్ కొటేషన్",
      bodyEn: `Dear Client,

Thank you for reaching out to VisionCraft!

We are pleased to send you our Standard Premium Website design proposal:
- Fast custom business layout formatted elegantly in Telugu and English.
- One-time Setup Fee: ₹4,999 (No hidden charges).
- Optional Monthly Care Plan: ₹699/month (Includes state-of-the-art secure cloud hosting, automated weekly backups, and dedicated technical support).

Please let us know if you would like to proceed with the wireframe layout drafting.

Warm regards,
The VisionCraft Team`,
      bodyTe: `గౌరవనీయులైన కస్టమర్ గారికి,

విజన్‌క్రాఫ్ట్ (VisionCraft) ని సంప్రదించినందుకు దన్యవాదాలు!

మీ వ్యాపారానికి సరిపోయే బెస్ట్ వెబ్‌సైట్ ప్రణాళిక వివరాలు క్రింద ఇవ్వబడ్డాయి:
- తెలుగు మరియు ఇంగ్లీష్ బాషలలో అద్భుతమైన మరియు మెరుపు వేగంతో డిజైన్ అయ్యే లేఅవుట్.
- ఒకసారి సెటప్ ఛార్జ్: ₹4,999 మాత్రమే.
- మంత్లీ కేర్ ప్లాన్: నెలకు ₹699 (మీ వెబ్‌సైట్ హోస్టింగ్, నిరంతర సర్వర్ బ్యాకప్ సేవలు మరియు సాంకేతిక సహాయం ఇందులో చేర్చబడ్డాయి).

మేము వెబ్‌సైట్ డిజైన్‌ను ప్రారంభించడానికి మీ ధృవీకరణను తెలియజేయగలరు.

కృతజ్ఞతలతో,
విజన్‌క్రాఫ్ట్ బృందం`
    },
    {
      nameEn: "Monthly Care Structure (₹699/mo)",
      nameTe: "మంత్లీ కేర్ ప్లాన్ వివరాలు (₹699)",
      category: "info",
      subjectEn: "Information: VisionCraft Monthly Security & Hosting Care Plan",
      subjectTe: "సమాచారం: విజన్‌క్రాఫ్ట్ హోస్టింగ్ & సెక్యూరిటీ కేర్ ప్లాన్ వివరాలు",
      bodyEn: `Hello,

Here are the breakdown details of our optional Monthly Care Plan (₹699/mo):

1. High Reliability Cloud Hosting - Managed wholly by developers.
2. Premium Security Protection - Constant firewall protection and SSL certificate.
3. Automated Backups - Regular safety snapshots so your business is always safe.
4. Content Support - Minor text/image corrections completely handled within days.

If you have any questions or require modifications, reply directly to this mail.

Best regards,
VisionCraft Technical Support`,
      bodyTe: `నమస్కారం,

మా మంత్లీ కేర్ ప్లాన్ (నెలకు ₹699) వివరాలు క్రింద ఇవ్వబడ్డాయి:

1. అత్యంత వేగవంతమైన క్లౌడ్ హోస్టింగ్ - పూర్తి సర్వర్ నిర్వహణ.
2. ప్రీమియం సెక్యూరిటీ - వెబ్‌సైట్ హ్యాక్ అవ్వకుండా నిరంతర నిఘా మరియు ఉచిత SSL సర్టిఫికేట్.
3. ఆటోమేటిక్ బ్యాకప్‌లు - మీ వెబ్‌సైట్ డేటా ఎల్లప్పుడూ భద్రంగా ఉండేలా బ్యాకప్.
4. కంటెంట్ సపోర్ట్ - మీ వెబ్‌సైట్‌లో ఫోన్ నంబర్లు లేదా ఈమెయిల్ మార్చవలసి వస్తే ఉచిత సర్వీస్.

మీకు ఏవైనా సందేహాలు ఉంటే ఈ మెయిల్‌కు రిప్లై ఇవ్వగలరు.

భవదీయుడు,
విజన్‌క్రాఫ్ట్ సపోర్ట్ టీమ్`
    },
    {
      nameEn: "Project Kickoff Questionnaire",
      nameTe: "ప్రాజెక్ట్ ప్రారంభ ప్రశ్నాపత్రం",
      category: "draft",
      subjectEn: "Action Required: VisionCraft Website Development Kickoff",
      subjectTe: "సత్వర చర్య: విజన్‌క్రాఫ్ట్ వెబ్‌సైట్ డిజైన్‌ ప్రారంభానికి కావలసిన వివరాలు",
      bodyEn: `Dear Valued Partner,

We are excited to begin crafting your digital presence!

To start compiling the layout, please provide us with the following:
1. Your Business Logo (high resolution if available).
2. Contact details you wish to display (WhatsApp number, address, email).
3. Short description of your daily services or product catalogs.
4. Preferred color choices (light theme, modern cosmic dark, etc.).

We look forward to translating your local business vision into exceptional digital code.

Best regards,
VisionCraft Engineering Team`,
      bodyTe: `ప్రియమైన భాగస్వామికి,

మీ వ్యాపారానికి ప్రొఫెషనల్ డిజిటల్ రూపం ఇవ్వడానికి విజన్‌క్రాఫ్ట్ టీమ్ సిద్దంగా ఉంది!

డిజైనింగ్ ప్రారంభించడానికి దయచేసి క్రింది వివరాలు పంపగలరు:
1. మీ వ్యాపార లోగో (ఉంటే).
2. వెబ్‌సైట్ లో చూపించవలసిన ఫోన్ నంబర్లు, ఈమెయిల్ మరియు అడ్రస్.
3. మీ వ్యాపార ప్రాథమిక సేవలు లేదా ప్రోడక్ట్స్ వివరాలు.
4. మీ వ్యాపారానికి కావలసిన రంగుల శైలి (లైట్ థీమ్ లేదా కాస్మిక్ డార్క్).

కలిసి పని చేయడానికి మేము ఎదురుచూస్తున్నాము.

ధన్యవాదాలు,
విజన్‌క్రాఫ్ట్ ఇంజనీరింగ్ టీమ్`
    }
  ];

  const applyTemplate = (tpl: typeof templates[0]) => {
    setSubjectField(lang === 'en' ? tpl.subjectEn : tpl.subjectTe);
    setBodyField(lang === 'en' ? tpl.bodyEn : tpl.bodyTe);
    setSelectedTemplateName(lang === 'en' ? tpl.nameEn : tpl.nameTe);
  };

  const handleReplyClick = (email: ParsedGmailMessage) => {
    // Extract cleaner email address from "Sender Name <email@xyz.com>"
    let cleanEmail = email.from;
    const match = email.from.match(/<([^>]+)>/);
    if (match && match[1]) {
      cleanEmail = match[1];
    }
    
    setToField(cleanEmail);
    setSubjectField(`Re: ${email.subject}`);
    setBodyField(`\n\n\n-------------------\nOn ${email.date}, ${email.from} wrote:\n\n> ${email.body.substring(0, 150)}...`);
    setActiveTab('compose');
  };

  const validateAndTriggerSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toField || !subjectField || !bodyField) {
      alert(lang === 'en' ? "Please complete all compose fields." : "దయచేసి అన్ని వివరాలు నింపండి.");
      return;
    }
    // Strict compliance trigger for email mutations: Always trigger authorization prompt beforehand
    setShowConfirmModal(true);
  };

  return (
    <div className={`mt-24 max-w-6xl mx-auto px-4 sm:px-6 py-12 ${isDark ? 'text-white' : 'text-slate-800'}`}>
      
      {/* Upper Navigation Header */}
      <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-5">
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'en' ? 'Back to Home' : 'తిరిగి హోమ్‌కి వెళ్ళు'}</span>
        </button>
        
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 py-1 px-3.5 rounded-full border border-blue-500/15">
          <Lock className="w-3 h-3" />
          <span>{lang === 'en' ? 'Gmail REST Safe Portal' : 'భద్రమైన ఈమెయిల్ సర్వీస్'}</span>
        </div>
      </div>

      <div className="mb-10 text-left">
        <h1 className="text-3xl sm:text-4.5xl font-extrabold font-display tracking-tight bg-gradient-to-r from-blue-450 via-indigo-400 to-emerald-400 bg-clip-text text-transparent leading-none">
          {lang === 'en' ? 'AI-Powered Gmail Workspace' : 'జీమెయిల్ వర్క్‌స్పేస్ హబ్'}
        </h1>
        <p className={`text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
          {lang === 'en' 
            ? 'Manage customer communication, dispatch custom-priced layout proposals, and overview client inquiries with bilingual high-speed templates for Telugu and English businesses.' 
            : 'కస్టమర్ మెయిల్స్ చూడండి, తెలుగు మరియు ఇంగ్లీష్ లో డిజైన్ చేసిన ఈమెయిల్ టెంప్లేట్స్‌తో కస్టమర్లకి నిమిషాలలో రిప్లై ఇవ్వండి మరియు ఆఫర్ కొటేషన్లు పంపండి.'}
        </p>
      </div>

      {loadingUser ? (
        <div className="flex flex-col items-center justify-center py-20">
          <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
          <span className="text-xs font-mono text-zinc-500 mt-4">{lang === 'en' ? 'Synchronizing Google Authentication...' : 'గూగుల్ సర్వీస్ సింక్రనైజ్ అవుతోంది...'}</span>
        </div>
      ) : !currentUser ? (
        
        /* 1. SECURE AUTHORIZATION GATE */
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-8 sm:p-12 text-center rounded-3xl border ${
            isDark 
              ? 'bg-[#090909] border-blue-500/15 shadow-2x shadow-blue-500/[0.02]' 
              : 'bg-white border-slate-200 shadow-lg'
          } max-w-2xl mx-auto`}
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mx-auto border border-blue-500/20 mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight">
            {lang === 'en' ? 'Integrate Google Workspace Gmail' : 'గూగుల్ జీమెయిల్ అనుసంధానం చేయండి'}
          </h2>
          
          <p className={`text-xs sm:text-sm leading-relaxed mt-3 max-w-lg mx-auto ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
            {lang === 'en'
              ? 'To enable custom email drafting and previewing, securely authorize Gmail with permission using your administrator account. We cache access tokens strictly in memory.'
              : 'మీ కస్టమర్ల సందేశాలను చూడడానికి మరియు ఈమెయిల్స్ పంపడానికి గూగుల్ వర్క్‌స్పేస్ జీమెయిల్‌ను కనెక్ట్ చేసుకోండి. మీ అనుమతితో మాత్రమే ఉపయోగించుకోబడుతుంది.'}
          </p>

          <div className={`mt-8 p-4 rounded-2xl border text-left flex items-start gap-3.5 ${
            isDark ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-slate-100'
          }`}>
            <Lock className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{lang === 'en' ? 'Permissions Disclosure' : 'అనుమతుల వివరాలు'}</h4>
              <p className={`text-[11px] sm:text-xs leading-relaxed mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                {lang === 'en'
                  ? 'VisionCraft will have permission to: 1) View email messages on your behalf. 2) Compose and dispatch messages to customers on your behalf. Our server never aggregates or logs database files.'
                  : 'విజన్‌క్రాఫ్ట్ వెబ్‌సైట్ ద్వారా మీరు: 1) మీ జీమెయిల్ ఇన్బాక్స్ చూడవచ్చు. 2) కస్టమర్లకి ఈమెయిల్ పంపవచ్చు. మీ లాగిన్ మరియు ఈమెయిల్ డేటా ఏ సర్వర్ కూడా స్టోర్ చేయదు.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <button 
              onClick={handleGoogleLogin}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm tracking-tight inline-flex items-center gap-3 shadow-lg shadow-blue-500/10 cursor-pointer transition-all duration-200 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.6 0 11-4.606 11-11.24 0-.756-.08-1.34-.176-1.955H12.24z"/>
              </svg>
              <span>{lang === 'en' ? 'Sign in with Google' : 'గూగుల్ ద్వారా సైన్ ఇన్ అవ్వండి'}</span>
            </button>
          </div>
        </motion.div>

      ) : (

        /* 2. AUTHENTICATED WORKSPACE HOME */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* User profile left panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-6 rounded-3xl border ${
              isDark ? 'bg-[#090909] border-white/5' : 'bg-white border-slate-205 shadow-md'
            }`}>
              <div className="flex items-center gap-4">
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt={currentUser.displayName || ''} className="w-12 h-12 rounded-full border-2 border-blue-500/20" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-lg">
                    {currentUser.displayName ? currentUser.displayName[0] : 'A'}
                  </div>
                )}
                
                <div className="min-w-0">
                  <h3 className="font-extrabold text-sm truncate">{currentUser.displayName || 'Administrator'}</h3>
                  <p className={`text-[11px] font-mono truncate ${isDark ? 'text-zinc-500' : 'text-slate-550'}`}>{currentUser.email}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15 uppercase font-bold inline-flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{lang === 'en' ? 'Active Applet' : 'కనెక్ట్ అయింది'}</span>
                </span>
                
                <button 
                  onClick={handleLogout}
                  className={`text-[11px] font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer flex items-center gap-1`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Disconnect' : 'లింక్ తీసివేయి'}</span>
                </button>
              </div>
            </div>

            {/* View navigation toggles */}
            <div className={`p-4 rounded-3xl border flex flex-col gap-2 ${
              isDark ? 'bg-[#090909] border-white/5' : 'bg-white border-slate-205 shadow-md'
            }`}>
              <button 
                onClick={() => { setActiveTab('inbox'); setSelectedEmail(null); }}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  activeTab === 'inbox' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : isDark ? 'text-zinc-400 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Client Inbox' : 'కస్టమర్ సందేశాలు (Inbox)'}</span>
                </span>
                {emails.length > 0 && (
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${activeTab === 'inbox' ? 'bg-white text-blue-600' : 'bg-blue-500/20 text-blue-400'}`}>
                    {emails.length}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setActiveTab('compose')}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'compose' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : isDark ? 'text-zinc-400 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Compose Proposal' : 'కొత్త కొటేషన్ / ఈమెయిల్'}</span>
              </button>
            </div>

            {/* Preset quick templates list on left sidebar (only when compose tab is active) */}
            {activeTab === 'compose' && (
              <div className={`p-6 rounded-3xl border ${
                isDark ? 'bg-[#090909] border-white/5' : 'bg-white border-slate-205 shadow-md'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 inline-flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Business Templates' : 'వ్యాపార ఈమెయిల్స్ టెంప్లేట్స్'}</span>
                </h4>
                
                <div className="space-y-3">
                  {templates.map((tpl, i) => (
                    <button
                      key={i}
                      onClick={() => applyTemplate(tpl)}
                      className={`w-full text-left p-3 rounded-xl border text-[11px] leading-snug cursor-pointer transition-all duration-200 block ${
                        selectedTemplateName === (lang === 'en' ? tpl.nameEn : tpl.nameTe)
                          ? 'border-blue-500/50 bg-blue-500/5 text-blue-300 font-bold'
                          : isDark ? 'border-white/5 bg-zinc-950 hover:border-white/10 text-zinc-300' : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{lang === 'en' ? tpl.nameEn : tpl.nameTe}</span>
                        {selectedTemplateName === (lang === 'en' ? tpl.nameEn : tpl.nameTe) && <span className="h-1.5 w-1.5 rounded-full bg-blue-450 animate-pulse" />}
                      </div>
                      <p className={`text-[10px] truncate mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                        {lang === 'en' ? tpl.subjectEn : tpl.subjectTe}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core content workspace panel */}
          <div className="lg:col-span-8">
            
            {/* SUBMISSION STATUS TRIGGER NOTICE */}
            <AnimatePresence>
              {submissionStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-2xl mb-6 border flex gap-3 ${
                    submissionStatus.success 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' 
                      : 'bg-red-500/10 border-red-500/20 text-red-300'
                  }`}
                >
                  {submissionStatus.success ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <div className="text-xs">
                    <p className="font-bold">{submissionStatus.success ? (lang === 'en' ? 'Success' : 'విజయం') : (lang === 'en' ? 'API Error' : 'పంపడం విఫలం')}</p>
                    <p className="mt-0.5 opacity-90">{submissionStatus.message}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {activeTab === 'inbox' ? (
              
              /* TAB: CLIENT INBOX */
              <div className={`p-6 sm:p-8 rounded-3xl border ${
                isDark ? 'bg-[#090909] border-white/5' : 'bg-white border-slate-205 shadow-md'
              }`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold font-display flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>{lang === 'en' ? 'Client Interaction Mailbox' : 'ఇన్ బాక్స్ (ఇటీవలి ఈమెయిల్స్)'}</span>
                  </h3>
                  
                  <button 
                    onClick={() => fetchRecentEmails(accessToken)}
                    disabled={loadingEmails}
                    className={`p-2 rounded-xl border ${
                      isDark ? 'border-white/5 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'
                    } cursor-pointer transition-colors flex items-center gap-1.5 text-xs font-semibold disabled:opacity-40`}
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${loadingEmails ? 'animate-spin' : ''}`} />
                    <span>{lang === 'en' ? 'Refresh' : 'తాజా చేయి'}</span>
                  </button>
                </div>

                {loadingEmails ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <RefreshCw className="w-6 h-6 text-blue-400 animate-spin" />
                    <span className="text-[11px] font-mono text-zinc-500 mt-3">{lang === 'en' ? 'Polling Gmail inbox endpoint...' : 'జీమెయిల్ సందేశాలు లోడ్ అవుతున్నాయి...'}</span>
                  </div>
                ) : emails.length === 0 ? (
                  <div className="py-24 text-center">
                    <Mail className={`w-12 h-12 text-zinc-600 mx-auto opacity-40 mb-4`} />
                    <p className="text-xs font-bold text-zinc-500">{lang === 'en' ? 'Your Gmail inbox is clean. No messages retrieved.' : 'ఈమెయిల్స్ ఏమి లేవు.'}</p>
                    <p className={`text-[11px] max-w-sm mx-auto mt-2 ${isDark ? 'text-zinc-650' : 'text-slate-400'}`}>
                      {lang === 'en' ? 'Use the compose tab to dispatch a new business proposal or quote.' : 'నూతన క్లయింట్‌లకు ఆఫర్లు పంపడానికి కంపోజ్ ఉపయోగించండి.'}
                    </p>
                  </div>
                ) : selectedEmail ? (
                  
                  /* INDIVIDUAL EMAIL VIEW DETAILS */
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 text-left"
                  >
                    {/* Header bar of detailed view */}
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <button 
                        onClick={() => setSelectedEmail(null)}
                        className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Back to Inbox' : 'సందేశాల జాబితా'}</span>
                      </button>

                      <button 
                        onClick={() => handleReplyClick(selectedEmail)}
                        className="py-1.5 px-3 rounded-lg text-[11px] font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <CornerUpLeft className="w-3 h-3" />
                        <span>{lang === 'en' ? 'Reply' : 'రిప్లై ఇవ్వు'}</span>
                      </button>
                    </div>

                    <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-extrabold text-sm sm:text-base">{selectedEmail.subject}</h4>
                          <span className={`text-[10px] font-mono whitespace-nowrap leading-none pt-0.5 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                            {selectedEmail.date}
                          </span>
                        </div>
                        <div className="text-xs">
                          <span className={isDark ? 'text-zinc-500' : 'text-slate-450'}>From: </span>
                          <span className="font-bold text-blue-400">{selectedEmail.from}</span>
                        </div>
                        <div className="text-xs">
                          <span className={isDark ? 'text-zinc-500' : 'text-slate-450'}>To: </span>
                          <span className="font-medium opacity-80">{selectedEmail.to}</span>
                        </div>
                      </div>
                    </div>

                    {/* Email body text area */}
                    <div className={`p-5 rounded-2xl border min-h-[220px] whitespace-pre-wrap text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'bg-zinc-950/40 border-white/5 text-zinc-350' : 'bg-white border-slate-200 text-slate-700 shadow-inner'
                    }`}>
                      {selectedEmail.body}
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setSelectedEmail(null)}
                        className={`w-1/2 py-2.5 rounded-xl border text-xs font-bold cursor-pointer text-center hover:bg-white/5 transition-colors ${
                          isDark ? 'border-white/10' : 'border-slate-350 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {lang === 'en' ? 'Dismiss' : 'తిరిగి వెళ్ళు'}
                      </button>
                      <button 
                        onClick={() => handleReplyClick(selectedEmail)}
                        className="w-1/2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer text-center shadow"
                      >
                        {lang === 'en' ? 'Draft Answer' : 'సందేశం పంపండి'}
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  
                  /* EMAIL LIST TABLE */
                  <div className="divide-y divide-white/5 overflow-hidden">
                    {emails.map((email) => (
                      <div 
                        key={email.id}
                        onClick={() => setSelectedEmail(email)}
                        className={`p-4 hover:bg-blue-500/[0.02] cursor-pointer transition-all duration-150 flex items-start gap-4 ${
                          isDark ? 'border-b border-white/5' : 'border-b border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mt-1 shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        
                        <div className="min-w-0 flex-1 text-left">
                          <div className="flex justify-between items-center gap-4">
                            <span className="font-extrabold text-xs truncate max-w-[170px] text-blue-400">{email.from.split(' <')[0]}</span>
                            <span className={`text-[10px] font-mono text-right whitespace-nowrap shrink-0 ${isDark ? 'text-zinc-500' : 'text-slate-450'}`}>{email.date.substring(0, 16)}</span>
                          </div>
                          
                          <h4 className={`text-xs font-bold mt-1 text-ellipsis overflow-hidden ${isDark ? 'text-zinc-200' : 'text-slate-800'}`}>{email.subject}</h4>
                          <p className={`text-[11px] leading-relaxed line-clamp-1 mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-550'}`}>{email.snippet}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            ) : (

              /* TAB: COMPOSE NEW PROPOSAL */
              <div className={`p-6 sm:p-8 rounded-3xl border ${
                isDark ? 'bg-[#090909] border-white/5' : 'bg-white border-slate-205 shadow-md'
              }`}>
                <h3 className="text-lg font-bold font-display flex items-center gap-2 mb-6">
                  <Send className="w-5 h-5 text-blue-400" />
                  <span>{lang === 'en' ? 'Create Custom Proposal Email' : 'కొత్త సందేశం కంపోజ్ చేయండి'}</span>
                </h3>

                <form onSubmit={validateAndTriggerSend} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                        {lang === 'en' ? 'Recipient Email' : 'స్వీకర్త ఈమెయిల్ (To)'}
                      </label>
                      <input 
                        type="email" 
                        required
                        value={toField}
                        onChange={(e) => setToField(e.target.value)}
                        placeholder="customer@example.com"
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all outline-none ${
                          isDark 
                            ? 'bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:bg-black/80' 
                            : 'bg-slate-50 border-slate-200 text-slate-850 focus:border-blue-500 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                        {lang === 'en' ? 'Email Subject' : 'విషయం (Subject)'}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={subjectField}
                        onChange={(e) => setSubjectField(e.target.value)}
                        placeholder={lang === 'en' ? "VisionCraft Quote Proposal" : "వెబ్‌సైట్ ప్యాకేజ్ వివరాలు"}
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all outline-none ${
                          isDark 
                            ? 'bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:bg-black/80' 
                            : 'bg-slate-50 border-slate-200 text-slate-850 focus:border-blue-500 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5 flex justify-between">
                      <span>{lang === 'en' ? 'Email Message' : 'సందేశం (Body)'}</span>
                      {selectedTemplateName && (
                        <span className="text-[10px] text-blue-400 font-bold lowercase">
                          ✓ {lang === 'en' ? 'using template' : 'టెంప్లేట్ అనువర్తించబడింది'}
                        </span>
                      )}
                    </label>
                    <textarea 
                      required
                      rows={11}
                      value={bodyField}
                      onChange={(e) => {
                        setBodyField(e.target.value);
                        setSelectedTemplateName(null);
                      }}
                      placeholder={lang === 'en' ? "Type your email details here..." : "మీ ఈమెయిల్ ఇక్కడ టైప్ చేయండి..."}
                      className={`w-full p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all outline-none leading-relaxed ${
                        isDark 
                          ? 'bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:bg-black/80' 
                          : 'bg-slate-50 border-slate-200 text-slate-850 focus:border-blue-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Submit Button Trigger */}
                  <div className="pt-3 flex justify-end">
                    <button 
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-tight sm:text-sm flex items-center gap-2 cursor-pointer transition-all duration-200 shadow-md shadow-blue-500/10 hover-effect active:scale-95"
                    >
                      <span>{lang === 'en' ? 'Send Business Offer' : 'ఈమెయిల్ పంపించండి'}</span>
                      <SendHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

            )}

          </div>

        </div>
      )}

      {/* 3. STRICT COMPLIANCE: EXPLICIT MUTATION MUTUAL CONFIRMATION DIALOG MODAL */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`p-6 sm:p-8 max-w-md w-full rounded-3xl border shadow-2xl text-left ${
                isDark ? 'bg-[#0a0a0a] border-white/10 text-white' : 'bg-white border-slate-205 text-slate-900'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-5 shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-extrabold font-display leading-snug">
                {lang === 'en' ? 'Confirm Outgoing Email?' : 'ఈమెయిల్ పంపించాలా?'}
              </h3>
              
              <p className={`text-xs mt-3 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                {lang === 'en'
                  ? `You are about to authorize VisionCraft to dispatch an official client email on your behalf to:`
                  : `విజన్‌క్రాఫ్ట్ ద్వారా మీ గూగుల్ ఖాతా నుండి క్రింది ఈమెయిల్‌కు సందేశం వెళుతుంది:`}
              </p>

              <div className={`mt-4 p-3 rounded-xl text-xs font-semibold ${isDark ? 'bg-zinc-950 text-blue-400' : 'bg-slate-50 text-blue-700'}`}>
                <span className="text-zinc-500 block text-[10px] uppercase font-mono mb-0.5">{lang === 'en' ? 'Recipient' : 'స్వీకర్త'}</span>
                {toField}
              </div>

              <div className="mt-4 p-3 rounded-xl text-xs border border-dashed border-white/5">
                <span className="text-zinc-500 block text-[10px] uppercase font-mono mb-0.5">{lang === 'en' ? 'Subject Line' : 'విషయం'}</span>
                <span className="font-bold">{subjectField}</span>
              </div>

              <div className="mt-6 flex gap-3 text-xs sm:text-sm font-bold">
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className={`w-1/2 py-3 rounded-xl text-center border cursor-pointer hover:bg-white/5 transition-colors ${
                    isDark ? 'border-white/10 text-zinc-300' : 'border-slate-300 text-slate-700'
                  }`}
                >
                  {lang === 'en' ? 'Cancel / Rewrite' : 'రద్దు చేయి'}
                </button>
                <button
                  type="button"
                  onClick={sendGmailMessage}
                  disabled={sendingEmail}
                  className="w-1/2 py-3 rounded-xl text-center bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  {sendingEmail ? (
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>{lang === 'en' ? 'Yes, Send Now' : 'అవును, పంపించు'}</span>
                      <SendHorizontal className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
