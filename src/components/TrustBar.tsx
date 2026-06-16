/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { School, Utensils, Dumbbell, Stethoscope, Briefcase, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface TrustBarProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function TrustBar({ isDark, lang }: TrustBarProps) {
  const industries = [
    { 
      icon: School, 
      label: lang === 'en' ? 'Schools / Colleges' : 'పాఠశాలలు / కళాశాలలు',
      desc: lang === 'en' ? 'Admissions & trust' : 'అడ్మిషన్లు & విశ్వాసం'
    },
    { 
      icon: Utensils, 
      label: lang === 'en' ? 'Cafes & Restaurants' : 'కెఫేలు & రెస్టారెంట్లు',
      desc: lang === 'en' ? 'Menu & WhatsApp ordering' : 'మెనూ & ఆర్డరింగ్'
    },
    { 
      icon: Dumbbell, 
      label: lang === 'en' ? 'Gyms & Fitness' : 'జిమ్స్ & ఫిట్‌నెస్',
      desc: lang === 'en' ? 'Member registrations' : 'సభ్యత్వ నమోదు'
    },
    { 
      icon: Stethoscope, 
      label: lang === 'en' ? 'Clinics & Doctors' : 'క్లినిక్స్ & డాక్టర్స్',
      desc: lang === 'en' ? 'Booking appointments' : 'అపాయింట్‌మెంట్స్ బుకింగ్'
    },
    { 
      icon: Home, 
      label: lang === 'en' ? 'Real Estate' : 'రియల్ ఎస్టేట్',
      desc: lang === 'en' ? 'Property listings & leads' : 'ఆస్తుల జాబితా & లీడ్స్'
    },
    { 
      icon: Briefcase, 
      label: lang === 'en' ? 'Coaches & Trainers' : 'కోచ్‌లు & శిక్షకులు',
      desc: lang === 'en' ? 'Courses & personal brand' : 'వ్యక్తిగత బ్రాండింగ్'
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-12 border-y transition-all duration-300 ${isDark ? 'bg-[#050505] border-white/5' : 'bg-slate-50 border-slate-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className={`text-xs font-mono tracking-widest uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {lang === 'en' ? 'BUILT FOR BUSINESSES THAT WANT TO GROW' : 'వ్యాపార వృద్ధి కోసం రూపొందించబడింది'}
          </p>
          <h3 className={`mt-2 text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {lang === 'en' ? 'Tailored Digital Solutions for Local Sectors' : 'స్థానిక రంగాల కోసం ప్రత్యేక డిజిటల్ పరిష్కారాలు'}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
                  boxShadow: isDark ? '0 10px 30px -15px rgba(59, 130, 246, 0.15)' : '0 10px 30px -15px rgba(59, 130, 246, 0.08)'
                }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.5, 
                  ease: "easeOut" 
                }}
                className={`flex flex-col items-center justify-center text-center p-5 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0A0A0A] border-white/5'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 ${isDark ? 'bg-blue-950/20 text-blue-400' : 'bg-slate-100 text-blue-600'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.label}
                </h4>
                <p className={`text-[11px] mt-1 ${isDark ? 'text-zinc-550' : 'text-slate-400'}`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
