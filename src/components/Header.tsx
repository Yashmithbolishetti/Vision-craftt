/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MessageSquare, Globe } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  lang: 'en' | 'te';
  setLang: (lang: 'en' | 'te') => void;
  onNavigate: (sectionId: string) => void;
  onNavigateGmail?: () => void;
}

export default function Header({ isDark, setIsDark, lang, setLang, onNavigate, onNavigateGmail }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: lang === 'en' ? 'Home' : 'హోమ్' },
    { id: 'why-us', label: lang === 'en' ? 'Why Us' : 'ఎందుకు మేము' },
    { id: 'services', label: lang === 'en' ? 'Services' : 'సేవలు' },
    { id: 'demos', label: lang === 'en' ? 'Demo Websites' : 'డెమో సైట్లు' },
    { id: 'portfolio', label: lang === 'en' ? 'Portfolio' : 'పోర్ట్‌ఫోలియో' },
    { id: 'pricing', label: lang === 'en' ? 'Pricing' : 'ధరలు' },
    { id: 'gmail', label: lang === 'en' ? '✉ Gmail Hub' : '✉ జీమెయిల్ హబ్' },
    { id: 'about', label: lang === 'en' ? 'About Us' : 'మా గురించి' },
    { id: 'contact', label: lang === 'en' ? 'Contact' : 'సంప్రదించండి' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'gmail') {
      onNavigateGmail?.();
    } else {
      onNavigate(id);
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    lang === 'en' 
      ? "Hi VisionCraft! I am interested in building a website for my business. I saw your website and would love a free consultation." 
      : "హలో విజన్‌క్రాఫ్ట్! నా బిజినెస్ కోసం వెబ్‌సైట్ నిర్మించాలనుకుంటున్నాను. ఉచిత కన్సల్టేషన్ సహాయం కావాలి."
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-md shadow-md ' + (isDark ? 'bg-[#0A0A0A]/80 border-b border-white/10' : 'bg-white/90 border-b border-slate-250/80')
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className={`p-2 rounded-xl transition duration-300 ${isDark ? 'bg-blue-950/20 text-blue-400 group-hover:bg-blue-900/40' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100/80'}`}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-extrabold tracking-tight font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                VisionCraft<span className="text-blue-550">.telugu</span>
              </span>
              <span className={`text-[9px] font-mono tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {lang === 'en' ? 'LOCAL BUSINESS HEROES' : 'స్థానిక వ్యాపారాల కోసం'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isDark
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Settings & CTA area */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                isDark
                  ? 'bg-zinc-900/40 border-zinc-800 text-emerald-400 hover:border-emerald-500/50'
                  : 'bg-white border-slate-200 text-blue-600 hover:border-blue-300'
              }`}
              title={lang === 'en' ? 'Switch to Telugu' : 'Switch to English'}
              id="lang-toggle-desktop"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isDark
                  ? 'bg-zinc-900/80 border-zinc-800 text-yellow-400 hover:border-yellow-500/50'
                  : 'bg-slate-55 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle-desktop"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                isDark
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/20'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/10'
              }`}
              id="whatsapp-cta-header-desktop"
            >
              <MessageSquare className="w-4 h-4 fill-white text-emerald-600 dark:text-emerald-500" />
              <span>{lang === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో చాట్'}</span>
            </a>
          </div>

          {/* Mobile Right Bar controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Quick Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border ${
                isDark 
                  ? 'bg-zinc-900/60 border-zinc-800 text-emerald-400' 
                  : 'bg-slate-50 border-slate-200 text-blue-600'
              } cursor-pointer`}
              id="lang-toggle-mobile-quick"
            >
              {lang === 'en' ? 'తెలుగు' : 'EN'}
            </button>

            {/* Quick Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-1.5 rounded-lg border ${
                isDark ? 'bg-zinc-900/80 border-zinc-800 text-yellow-400' : 'bg-slate-100 border-slate-200 text-slate-700'
              } cursor-pointer`}
              id="theme-toggle-mobile"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger helper */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-650 hover:text-slate-900'
              } cursor-pointer`}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden animate-in fade-in slide-in-from-top-5 duration-250 absolute top-full left-0 right-0 border-t ${
          isDark ? 'bg-neutral-950 border-zinc-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        } shadow-xl`}>
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold cursor-pointer ${
                  isDark
                    ? 'hover:bg-zinc-900 text-zinc-300 hover:text-white'
                    : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 px-4 flex flex-col space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-bold bg-emerald-500 text-white text-center shadow-md hover:bg-emerald-400 cursor-pointer"
                id="whatsapp-cta-header-mobile"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-500" />
                <span>{lang === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో చాట్ చేయండి'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
