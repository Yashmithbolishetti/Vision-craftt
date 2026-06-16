/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Calculator, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface PricingProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

interface CustomAddon {
  id: string;
  name: string;
  teluguName: string;
  description: string;
  teluguDescription: string;
  weight: number;
}

export default function Pricing({ isDark, lang }: PricingProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [showCalculator, setShowCalculator] = useState(false);

  // Custom premium interactive pricing plans
  const plans = [
    {
      id: 'starter',
      name: lang === 'en' ? 'Starter Plan' : 'స్టార్టర్ ప్లాన్',
      description: lang === 'en' ? 'Perfect for small local shops, clinics and individual trainers starting their online journey.' : 'చిన్న దుకాణాలు, పర్సనల్ కోచ్‌లు మరియు స్టార్టప్ క్లినిక్‌ల కోసం ఉత్తమమైనది.',
      badge: lang === 'en' ? 'ESSENTIAL' : 'బేసిక్',
      idealFor: lang === 'en' ? 'Simple Online Identity' : 'ఆన్‌లైన్ పరిచయం',
      features: lang === 'en' 
        ? [
            '1-Page Elegant Mobile Responsive Layout',
            'Full Domain & Hosting integration support',
            'Inbuilt Contact & Quote Lead form',
            'Social Media Links & Business Contacts integration',
            'Premium high-speed performance setup',
            'Basic Local Search Optimization'
          ]
        : [
            '1-పేజీ మొబైల్ రెస్పాన్సివ్ డిజైన్',
            'డొమైన్ & హోస్టింగ్ సెటప్ సహాయం',
            'కాంటాక్ట్ & లీడ్స్ నమోదు ఫారం',
            'సోషల్ మీడియా & కాంటాక్ట్స్ లింక్స్',
            'అధిక వేగంతో పనిచేసే సర్వర్ సెటప్',
            'ప్రాథమిక గూగుల్ సెర్చ్ ప్రొఫైల్'
          ],
      whatsappText: "Hi! I am interested in your VisionCraft Starter Plan. Please provide the custom quote details."
    },
    {
      id: 'professional',
      name: lang === 'en' ? 'Professional Plan' : 'ప్రొఫెషనల్ ప్లాన్',
      description: lang === 'en' ? 'Most popular! Excellent for schools, gyms, real estate developers, and bustling cafes.' : 'అత్యంత సిఫార్సు చేయబడినది! పాఠశాలలు, జిమ్ములు, రెస్టారెంట్లు మరియు కార్యాలయాలకు అమూల్యమైనది.',
      badge: lang === 'en' ? 'MOST POPULAR' : 'అత్యంత జనాదరణ పొందినది',
      isPopular: true,
      idealFor: lang === 'en' ? 'Mid-Sized Multi-Page Projects' : 'మీడియం బిజినెస్ సంస్థలు',
      features: lang === 'en'
        ? [
            'Up to 5 Pages Professional layout website',
            'Self-Managed Admin Portal (CMS login to edit)',
            'Interactive Product Menus / Facilities gallery',
            'Bilingual Language switch (Telugu + English)',
            'Intelligent Chatbot integration with WhatsApp',
            'Google Maps Business Listing Setup & SEO ranking guidance',
            '3 months premium post-launch support & tweaks'
          ]
        : [
            '5 పేజీల ప్రొఫెషనల్ వెబ్‌సైట్ లేఅవుట్',
            'సొంతంగా మార్చుకునే అడ్మిన్ లాగిన్ (CMS)',
            'ఆకర్షణీయమైన మెనూ కార్డ్స్ / గ్యాలరీలు',
            'ద్విభాషా వెబ్‌సైట్ (తెలుగు + ఇంగ్లీష్ స్విచ్)',
            'ఆటోమేటిక్ లీడ్ చాట్‌బాట్ సేవలు',
            'గూగుల్ మ్యాప్స్ ర్యాంకింగ్ & ఎస్ఈఓ సెటప్',
            '3 నెలల పాటు ఉచిత అప్‌డేట్స్ & సపోర్ట్'
          ],
      whatsappText: "Hi! I want to discuss your Professional Plan with 5 pages and Telugu-English switch system."
    },
    {
      id: 'growth',
      name: lang === 'en' ? 'Growth Plan' : 'గ్రోత్ ప్లాన్',
      description: lang === 'en' ? 'Designed for businesses requiring advanced systems, e-commerce ordering, and full automation.' : 'ఆన్‌లైన్ ఆర్డర్స్, ఈ-కామర్స్ మరియు పూర్తి స్థాయి ఆటోమేషన్ కోరుకునే వారి కోసం.',
      badge: lang === 'en' ? 'ELITE AUTOMATION' : 'అడ్వాన్స్డ్',
      idealFor: lang === 'en' ? 'E-Commerce & High Automation' : 'స్మార్ట్ ఆటోమేషన్',
      features: lang === 'en'
        ? [
            'Bespoke Unlimited pages Layout website',
            'Full E-Commerce catalog with WhatsApp checkout system',
            'Advanced AI-powered multilingual Smart responder',
            'Premium Local SEO dominance package & search listings map ranker',
            'Customer Reviews automation funnel platform',
            'Lifetime high-speed optimization assistance',
            'Priority 1-on-1 team consulting & continuous updates'
          ]
        : [
            'పరిమితి లేని పేజీల కస్టమ్ వెబ్‌సైట్',
            'ఈ-కామర్స్ స్టోర్ & వాట్సాప్ పేమెంట్ ఆర్డరింగ్',
            'అడ్వాన్స్డ్ మల్టీ-లింగ్వల్ AI చాట్‌బాట్',
            'సమగ్ర గూగుల్ లోకల్ ఎస్ఈఓ ప్రణాళిక',
            'కస్టమర్ రివ్యూల పెంపుదల ఆటోమేషన్',
            'జీవితకాలం సర్వర్ మానిటరింగ్ అప్‌డేట్స్',
            'ప్రతి వారం ప్రాధాన్యత కన్సల్టేషన్ సేవలు'
          ],
      whatsappText: "Hello VisionCraft! I want detail quotation for your elite Growth Plan with e-commerce options."
    }
  ];

  // Configurable Addons
  const addonsList: CustomAddon[] = [
    {
      id: 'te_support',
      name: 'Telugu Bilingual support system',
      teluguName: 'ద్విభాషా తెలుగు సపోర్ట్',
      description: 'Allows clients to view web in both Telugu and English.',
      teluguDescription: 'సందర్శకులు సైట్ ను తెలుగు మరియు ఇంగ్లీష్ లో చూసుకునే వీలు.',
      weight: 2
    },
    {
      id: 'ai_bot',
      name: 'Smart AI lead forwarding bot',
      teluguName: 'స్మార్ట్ AI చాట్‌బాట్',
      description: 'Interactively replies to FAQs and forwards coordinates to your WhatsApp.',
      teluguDescription: 'సందర్శకులు వివరాలు ఎంటర్ చేయగానే నేరుగా వాట్సాప్ కి అలర్ట్ లభిస్తుంది.',
      weight: 3
    },
    {
      id: 'maps_seo',
      name: 'Google Maps Ranker audit',
      teluguName: 'గూగుల్ మ్యాప్స్ ఎస్ఈఓ ప్రొఫైల్',
      description: 'Increases search priority for neighborhood services queries.',
      teluguDescription: 'స్థానికంగా ఎవరైనా సెర్చ్ చేసినప్పుడు మీ బిజినెస్ మొదట కనిపించేలా చేయడం.',
      weight: 1
    },
    {
      id: 'cms_editing',
      name: 'Self-Help Admin editor login',
      teluguName: 'సొంతగా ఎడిట్ చేసుకునే అడ్మిన్ లాగిన్',
      description: 'Allows editing image menus or descriptions on your own without writing code.',
      teluguDescription: 'వెబ్‌సైట్ లో మార్పులు మీరే కోడింగ్ లేకుండా మార్చుకునేలా సులభమైన లాగిన్.',
      weight: 2
    }
  ];

  const handleAddonToggle = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const getRecommendedPlan = () => {
    const totalScore = selectedAddons.reduce((acc, currentId) => {
      const found = addonsList.find(a => a.id === currentId);
      return acc + (found ? found.weight : 0);
    }, 0);

    if (totalScore === 0) return plans[0]; // Starter
    if (totalScore >= 5) return plans[2];  // Growth
    return plans[1];                       // Professional
  };

  const recommendedPlanObj = getRecommendedPlan();

  // Whatsapp redirect URL compiling
  const customQuotationText = `Hi VisionCraft! I calculated my recommended plan using your Custom Estimator:
- Recommend Plan: ${recommendedPlanObj.name}
- Toggled Addons: ${selectedAddons.map(id => addonsList.find(a => a.id === id)?.name).join(', ')}
Please share the pricing quote for this custom design setup.`;

  const customEstimateWhatsAppUrl = getWhatsAppUrl(customQuotationText);
  const premiumSpring = { type: 'spring', stiffness: 350, damping: 25 };

  return (
    <motion.section 
      id="pricing" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`py-24 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title structure */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15"
          >
            {lang === 'en' ? 'TRANSPARENT VALUE' : 'సరిపోయే బడ్జెట్లు'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display"
          >
            {lang === 'en' ? 'Bespoke Plans, Scaled to Fit Your Target' : 'మీ వ్యాపారానికి సరిపోయే బడ్జెట్ ప్రణాళికలు'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}
          >
            {lang === 'en'
              ? 'No hidden charges or shock contracts. Check our flexible standard outlines details below. Request a personalized consultation to receive flat rates.'
              : 'ఎటువంటి దాచిన రుసుములు ఉండవు. మీ అవసరాలకు సరిపోయే ప్లాన్ ఎంచుకోండి లేదా కింద ఉండే కస్టమ్ కోట్ ఉపయోగించి సలహా అభ్యర్థించండి.'}
          </motion.p>
        </div>

        {/* Pricing Estimator trigger bar with interactive spring scaling */}
        <div className="flex justify-center mb-16">
          <motion.button
            onClick={() => setShowCalculator(!showCalculator)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={premiumSpring}
            className={`py-3 px-6 rounded-2xl font-bold text-sm flex items-center gap-2 border transition-all cursor-pointer ${
              showCalculator 
                ? 'bg-blue-650 text-white border-blue-600 shadow-md shadow-blue-950/20' 
                : isDark 
                  ? 'bg-[#0A0A0A] border-white/5 text-blue-405 hover:bg-[#111]' 
                  : 'bg-white border-slate-205 text-blue-600 hover:bg-slate-50'
            }`}
            id="estimate-calculator-trigger"
          >
            <Calculator className="w-4 h-4" />
            <span>{showCalculator ? (lang === 'en' ? 'Show Fast Pricing Tables' : 'ప్లాన్ల టేబుల్స్ చూడండి') : (lang === 'en' ? '💡 Launch Custom Blueprint Estimator' : '💡 కస్టమ్ ప్లాన్ మేకర్ ఉపయోగించండి')}</span>
          </motion.button>
        </div>

        {/* Dynamic crossfade switching helper */}
        <AnimatePresence mode="wait">
          {showCalculator ? (
            <motion.div 
              key="calculator"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 sm:p-10 rounded-3xl border mb-16 max-w-4xl mx-auto transition-all ${
                isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-bold font-display flex items-center gap-2 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                {lang === 'en' ? 'Bespoke Valuation Recommendation Planner' : 'డిజిటల్ ప్లాన్ ప్లానర్'}
              </h3>
              <p className={`text-xs sm:text-sm mb-8 ${isDark ? 'text-zinc-450' : 'text-slate-600'}`}>
                {lang === 'en' 
                  ? 'Check individual features to compute recommended plan scale matches.' 
                  : 'మీ వ్యాపారానికి కావాల్సిన ఫీచర్లను ఎంచుకోండి, ఆటోమేటిక్ గా బెస్ట్ ప్లాన్ సిఫార్సు అందించబడుతుంది.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <motion.div
                      key={addon.id}
                      onClick={() => handleAddonToggle(addon.id)}
                      whileHover={{ scale: 1.025 }}
                      whileTap={{ scale: 0.985 }}
                      transition={premiumSpring}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-500/10'
                          : isDark ? 'border-white/5 bg-black/40 hover:border-white/10' : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {lang === 'en' ? addon.name : addon.teluguName}
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                            {lang === 'en' ? addon.description : addon.teluguDescription}
                          </p>
                        </div>
                        <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked 
                            ? 'bg-blue-600 border-transparent text-white' 
                            : isDark ? 'border-white/10' : 'border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Simulated Live Recommendation Outcome panel */}
              <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-6 ${
                isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="text-left">
                  <span className="text-[10px] font-mono py-0.5 px-3 bg-blue-500/10 text-blue-405 rounded-full font-bold uppercase">
                    {lang === 'en' ? 'YOUR OPTIMAL MATCH' : 'మీకు సరిపోయే బెస్ట్ ప్లాన్'}
                  </span>
                  <h4 className={`text-lg font-bold font-display mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {recommendedPlanObj.name}
                  </h4>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {lang === 'en' ? `Ideal for ${recommendedPlanObj.idealFor}` : `సిఫార్సు ప్రయోజనం: ${recommendedPlanObj.idealFor}`}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-2 pr-2 w-full sm:w-auto">
                  <div className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                    {lang === 'en' ? 'Competitive Flat Rates' : 'అత్యంత ఆకర్షణీయమైన బడ్జెట్స్'}
                  </div>
                  <motion.a
                    href={customEstimateWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={premiumSpring}
                    className="py-3 px-6 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 shadow-md cursor-pointer shadow-emerald-950/20"
                    id="send-calculator-lead"
                  >
                    <span>{lang === 'en' ? 'Get Customized Quoted Tariff' : 'ఈ ప్లాన్ పై కొటేషన్ అడగండి'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Traditional plans layout with sequential reveal delays */
            <motion.div 
              key="traditional"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {plans.map((plan, pIdx) => {
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pIdx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ 
                      y: -6,
                      borderColor: plan.isPopular ? 'rgba(59,130,246,0.35)' : 'rgba(59,130,246,0.15)',
                      boxShadow: isDark ? '0 20px 40px -20px rgba(0,0,0,0.8)' : '0 20px 40px -20px rgba(100,116,139,0.15)'
                    }}
                    className={`flex flex-col rounded-3xl border p-8 justify-between relative transition-all duration-300 ${
                      plan.isPopular
                        ? isDark
                          ? 'bg-[#0E0E0E] border-blue-500/35 shadow-2xl ring-1 ring-blue-500/5'
                          : 'bg-white border-blue-550 shadow-xl ring-4 ring-blue-500/10'
                        : isDark
                          ? 'bg-[#0A0A0A] border-white/5'
                          : 'bg-white border-slate-200/80'
                    }`}
                  >
                    {/* Popular Tag overlay banner */}
                    {plan.isPopular && (
                      <div className="absolute top-0 right-8 transform -translate-y-1/2">
                        <span className="text-[10px] font-mono tracking-widest font-extrabold py-1 px-3 bg-gradient-to-r from-blue-500 to-indigo-650 text-white rounded-full uppercase shadow-md pointer-events-none">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Upper plan parameters block */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-mono tracking-wider font-extrabold uppercase py-0.5 px-2 ${isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'} rounded-md`}>
                          {plan.idealFor}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-extrabold font-display leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {plan.name}
                      </h3>
                      <p className={`mt-3.5 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
                        {plan.description}
                      </p>

                      {/* Pricing placeholder mandated requirement strictly enforced */}
                      <div className="my-6 py-5 border-y border-white/5 flex items-baseline justify-between">
                        <div>
                          <span className="text-xl font-bold font-display text-blue-400">
                            Contact for Pricing
                          </span>
                          <p className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-450'}`}>
                            {lang === 'en' ? '* Tailored flat-rates based on scope' : '* ఎటువంటి అదనపు చార్జీలు ఉండవు'}
                          </p>
                        </div>
                      </div>

                      {/* Features outline grids */}
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            <div className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing trigger CTA button */}
                    <motion.a
                      href={getWhatsAppUrl(plan.whatsappText)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={premiumSpring}
                      className={`w-full py-4 rounded-xl text-center font-bold text-xs shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center ${
                        plan.isPopular
                          ? 'bg-blue-650 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20'
                          : isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-white border border-slate-200 text-blue-600 hover:bg-slate-50'
                      }`}
                      id={`pricing-trigger-${plan.id}`}
                    >
                      <span>{lang === 'en' ? 'Get Quote' : 'ఉచిత కొటేషన్ ప్లాన్ చేయండి'}</span>
                    </motion.a>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standard Setup Fee & Monthly Care Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-20 p-8 sm:p-12 rounded-3xl border text-left ${
            isDark 
              ? 'bg-[#090909] border-blue-500/10 shadow-2xl shadow-blue-550/[0.02]' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}
          id="detailed-care-plan-block"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left pricing column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase py-1 px-3 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15">
                  {lang === 'en' ? 'TRANSPARENT VALUE' : 'ఒకే ధర ప్రణాళిక'}
                </span>
                <h3 className={`text-2xl sm:text-3.5xl font-extrabold font-display mt-4 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Standard Package & Monthly Care' : 'ప్యాకేజ్ రుసుము & కేర్ ప్లాన్'}
                </h3>
                <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {lang === 'en'
                    ? 'Get your business online with a lightning-fast premium website layout. Subscribe to our low-cost monthly care system for hosting & robust continuous security.'
                    : 'మీ వ్యాపారం కోసం మెరుపు వేగంతో డిజైన్ అయ్యే బెస్ట్ వెబ్‌సైట్. హోస్టింగ్ సేవలు మరియు నిరంతర సర్వర్ భద్రత కోసం అత్యంత తక్కువ బడ్జెట్‌లో మంత్లీ కేర్ ప్లాన్.'}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {/* SETUP FEE */}
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/60 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
                        {lang === 'en' ? 'ONE-TIME SETUP FEE' : 'ఒకసారి సెటప్ రుసుము'}
                      </span>
                      <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                        {lang === 'en' ? 'Full design, code & launch files' : 'పూర్తి వెబ్‌సైట్ డిజైన్ & లాంచ్'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400`}>
                        ₹4,999
                      </span>
                    </div>
                  </div>
                </div>

                {/* MONTHLY CARE PLAN */}
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/60 border-blue-500/10' : 'bg-slate-50 border-blue-105'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                        {lang === 'en' ? 'MONTHLY CARE PLAN' : 'నెలవారీ కేర్ ప్లాన్'}
                      </span>
                      <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                        {lang === 'en' ? 'Hosting, backup & tech help' : 'హోస్టింగ్, బ్యాకప్‌లు & సపోర్ట్'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                        ₹699<span className="text-xs font-mono text-zinc-500">/mo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions details column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* WHAT IS INCLUDED CARD */}
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-zinc-950/40 border-white/5' : 'bg-slate-50/50 border-slate-200'}`}>
                <span className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-4">
                  ✔ {lang === 'en' ? 'INCLUDED IN PLAN' : 'కేర్‌ ప్లాన్‌లో ఏముంటుంది'}
                </span>
                <ul className="space-y-3">
                  {[
                    lang === 'en' ? 'Website hosting management' : 'వెబ్‌సైట్ హోస్టింగ్ మేనేజ్‌మెంట్',
                    lang === 'en' ? 'Security monitoring' : 'భద్రతా పర్యవేక్షణ',
                    lang === 'en' ? 'Regular backups' : 'రెగ్యులర్ బ్యాకప్‌లు',
                    lang === 'en' ? 'Minor text updates' : 'చిన్న టెక్స్ట్ అప్‌డేట్‌లు',
                    lang === 'en' ? 'Minor image updates' : 'చిన్న ఇమేజ్ అప్‌డేట్‌లు',
                    lang === 'en' ? 'Technical support' : 'సాంకేతిక మద్దతు'
                  ].map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={isDark ? 'text-zinc-300' : 'text-slate-700'}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT IS NOT INCLUDED CARD */}
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-zinc-950/40 border-white/5' : 'bg-slate-50/50 border-slate-200'}`}>
                <span className="text-[10px] font-mono text-red-400 font-extrabold uppercase tracking-widest block mb-4">
                  ✖ {lang === 'en' ? 'NOT INCLUDED' : 'కేర్‌ ప్లాన్‌లో ఏముండదు'}
                </span>
                <ul className="space-y-3">
                  {[
                    lang === 'en' ? 'New pages build' : 'కొత్త పేజీలు నిర్మించడం',
                    lang === 'en' ? 'Website redesign' : 'వెబ్‌సైట్ రీడిజైన్',
                    lang === 'en' ? 'Custom features development' : 'కస్టమ్ ఫీచర్లు జత చేయడం',
                    lang === 'en' ? 'Advanced integrations' : 'అడ్వాన్స్డ్ ఇంటిగ్రేషన్లు',
                    lang === 'en' ? 'E-commerce setup' : 'ఈ-కామర్స్ ఆన్‌లైన్ స్టోర్'
                  ].map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-500">
                      <div className="p-0.5 rounded-full bg-red-500/10 text-red-400 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className={isDark ? 'text-zinc-400' : 'text-slate-600'}>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Quotation advisory trigger text */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-[11px] sm:text-xs leading-relaxed ${isDark ? 'text-zinc-500' : 'text-slate-450'}`}>
              💡 {lang === 'en' 
                ? 'Note: Any services outside this billing scope must be quoted separately. Pricing is flat & transparent.' 
                : 'గమనిక: ఈ నిబంధనల పరిధి వెలుపల ఉన్న ఏవైనా అదనపు సేవలు ఉంటే విడిగా కొటేషన్ ఇవ్వబడుతుంది.'}
            </p>
            <motion.a
              href={getWhatsAppUrl(
                lang === 'en' 
                  ? "Hi VisionCraft! I want to confirm the Setup Fee package (₹4,999) + Optional Monthly Care Plan (₹699). Please provide draft details."
                  : "హలో విజన్‌క్రాఫ్ట్! వెబ్‌సైట్ సెటప్ ఫీజు (₹4,999) మరియు నెలకు ₹699 కేర్ ప్లాన్ గురించి మాట్లాడాలనుంది."
              )}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2.5 px-5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-md inline-flex items-center gap-1.5"
            >
              <span>{lang === 'en' ? 'Secure Package Agreement' : 'ఈ ప్యాకేజ్ గురించి అడగండి'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
