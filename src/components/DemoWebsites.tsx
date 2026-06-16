/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { School, Utensils, Dumbbell, Smartphone, Monitor, X, Check, Laptop, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface DemoWebsitesProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function DemoWebsites({ isDark, lang }: DemoWebsitesProps) {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [simulatorDevice, setSimulatorDevice] = useState<'desktop' | 'mobile'>('desktop');

  const demoItems = [
    {
      id: 'school',
      icon: School,
      title: lang === 'en' ? 'Little Flowers English Medium School' : 'లిటిల్ ఫ్లవర్స్ ఇంగ్లీష్ మీడియం స్కూల్',
      tag: lang === 'en' ? 'EDUCATION' : 'పాఠశాలలు',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=605',
      description: lang === 'en'
        ? 'A modern school website featuring online admissions, digital notice boards, curriculum details, and elegant photo galleries.'
        : 'ఆన్‌లైన్ అడ్మిషన్స్, స్కూల్ నోటీస్ బోర్డ్, ఫోటో గ్యాలరీ మరియు ఫీజు వివరాలతో కూడిన ఆధునిక స్కూల్ వెబ్‌సైట్.',
      accent: 'indigo',
      tagline: lang === 'en' ? 'Empowering Minds, Shaping Futures' : 'జ్ఞానమే అమృతం - ఉత్తమ భవిష్యత్తుకు బాటలు',
      badge: lang === 'en' ? 'Admissions Open 2026' : 'అడ్మిషన్లు ప్రారంభమైనవి',
      sections: [
        { name: lang === 'en' ? 'Quick Admission Portal' : 'త్వరిత అడ్మిషన్ పోర్టల్', detail: lang === 'en' ? 'Collect basic parents info, class target, student name automatically.' : 'తల్లిదండ్రుల వివరాలు, తరగతి మరియు ఫోన్ నెంబర్ నమోదు ఫారం.' },
        { name: lang === 'en' ? 'Smart Curriculum' : 'విద్యా విధానం', detail: lang === 'en' ? 'CBSE syllabus outline with customized teachers panel directory.' : 'సీబీఎస్ఈ సిలబస్ మరియు అనుభవజ్ఞులైన ఉపాధ్యాయుల వివరాలు.' },
        { name: lang === 'en' ? 'Event Calendar Gallery' : 'ఈవెంట్స్ & గ్యాలరీ', detail: lang === 'en' ? 'Showcase high-resolution photos of science fairs, sports days, and awards.' : 'సైన్స్ ఫెయిర్ మరియు ఆటల పోటీల అద్భుతమైన విజువల్స్.' }
      ]
    },
    {
      id: 'cafe',
      icon: Utensils,
      title: lang === 'en' ? 'Silver Spoons Bistro & Cafe' : 'సిల్వర్ స్పూన్స్ బిస్ట్రో & కెఫే',
      tag: lang === 'en' ? 'RESTAURANTS' : 'రెస్టారెంట్లు',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=605',
      description: lang === 'en'
        ? 'A delicious cafe website with interactive digital menus, WhatsApp ordering trigger integration, and physical table booking system.'
        : 'ఆకర్షణీయమైన డిజిటల్ మెనూ, వాట్సాప్ ఆర్డరింగ్ లింక్ మరియు టేబుల్ బుకింగ్ సిస్టమ్ కలిగిన కెఫే వెబ్‌సైట్.',
      accent: 'amber',
      tagline: lang === 'en' ? 'Sips, Bites, and Neighborhood Stories' : 'అద్భుతమైన రుచులు - అల్టిమేట్ కాఫీ అనుభూతి',
      badge: lang === 'en' ? '15% Off First WhatsApp Order' : 'వాట్సాప్ ఆర్డర్‌పై 15% డిస్కౌంట్',
      sections: [
        { name: lang === 'en' ? 'Dynamic Menu Card' : 'స్మార్ట్ విజువల్ మెనూ', detail: lang === 'en' ? 'Beautiful classification of items (Starters, Main, Mocktails) with prices.' : 'ధరలు మరియు ఆకర్షణీయమైన ఫోటోలతో కూడిన ఫుడ్ ఐటమ్స్ లిస్ట్.' },
        { name: lang === 'en' ? 'Direct WhatsApp Ordering' : 'వాట్సాప్ ద్వారా ఆర్డర్స్', detail: lang === 'en' ? 'Customers add items to cart and shoot instant formatted message to cafe owner.' : 'మెనూ నుండి ఐటమ్స్ సెలెక్ట్ చేసుకొని ఒకే క్లిక్‌తో వాట్సాప్ ద్వారా ఆర్డర్.' },
        { name: lang === 'en' ? 'Cozy Ambience Booking' : 'టేబుల్ రిజర్వేషన్', detail: lang === 'en' ? 'Simple calendar date and time selection to escape weekend rush.' : 'శని, ఆదివారాలలో రద్దీని తట్టుకోవడానికి టేబుల్ ముందుగానే బుక్ చేసుకునే సదుపాయం.' }
      ]
    },
    {
      id: 'gym',
      icon: Dumbbell,
      title: lang === 'en' ? 'Iron Kingdom Ultimate Fitness' : 'ఐరన్ కింగ్‌డమ్ అల్టిమేట్ ఫిట్‌నెస్',
      tag: lang === 'en' ? 'GYMS & WELLNESS' : 'జిమ్స్ & వెల్నెస్',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=605',
      description: lang === 'en'
        ? 'A high-energy gym profile featuring membership packages details, personal coaches rosters, and class schedules.'
        : 'సభ్యత్వ ప్లాన్లు, ప్రొఫెషనల్ కోచ్‌లు మరియు వర్కౌట్ టైమింగ్స్ టేబుల్స్ కలిగిన హై-ఎనర్జీ జిమ్ వెబ్‌సైట్.',
      accent: 'emerald',
      tagline: lang === 'en' ? 'Build Muscle, Burn Fat, Gain Trust' : 'కఠోర సాదన - మీ శరీరానికి సరైన ఆకృతి',
      badge: lang === 'en' ? 'Free Pass Available' : 'ఉచిత ఒక రోజు ట్రయల్ అందుబాటులో',
      sections: [
        { name: lang === 'en' ? 'Membership Pricing Tiers' : 'సభ్యత్వ వార్షిక ప్లాన్లు', detail: lang === 'en' ? 'Subscription packages (Monthly, Yearly Premium) with checklist of amenities.' : 'మంత్లీ & ఇయర్లీ కార్డులు మరియు కావలసిన సౌకర్యాల వివరాలు.' },
        { name: lang === 'en' ? 'Trainer Profiles Directory' : 'కోచ్‌ల వివరాలు', detail: lang === 'en' ? 'Showcase dietitians, lifting instructors, and cardio trainers.' : 'బాడీబిల్డింగ్, యోగా మరియు స్పెషల్ న్యూట్రిషన్ ట్రైనర్స్ గైడ్స్.' },
        { name: lang === 'en' ? 'Class Timetable Schedule' : 'క్లాస్ టైమింగ్స్ బోర్డ్', detail: lang === 'en' ? 'Display hourly slots for CrossFit, Weight Training, or Women batches.' : 'బిగినర్స్, ఉదయం & సాయంత్రం బ్యాచ్‌ల వివరాల క్యాలెండర్.' }
      ]
    }
  ];

  const currentDemoObj = demoItems.find(item => item.id === selectedDemo);
  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="demos" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-24 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title portion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15"
          >
            {lang === 'en' ? 'PRE-DESIGNED TEMPLATES' : 'సిద్ధంగా ఉన్న నమూనాలు'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Explore High-Fidelity Demo Websites' : 'మా రెడీ-మేడ్ డెమో డిజైన్లను పరిశీలించండి'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}
          >
            {lang === 'en'
              ? 'Click to preview our custom architecture blueprints for schools, cafes, and health centers. Ready to adapt in Telugu or English for your local needs.'
              : 'మీ వ్యాపారం కూడా ఇలాంటి అద్భుతమైన డిజైన్ ద్వారా కస్టమర్లను ఆకర్షించవచ్చు. మీకు నచ్చిన డెమో సెలెక్ట్ చేసుకోండి.'}
          </motion.p>
        </div>

        {/* Demo Cards Stack with hovering elevations and image translation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoItems.map((item, index) => {
            const Icon = item.icon;
            let themeAccent = 'hover:border-blue-500/30 text-blue-400 bg-blue-500/5';
            let overlayGlow = 'rgba(59, 130, 246, 0.2)';
            if (item.accent === 'amber') {
              themeAccent = 'hover:border-amber-500/30 text-amber-400 bg-amber-500/5';
              overlayGlow = 'rgba(245, 158, 11, 0.2)';
            }
            if (item.accent === 'emerald') {
              themeAccent = 'hover:border-emerald-500/30 text-emerald-400 bg-emerald-500/5';
              overlayGlow = 'rgba(16, 185, 129, 0.2)';
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.025, 
                  y: -6,
                  borderColor: overlayGlow,
                  boxShadow: isDark ? '0 20px 40px -20px rgba(0,0,0,0.8)' : '0 20px 40px -20px rgba(100,116,139,0.2)'
                }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`flex flex-col h-full rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0A0A0A] border-white/5'
                    : 'bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                {/* Image overlay with hover scale zoom */}
                <div className="relative h-48 overflow-hidden group">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-wider font-extrabold px-2.5 py-1 bg-black/75 text-white rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Info Text block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1.5 rounded-lg ${
                        item.accent === 'indigo' ? 'bg-indigo-500/15 text-indigo-400' :
                        item.accent === 'amber' ? 'bg-amber-500/15 text-amber-400' :
                        'bg-emerald-500/15 text-emerald-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-zinc-500">
                        {lang === 'en' ? 'LOCAL BLUEPRINT' : 'స్థానిక నమూనా'}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold font-display leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* View Demo Button triggers local Simulator modal */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <motion.button
                      onClick={() => {
                        setSelectedDemo(item.id);
                        setSimulatorDevice('desktop'); // default to desktop on open
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={premiumSpring}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        item.accent === 'indigo' ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20' :
                        item.accent === 'amber' ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-950/20' :
                        'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20'
                      }`}
                      id={`demo-trigger-${item.id}`}
                    >
                      <span>{lang === 'en' ? 'Launch Live Sandbox' : 'లైవ్ డెమోను చూడండి'}</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bespoke Interactive Live Web Simulator Modal with custom exit transitions */}
      <AnimatePresence>
        {selectedDemo && currentDemoObj && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`w-full max-w-5xl rounded-3xl overflow-hidden border flex flex-col h-[90vh] transition-all duration-300 ${
                isDark ? 'bg-[#050505] border-white/10' : 'bg-white border-slate-205'
              } shadow-2xl`}
            >
              
              {/* Simulator Control Header */}
              <div className={`p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-b ${
                isDark ? 'bg-[#0A0A0A]/90 border-white/5 backdrop-blur-md' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center space-x-3 text-left">
                  <div className="p-2 rounded-xl text-white bg-blue-650">
                    <currentDemoObj.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-white/5 text-zinc-400 rounded-full font-bold uppercase border border-white/5">
                        {currentDemoObj.tag}
                      </span>
                      <span className="text-[10px] text-blue-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        VisionCraft Sandbox
                      </span>
                    </div>
                    <h4 className={`text-sm sm:text-base font-extrabold font-display leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {currentDemoObj.title}
                    </h4>
                  </div>
                </div>

                {/* Device Selector Controls */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => setSimulatorDevice('desktop')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg border transition-all cursor-pointer ${
                      simulatorDevice === 'desktop'
                        ? 'bg-blue-600 text-white border-blue-500'
                        : isDark ? 'bg-[#111] border-white/5 text-zinc-400' : 'bg-slate-100 border-slate-200 text-slate-650'
                    }`}
                    title="Simulate Desktop Layout"
                    id="device-desktop"
                  >
                    <Laptop className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => setSimulatorDevice('mobile')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg border transition-all cursor-pointer ${
                      simulatorDevice === 'mobile'
                        ? 'bg-blue-600 text-white border-blue-500'
                        : isDark ? 'bg-[#111] border-white/5 text-zinc-400' : 'bg-slate-100 border-slate-200 text-slate-650'
                    }`}
                    title="Simulate Mobile Layout"
                    id="device-mobile"
                  >
                    <Smartphone className="w-4 h-4" />
                  </motion.button>
                  <div className="h-6 w-px bg-white/5 mx-1.5 hidden sm:block"></div>
                  <motion.button
                    onClick={() => setSelectedDemo(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-red-650 hover:bg-red-550 text-white transition-all cursor-pointer"
                    title="Close Simulator"
                    id="close-simulation"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Embedded Mini-Website Preview Content Panel (Shrinks layout-animatedly!) */}
              <div className={`flex-1 overflow-y-auto p-4 flex items-center justify-center transition-colors duration-300 ${
                isDark ? 'bg-black/40' : 'bg-slate-100'
              }`}>
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className={`h-full w-full overflow-y-auto rounded-2xl border ${
                    simulatorDevice === 'mobile' 
                      ? 'max-w-[360px] h-full shadow-2xl relative border-zinc-850' 
                      : 'max-w-full h-full border-zinc-800/10'
                  } ${isDark ? 'bg-[#080808] text-white' : 'bg-white text-slate-900'}`}
                >
                  
                  {/* Simulated Web Navigation Header */}
                  <div className={`py-3 px-4 flex items-center justify-between border-b ${
                    isDark ? 'bg-black border-white/5' : 'bg-white border-slate-100'
                  }`}>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-extrabold text-xs tracking-tight">
                        {currentDemoObj.id === 'school' ? '🌻 Little Flowers School' : currentDemoObj.id === 'cafe' ? '☕ Silver Spoons' : '💪 Iron Kingdom'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-bold">
                        {currentDemoObj.badge}
                      </span>
                    </div>
                  </div>

                  {/* Simulated Business Hero Section */}
                  <div className="text-center py-10 px-4 max-w-xl mx-auto">
                    <span className="text-[9px] font-mono tracking-widest text-blue-400 uppercase font-bold">
                      {lang === 'en' ? 'LOCAL EXCELLENCE' : 'విశ్వసనీయ సేవలు'}
                    </span>
                    <h1 className="mt-2.5 text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-blue-500">
                      {currentDemoObj.title}
                    </h1>
                    <p className={`mt-2 text-xs sm:text-sm font-semibold italic ${isDark ? 'text-zinc-400' : 'text-slate-655'}`}>
                      "{currentDemoObj.tagline}"
                    </p>
                    
                    {/* Real responsive CTA links */}
                    <div className="mt-5 flex gap-2 justify-center">
                      <button className="py-2 px-4 rounded-xl text-[11px] font-bold bg-blue-600 text-white shadow-md cursor-pointer">
                        {lang === 'en' ? 'Contact Us' : 'సంప్రదించండి'}
                      </button>
                      {currentDemoObj.id === 'cafe' && (
                        <button className="py-2 px-4 rounded-xl text-[11px] font-bold border border-blue-500/50 text-blue-405 cursor-pointer">
                          {lang === 'en' ? 'View Menu Card' : 'మెనూ కార్డ్ చూడండి'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Simulated Page Content Highlights */}
                  <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5">
                    {currentDemoObj.sections.map((section, sidx) => (
                      <div 
                        key={sidx}
                        className={`p-4 rounded-xl border ${
                          isDark ? 'bg-black border-white/5' : 'bg-slate-50 border-slate-150'
                        }`}
                      >
                        <h5 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          {section.name}
                        </h5>
                        <p className={`text-[11px] mt-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
                          {section.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Local Maps / Appointment Simulated Integration Module */}
                  <div className={`m-4 p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
                    isDark ? 'bg-blue-950/10 border-blue-900/20' : 'bg-blue-50/20 border-blue-100'
                  }`}>
                    <div className="text-left">
                      <h6 className="text-xs font-bold flex items-center gap-1 text-blue-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {lang === 'en' ? 'Google Maps & Local SEO Setup' : 'గూగుల్ మ్యాప్స్ లోకేషన్ సెటప్'}
                      </h6>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-zinc-400' : 'text-slate-655'}`}>
                        {lang === 'en' ? 'Located near RTC X Roads, Hyderabad.' : 'RTC ఎక్స్ రోడ్స్ దగ్గర, హైదరాబాద్.'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-bold">
                      5.0 ★ (140+ reviews)
                    </span>
                  </div>

                  {/* Interactive Simulated Chatbot Icon inside device */}
                  <div className="sticky bottom-4 right-4 text-right pr-4 pb-2">
                    <div className="inline-flex items-center space-x-1.5 py-1.5 px-3 rounded-full bg-blue-650 text-white shadow-lg text-[10px] font-bold cursor-pointer">
                      <MessageSquare className="w-3 h-3 fill-white text-blue-600" />
                      <span>{lang === 'en' ? 'Chat or Order' : 'చాట్ / ఆర్డర్'}</span>
                    </div>
                  </div>

                </motion.div>
              </div>

              {/* Modal Bottom control notes */}
              <div className={`p-4 text-center border-t text-xs ${
                isDark ? 'bg-[#0A0A0A] border-white/5 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                {lang === 'en'
                  ? '💡 Want a customized design like this for your business? Click below or double-click to chat on WhatsApp now!'
                  : '💡 మీ వ్యాపారానికి కూడా ఇలాంటి చక్కటి డిజైన్ కావాలా? కింద ఉన్న బటన్ క్లిక్ చేసి వాట్సాప్‌లో మాట్లాడండి.'}
                <div className="mt-3 flex gap-2 justify-center">
                  <motion.a
                    href={getWhatsAppUrl(`Hi VisionCraft! I am checking the ${currentDemoObj.title} option in your Live Sandbox. Let us organize a call.`)}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={premiumSpring}
                    className="py-1.5 px-4 rounded-xl text-[11px] font-bold bg-emerald-500 text-white hover:bg-emerald-400 cursor-pointer shadow-md shadow-emerald-950/20"
                    id="simulator-lead-to-whatsapp"
                  >
                    {lang === 'en' ? 'Discuss This Design on WhatsApp' : 'ఈ డిజైన్‌ను వాట్సాప్‌లో మాట్లాడండి'}
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedDemo(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={premiumSpring}
                    className={`py-1.5 px-4 rounded-xl text-[11px] font-bold border cursor-pointer ${isDark ? 'border-white/10 hover:bg-white/5 text-slate-300' : 'border-slate-300 hover:bg-slate-100'}`}
                  >
                    {lang === 'en' ? 'Close Sandbox' : 'శాండ్‌బాక్స్ మూసివేయి'}
                  </motion.button>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}
