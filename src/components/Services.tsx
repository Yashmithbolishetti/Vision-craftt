/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout, MessageSquareCode, Award, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function Services({ isDark, lang }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>('design');

  const services = [
    {
      id: 'design',
      title: lang === 'en' ? 'Website Design' : 'వెబ్‌సైట్ డిజైన్‌',
      description: lang === 'en' 
        ? 'Fully responsive, ultra-fast, and stunningly designed websites tailored specifically for your local brand and target keywords.'
        : 'మీ బ్రాండ్‌కు సరిపోయే అద్భుతమైన, మొబైల్ రెస్పాన్సివ్ మరియు అత్యంత వేగవంతమైన ప్రొఫెషనల్ వెబ్‌సైట్స్.',
      icon: Layout,
      badge: lang === 'en' ? 'HIGH CONVERSION' : 'హై కన్వర్షన్',
      accentColor: 'blue',
      bullets: [
        { title: lang === 'en' ? 'Mobile Responsive' : 'యావత్ మొబైల్ అనుకూలత', desc: lang === 'en' ? 'Perfect layout on iPads, Androids, and iPhones.' : 'ప్రటి ఫోన్ మరియు టాబ్లెట్‌లో వెబ్‌సైట్ అద్భుతంగా పని చేస్తుంది.' },
        { title: lang === 'en' ? 'Supercharged Speed' : 'మెరుపు వేగం', desc: lang === 'en' ? 'A 100/100 score on Google Pagespeed Insights to ensure customers don\'t leave.' : 'లోడ్ కావడానికి 2 సెకన్ల కంటే తక్కువ సమయం పడుతుంది.' },
        { title: lang === 'en' ? 'Local SEO Optimized' : 'స్థానిక లోకల్ ఎస్ఈఓ', desc: lang === 'en' ? 'Rank high on Google Maps and search queries within your area.' : 'మీ పట్టణంలో గూగుల్ సెర్చ్‌లో మొదటి స్థానంలో కనిపించేలా ఎస్ఈఓ.' },
        { title: lang === 'en' ? 'Clean Visual Identity' : 'ఆధునిక విజువల్స్', desc: lang === 'en' ? 'Premium typography, spacing, and image alignment that beats competitors.' : 'ఆకర్షణీయమైన రంగులు మరియు అద్భుతమైన లేఅవుట్స్.' }
      ],
      interactivePreview: {
        title: lang === 'en' ? 'Performance Metrics Score' : 'వెబ్‌సైట్ పర్ఫార్మెన్స్ స్కోర్',
        metric: '99%',
        metricLabel: lang === 'en' ? 'PageSpeed Core Vitals' : 'స్పీడ్ ఇండెక్స్',
        illustration: 'speed'
      }
    },
    {
      id: 'chatbot',
      title: lang === 'en' ? 'AI Chatbot Integration' : 'AI చాట్‌బాట్ సేవలు',
      description: lang === 'en'
        ? 'Embed highly intelligent chat automation that talks in Telugu & English, captures potential client leads, and forwards inquiries directly to your WhatsApp.'
        : 'తెలుగు మరియు इంగ్లీష్‌లో మాట్లాడే చాట్‌బాట్‌ల ద్వారా లీడ్స్ సంపాదించి నేరుగా మీ ఫోన్‌కు పంపే అద్భుట టెక్నాలజీ.',
      icon: MessageSquareCode,
      badge: 'TRENDING AI',
      accentColor: 'emerald',
      bullets: [
        { title: lang === 'en' ? 'Local Bilingual Chat' : 'తెలుగు మరియు ఇంగ్లీష్ సంభాషణ', desc: lang === 'en' ? 'Answers FAQs in both clear Telugu and English automatically.' : 'సందర్శకులకు స్థానిక భాషలలో సులభంగా జవాబులను ఇస్తుంది.' },
        { title: lang === 'en' ? 'Interactive Lead Capture' : 'లీడ్ క్యాప్చర్ సిస్టమ్', desc: lang === 'en' ? 'Gets visitor contact number, name, and services inquiry.' : 'సందర్శకుల పేరు, ఫోన్ నెంబర్ మరియు కావాల్సిన సర్వీస్ వివరాల నమోదు.' },
        { title: lang === 'en' ? '24/7 Automated Support' : '24 గంటల ఆటోమేటిక్ హెల్ప్', desc: lang === 'en' ? 'Never miss an inquiry even when sleeping. Instant automated answers.' : 'ఆఫీస్ క్లోజ్ ఉన్నా, అర్ధరాత్రి అయినా కస్టమర్ల ప్రశ్నలకు జవాబులిస్తుంది.' },
        { title: lang === 'en' ? 'Direct WhatsApp Notifications' : 'నేరుగా వాట్సాప్ అలర్ట్స్', desc: lang === 'en' ? 'Instantly delivers leads to your personal WhatsApp.' : 'ప్రతి లీడ్ వివరాలు క్షణాల్లో మీ వాట్సాప్ నెంబర్‌కు పంపబడును.' }
      ],
      interactivePreview: {
        title: lang === 'en' ? 'Lead Forwarding Pipeline' : 'లీడ్ ఫార్వార్డింగ్ డెమో',
        metric: '2.5s',
        metricLabel: lang === 'en' ? 'Inquiry-to-WhatsApp' : 'వాట్సాప్ అలర్ట్ టైం',
        illustration: 'bot'
      }
    },
    {
      id: 'growth',
      title: lang === 'en' ? 'Business Growth Solutions' : 'బిజినెస్ గ్రోత్ సొల్యూషన్స్',
      description: lang === 'en'
        ? 'End-to-end digital growth setup: Google Maps Profile setup, localized landing pages, review systems, and WhatsApp marketing campaigns.'
        : 'స్టార్టింగ్ నుండి సక్సెస్ వరకు డిజిటల్ పద్ధతులు: గూగుల్ మేప్స్ సెటప్, ఆన్‌లైన్ లీడ్స్ మరియు కస్టమర్ రివ్యూస్ పెంచే వ్యూహాలు.',
      icon: Award,
      badge: lang === 'en' ? 'ROI FOCUS' : 'బిజినెస్ లాభాలు',
      accentColor: 'indigo',
      bullets: [
        { title: lang === 'en' ? 'Google Maps My Business' : 'గూగుల్ మై బిజినెస్ సెటప్', desc: lang === 'en' ? 'Appear instantly when local clients search maps (e.g. "Best boutique near me").' : 'ఎవరైనా "బెస్ట్ స్కూల్/జిమ్" అని వెతికితే మీ బిజినెస్ గూగుల్ మ్యాప్స్‌లో కనిపించేలా చేయడం.' },
        { title: lang === 'en' ? 'Review Amplification' : 'కస్టమర్ రివ్యూల పెంపుదల', desc: lang === 'en' ? 'Easily collect positive reviews to establish five-star reputation.' : 'కస్టమర్ల నుండి సులభంగా 5-స్టార్ రేటింగ్స్ పొందే గైడ్స్.' },
        { title: lang === 'en' ? 'Conversion Rate Engineering' : 'లీడ్ కన్వర్షన్ టెక్నిక్స్', desc: lang === 'en' ? 'Psychology-focused UI with trust buttons and visible review cues.' : 'ఎక్కువ మంది ఫోన్ చేసేలా ఆకర్షణీయమైన కాల్స్-టు-యాక్షన్ బటన్స్.' },
        { title: lang === 'en' ? 'Digital Scaling Strategy' : 'డిజిటల్ సపోర్ట్ ప్లాన్స్', desc: lang === 'en' ? 'Free flyers templates, digital cards, and seasonal promotion guidance.' : 'పండగలకి ఫ్లైయర్స్ మరియు డిజిటల్ కార్డ్స్ సెటప్ ప్రణాళికలు.' }
      ],
      interactivePreview: {
        title: lang === 'en' ? 'Local Visibility Boost' : 'లోకల్ విజిబిలిటీ వృద్ధి',
        metric: '+140%',
        metricLabel: lang === 'en' ? 'Inbound Customer Enquiries' : 'కస్టమర్ కాల్స్ అడ్వాంటేజ్',
        illustration: 'chart'
      }
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];
  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-24 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-slate-100' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="absolute inset-0 bg-radial-[at_top_right] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15"
          >
            {lang === 'en' ? 'WHAT WE OFFER' : 'మేము ఏమి అందిస్తాము'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Empower Your Business in the Digital Era' : 'డిజిటల్ యుగంలో మీ బిజినెస్ పవర్ పెంచండి'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}
          >
            {lang === 'en'
              ? 'Our services are fine-tuned for small, medium and local providers who want enterprise-level technology matching affordable budgets.'
              : 'స్థానిక స్కూల్స్, కాఫేలు, జిమ్ములు, క్లినిక్‌ల కోసం తక్కువ ఖర్చులో అత్యున్నత సాంకేతికత.'}
          </motion.p>
        </div>

        {/* Tab Controls with layout animations */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 max-w-4xl mx-auto mb-12">
          {services.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={premiumSpring}
                className={`flex-1 flex items-center justify-between sm:justify-center gap-3 px-6 py-4 rounded-2xl border text-left sm:text-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#0A0A0A] border-blue-500/30 text-white shadow-xl glow-primary'
                      : 'bg-white border-blue-500/50 text-slate-900 shadow-md ring-2 ring-blue-500/15'
                    : isDark
                      ? 'bg-[#0a0a0a]/50 border-white/5 text-slate-400 hover:text-slate-200'
                      : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                }`}
                id={`service-tab-${item.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl transition-colors ${
                    isActive
                      ? item.accentColor === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' : item.accentColor === 'indigo' ? 'bg-indigo-500/15 text-indigo-400' : 'bg-blue-500/15 text-blue-400'
                      : isDark ? 'bg-white/5 text-slate-500' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{item.title}</span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? item.accentColor === 'emerald' ? 'bg-emerald-500/20 text-emerald-300' : item.accentColor === 'indigo' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-blue-500/20 text-blue-300'
                    : isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Service Detailed Dashboard layout with high-end Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
              isDark ? 'bg-[#0A0A0A] border-white/5 shadow-2xl' : 'bg-white border-slate-200/80 shadow-lg shadow-slate-200/30'
            }`}
          >
            {/* Information Column */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className={`text-[11px] font-mono font-bold uppercase py-1 px-3.5 rounded-full ${
                    currentService.accentColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10' :
                    currentService.accentColor === 'indigo' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/10' :
                    'bg-blue-500/10 text-blue-400 border border-blue-500/10'
                  }`}>
                    {lang === 'en' ? 'SERVICE MODULE' : 'సర్వీస్ మాడ్యూల్'}
                  </span>
                </div>
                <h3 className={`mt-3 text-2xl sm:text-3.5xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {currentService.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-650'}`}>
                  {currentService.description}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {currentService.bullets.map((bullet, bIdx) => (
                    <motion.div 
                      key={bIdx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bIdx * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className={`p-1 rounded-full mt-0.5 ${
                        currentService.accentColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                        currentService.accentColor === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                        'bg-blue-500/10 text-blue-400'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                          {bullet.title}
                        </h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                          {bullet.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {lang === 'en' ? '* Guaranteed launch in 10 working days.' : '* కేవలం 10 పనిదినాలలో గ్యారెంటీ డెలివరీ.'}
                </span>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={premiumSpring}
                  className={`py-2.5 px-5 rounded-xl text-xs font-bold transition-all ${
                    currentService.accentColor === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20' :
                    currentService.accentColor === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-950/20' :
                    'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20'
                  }`}
                  id={`get-service-${currentService.id}`}
                >
                  {lang === 'en' ? 'Get Quote for ' : 'కొటేషన్ అడగండి - '}{currentService.title}
                </motion.a>
              </div>
            </div>

            {/* Interactive Live Preview Visual Widget (The Custom-engineered look) */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-black border-white/5' : 'bg-slate-50 border-slate-200'
                } relative overflow-hidden self-center w-full`}
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {currentService.interactivePreview.title}
                  </span>
                  <span className="flex space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </span>
                </div>

                {/* Dynamic widgets rendering depending on tab */}
                {currentService.interactivePreview.illustration === 'speed' && (
                  <div className="py-6 flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center w-32 h-32">
                      <div className={`absolute inset-0 rounded-full border-4 border-dashed ${isDark ? 'border-white/5' : 'border-slate-200'}`}></div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                        className="absolute inset-2 rounded-full border-4 border-t-blue-500 border-r-indigo-500 border-b-transparent border-l-transparent"
                      ></motion.div>
                      <div className="flex flex-col items-center justify-center relative">
                        <span className="text-4xl font-extrabold font-mono text-blue-400">99</span>
                        <span className={`text-[9px] uppercase tracking-wider font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {lang === 'en' ? 'MOBILE PERFECT' : 'మొబైల్ స్కోర్'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2 w-full">
                      <div className="flex justify-between text-xs">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-650'}>{lang === 'en' ? 'Core Web Vitals' : 'కోర్ వెబ్ వైటల్స్'}</span>
                        <span className="text-blue-400 font-bold">Passed</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-blue-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {currentService.interactivePreview.illustration === 'bot' && (
                  <div className="py-2 flex flex-col">
                    {/* Chat interface bubble emulator */}
                    <div className="space-y-3 max-h-56 overflow-y-auto mb-4 p-2 font-sans">
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-1.5 max-w-xs"
                      >
                        <div className="p-1 rounded-lg bg-blue-500 text-white mt-1">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <div className={`p-2.5 rounded-2xl text-xs ${isDark ? 'bg-[#0A0A0A] text-slate-300' : 'bg-white text-slate-700 shadow-xs'}`}>
                          {lang === 'en' 
                            ? "Namaste! Welcome to Silver Spoons Cafe. Want to view our menu or place order on WhatsApp?" 
                            : "నమస్తే! సిల్వర్ స్పూన్స్ కెఫే కు స్వాగతం. మెనూ చూడాలనుకుంటున్నారా లేదా ఆర్డర్ చేయాలా?"}
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start gap-1.5 max-w-xs self-end ml-auto justify-end"
                      >
                        <div className="p-2.5 rounded-2xl text-xs bg-blue-600 text-white">
                          {lang === 'en' ? "Yes, order Special Biryani!" : "అవును, స్పెషల్ బిర్యానీ ఆర్డర్ చెయ్!"}
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-start gap-1.5 max-w-xs"
                      >
                        <div className="p-1 rounded-lg bg-blue-500 text-white mt-1">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <div className={`p-2.5 rounded-2xl text-xs ${isDark ? 'bg-[#0A0A0A] text-slate-300' : 'bg-white text-slate-700 shadow-xs'}`}>
                          {lang === 'en' 
                            ? "Sure! Order for 'Special Chicken Biryani: Qty 1' compiled. Click to send directly to owner's WhatsApp." 
                            : "తప్పకుండా! 'స్పెషల్ చికెన్ బిర్యానీ: 1' వివరాలు సిద్ధం చేసాము. యజమాని వాట్సాప్‌కి పంపడానికి క్లిక్ చేయండి."}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className={`p-3 rounded-xl flex items-center justify-between text-xs border ${
                        isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200 shadow-xs'
                      }`}
                    >
                      <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>{lang === 'en' ? 'Captured Lead:' : 'వచ్చిన లీడ్ నెంబర్:'}</span>
                      <span className="font-mono text-blue-400 font-bold">+91 900****21</span>
                    </motion.div>
                  </div>
                )}

                {currentService.interactivePreview.illustration === 'chart' && (
                  <div className="py-4">
                    {/* Performance stats mini-graph */}
                    <div className="flex justify-between items-end h-28 gap-3 mt-4 px-2">
                      <div className="flex-1 flex flex-col justify-end items-center h-full">
                        <span className={`text-[9px] font-mono mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Month 1</span>
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "20%" }}
                          transition={{ duration: 0.8 }}
                          className="w-full bg-zinc-900 rounded-t-lg"
                        ></motion.div>
                      </div>
                      <div className="flex-1 flex flex-col justify-end items-center h-full">
                        <span className={`text-[9px] font-mono mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Month 3</span>
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "55%" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="w-full bg-blue-500/50 rounded-t-lg"
                        ></motion.div>
                      </div>
                      <div className="flex-1 flex flex-col justify-end items-center h-full">
                        <span className="text-xs font-mono font-bold text-blue-400 mb-1">+140%</span>
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "95%" }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="w-full bg-blue-500 rounded-t-lg"
                        ></motion.div>
                      </div>
                    </div>
                    <p className={`text-center text-[10px] uppercase font-mono tracking-wider mt-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {lang === 'en' ? 'Local SEO enquiries multiplier' : 'ఆర్గానిక్ కస్టమర్ల పెరుగుదల రేటు'}
                    </p>
                  </div>
                )}

                {/* Status footer with nice parameters */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">SECURE: HTTPS</span>
                  <span className="text-blue-400">● LIVE LINK ACTIVE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
