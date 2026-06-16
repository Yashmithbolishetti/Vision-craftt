/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface PortfolioProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function Portfolio({ isDark, lang }: PortfolioProps) {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { value: 'all', label: lang === 'en' ? 'All Prototypes' : 'అన్నీ' },
    { value: 'school', label: lang === 'en' ? 'School & Academies' : 'స్కూల్స్' },
    { value: 'cafe', label: lang === 'en' ? 'Cafes & Dining' : 'రెస్టారెంట్స్' },
    { value: 'gym', label: lang === 'en' ? 'Gyms & Clinics' : 'జిమ్స్ & క్లినిక్స్' },
    { value: 'marketing', label: lang === 'en' ? 'Real Estate & Landing Pages' : 'ల్యాండింగ్ పేజీలు' }
  ];

  const projects = [
    {
      id: 'p1',
      name: lang === 'en' ? 'St. Marys High Academy Portal' : 'సెయింట్ మేరీస్... స్కూల్ పోర్టల్',
      industry: 'school',
      description: lang === 'en' 
        ? 'Fully functional school directory with online admissions, course catalog, teacher rosters, and modern newsletters.' 
        : 'ఆన్‌లైన్ ఫీజు, అడ్మిషన్ల నమోదు మరియు ఫోటో గ్యాలరీ కలిగిన అత్యాధునిక పాఠశాల ల్యాండింగ్ పోర్టల్.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
      tags: ['School', 'Admissions', 'Telugu Support'],
      whatsappText: "Hi! I saw your St. Marys High Academy Portfolio. I want a similar design for my school."
    },
    {
      id: 'p2',
      name: lang === 'en' ? 'Green Beans Artisanal Cafe' : 'గ్రీన్ బీన్స్ ఆర్టిసానల్ కెఫే',
      industry: 'cafe',
      description: lang === 'en' 
        ? 'Digital menu integrated with instant WhatsApp order forwarding tool, optimized for rapid table checkouts.' 
        : 'వాట్సాప్ మెసేజింగ్ ఆర్డరింగ్ మరియు ఆకర్షణీయమైన మెనూ కార్డ్ గల లోకల్ కెఫే వెబ్‌సైట్.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
      tags: ['Restaurant', 'WhatsApp Cart', 'SEO Optimized'],
      whatsappText: "Hello, I want to deploy Green Beans Cafe style website with WhatsApp menu integration."
    },
    {
      id: 'p3',
      name: lang === 'en' ? 'Muscle Core Multi-Gym Center' : 'మజిల్ కోర్ మల్టీ-జిమ్ సెంటర్',
      industry: 'gym',
      description: lang === 'en' 
        ? 'High energy layout showing memberships pricing tiers, personal trainer portfolios, and contact booking system.' 
        : 'సభ్యత్వ ఫీజులు, ట్రైనర్స్ బోర్డ్స్ మరియు వాట్సాప్ విడ్జెట్ గల జిమ్ డిజిటల్ ప్రొఫైల్.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
      tags: ['Gym', 'Booking Form', 'Fast Speed'],
      whatsappText: "Hi! I am looking for a fitness gym website mockup similar to Muscle Core Hub."
    },
    {
      id: 'p4',
      name: lang === 'en' ? 'Narayana Health Multi-Specialty Clinic' : 'నారాయణ మల్టీస్పెషాలిటీ క్లినిక్',
      industry: 'gym',
      description: lang === 'en'
        ? 'Clean medical landing page with fast appointment scheduling calendar, doctor bios, and patient FAQ lists.'
        : 'డాక్టర్ల అపాయింట్‌మెంట్స్, గూగుల్ లొకేషన్ మ్యాప్‌లు మరియు సేవలతో కూడిన వెబ్‌సైట్.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
      tags: ['Clinic', 'Doctor Appointment', 'Trust Layout'],
      whatsappText: "Hi VisionCraft! I need a professional clinic listing setup like your Narayana Clinic portfolio page."
    },
    {
      id: 'p5',
      name: lang === 'en' ? 'Royal Meadows Villa Listings' : 'రోయల్ మెడోస్ విల్లా లిస్టింగ్స్',
      industry: 'marketing',
      description: lang === 'en'
        ? 'Conversion-focused real estate agent page highlighting property amenities, live video tours, and Lead WhatsApp integration.'
        : 'ఆస్తులు, గూగుల్ మ్యాప్ లొకేషన్ మరియు ఫోన్ కాంటాక్ట్స్ కలిగిన రియల్ ఎస్టేట్ ల్యాండింగ్ పేజీ.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
      tags: ['Real Estate', 'Lead Capture', 'Glow Details'],
      whatsappText: "Namaste VisionCraft, I am matching villa builders portfolio Royal Meadows for my agency project."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.industry === filter);

  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="portfolio" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-24 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15"
          >
            {lang === 'en' ? 'PORTFOLIO GALORE' : 'మా గత డిజైన్లు'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Explore Our Custom Masterpieces' : 'మేము రూపొందించిన కొన్ని ప్రొఫెషనల్ వెబ్‌సైట్స్'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}
          >
            {lang === 'en'
              ? 'Our portfolio contains local masterpieces designed for schools, cafes, gyms and estate layout agencies that require professional conversion metrics.'
              : 'స్థానిక పాఠశాలలు, కెఫేలు, జిమ్ములు మరియు రియల్ ఎస్టేట్ సంస్థల కోసం మేము నిర్మించిన కొన్ని నమూనాలు ఇక్కడ చూడవచ్చు.'}
          </motion.p>
        </div>

        {/* Categories filters tabs bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className={`p-1.5 rounded-2xl flex flex-wrap gap-1 border ${
            isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={premiumSpring}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : isDark 
                      ? 'text-zinc-400 hover:text-white' 
                      : 'text-slate-650 hover:bg-slate-50 hover:text-slate-900'
                }`}
                id={`portfolio-filter-${cat.value}`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid display layout with AnimatePresence layout rearranging */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                whileHover={{ 
                  y: -6,
                  borderColor: 'rgba(59,130,246,0.25)',
                  boxShadow: isDark ? '0 20px 40px -20px rgba(0,0,0,0.8)' : '0 20px 40px -20px rgba(100,116,139,0.18)'
                }}
                transition={{ duration: 0.4 }}
                className={`group rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#0A0A0A] border-white/5' 
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={proj.image}
                    alt={proj.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay card for visual delight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 w-full h-full">
                    <div className="text-left w-full">
                      <p className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold mb-1.5">
                        {proj.industry.toUpperCase() === 'MARKETING' ? 'REAL ESTATE' : proj.industry.toUpperCase()}
                      </p>
                      <h4 className="text-white text-base font-bold font-display">
                        {proj.name}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-blue-400 font-bold">
                        <span>{lang === 'en' ? 'Project Details' : 'ప్రాజెక్ట్ వివరాలు'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Description Elements */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isDark ? 'bg-white/5 text-zinc-400 border border-white/5' : 'bg-slate-100 text-slate-600 border border-slate-150'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-base font-bold font-display line-clamp-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {proj.name}
                  </h3>
                  <p className={`mt-2 text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
                    {proj.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                      ● READY PROTOTYPE
                    </span>
                    <motion.a
                      href={getWhatsAppUrl(proj.whatsappText)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={premiumSpring}
                      className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Get Mockup' : 'డిజైన్ కావాలి'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
