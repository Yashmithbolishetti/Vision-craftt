/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface SectionCTAProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function SectionCTA({ isDark, lang }: SectionCTAProps) {
  const url = getWhatsAppUrl();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-8 border-b transition-all ${
        isDark ? 'bg-[#060606] border-white/5' : 'bg-slate-50 border-slate-150'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className={`text-sm sm:text-base font-extrabold tracking-tight ${
            isDark ? 'text-zinc-200' : 'text-slate-800'
          }`}>
            {lang === 'en' ? 'Need a website for your business?' : 'మీ వ్యాపారం కోసం ప్రొఫెషనల్ వెబ్‌సైట్ కావాలా?'}
          </p>
          <p className={`text-[11px] mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
            {lang === 'en' ? 'Get a free consultation and dynamic blueprint concept drafts.' : 'ఈరోజే ఉచిత కన్సల్టేషన్ మరియు డెమో డిజైన్ ప్లాన్ పొందండి.'}
          </p>
        </div>
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.35)' }}
          whileTap={{ scale: 0.96 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/10 transition-all cursor-pointer min-w-[160px]"
        >
          <MessageSquare className="w-4.5 h-4.5 fill-white text-blue-600" />
          <span>{lang === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో చాట్ చేయండి'}</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
