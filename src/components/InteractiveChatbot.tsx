/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, Check, ArrowRight, CornerDownRight } from 'lucide-react';
import { 
  WHATSAPP_NUMBER_DISPLAY, 
  GENERAL_EMAIL, 
  GENERAL_WHATSAPP_MSG, 
  getWhatsAppUrl 
} from '../utils/whatsapp';

interface InteractiveChatbotProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  options?: { label: string; value: string; action?: string }[];
}

export default function InteractiveChatbot({ isDark, lang }: InteractiveChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreads, setUnreads] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Lead qualification wizard state
  const [leadState, setLeadState] = useState({
    active: false,
    step: 0, // 0: Biz Type, 1: Biz Name, 2: Goals, 3: Features, 4: Finished
    bizType: '',
    bizName: '',
    goals: '',
    features: ''
  });

  // Initial greeting
  useEffect(() => {
    initGreeting();
  }, [lang]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const initGreeting = () => {
    const greetingText = lang === 'en'
      ? "Namaste! 🙏 Welcome to VisionCraft.telugu. I am your AI Business Assistant. How can I help your business grow online?"
      : "నమస్తే! 🙏 విజన్‌క్రాఫ్ట్.తెలుగు వెబ్‌సైట్‌కి స్వాగతం. నేను మీ AI సహాయకుడిని. మీ వ్యాపారాన్ని ఆన్‌లైన్‌లో వృద్ధి చేయడానికి నేను ఎలా సహాయపడగలను?";

    const initialOptions = lang === 'en'
      ? [
          { label: "🤝 Qualify My Website Project", value: "qualify", action: "start_lead_flow" },
          { label: "⚡ How fast is delivery?", value: "delivery" },
          { label: "🤝 Do you offer Telugu Support?", value: "telugu" },
          { label: "🌐 What school & gym features are available?", value: "features" },
          { label: "📞 Speak on call directly", value: "call" }
        ]
      : [
          { label: "🤝 నా బిజినెస్ వెబ్‌సైట్ సిద్ధం చేయండి", value: "qualify", action: "start_lead_flow" },
          { label: "⚡ డెలివరీ కి ఎంత సమయం పడుతుంది?", value: "delivery" },
          { label: "🤝 తెలుగులో మాట్లాడవచ్చా?", value: "telugu" },
          { label: "🌐 పాఠశాలలు మరియు జిమ్‌ల ఫీచర్లు ఏమిటి?", value: "features" },
          { label: "📞 నేరుగా ఫోన్ మాట్లాడండి", value: "call" }
        ];

    setMessages([
      {
        sender: 'ai',
        text: greetingText,
        options: initialOptions
      }
    ]);
  };

  const isPricingInquiry = (text: string): boolean => {
    const norm = text.toLowerCase();
    const pricingKeywords = [
      'price', 'pricing', 'cost', 'charges', 'budget', 'packages', 'fee', 'fees', 'quote', 'estimate', 
      'discount', 'discounts', 'negotiate', 'negotiation', 'how much', 'cheap', 'expensive', 'rupee', 'rupees', 'rs',
      'ధర', 'ఖర్చు', 'బడ్జెట్', 'కార్డు', 'కోట్', 'చార్జ్', 'అంచనా', 'ఫీజు', 'ఫీజులు', 'ప్యాకేజీ'
    ];
    return pricingKeywords.some(keyword => norm.includes(keyword));
  };

  const handleOptionClick = (option: { label: string; value: string; action?: string }) => {
    // Add user message
    const updatedMessages = [...messages, { sender: 'user' as const, text: option.label }];
    setMessages(updatedMessages);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (option.action === 'start_lead_flow') {
        startLeadQualification();
        return;
      }

      // Handle standard replies
      let responseText = '';
      let replyOptions: { label: string; value: string; action?: string }[] = [];

      if (option.value === 'delivery') {
        responseText = lang === 'en'
          ? "We deliver high-quality, fully optimized landing pages and business web designs in just 7 to 10 working days! If you have urgent requirements (such as matching a product launch), we have express tracks too."
          : "మేము సాధారణంగా ప్రొఫెషనల్ బిజినెస్ వెబ్‌సైట్‌లను కేవలం 7 నుండి 10 వర్కింగ్ రోజులలో పూర్తి చేసి లైవ్ చేస్తాము! అత్యవసర అవసరాల కోసం ప్రత్యేక సేవలు కూడా కలవు.";
      } else if (option.value === 'telugu') {
        responseText = lang === 'en'
          ? "Absolutely! 100% of our consulting and support is available in Telugu. We understand the heartbeat of local Telugu states businesses and speak your comfortable language."
          : "ఖచ్చితంగా! మా మొత్తం సేవలు, కన్సల్టేషన్ మరియు టెక్నికల్ సపోర్ట్ తెలుగులోనే లభిస్తుంది. ఎలాంటి ఇబ్బంది లేకుండా మీ అభిరుచులను మాతో పంచుకోవచ్చు.";
      } else if (option.value === 'features') {
        responseText = lang === 'en'
          ? "For school websites, we integrate online CBSE admission forms, photo galleries, academic fee notification layouts, and Google Maps location routes.\n\nFor gym sites, we build membership package cards, daily schedules, trainer profiles, and direct trial pass triggers to WhatsApp."
          : "పాఠశాలల కొరకు సిబిఎస్‌ఈ అడ్మిషన్ ఫారమ్‌లు, ఫోటో గ్యాలరీలు మరియు మ్యాప్ మార్గాలను జోడిస్తాము.\n\nజిమ్‌ల కొరకు ప్రత్యేక మెంబర్‌షిప్ కార్డులు, ట్రైనర్ ప్రొఫైల్స్, కోర్సు టైం టేబుల్స్ మరియు వాట్సాప్ ఉచిత ట్రయల్ పాస్ సదుపాయాన్ని అందిస్తాము.";
      } else if (option.value === 'call') {
        responseText = lang === 'en'
          ? `Sure thing! You can call us directly at ${WHATSAPP_NUMBER_DISPLAY}. Or, click 'Chat on WhatsApp' to jump into chat instantly.`
          : `తప్పకుండా! మీరు మా నెంబర్ ${WHATSAPP_NUMBER_DISPLAY} కు కాల్ చేయవచ్చు లేదా కింద ఉన్న 'వాట్సాప్‌లో చాట్' బటన్ ద్వారా నేరుగా మాట్లాడవచ్చు.`;
      } else if (option.value === 'main_menu') {
        initGreeting();
        return;
      }

      // Default back to main menu invitation
      replyOptions = lang === 'en'
        ? [
            { label: "🤝 Let's Design My Site", value: "qualify", action: "start_lead_flow" },
            { label: "🔙 Main Menu", value: "main_menu" }
          ]
        : [
            { label: "🤝 నా వెబ్‌సైట్ డిజైన్ చేయండి", value: "qualify", action: "start_lead_flow" },
            { label: "🔙 ప్రధాన మెనూ", value: "main_menu" }
          ];

      setMessages(prev => [
        ...prev,
        { sender: 'ai', text: responseText, options: replyOptions }
      ]);
    }, 800);
  };

  // Lead qualification wizard execution
  const startLeadQualification = () => {
    setLeadState({
      active: true,
      step: 0,
      bizType: '',
      bizName: '',
      goals: '',
      features: ''
    });

    const promptText = lang === 'en'
      ? "Awesome! Let's build a tailored project plan for your business website. To deliver the best layout, may I ask:\n\n1. What is your Business Type? (e.g., School, Gym, Cafe, Clinic, Real Estate, or Coach)"
      : "సంతోషం! మీ వ్యాపారం కోసం ఉత్తమమైన వెబ్‌సైట్ ప్రణాళికను సిద్ధం చేయడానికి కొన్ని చిన్న వివరాలు అడుగుతాను:\n\n1. మీది ఏ రకమైన వ్యాపారం? (ఉదాహరణకు: పాఠశాల, జిమ్, కేఫ్, డాక్టర్ క్లినిక్)";

    const choices = lang === 'en'
      ? [
          { label: "🏫 School / College", value: "School" },
          { label: "☕ Cafe / Restaurant", value: "Cafe" },
          { label: "🏋️ Gym & Fitness", value: "Gym" },
          { label: "🏥 Clinic & Doctor", value: "Clinic" },
          { label: "🏡 Real Estate", value: "RealEstate" },
          { label: "💼 Other Business Services", value: "Other" }
        ]
      : [
          { label: "🏫 పాఠశాల / కళాశాల", value: "School" },
          { label: "☕ రెస్టారెంట్ / కెఫే", value: "Cafe" },
          { label: "🏋️ జిమ్ / ఫిట్‌నెస్", value: "Gym" },
          { label: "🏥 క్లినిక్ & డాక్టర్", value: "Clinic" },
          { label: "🏡 రియల్ ఎస్టేట్", value: "RealEstate" },
          { label: "💼 ఇతర వ్యాపార సేవలు", value: "Other" }
        ];

    setMessages(prev => [
      ...prev,
      {
        sender: 'ai',
        text: promptText,
        options: choices.map(c => ({ label: c.label, value: c.value, action: `lead_step_0_${c.label}` }))
      }
    ]);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const typedText = inputValue;
    setInputValue('');

    // Add user message to stack
    setMessages(prev => [...prev, { sender: 'user', text: typedText }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const normText = typedText.toLowerCase();

      // Rule 4: STYLED PRICING BLOCK — MUST ALWAYS BLOCK ALL COST DISCUSSIONS
      if (isPricingInquiry(normText)) {
        const responseText = lang === 'en'
          ? `Thank you for your interest. Every business has different requirements, so pricing depends on your specific needs. Please contact us directly on WhatsApp for an accurate quote.\n\nWhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`
          : `మా సేవలపై ఆసక్తి చూపినందుకు ధన్యవాదాలు. ప్రతి వ్యాపారానికి వేర్వేరు అవసరాలు ఉంటాయి, కాబట్టి ధరలు మీ నిర్దిష్ట అవసరాలపై ఆధారపడి ఉంటాయి. దయచేసి కచ్చితమైన కొటేషన్ కోసం మమ్మల్ని నేరుగా వాట్సాప్ ద్వారా సంప్రదించండి.\n\nWhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`;

        const waMsg = "Hi, I need a custom pricing quote for my website. Can you help me?";
        const waUrl = getWhatsAppUrl(waMsg);

        setMessages(prev => [
          ...prev,
          {
            sender: 'ai',
            text: responseText,
            options: [
              { label: lang === 'en' ? "🟢 Chat on WhatsApp" : "🟢 వాట్సాప్‌లో సంప్రదించండి", value: "whatsapp", action: `wa_redirect_${btoa(waUrl)}` },
              { label: lang === 'en' ? "🔙 Back to Main Menu" : "🔙 ప్రధాన మెనూ", value: "main_menu", action: "back_to_menu" }
            ]
          }
        ]);
        return;
      }

      // Rule 5: Lead collecting dialogue parsing
      if (leadState.active) {
        const currentStep = leadState.step;
        if (currentStep === 0) {
          // Collected Business Type
          const updatedState = { ...leadState, step: 1, bizType: typedText };
          setLeadState(updatedState);

          const promptText = lang === 'en'
            ? `Fantastic, a ${typedText} business! \n\n2. What is the official Name of your business?`
            : `చాలా బాగుంది, ${typedText}! \n\n2. మీ వ్యాపారం లేదా పాఠశాల యొక్క అధికారిక పేరు ఏమిటి?`;

          setMessages(prev => [
            ...prev,
            { sender: 'ai', text: promptText }
          ]);
        } else if (currentStep === 1) {
          // Collected Business Name
          const updatedState = { ...leadState, step: 2, bizName: typedText };
          setLeadState(updatedState);

          const promptText = lang === 'en'
            ? `Perfect name, "${typedText}"! \n\n3. What are the primary goals/objectives you want to achieve with this website? (e.g. increase walk-ins, CBSE admissions, show menu, get calls)`
            : `అద్భుతం! "${typedText}" సరే.. \n\n3. ఈ వెబ్‌సైట్‌తో మీ ముఖ్యమైన లక్ష్యం లేదా గోల్స్ ఏమిటి? (ఉదాహరణకు: అడ్మిషన్లు పొందడం, ఎక్కువ కాల్స్ రావడం, కస్టమర్ల విజిట్స్)`;

          setMessages(prev => [
            ...prev,
            { sender: 'ai', text: promptText }
          ]);
        } else if (currentStep === 2) {
          // Collected Goals
          const updatedState = { ...leadState, step: 3, goals: typedText };
          setLeadState(updatedState);

          const promptText = lang === 'en'
            ? `Excellent objectives! \n\n4. Finally, what specific features or sections do you need in the layout? (e.g., custom AI chatbot, Google Maps route, gallery, fee notifications, translation support)`
            : `గొప్ప లక్ష్యం! \n\n4. చివరిగా, మీకు వెబ్‌సైట్‌లో కావాల్సిన ఫీచర్లు ఏమిటి? (ఉదాహరణ: ద్విభాషా సపోర్ట్, మ్యాప్స్ లొకేషన్, ఆన్‌లైన్ ఫారమ్, AI చాట్‌బాట్)`;

          setMessages(prev => [
            ...prev,
            { sender: 'ai', text: promptText }
          ]);
        } else if (currentStep === 3) {
          // Finished Lead Collection
          const finalState = { ...leadState, step: 4, features: typedText, active: false };
          setLeadState(finalState);

          const summaryMsgText = lang === 'en'
            ? "That sounds great. To provide the best solution for your business, please continue the conversation on WhatsApp."
            : "చాలా సంతోషం. మీ వ్యాపారానికి కచ్చితమైన మరియు అత్యుత్తమమైన వెబ్‌సైట్ లేఅవుట్ కొరకు, దయచేసి వాట్సాప్‌లో మాతో సంప్రదింపులను కొనసాగించండి.";

          const compiledLeadMessage = `Hi VisionCraft! I'd like to build a custom website. Here is my project details:
- Business Type: ${finalState.bizType}
- Business Name: ${finalState.bizName}
- Main Goals: ${finalState.goals}
- Required Features: ${typedText}`;

          const waUrl = getWhatsAppUrl(compiledLeadMessage);

          setMessages(prev => [
            ...prev,
            {
              sender: 'ai',
              text: summaryMsgText,
              options: [
                { label: lang === 'en' ? "🟢 Chat on WhatsApp" : "🟢 వాట్సాప్‌లో చాట్ చేయండి", value: "whatsapp", action: `wa_redirect_${btoa(waUrl)}` },
                { label: lang === 'en' ? "🔙 Back to Main Menu" : "🔙 ప్రధాన మెనూ", value: "main_menu", action: "back_to_menu" }
              ]
            }
          ]);
        }
        return;
      }

      // Handle standard triggers (Rule 3)
      let responseText = '';
      if (normText.includes('hi') || normText.includes('hello') || normText.includes('namaste') || normText.includes('హలో') || normText.includes('నమస్తే')) {
        responseText = lang === 'en'
          ? "Hello again! I can help you with anything regarding custom websites, delivery processes, support, chatbot solutions, or start your lead design outline proposal."
          : "నమస్తే! నేను మీకు కస్టమ్ వెబ్‌సైట్లు, ల్యాండింగ్ పేజీలు, గూగుల్ మై బిజినెస్ ఎస్ఈఓ మరియు టెక్నికల్ సపోర్ట్ వివరాలు అందించగలను.";
      } else if (normText.includes('school') || normText.includes('college') || normText.includes('పాఠశాల') || normText.includes('విద్యాలయ')) {
        responseText = lang === 'en'
          ? "We design customized school and college websites! We integrate CBSE admission modules, dynamic contact pages, routes on Google Maps, and high speed responsive galleries."
          : "మేము స్కూళ్లు మరియు విద్యాసంస్థల కోసం ప్రత్యేక వెబ్‌సైట్లు తయారు చేస్తాము. వీటిలో ఆన్‌లైన్ అడ్మిషన్ల ఫారమ్‌లు, ఈవెంట్ ఫోటో గ్యాలరీలు మరియు మ్యాప్స్ జోడిస్తాము.";
      } else if (normText.includes('gym') || normText.includes('fitness') || normText.includes('జిమ్') || normText.includes('ఫిట్నెస్')) {
        responseText = lang === 'en'
          ? "Our gym layouts feature elegant service packages, training program cards, instructor bios, and interactive WhatsApp direct passes to maximize neighborhood membership signups."
          : "మెంబర్‌షిప్ రేట్లు పెంచడానికి జిమ్స్ కోసం ప్రత్యేకంగా ఆకర్షణీయమైన ప్లాన్ల వివరాలు, ఉచిత క్లాస్ ట్రయల్స్ మరియు వాట్సాప్ సపోర్ట్‌తో కూడిన వెబ్‌సైట్లను తయారు చేస్తాము.";
      } else if (normText.includes('cafe') || normText.includes('restaurant') || normText.includes('రెస్టారెంట్') || normText.includes('కేఫ్')) {
        responseText = lang === 'en'
          ? "For cafes and local diners, we integrate dynamic interactive visual menus, reservation links, responsive Google maps listings, and custom click-to-order WhatsApp triggers."
          : "కేఫ్‌లు మరియు హోటళ్ల కొరకు డిజిటల్ మెనూ కార్డులు, గూగుల్ మ్యాప్స్ లొకేషన్లు మరియు వాట్సాప్ తో డైరెక్ట్ ఫుడ్ ఆర్డర్ సదుపాయాలు కలిగిస్తాము.";
      } else if (normText.includes('clinic') || normText.includes('doctor') || normText.includes('క్లినిక్') || normText.includes('డాక్టర్')) {
        responseText = lang === 'en'
          ? "For doctors, clinics, and health centers, we construct trustworthy, highly polished templates featuring services list, working hours, and easy WhatsApp appointment buttons."
          : "డాక్టర్లు మరియు క్లినిక్స్ కోసం నమ్మకమైన, ప్రొఫెషనల్ వెబ్‌సైట్లను సృష్టిస్తాము. అందులో సర్వీసులు, టైమింగ్స్ మరియు ఈజీ అపాయింట్‌మెంట్స్ వాట్సాప్ బటన్లు ఉంటాయి.";
      } else if (normText.includes('bot') || normText.includes('chatbot') || normText.includes('చాట్')) {
        responseText = lang === 'en'
          ? "Our custom artificial intelligence chatbots run 24/7 in English and Telugu, answering FAQs and redirecting warm, pre-qualified customers straight to your WhatsApp."
          : "మా స్మార్ట్ చాట్‌బాట్లు తెలుగు మరియు ఇంగ్లీష్ ద్విభాషా సపోర్ట్‌తో కస్టమర్ల సందేహాలను 24/7 సమాధానమిస్తూ మీ వాట్సాప్‌కు బదిలీ చేస్తాయి.";
      } else if (normText.includes('support') || normText.includes('maintenance') || normText.includes('సాయం')) {
        responseText = lang === 'en'
          ? "We offer 1 year of continuous hosting/domain assistance and 100% comfortable bilingual support in Telugu & English so you never have to worry about tech issues."
          : "మేము మీకు 1 సంవత్సరం ఉచిత హోస్టింగ్/డొమైన్ నిర్వహణ సాయం మరియు సులభమైన తెలుగు మరియు ఇంగ్లీష్ లైవ్ సపోర్ట్ అందిస్తాము.";
      } else {
        responseText = lang === 'en'
          ? "Thank you for asking. We provide high-converting, mobile-friendly websites for schools, cafes, gyms, clinics, and local brands. Would you like to start our quick project qualification questionnaire or chat directly with our manager on WhatsApp?"
          : "ధన్యవాదాలు. మేము స్కూళ్లు, జిమ్ములు, క్లినిక్స్ మరియు బిజినెస్ ల కొరకు ప్రత్యేక వెబ్‌సైట్లను రూపొందిస్తాము. మీ వ్యాపార వివరాలను అందిస్తారా లేక నేరుగా వాట్సాప్‌లో మాట్లాడతారా?";
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: responseText,
          options: lang === 'en'
            ? [
                { label: "🤝 Design My Website Plan", value: "qualify", action: "start_lead_flow" },
                { label: "📞 Connect via WhatsApp", value: "whatsapp", action: `wa_redirect_${btoa(getWhatsAppUrl())}` },
                { label: "🔙 Back to Main Menu", value: "main_menu", action: "back_to_menu" }
              ]
            : [
                { label: "🤝 నా వెబ్‌సైట్ ప్లాన్ డిజైన్", value: "qualify", action: "start_lead_flow" },
                { label: "📞 వాట్సాప్‌లో చర్చించండి", value: "whatsapp", action: `wa_redirect_${btoa(getWhatsAppUrl())}` },
                { label: "🔙 ప్రధాన మెనూ", value: "main_menu", action: "back_to_menu" }
              ]
        }
      ]);
    }, 750);
  };

  const executeCustomAction = (actionCode: string) => {
    if (actionCode === 'start_lead_flow') {
      startLeadQualification();
    } else if (actionCode === 'back_to_menu') {
      initGreeting();
    } else if (actionCode.startsWith('wa_redirect_')) {
      const encodedUrl = actionCode.replace('wa_redirect_', '');
      try {
        const decodedUrl = atob(encodedUrl);
        window.open(decodedUrl, '_blank');
      } catch (e) {
        window.open(getWhatsAppUrl(), '_blank');
      }
    } else if (actionCode.startsWith('lead_step_0_')) {
      const selectedLabel = actionCode.replace('lead_step_0_', '');
      // Add user answer visually and advance state
      setMessages(prev => [...prev, { sender: 'user', text: selectedLabel }]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const updatedState = { ...leadState, step: 1, bizType: selectedLabel, active: true };
        setLeadState(updatedState);

        const promptText = lang === 'en'
          ? `Great, standard ${selectedLabel}! \n\n2. What is the official Name of your business?`
          : `చాలా బాగుంది, ${selectedLabel}! \n\n2. మీ వ్యాపారం లేదా పాఠశాల యొక్క అధికారిక పేరు ఏమిటి?`;

        setMessages(prev => [
          ...prev,
          { sender: 'ai', text: promptText }
        ]);
      }, 700);
    }
  };

  return (
    <>
      {/* Floating Chat Button fixed to screen corner */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setUnreads(0);
          }}
          className={`flex items-center space-x-2 p-4 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-400 text-white rotate-90' 
              : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 shadow-lg shadow-blue-500/20'
          } cursor-pointer`}
          id="floating-chatbot-trigger"
        >
          {isOpen ? (
            <X className="w-6 h-6 rotate-90" />
          ) : (
            <>
              <div className="relative">
                <MessageSquare className="w-6 h-6 fill-white text-blue-500" />
                {unreads > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] w-4 h-4 flex items-center justify-center font-bold rounded-full animate-pulse border border-white">
                    {unreads}
                  </span>
                )}
              </div>
              <span className="text-sm font-bold pr-1.5 font-display hidden sm:inline">
                {lang === 'en' ? 'Live Business AI' : 'తెలుగు AI కన్సల్టేషన్'}
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Widget Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[420px] max-w-[420px] h-[550px] rounded-3xl shadow-2xl border flex flex-col z-50 overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-10 ${
          isDark 
            ? 'bg-[#050505] border-white/10 text-white shadow-blue-950/20' 
            : 'bg-white border-slate-200 text-slate-800 shadow-slate-300/40'
        }`}>
          {/* Chat Header */}
          <div className={`p-4 flex items-center justify-between border-b ${
            isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-blue-600 text-white">
                <Sparkles className="w-5 h-5 fill-white text-blue-400 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold tracking-tight font-display flex items-center gap-1.5">
                  VisionCraft Assistant <span className="text-[10px] py-0.5 px-2 bg-blue-500/10 text-blue-400 font-mono rounded-full font-normal border border-blue-500/15">Active</span>
                </h4>
                <p className={`text-[10px] ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                  {lang === 'en' ? 'Bilingual Business Bot (తెలుగు + EN)' : 'ద్విభాషా సహాయకుడు (తెలుగు + ఇంగ్లీష్)'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className={`p-1.5 rounded-lg ${isDark ? 'text-zinc-500 hover:text-white' : 'text-slate-400 hover:text-slate-705'} cursor-pointer`}
              id="close-chatbot-panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messaging logs box */}
          <div className={`flex-1 p-4 overflow-y-auto space-y-4 ${isDark ? 'bg-zinc-950/20' : 'bg-slate-50/30'}`}>
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs font-sans leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : (isDark ? 'bg-[#0A0A0A] border border-white/5 text-zinc-150 w-full rounded-bl-none' : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/80')
                }`}>
                  {/* Handle newlines formatting */}
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>

                {/* Display interactive prompt option chips */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-2 w-full">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => opt.action ? executeCustomAction(opt.action) : handleOptionClick(opt)}
                        className={`text-left text-xs font-medium py-2 px-3 rounded-xl border transition-all cursor-pointer ${
                          isDark
                            ? 'bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white hover:border-white/10'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-350 hover:shadow-xs'
                        }`}
                        id={`chatbot-option-${index}-${oIdx}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1 p-2 bg-[#0A0A0A] border border-white/5 rounded-xl w-14 justify-center">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick FAQ Suggestion pill */}
          <div className={`py-1.5 px-3 border-t flex items-center justify-between text-[11px] font-mono ${
            isDark ? 'bg-[#0A0A0A] border-white/5 text-zinc-500' : 'bg-slate-50 border-slate-205 text-slate-400'
          }`}>
            <span className="flex items-center gap-1">
              <CornerDownRight className="w-3.5 h-3.5 text-blue-400" />
              {lang === 'en' ? 'Bilingual Telugu Support' : 'తెలుగు మరియు ఆంగ్ల సపోర్ట్'}
            </span>
            <span className="font-bold text-blue-400">100% SECURE</span>
          </div>

          {/* Input control form */}
          <form onSubmit={handleMessageSubmit} className={`p-3 border-t flex gap-2 ${
            isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-200'
          }`}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={lang === 'en' ? "Ask about custom web design or services..." : "వెబ్‌సైట్ డిజైన్లు లేదా ఇతర సేవలు అడగండి..."}
              className={`flex-1 text-xs px-3 py-2 rounded-xl focus:outline-none focus:ring-1 ${
                isDark 
                  ? 'bg-black text-white placeholder-zinc-600 border border-white/10 focus:ring-blue-500' 
                  : 'bg-slate-100 text-slate-800 placeholder-slate-400 border border-slate-200 focus:ring-blue-500'
              }`}
            />
            <button
              type="submit"
              className={`p-2 rounded-xl text-white transition-all ${
                isDark ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-500'
              } cursor-pointer`}
              id="submit-chatbot-message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
