/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function About({ isDark, lang }: AboutProps) {
  // Cascading reveal timings 
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      id="about" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } }
      }}
      className={`py-24 transition-all duration-300 relative overflow-hidden ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}
    >
      
      {/* Visual background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual left illustration banner block */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className={`p-8 rounded-3xl border relative ${
              isDark ? 'bg-[#0A0A0A] border-white/5 shadow-2xl' : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-mono font-bold text-sm tracking-wider">
                  VC
                </div>
                <div>
                  <h4 className="text-sm font-extrabold font-display">VisionCraft.telugu</h4>
                  <p className="text-[10px] text-zinc-500 font-mono">EST. 2026 • LOCAL EXPERT COLLAB</p>
                </div>
              </div>

              {/* Slogan */}
              <blockquote className={`text-sm italic leading-relaxed border-l-2 border-blue-500 pl-4 ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>
                {lang === 'en'
                  ? '"We started VisionCraft because we realized local business owners are being majorly overcharged by big corporate agencies for standard templates. We came to offer tailor-crafted local structures in our native languages with flat supportive packages."'
                  : '"పెద్ద నగరాలలో ఉండే కార్పొరేట్ కంపెనీలు సాదాసీదా వెబ్‌సైట్ల కోసమే వేల రూపాయలు వసూలు చేయడాన్ని మేము గమనించాము. స్థానిక తెలుగు వ్యాపారాలకు అత్యంత సరసమైన ధరలలో, సులభమైన సాంకేతికతను అందించడమే మా లక్ష్యం."'}
              </blockquote>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-1 px-3.5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs">
                    01
                  </div>
                  <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {lang === 'en' ? 'Comfortable communication in Telugu' : 'నూరు శాతం తెలుగులో కన్సల్టేషన్'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 px-3.5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs">
                    02
                  </div>
                  <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {lang === 'en' ? 'Guaranteed 10 days Delivery check' : '10 రోజుల్లోనే వెబ్‌సైట్ సిద్ధం'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 px-3.5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs">
                    03
                  </div>
                  <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {lang === 'en' ? 'Bespoke Google Maps ranking assistance' : 'గూగుల్ మ్యాప్స్ లొకేషన్ ర్యాంకింగ్ సాయం'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slogan information and content block right side */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 text-left">
            <span className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border ${
              isDark ? 'border-white/5 text-blue-400 bg-white/5' : 'border-slate-200 text-blue-600 bg-slate-50'
            }`}>
              {lang === 'en' ? 'OUR STORY AND MISSION' : 'మా కథ - మా లక్ష్యం'}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              {lang === 'en' ? 'Empowering Local Leaders, Step by Step' : 'స్థానిక తెలుగు వ్యాపారాల కోసం ఒక నమ్మకమైన డిజిటల్ భాగస్వామి'}
            </h2>
            
            <p className={`mt-5 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
              {lang === 'en'
                ? 'At VisionCraft.telugu, we are passionate about making premium visual styling, fast loading performance, and smart AI chat responder widgets fully accessible to neighborhood gyms, clinics, cafes, boutique stores, and schools.'
                : 'విజన్‌క్రాఫ్ట్.తెలుగు వద్ద మేము చాలా గర్వంగా చెబుతున్నాము—మీకు దగ్గర్లో ఉండే జిమ్ములు, క్లినిక్స్, కాఫేలు, బట్టల దుకాణాలు మరియు స్కూళ్ల యొక్క డిజిటల్ రూపురేఖలను సమూలంగా మార్చడానికి మేము కట్టుబడి ఉన్నాము.'}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="p-2 w-fit h-fit rounded-xl bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Practical AI Integration' : 'ఉపయోగకరమైన AI సేవలు'}
                  </h4>
                  <p className={`text-xs mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                    {lang === 'en' ? 'We do not sell overcomplicated AI. We build useful chatbot widgets that save you labor and route customer leads.' : 'కష్టంగా ఉండే సేవలు కాకుండా, వాడుకోవడానికి చాలా సులువైన AI వాట్సాప్ చాట్‌బాట్‌లను అందిస్తాము.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 w-fit h-fit rounded-xl bg-blue-500/10 text-blue-450 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Localized Telugu Support' : 'మాతృభాషలో 1-on-1 సపోర్ట్'}
                  </h4>
                  <p className={`text-xs mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                    {lang === 'en' ? 'We are based right out of our states, facilitating site deployment support and revisions via phone or face-to-face consult.' : 'మేము మన ఊర్లోనే అందుబాటులో ఉంటూ ఫోన్ ద్వారా లేదా నేరుగా కలవడం ద్వారా అద్భుతమైన సేవలను అందిస్తాము.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex gap-4">
              <a
                href="#contact"
                className="py-3 px-6 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20 cursor-pointer"
                id="about-cta-link"
              >
                {lang === 'en' ? 'Speak with our Team Manager' : 'మా మేనేజర్ తో నేరుగా మాట్లాడండి'}
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
