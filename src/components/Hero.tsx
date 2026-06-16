/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Monitor, Sparkles, MessageSquare, ArrowRight, ArrowDown, Laptop, Star } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  isDark: boolean;
  lang: 'en' | 'te';
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ isDark, lang, onNavigate }: HeroProps) {
  // Live Visual sandbox state switcher
  const [activePreview, setActivePreview] = useState<'cafe' | 'gym' | 'school' | 'bot'>('cafe');

  // Parallax smooth scrolling calculations
  const { scrollY } = useScroll();
  const yBg1 = useTransform(scrollY, [0, 1000], [0, 120]);
  const yBg2 = useTransform(scrollY, [0, 1000], [0, -120]);
  const rotateBg = useTransform(scrollY, [0, 1000], [0, 25]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.05]);

  const standardWaUrl = getWhatsAppUrl(
    lang === 'en' 
      ? 'Hi VisionCraft! I saw your hero page. I am interested in building a professional local business website. Please start my free consulting.' 
      : 'నమస్తే విజన్‌క్రాఫ్ట్! నా బిజినెస్ కొరకు వెబ్‌సైట్ ప్రతిపాదన అడగాలనుకుంటున్నాను.'
  );

  // Elite transition spring definitions matching Apple / Stripe UX
  const premiumSpring = { type: 'spring', stiffness: 380, damping: 30 };
  const easeTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  // Cascading slide variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: easeTransition }
  };

  return (
    <section id="hero" className={`pt-32 pb-24 transition-all duration-300 relative overflow-hidden ${
      isDark ? 'bg-[#050505] text-slate-100' : 'bg-white text-slate-900 animate-fade-in'
    }`}>
      
      {/* Decorative gradient canvas lights with scaling */}
      <motion.div 
        style={{ scale: scaleBg }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ scale: scaleBg }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none"
      />

      {/* Parallax Floating Shapes */}
      <motion.div
        style={{ y: yBg1, rotate: rotateBg }}
        className="absolute top-24 left-12 w-28 h-28 rounded-full border border-blue-500/10 pointer-events-none flex items-center justify-center hidden md:flex opacity-40 z-0 select-none"
      >
        <div className="w-20 h-20 rounded-full border border-dashed border-blue-500/15 animate-[spin_60s_linear_infinite] flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-blue-500/30" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-24 right-16 w-36 h-36 rounded-[2.5rem] border border-indigo-500/10 pointer-events-none flex items-center justify-center hidden md:flex opacity-30 z-0 select-none"
      >
        <div className="w-24 h-24 rounded-3xl border border-dashed border-indigo-500/15 animate-[pulse_6s_ease-in-out_infinite]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            
            {/* Bilingual local tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className={`text-xs font-bold font-mono tracking-widest uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {lang === 'en' ? '🚀 Andhra Pradesh & Telangana Local Business Accelerator' : '🚀 ఆంధ్రప్రదేశ్ & తెలంగాణ వ్యాపారాల కోసం ప్రత్యేక సేవలు'}
              </span>
            </motion.div>

            {/* Exactly Specified Headline with Professional Gradient */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5.5xl font-extrabold tracking-tight font-display leading-[1.1]"
            >
              {lang === 'en' ? (
                <>
                  Professional Websites & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Solutions</span>
                </>
              ) : (
                <>
                  ప్రొఫెషనల్ వెబ్‌సైట్స్ & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black">AI సొల్యూషన్స్</span>
                </>
              )}
              <span className="block text-slate-400 dark:text-slate-200 mt-2 font-bold text-3xl sm:text-4xl">
                {lang === 'en' ? 'For Local Businesses' : 'స్థానిక వ్యాపారాల కోసం'}
              </span>
            </motion.h1>

            {/* Exactly Specified Subheadline */}
            <motion.p 
              variants={itemVariants}
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-650'}`}
            >
              {lang === 'en'
                ? "We help schools, gyms, cafes, clinics, coaches, real estate businesses, and local brands build trust online, attract more customers, and grow faster."
                : "మేము పాఠశాలలు, జిమ్ములు, కెఫేలు, క్లినిక్‌లు, కోచ్‌లు, రియల్ ఎస్టేట్ వ్యాపారాలు మరియు ఇతర స్థానిక బ్రాండ్‌లు ఆన్‌లైన్‌లో నమ్మకాన్ని పెంపొందించడానికి, ఎక్కువ మంది కస్టమర్‌లను ఆకర్షించడానికి మరియు వేగంగా అభివృద్ధి చెందడానికి సహాయం చేస్తాము."}
            </motion.p>

            {/* Elite Stats Showcase */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 max-w-lg"
            >
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold font-mono text-blue-400">10 Days</span>
                <span className="text-[10px] sm:text-xs text-slate-500">{lang === 'en' ? 'Guaranteed Delivery' : 'సమయానికి లైవ్'}</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold font-mono text-indigo-400">Telugu</span>
                <span className="text-[10px] sm:text-xs text-slate-500">{lang === 'en' ? '1-on-1 Consultation' : 'సొంత మాతృభాషలో'}</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold font-mono text-emerald-400">Zero Fee</span>
                <span className="text-[10px] sm:text-xs text-slate-500">{lang === 'en' ? 'Draft Proposals Mockup' : 'డిజైన్ ప్లాన్ ఉచితం'}</span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ 
                  scale: 1.025, 
                  boxShadow: isDark ? '0 12px 30px -10px rgba(59,130,246,0.4)' : '0 12px 30px -10px rgba(59,130,246,0.2)' 
                }}
                whileTap={{ scale: 0.985 }}
                transition={premiumSpring}
                className="py-4 px-8 rounded-2xl font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-950/20 cursor-pointer text-sm"
                id="hero-primary-cta"
              >
                <span>{lang === 'en' ? 'Get Free Consultation' : 'ఉచిత కన్సల్టేషన్ కావాలి'}</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </motion.button>
              
              <motion.button
                onClick={() => onNavigate('demos')}
                whileHover={{ scale: 1.025, bg: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(240,240,240,0.8)' }}
                whileTap={{ scale: 0.985 }}
                transition={premiumSpring}
                className={`py-4 px-8 rounded-2xl font-bold transition-all border flex items-center justify-center gap-2 cursor-pointer text-sm ${
                  isDark 
                    ? 'border-white/10 bg-white/5 text-white' 
                    : 'border-slate-200 bg-white text-slate-800'
                }`}
                id="hero-secondary-cta"
              >
                <span>{lang === 'en' ? 'View Our Work' : 'మా వర్క్ డిజైన్లు చూడండి'}</span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Side: Ultimate Interactive Sandbox Client Device Simulator */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 6, ease: "easeInOut", repeat: Infinity }
            }}
          >
            
            {/* Quick trigger switch tabs with premium tap states */}
            <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 max-w-[92vw]">
              {[
                { id: 'cafe', label: lang === 'en' ? '☕ Cafe Website' : '☕ కాఫీ మెనూ' },
                { id: 'gym', label: lang === 'en' ? '🏋️ Gym Portal' : '🏋️ జిమ్ చార్ట్' },
                { id: 'school', label: lang === 'en' ? '🏫 School Site' : '🏫 స్కూల్ పోర్టల్' },
                { id: 'bot', label: lang === 'en' ? '🤖 Live AI Answer' : '🤖 AI బాట్' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActivePreview(tab.id as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-1.5 px-3.5 rounded-full text-[10px] font-bold tracking-tight border transition-all shrink-0 cursor-pointer ${
                    activePreview === tab.id
                      ? 'bg-emerald-500 border-emerald-550 text-white'
                      : isDark ? 'bg-zinc-90 w-fit text-zinc-400 border-zinc-800 hover:text-white' : 'bg-slate-50 text-slate-650 border-slate-200'
                  }`}
                  id={`hero-preview-tab-${tab.id}`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Apple style browser container frame shell with subtle depth shadow */}
            <div className={`p-4 rounded-3xl border text-left flex flex-col h-[340px] relative overflow-hidden transition-all duration-300 ${
              isDark ? 'bg-zinc-950 border-zinc-850 shadow-2xl shadow-emerald-950/5' : 'bg-white border-slate-250 shadow-2xl shadow-slate-200/50'
            }`}>
              
              {/* Browser bar layout */}
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-900">
                <div className="flex space-x-1.5 items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                {/* Simulated address bar */}
                <div className={`py-1 px-8 rounded-lg text-[9px] font-mono tracking-tight text-center ${
                  isDark ? 'bg-zinc-900 text-zinc-500' : 'bg-slate-100 text-slate-400'
                }`}>
                  {activePreview === 'cafe' ? 'https://cozy-cafe.in/hyderabad' : activePreview === 'gym' ? 'https://muscle-kingdom.in' : activePreview === 'school' ? 'https://little-school.edu' : 'https://visioncraft.telugu/ai-assistant'}
                </div>
                <div className="w-10"></div>
              </div>

              {/* Dynamic Simulated Website Page Render with Premium Crossfade AnimatePresence */}
              <div className="flex-1 overflow-y-auto pt-4 flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                  {/* 1. Cafe website preview */}
                  {activePreview === 'cafe' && (
                    <motion.div 
                      key="cafe"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-left">
                        <span className="text-[9px] font-mono uppercase bg-amber-500/10 text-amber-500 font-bold px-2 py-0.5 rounded-full">
                          HOT BEVERAGES
                        </span>
                        <h4 className={`text-lg font-extrabold font-display leading-tight mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Cozy Cafe & Bistro Menu
                        </h4>
                        <p className={`text-[10px] mt-0.5 ${isDark ? 'text-zinc-550' : 'text-slate-500'}`}>
                          {lang === 'en' ? 'Crispy pastries, coffee beans, and neighborhood orders.' : 'తాజా కాఫీ, రుచికరమైన బేకరీ ఐటమ్స్.'}
                        </p>
                      </div>

                      {/* Cafe interactive items list */}
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className={`p-2.5 rounded-xl border flex justify-between items-center ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-150'}`}>
                          <span>☕ Espresso Cappuccino</span>
                          <span className="font-bold text-emerald-400">₹140</span>
                        </div>
                        <div className={`p-2.5 rounded-xl border flex justify-between items-center ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-150'}`}>
                          <span>🥪 Club Toast Grilled</span>
                          <span className="font-bold text-emerald-400">₹180</span>
                        </div>
                      </div>

                      {/* Direct ordering WhatsApp button inside preview */}
                      <div className="p-3 rounded-xl flex items-center justify-between text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <span>{lang === 'en' ? 'Add items to order via WhatsApp:' : 'వస్తువులు ఎంచుకుని వాట్సాప్ ద్వారా ఆర్డర్ చేయండి'}</span>
                        <span className="font-bold underline text-emerald-500">Order Now</span>
                      </div>
                    </motion.div>
                  )}

                  {/* 2. Gym template preview */}
                  {activePreview === 'gym' && (
                    <motion.div 
                      key="gym"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <span className="text-[9px] font-mono uppercase bg-emerald-500/15 text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                          MEMBERSHIPS CORE
                        </span>
                        <h4 className={`text-lg font-extrabold font-display leading-tight mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Iron Kingdom Ultimate Arena
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center text-[11px]">
                        <div className={`p-3 rounded-2xl border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                          <span className="block font-bold">Standard Pass</span>
                          <span className="block text-[10px] text-zinc-500">₹1,500/Month</span>
                          <span className="inline-block mt-2 py-0.5 px-2 bg-emerald-600 text-white rounded text-[8px] font-bold">Buy Card</span>
                        </div>
                        <div className={`p-3 rounded-2xl border border-emerald-500/60 ${isDark ? 'bg-emerald-950/15' : 'bg-emerald-50/50'}`}>
                          <span className="block font-bold text-emerald-400">Annual Premium</span>
                          <span className="block text-[10px] text-zinc-500">₹12,000/Year</span>
                          <span className="inline-block mt-2 py-0.5 px-2 bg-emerald-500 text-white rounded text-[8px] font-bold">1 Day Free pass</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* 3. School profile preview */}
                  {activePreview === 'school' && (
                    <motion.div 
                      key="school"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <span className="text-[9px] font-mono uppercase bg-indigo-500/10 text-indigo-400 font-bold px-2 py-0.5 rounded-full">
                          ACADEMIC YEAR 2026
                        </span>
                        <h4 className={`text-lg font-extrabold font-display leading-tight mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          Little Flowers English Medium School
                        </h4>
                      </div>

                      <div className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-150'
                      }`}>
                        <span className="font-semibold text-emerald-400">✓ Admissions Online Portal Live</span>
                        <span className="text-[10px] py-1 px-3 bg-indigo-600 text-white rounded-lg font-bold">Apply Now</span>
                      </div>

                      <div className="flex gap-2 text-[10px] text-zinc-500">
                        <span>• CBSE Curriculum</span>
                        <span>• Hyderabad location top ranking</span>
                      </div>
                    </motion.div>
                  )}

                  {/* 4. Chatbot answer live simulator preview */}
                  {activePreview === 'bot' && (
                    <motion.div 
                      key="bot"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex gap-2 items-start max-w-[85%] animate-fade-in">
                        <div className="p-1 rounded-lg bg-emerald-500 text-white font-bold text-[8px] uppercase">
                          AI
                        </div>
                        <div className={`p-2.5 rounded-2xl text-[11px] leading-relaxed ${isDark ? 'bg-zinc-900/80 text-zinc-300' : 'bg-slate-100 text-slate-700'}`}>
                          {lang === 'en' 
                            ? 'Namaste! Welcome to VisionCraft. Ready to calculate your optimal website budget? Choice industry category:' 
                            : 'నమస్తే! మీ బిజినెస్ వెబ్‌సైట్ ధర ఎంతో తెలుసుకోవాలా? కింద ఉండే కేటగరీని ఎంచుకోండి:'}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        <button 
                          onClick={() => onNavigate('pricing')} 
                          className="py-1 px-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold cursor-pointer"
                        >
                          📊 {lang === 'en' ? 'Start Estimator' : 'ధర లెక్కించండి'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preview footer */}
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[9px] font-mono text-zinc-550">
                  <span>SSL SECURED CONNECTION</span>
                  <span className="text-emerald-500">● MOCK PREVIEW ACTIVE</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
