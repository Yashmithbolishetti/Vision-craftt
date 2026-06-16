/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function Testimonials({ isDark, lang }: TestimonialsProps) {
  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="testimonials" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-24 transition-all duration-300 relative overflow-hidden ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15"
          >
            {lang === 'en' ? 'LOCAL TRUST' : 'విశ్వసనీయత ప్రయాణం'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Client Success Stories' : 'కస్టమర్ల విజయగాథలు'}
          </motion.h2>
        </div>

        {/* Mandated Placeholder Content with Elite Design layout to convey premium quality */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`p-8 sm:p-14 rounded-3xl border border-dashed text-center max-w-3xl mx-auto ${
            isDark 
              ? 'bg-[#0A0A0A] border-white/10 shadow-2xl' 
              : 'bg-white border-slate-300 shadow-sm'
          }`}
        >
          <div className="flex justify-center text-blue-400 mb-6 space-x-1.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <Star className="w-5 h-5 fill-blue-500 text-blue-405" />
              </motion.div>
            ))}
          </div>

          <h3 className={`text-2xl sm:text-2.5xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'en' ? 'Client Success Stories Coming Soon' : 'కస్టమర్ల విజయగాథలు త్వరలో రాబోతున్నాయి'}
          </h3>
          
          <p className={`mt-4 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto ${isDark ? 'text-zinc-400' : 'text-slate-655'}`}>
            {lang === 'en'
              ? 'We believe in 100% genuine reviews. Our local business partners are currently undergoing launch trials and maps audits across Hyderabad, Guntur, and Vijayawada. Real reviews with live website links will be shown here shortly!'
              : 'మేము 100% నిజాయితీ గల అభిప్రాయాలను మాత్రమే ఇక్కడ ఉంచడానికి కట్టుబడి ఉన్నాము. ప్రస్తుతం హైదరాబాద్, గుంటూరు మరియు విజయవాడలలో మా భాగస్వామ్య స్కూల్స్ & కెఫెల ప్రాజెక్ట్స్ లైవ్ అవుతున్నాయి. పూర్తి వివరాలు, రియల్ లింక్స్ ఇక్కడ త్వరలోనే అందుబాటులో ఉంటాయి!'}
          </p>

          <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            <div className="flex gap-2.5 items-start">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className={`text-xs font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Verified Work Only' : 'నిజమైన లింక్స్ మాత్రమే'}
                </h5>
                <p className="text-[10px] text-zinc-500 mt-0.5">
                  {lang === 'en' ? 'Every client review features a direct link to check their live website.' : 'నిరూపణ కోసం ప్రతి క్లయింట్ యొక్క లైవ్ వెబ్‌సైట్ లింక్ ఉంటుంది.'}</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h5 className={`text-xs font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Rapid Client Onboarding' : 'సులభమైన ప్రారంభం'}
                </h5>
                <p className="text-[10px] text-zinc-500 mt-0.5">
                  {lang === 'en' ? 'In Telugu & English, ensuring maximum comfort during initial planning.' : 'నచ్చిన భాషలో డిస్కషన్స్ సదుపాయం.'}</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-start col-span-2 sm:col-span-1">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h5 className={`text-xs font-bold ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Be Our First Case Study' : 'మొదటి సక్సెస్ మీదే'}
                </h5>
                <p className="text-[10px] text-zinc-500 mt-0.5">
                  {lang === 'en' ? 'Launch now and receive additional 10% discount on initial contract.' : 'ఈ నెలలో ప్రారంభించి అదనపు తగ్గింపులు పొందండి.'}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={premiumSpring}
              className={`inline-flex items-center gap-1.5 py-3 px-6 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20 cursor-pointer`}
              id="testimonials-placeholder-cta"
            >
              <span>{lang === 'en' ? 'Submit Your Free Blueprints Proposal' : 'మీ వెబ్‌సైట్ ప్రతిపాదన పంపండి'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
