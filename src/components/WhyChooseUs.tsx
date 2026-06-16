/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, CreditCard, Sparkles, Target, LifeBuoy, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function WhyChooseUs({ isDark, lang }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: HeartHandshake,
      title: lang === 'en' ? 'Telugu Support' : 'తెలుగు సపోర్ట్',
      desc: lang === 'en' ? 'Communicate with us comfortably in Telugu or English. No language barriers.' : 'మీ మాతృభాషలో చాలా సౌకర్యవంతంగా మాట్లాడండి. ఎటువంటి అపోహలు లేకుండా డిజైన్ చేసుకోండి.',
      accent: 'emerald',
    },
    {
      icon: Zap,
      title: lang === 'en' ? 'Fast Delivery' : 'అతి త్వరగా డెలివరీ',
      desc: lang === 'en' ? 'Get your professional website live in just 7 to 10 days, optimized and ready.' : 'మీ ప్రొఫెషనల్ వెబ్‌సైట్‌ను కేవలం 7 నుండి 10 రోజులలో సిద్ధం చేసి లైవ్ చేయగలము.',
      accent: 'amber',
    },
    {
      icon: CreditCard,
      title: lang === 'en' ? 'Affordable Pricing' : 'అందుబాటులో ధరలు',
      desc: lang === 'en' ? 'Premium, corporate-quality websites without the heavy agency price tag.' : 'ఎక్కువ ఖర్చు లేకుండా, అత్యంత ప్రీమియం క్వాలిటీ వెబ్‌సైట్స్ అందరికీ అందుబాటులో.',
      accent: 'blue',
    },
    {
      icon: Sparkles,
      title: lang === 'en' ? 'AI-Powered Solutions' : 'AI టెక్నాలజీ',
      desc: lang === 'en' ? 'Smart website chatbots, AI FAQ systems, and automated lead capture features.' : 'స్మార్ట్ వెబ్‌సైట్ చాట్‌బాట్‌లు, నిరంతరం పనిచేసే లీడ్ క్యాప్చర్ & FAQ సేవలు.',
      accent: 'indigo',
    },
    {
      icon: Target,
      title: lang === 'en' ? 'Local Business Expertise' : 'స్థానిక వ్యాపారాలపై పట్టు',
      desc: lang === 'en' ? 'We understand Telugu states customer behavior, local marketing, and Google Maps ranking.' : 'రెండు తెలుగు రాష్ట్రాల వినియోగదారుల అలవాట్లు, గూగుల్ మ్యాప్స్ ర్యాంకింగ్స్ పై మాకు పూర్తి పట్టు ఉంది.',
      accent: 'rose',
    },
    {
      icon: LifeBuoy,
      title: lang === 'en' ? 'Ongoing Support' : 'నిరంతర సపోర్ట్',
      desc: lang === 'en' ? 'We do not run away after deployment. We are always a phone call or text away.' : 'వెబ్‌సైట్ పూర్తి అయిన తర్వాత కూడా అప్‌డేట్స్ చేయడానికి మేము ఎల్లప్పుడూ సిద్ధంగా ఉంటాము.',
      accent: 'cyan',
    },
  ];

  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="why-us" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 transition-all duration-300 relative overflow-hidden ${isDark ? 'bg-[#050505] text-slate-100' : 'bg-white text-slate-900'}`}
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full border ${
              isDark ? 'border-white/10 text-blue-400 bg-white/5' : 'border-slate-200 text-blue-600 bg-slate-50'
            }`}
          >
            {lang === 'en' ? 'WHY CHOOSE VISIONCRAFT' : 'ఎందుకు విజన్‌క్రాఫ్ట్?'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Crafted for Growth, Built for Execution' : 'స్థానిక వ్యాపారాలకు సరిపోయే అద్భుతమైన సేవలు'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-650'}`}
          >
            {lang === 'en' 
              ? 'We bridge the gap between expensive big-city agencies and rigid template builders, offering premium tailored assets in your comfortable workspace language.'
              : 'పెద్ద కంపెనీల భారీ ఖర్చులు సృష్టించకుండా, స్థానిక అవసరాలకు అనుగుణంగా తెలుగు మరియు ఇంగ్లీష్‌లలో ఉత్తమ వెబ్‌సైట్స్ అందిస్తాము.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            
            // Generate visual styles based on accent property
            let iconColorClass = 'text-blue-400';
            let iconBgClass = 'bg-blue-50 dark:bg-blue-950/20 text-blue-400';
            let borderHoverColor = 'rgba(59, 130, 246, 0.2)';

            if (reason.accent === 'emerald') {
              iconColorClass = 'text-emerald-400';
              iconBgClass = 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-400';
              borderHoverColor = 'rgba(16, 185, 129, 0.2)';
            } else if (reason.accent === 'amber') {
              iconColorClass = 'text-amber-500';
              iconBgClass = 'bg-amber-50 dark:bg-amber-950/20 text-amber-500';
              borderHoverColor = 'rgba(245, 158, 11, 0.2)';
            } else if (reason.accent === 'indigo') {
              iconColorClass = 'text-indigo-400';
              iconBgClass = 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-400';
              borderHoverColor = 'rgba(99, 102, 241, 0.2)';
            } else if (reason.accent === 'rose') {
              iconColorClass = 'text-rose-400';
              iconBgClass = 'bg-rose-50 dark:bg-rose-950/20 text-rose-400';
              borderHoverColor = 'rgba(244, 63, 94, 0.2)';
            } else if (reason.accent === 'cyan') {
              iconColorClass = 'text-cyan-400';
              iconBgClass = 'bg-cyan-50 dark:bg-cyan-950/25 text-cyan-400';
              borderHoverColor = 'rgba(6, 182, 212, 0.2)';
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.025, 
                  y: -8,
                  borderColor: borderHoverColor,
                  boxShadow: isDark ? '0 20px 40px -20px rgba(0,0,0,0.7)' : '0 20px 40px -20px rgba(148, 163, 184, 0.25)'
                }}
                transition={{ 
                  delay: idx * 0.05, 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`p-8 rounded-3xl border transition-all duration-350 ${
                  isDark
                    ? 'bg-[#0A0A0A] border-white/5'
                    : 'bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                <div className={`p-4 rounded-2xl w-fit mb-6 ${iconBgClass}`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {reason.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
                  {reason.desc}
                </p>
                
                {/* Visual Accent Bar */}
                <div className={`mt-6 h-1 w-12 rounded-full ${
                  reason.accent === 'emerald' ? 'bg-emerald-500' :
                  reason.accent === 'amber' ? 'bg-amber-500' :
                  reason.accent === 'indigo' ? 'bg-indigo-505' :
                  reason.accent === 'rose' ? 'bg-rose-500' :
                  reason.accent === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500'
                }`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
