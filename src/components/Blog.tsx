/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, X, ArrowRight, CornerDownRight, ThumbsUp } from 'lucide-react';

interface BlogProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

interface Article {
  id: string;
  title: string;
  teluguTitle: string;
  summary: string;
  teluguSummary: string;
  content: string;
  teluguContent: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export default function Blog({ isDark, lang }: BlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const articles: Article[] = [
    {
      id: 'school-web',
      title: 'Why Every School Needs a Professional Website Today',
      teluguTitle: 'ప్రతి స్కూల్‌కు ఖచ్చితంగా వెబ్‌సైట్ ఎందుకు అవసరం?',
      summary: 'Learn how modern parents judge schools online before taking admissions, and why digital portals are essential to build trust.',
      teluguSummary: 'నేటి కాలంలో అడ్మిషన్ల కంటే ముందే తల్లిదండ్రులు ఆన్‌లైన్‌లో స్కూల్ గురించి ఎలా తెలుసుకుంటారు.',
      category: 'EDUCATION',
      date: 'June 10, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400',
      content: `The days of parents visiting 5 different schools in-person for admissions are gone. Modern parents search online first.

Here is why your school needs a professional website:
1. **The Trust Factor**: A website showcasing high-resolution laboratory equipment, playground infrastructure, and clean classrooms builds instant authority.
2. **Admissions Channel**: Include an "Admission Enquiry" button connected directly to WhatsApp. This converts casual visitors into registered applicants in seconds.
3. **Smart Communication**: Reduce parent phone calls by uploading exam schedules, event calendars, and holiday notices directly to the home page noticeboard.

*With VisionCraft.telugu, we build parent-friendly school portals that are extremely easy to maintain and translate.*`,
      teluguContent: `తల్లిదండ్రులు అడ్మిషన్ల కోసం నేరుగా 5 స్కూళ్లకు వెళ్లే రోజులు పోయాయి. మొదట గూగుల్‌లో శోధిస్తారు.

మీ స్కూల్‌కు వెబ్‌సైట్ ఎందుకు అవసరం:
1. **మొదటి నమ్మకం**: ఆకర్షణీయమైన క్లాస్ రూమ్ పోటోలు, సిలబస్ వివరాలతో కూడిన సైట్ చూసిన వెంటనే పేరెంట్స్ కి నమ్మకం కలుగుతుంది.
2. **సులువైన అడ్మిషన్లు**: వెబ్‌సైట్ లో నేరుగా అడ్మిషన్ నమోదు చేసుకొని వాట్సాప్ ద్వారా యజమాన్యానికి పంపే వీలు.
3. **రోజూవారీ సమాచారం**: క్లాస్ టైమింగ్స్, పరీక్షల వివరాలు, హాలిడే నోటీసులు అన్నీ వెబ్‌సైట్ ద్వారా షేర్ చేయవచ్చు.`
    },
    {
      id: 'gym-online',
      title: 'How Gyms Can Multiply Yearly Members Online',
      teluguTitle: 'ఆన్‌లైన్ ద్వారా జిమ్స్ కి ఎక్కువ మంది సభ్యులు రావడం ఎలా?',
      summary: 'Discover the exact funnel gyms use to capture local high-intent fitness candidates and convert them into long-term subscribers.',
      teluguSummary: 'పరిసర ప్రాంతాలలో ఫిట్‌నెస్ ఆసక్తి ఉన్న వారిని ఆకర్షించి సభ్యులుగా ఎలా మార్చుకోవాలి.',
      category: 'GYMS & FITNESS',
      date: 'June 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
      content: `Fitness goals start with midnight resolutions, and the first action is typing "Best gym near me" on mobile browsers.

How to capture these warm search terms:
1. **The Free One-Day Trial pass**: Place an eye-grabbing banner offering 'Get Free Day Pass'. Visitors enter details, and our automated chatbot forwards their reservation.
2. **Showcase Amenities with Pricing**: Display clean grid structures of cardio machines, coaches profiles, and subscription tariffs transparently to beat traditional local gyms.
3. **Google Maps Optimization**: If your website connects to Google Reviews, local clients will locate you on maps easily, choosing you over competitors.

*VisionCraft.telugu designs high-energy websites for gyms packed with schedules calendars and WhatsApp trials.*`,
      teluguContent: `చాలా మంది ఉదయం లేవగానే చేయాలనుకునే మొదటి ఆలోచన "నాకు దగ్గర్లో ఉన్న ఉత్తమ జిమ్ ఏది?" అని ఫేస్బుక్ లేదా గూగుల్ లో వెతకడం.

ఆ కస్టమర్లను ఎలా ఆకర్షించాలి:
1. **ఉచిత డెమో పాస్**: "ఉచిత ఒక రోజు ట్రయల్" ఆప్షన్ ఉంచితే ఆటోమేటిక్‌గా జిమ్‌కి వచ్చి కస్టమర్ జాయిన్ అవకాశాలు ఉంటాయి.
2. **ప్లాన్ వివరాల పారదర్శకత**: జిమ్ లో ఉండే వసతులు, కోచ్‌ల అర్హతలు ప్రొఫెషనల్‌గా పెట్టడం ద్వారా మిగతా జిమ్‌ల కంటే ప్రత్యేకంగా నిలవవచ్చు.
3. **కస్టమర్ రివ్యూస్**: గూగుల్ మ్యాప్స్ ఎస్ఈఓ తో పాటు వెబ్‌సైట్ పెరఫార్మెన్స్ జోడిస్తే గూగుల్ మ్యాప్స్‌లో ప్రథమ స్థానంలో ఉంటుంది.`
    },
    {
      id: 'ai-chatbots',
      title: 'Smart AI Chatbots: The Ultimate Growth Tool for Cafes',
      teluguTitle: 'AI చాట్‌బాట్‌లు: స్థానిక వ్యాపారాలకు కొత్త దిక్సూచి',
      summary: 'Why and how automatic billing and FAQ responders increase sales by capturing night-time customer inquiries on autopilot.',
      teluguSummary: 'ఆటోమేటిక్ సమాధానాలిచ్చే చాట్‌బాట్‌ల ద్వారా కస్టమర్లను వ్యాపారాలు ఎలా పొందవచ్చో తెలుసుకోండి.',
      category: 'TECHNOLOGY',
      date: 'June 14, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=400',
      content: `Half of your target customers browse during lunch breaks or midnight. If you reply delayed, you lose them.

Here is how an AI Chatbot acts as your digital salesperson:
1. **Immediate Telugu Response**: Welcomes users, displays your menu/services, and answers common questions like 'Is parking available?' or 'Are you open at 9 PM?' instantly in native Telugu.
2. **Interactive Lead Grabber**: Securely captures customer names and phone numbers without requesting heavy login forms.
3. **Direct Order Forwarding**: Translates orders directly into WhatsApp messages, letting owners manage home deliveries without high aggregator commission fees.

*We build customized AI chatbot widgets built straight into your VisionCraft website!*`,
      teluguContent: `సగానికి పైగా కస్టమర్లు రాత్రి సమయం లోనే వెబ్‌సైట్లు చూస్తూ ఉంటారు. అప్పుడు మీరు ఆన్‌లైన్‌లో ఉండకపోతే ఆర్డర్ వేరే షాప్ కి వెళుతుంది.

AI చాట్‌బాట్ ప్రయోజనాలు:
1. **తెలుగులోనే లైవ్ సమాధానాలు**: పార్కింగ్ లేదా దుకాణం తెరిచే సమయాల గురించిన ప్రశ్నలకు వెంటనే మాతృభాషలోనే ఆన్సర్ లభిస్తుంది.
2. **కస్టమర్ నెంబర్ సేవ్**: సందర్శించిన వ్యక్తుల లీడ్స్ భద్రపరుస్తుంది.
3. **ఆర్డర్స్ సేకరణ**: నేరుగా వాట్సాప్ కే బిల్ మరియు లొకేషన్ డెలివరీ సందేశం పంపుతుంది.`
    },
    {
      id: 'web-mistakes',
      title: 'Top 5 Website Mistakes Made by Local Shop Owners',
      teluguTitle: 'స్థానిక వ్యాపారాలు వెబ్‌సైట్ విషయంలో చేసే 5 పొరపాట్లు',
      summary: 'Avoid expensive mistakes such as using slow-loading web pages, and failing to verify Google Maps listing pins.',
      teluguSummary: 'అత్యంత ఎక్కువ లోడింగ్ సమస్యలు ఉన్న టెంప్లేట్ వెబ్‌సైట్ వాడటం వలన జరిగే నష్టాలు.',
      category: 'BUSINESS TIPS',
      date: 'June 15, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400',
      content: `A website is your online digital storefront. Here are top mistakes to steer clear of:
1. **Terrible Mobile Layout**: Up to 85% of traffic is on mobile phones. If the layout is small, text overflows, or links are narrow, clients leave.
2. **Failing to Show WhatsApp Buttons**: Modern consumers do not like filling forms with 10 fields. Quick WhatsApp consultation is the modern way.
3. **Extremely Slow speed**: Heavy templates take 5-8 seconds to render. Every second costs up to 10% conversion losses.
4. **Outdated menus and numbers**: Hard-to-edit directories cause client frustration.

*At VisionCraft.telugu, we build lightweight designs optimized with core web vitals and immediate calls-to-action.*`,
      teluguContent: `ఆన్‌లైన్ బిజినెస్‌లో వెబ్‌సైట్ అనేది ఒక శాశ్వత దుకాణం లాంటిది. అక్కడ చేసే కొన్ని ముఖ్య పొరపాట్లు:
1. **మొబైల్ రెస్పాన్సివ్ లేకపోవడం**: 85% మంది వినియోగదారులు ఫోన్‌లోనే వెబ్‌సైట్లు ఓపెన్ చేస్తారు.
2. **వాట్సాప్ బటన్ లేకపోవడం**: సరుకు ఆర్డర్ చేయడానికి పెద్ద ఫారమ్ నింపే ఓపిక కస్టమర్లకి ఉండదు.
3. **అత్యంత స్లో లోడింగ్**: వెబ్‌సైట్ ఓపెన్ అవడానికి 5 సెకన్ల కంటే ఎక్కువ తీసుకుంటే పేజీ క్లోజ్ చేస్తారు.`
    }
  ];

  const activeArticle = articles.find(a => a.id === selectedArticle);

  return (
    <section id="blog" className={`py-24 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15`}>
            {lang === 'en' ? 'LOCAL KNOWLEDGE HUB' : 'బిజినెస్ నాలెడ్జ్ సెంటర్'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            {lang === 'en' ? 'Tips & Tactics for Small Businesses' : 'మీ వ్యాపారాన్ని పెంచుకోవడానికి ముఖ్యమైన సూచనలు'}
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
            {lang === 'en'
              ? 'Read custom tutorials written specifically for neighborhood shop owners, coaches, academies, and service hubs.'
              : 'స్థానిక స్కూళ్లు, రెస్టారెంట్లు, కోచ్‌లు గూగుల్‌లో ఎలా ముందుకు సాగాలో నిపుణుల బ్లాగ్స్ ఇక్కడ చదవండి.'}
          </p>
        </div>

        {/* Blog layout cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-500/25 hover:scale-101 ${
                isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 bg-black/70 text-white rounded-md uppercase">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                    <span className="text-zinc-700">•</span>
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug line-clamp-2 hover:text-blue-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'en' ? item.title : item.teluguTitle}
                  </h3>
                  <p className={`mt-2 text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-zinc-450' : 'text-slate-600'}`}>
                    {lang === 'en' ? item.summary : item.teluguSummary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/5">
                  <button
                    onClick={() => setSelectedArticle(item.id)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-350 cursor-pointer flex items-center gap-1"
                    id={`blog-read-${item.id}`}
                  >
                    <span>{lang === 'en' ? 'Read Full Article' : 'వ్యాసం చదవండి'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Overlay Modal reading pane */}
      {selectedArticle && activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto">
          <div className={`w-full max-w-2xl rounded-3xl overflow-hidden border ${
            isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
          } shadow-2xl transition-all duration-300 flex flex-col max-h-[85vh]`}>
            
            {/* Modal Heading controls */}
            <div className={`p-5 flex justify-between items-center border-b ${
              isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 font-bold">
                  {lang === 'en' ? 'VISIONCRAFT TUTORIALS' : 'విజన్‌క్రాఫ్ట్ ఆర్టికల్'}
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className={`p-2 rounded-lg ${isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-400 hover:text-slate-700'} cursor-pointer`}
                id="close-article-modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Read text scroll area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5 text-xs text-zinc-550">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-extrabold font-display leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'en' ? activeArticle.title : activeArticle.teluguTitle}
              </h3>

              <div className="h-44 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Formatted body blocks */}
              <div className={`text-sm sm:text-base leading-relaxed whitespace-pre-line ${isDark ? 'text-zinc-300' : 'text-slate-705'}`}>
                {lang === 'en' ? activeArticle.content : activeArticle.teluguContent}
              </div>

              {/* Reader approval feedback panel */}
              <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${
                isDark ? 'bg-black border-white/5' : 'bg-slate-5  border-slate-200'
              }`}>
                <span className={isDark ? 'text-zinc-500' : 'text-slate-500'}>
                  {lang === 'en' ? 'Was this tutorial helpful?' : 'ఈ సమాచారం మీకు ఉపయోగపడిందా?'}
                </span>
                <span className="flex gap-2">
                  <button className="flex items-center gap-1 py-1.5 px-3 rounded-lg bg-blue-600 text-white font-bold cursor-pointer">
                    <ThumbsUp className="w-3.5 h-3.5" /> Yes
                  </button>
                </span>
              </div>
            </div>

            {/* Reading window footer with CTAs */}
            <div className={`p-4 text-center border-t ${
              isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <a
                href="#contact"
                onClick={() => setSelectedArticle(null)}
                className="py-2.5 px-5 rounded-xl font-bold text-xs bg-blue-650 hover:bg-blue-600 text-white inline-flex items-center gap-1 shadow-md cursor-pointer"
                id="article-bottom-quote-link"
              >
                <span>{lang === 'en' ? 'Schedule a Free Consulting Call' : 'ఉచిత కన్సల్టేషన్ బుక్ చేయండి'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
