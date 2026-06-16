/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Heart, MessageSquare, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { WHATSAPP_NUMBER_DISPLAY, GENERAL_EMAIL, getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  isDark: boolean;
  lang: 'en' | 'te';
  onNavigate: (sectionId: string) => void;
  onNavigatePolicy?: (policyId: 'terms' | 'privacy' | 'refund' | 'how-we-work' | 'gmail') => void;
}

export default function Footer({ isDark, lang, onNavigate, onNavigatePolicy }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-all duration-300 relative ${
      isDark ? 'bg-[#050505] border-white/5 text-zinc-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      
      {/* Decorative side accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Presentation Info Grid */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 group cursor-pointer" onClick={handleScrollToTop}>
                <div className={`p-2 rounded-xl text-blue-400 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white shadow-xs border border-slate-200'}`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={`text-lg font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  VisionCraft<span className="text-blue-500">.telugu</span>
                </span>
              </div>
              <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-550' : 'text-slate-500'}`}>
                {lang === 'en'
                  ? 'We build customized high-conversion websites and bilingual AI chat automations for neighborhood schools, clinics, cafes, gym centers and local service brands in Andhra Pradesh & Telangana.'
                  : 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణలలో స్థానిక బ్రాండ్లు, స్కూళ్లు, జిమ్ములు, క్లినిక్స్ మరియు రెస్టారెంట్ల కోసం తెలుగు మరియు ఇంగ్లీష్‌లలో ప్రొఫెషనల్ వెబ్‌సైట్లు మరియు స్మార్ట్ AI చాట్‌బాట్‌లను తయారుచేసే ప్రత్యేక ఏజెన్సీ.'}
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-3 text-xs font-mono">
              <span className="text-zinc-650 font-semibold text-[10px]">BILINGUAL PLATFORM</span>
              <span className="text-zinc-800">•</span>
              <span className="text-blue-400 font-bold text-[10px]">🚀 EN + తెలుగు SUPPORT</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className={`text-xs font-bold font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
              {lang === 'en' ? 'QUICK LINKS' : 'ఉపయోగకర లింక్స్'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'Why Us', 'Services', 'Demo Websites', 'Portfolio', 'Pricing', 'About Us', 'Blog', 'Contact'].map((link, idx) => {
                const ids = ['hero', 'why-us', 'services', 'demos', 'portfolio', 'pricing', 'about', 'blog', 'contact'];
                return (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(ids[idx])}
                      className={`hover:text-blue-400 transition-colors cursor-pointer text-left ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}
                    >
                      {lang === 'en' ? link : [
                        'హోమ్', 'ఎందుకు మేము', 'సేవలు', 'డెమో డిజైన్లు', 'పోర్ట్‌ఫోలియో', 'ధరలు', 'మా గురించి', 'బ్లాగ్', 'సంప్రదించండి'
                      ][idx]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Service Offerings Column */}
          <div className="lg:col-span-3">
            <h4 className={`text-xs font-bold font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
              {lang === 'en' ? 'OUR DIGITAL SERVICES' : 'మా ప్రత్యేక సేవలు'}
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li>
                <span className={`block font-bold ${isDark ? 'text-zinc-350' : 'text-slate-800'}`}>
                  {lang === 'en' ? 'Bespoke Website Design' : 'ప్రొఫెషనల్ వెబ్‌సైట్ డిజైన్'}
                </span>
                <span className="text-[11px] text-zinc-550">{lang === 'en' ? 'Mobile-perfect, lightweight, Google optimized.' : 'అధిక స్పీడ్, మొబైల్ అనుకూలత.'}</span>
              </li>
              <li>
                <span className={`block font-bold ${isDark ? 'text-zinc-350' : 'text-slate-800'}`}>
                  {lang === 'en' ? 'Bilingual AI Chatbots' : 'ద్విభాషా AI చాట్‌బాట్ సేవలు'}
                </span>
                <span className="text-[11px] text-zinc-550">{lang === 'en' ? 'Lead capture with WhatsApp direct forwarders.' : 'మమ్మల్ని రాత్రి వేళల్లో సాయపడే ప్రత్యేక చాట్ బాట్స్.'}</span>
              </li>
              <li>
                <span className={`block font-bold ${isDark ? 'text-zinc-350' : 'text-slate-800'}`}>
                  {lang === 'en' ? 'Google Maps My Business SEO' : 'గూగుల్ మై బిజినెస్ ఎస్ఈఓ'}
                </span>
                <span className="text-[11px] text-zinc-550">{lang === 'en' ? 'Appear on top neighborhood location search.' : 'గూగుల్ రూట్ మ్యాప్ లలో మొదట కనిపించడం.'}</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className={`text-xs font-bold font-mono tracking-widest uppercase mb-4 ${isDark ? 'text-zinc-200' : 'text-slate-900'}`}>
              {lang === 'en' ? 'CONNECT DIRECTLY' : 'లైవ్ లో మాట్లాడండి'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400 fill-blue-500/10" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{GENERAL_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>Hyderabad, Guntur, Vijayawada • Serving AP & TS Business Owners</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal disclosures & policy anchors mandated requirement strictly met */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500">
            © 2026 VisionCraft.telugu. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center font-semibold text-zinc-500">
            <button 
              onClick={() => onNavigatePolicy?.('privacy')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-zinc-800">|</span>
            <button 
              onClick={() => onNavigatePolicy?.('terms')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span className="text-zinc-800">|</span>
            <button 
              onClick={() => onNavigatePolicy?.('refund')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Refund Policy
            </button>
            <span className="text-zinc-800">|</span>
            <button 
              onClick={() => onNavigatePolicy?.('how-we-work')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              How We Work
            </button>
            <span className="text-zinc-800">|</span>
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none"
            >
              Care Plan & Pricing
            </button>
            <span className="text-zinc-800">|</span>
            <button 
              onClick={() => onNavigatePolicy?.('gmail')} 
              className="hover:text-blue-400 transition-colors cursor-pointer focus:outline-none font-semibold text-blue-400"
            >
              ✉ Gmail Hub
            </button>
          </div>

          <button
            onClick={handleScrollToTop}
            className={`p-2.5 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
              isDark ? 'bg-black border-white/5 text-zinc-400 hover:text-white' : 'bg-white border-slate-200 text-slate-705 hover:bg-slate-100'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
