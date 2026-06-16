/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import DemoWebsites from './components/DemoWebsites';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InteractiveChatbot from './components/InteractiveChatbot';
import SectionCTA from './components/SectionCTA';
import PolicyPages from './components/PolicyPages';
import GmailHub from './components/GmailHub';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [lang, setLang] = useState<'en' | 'te'>('en');
  const [loading, setLoading] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<'home' | 'terms' | 'privacy' | 'refund' | 'how-we-work' | 'gmail'>('home');

  // Monitor scroll progression for the top scroll bar indicator
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDark) {
      rootElement.classList.add('dark');
      rootElement.style.backgroundColor = '#050505';
    } else {
      rootElement.classList.remove('dark');
      rootElement.style.backgroundColor = '#f8fafc';
    }
  }, [isDark]);

  useEffect(() => {
    // Quick, professional luxury loader duration (1.2 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveView('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${
      isDark 
        ? 'bg-[#050505] text-white selection:bg-blue-500/25 selection:text-blue-200' 
        : 'bg-slate-50 text-slate-900 selection:bg-blue-500/10 selection:text-blue-800'
    }`} id="agency-master-root">
      
      {/* 1. Page Load Animation Loader Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center text-center p-4 pointer-events-auto"
          >
            <div className="relative flex flex-col items-center">
              {/* Premium shining logo box */}
              <motion.div 
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.95, 1, 0.95], opacity: 1 }}
                transition={{
                  scale: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-5 border border-white/10"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h2 
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-2xl font-extrabold font-display text-white tracking-tight"
              >
                VisionCraft<span className="text-blue-400 font-mono text-sm leading-none ml-1">.te</span>
              </motion.h2>
              <motion.p 
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-[10px] font-mono tracking-widest text-zinc-400 mt-2.5 uppercase"
              >
                {lang === 'en' ? 'BUILDING HIGH-ESTEEM LOCAL BRANDS' : 'తెలుగు వ్యాపారాల ప్రొఫెషనల్ వేదిక'}
              </motion.p>
              
              {/* Minimal bar progress indicator */}
              <div className="mt-8 w-32 h-0.5 bg-zinc-900 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Scroll Progress bar at top edge */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 origin-left z-[99]"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Sticky Navigation Header */}
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={setLang}
        onNavigate={handleNavigate}
        onNavigateGmail={() => {
          setActiveView('gmail');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />

      {/* Main Landing Page Experience or Policy Page */}
      {activeView === 'home' ? (
        <main className="relative">
          {/* 1. Hero Section containing live browser simulations */}
          <Hero
            isDark={isDark}
            lang={lang}
            onNavigate={handleNavigate}
          />

          {/* 2. Trust Bar showcasing specialized business segments */}
          <TrustBar
            isDark={isDark}
            lang={lang}
          />

          {/* 3. Why Choose Us with high resolution icons & Telugu optimization disclosures */}
          <WhyChooseUs
            isDark={isDark}
            lang={lang}
          />
          <SectionCTA isDark={isDark} lang={lang} />

          {/* 4. Services section displaying Website design, AI chatbot, and maps listings */}
          <Services
            isDark={isDark}
            lang={lang}
          />
          <SectionCTA isDark={isDark} lang={lang} />

          {/* 5. Pre-designed Demo websites containing instant responsive devices simulations */}
          <DemoWebsites
            isDark={isDark}
            lang={lang}
          />
          <SectionCTA isDark={isDark} lang={lang} />

          {/* 6. Filterable portfolio grids to explore custom prototypes */}
          <Portfolio
            isDark={isDark}
            lang={lang}
          />
          <SectionCTA isDark={isDark} lang={lang} />

          {/* 7. Comprehensive pricing tiers & Interactive Plan Quotation Builder */}
          <Pricing
            isDark={isDark}
            lang={lang}
          />
          <SectionCTA isDark={isDark} lang={lang} />

          {/* 8. Verified testimonials placeholders confirming zero fake credentials */}
          <Testimonials
            isDark={isDark}
            lang={lang}
          />

          {/* 9. Local Business Knowledge Hub previews */}
          <Blog
            isDark={isDark}
            lang={lang}
          />

          {/* 10. Warm brand history & localization motivation */}
          <About
            isDark={isDark}
            lang={lang}
          />

          {/* 11. Custom lead outline capture connected securely to whatsapp redirectors */}
          <ContactSection
            isDark={isDark}
            lang={lang}
          />
        </main>
      ) : activeView === 'gmail' ? (
        <GmailHub
          isDark={isDark}
          lang={lang}
          onBackToHome={() => setActiveView('home')}
        />
      ) : (
        <PolicyPages
          isDark={isDark}
          lang={lang}
          activeView={activeView as 'terms' | 'privacy' | 'refund' | 'how-we-work'}
          onBackToHome={() => setActiveView('home')}
        />
      )}

      {/* Footer detailing legal folders and quick lists */}
      <Footer
        isDark={isDark}
        lang={lang}
        onNavigate={handleNavigate}
        onNavigatePolicy={(policyId) => {
          setActiveView(policyId);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />

      {/* Conversion-focused Interactive AI Cost Calculator & Assistant chatbot */}
      <InteractiveChatbot
        isDark={isDark}
        lang={lang}
      />

      {/* Premium Cinematic Trailing Custom Cursor (Desktop Only) */}
      <CustomCursor isDark={isDark} />

    </div>
  );
}
