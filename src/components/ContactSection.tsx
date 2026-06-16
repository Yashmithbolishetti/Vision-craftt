/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Shield, Check, Heart, HelpCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER_DISPLAY, GENERAL_EMAIL, getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  isDark: boolean;
  lang: 'en' | 'te';
}

export default function ContactSection({ isDark, lang }: ContactSectionProps) {
  const AGENCY_EMAIL = GENERAL_EMAIL;

  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    bizSector: 'School',
    targetBudget: 'Economical',
    notes: '',
    cmsRequired: false,
    chatbotRequired: false,
    mapsRequired: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: 'cmsRequired' | 'chatbotRequired' | 'mapsRequired') => {
    setFormData(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const calculateFormattedWhatsAppUrl = () => {
    const formattedText = `Hi VisionCraft! I submitted my business proposal details via key choices:
- My Name: ${formData.clientName}
- Phone: ${formData.clientPhone}
- Industry Sector: ${formData.bizSector}
- Budget Goal: ${formData.targetBudget}
- Features desired: ${[
      formData.cmsRequired ? "Admin Login CMS" : "",
      formData.chatbotRequired ? "AI Chatbot" : "",
      formData.mapsRequired ? "Google Maps SEO Listing" : ""
    ].filter(Boolean).join(', ') || "Standard design"}
- Special details: ${formData.notes || "None"}
Please get back to organize my free draft mockups.`;

    return getWhatsAppUrl(formattedText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientPhone) {
      alert(lang === 'en' ? 'Please fill your Name and Mobile Number to proceed.' : 'దయచేసి మీ పేరు మరియు ఫోన్ నెంబర్ నమోదు చేయండి.');
      return;
    }

    setIsSubmitted(true);
    // Open compile WhatsApp lead pipeline in new window tab
    const compileUrl = calculateFormattedWhatsAppUrl();
    window.open(compileUrl, '_blank');
  };

  const standardWhatsAppText = lang === 'en'
    ? "Hi, I need a website for my business. Can you provide more details?"
    : "Hi, I need a website for my business. Can you provide more details?";

  const standardWaUrl = getWhatsAppUrl(standardWhatsAppText);

  return (
    <section id="contact" className={`py-24 transition-all duration-350 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}>
      
      {/* Visual background accents */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic header cards */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono tracking-widest uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/15`}>
            {lang === 'en' ? 'LAUNCH YOUR WEBSITE' : 'మీ వెబ్‌సైట్ ప్రారంభించండి'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            {lang === 'en' ? 'Get Your Free Consultation & Blueprint Mockup' : 'ఉచిత ప్రణాళిక కొరకు మెసేజ్ చేయండి'}
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-655'}`}>
            {lang === 'en'
              ? 'Tell us your goals. Fill out our localized outline and shoot the specifications to our WhatsApp for custom flat tariff.'
              : 'మీ వ్యాపార వివరాలను క్రింద ఉండే ఫారమ్‌లో నమోదు చేసి అత్యంత వేగంగా వాట్సాప్‌లో మీ ఆప్షన్లను మాకు పంపండి.'}
          </p>
        </div>

        {/* Master layout panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Contact Information Cards with Attention-Grabbing WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main high impact attention grabbing card */}
            <div className={`p-8 rounded-3xl border text-left bg-gradient-to-br transition-all relative overflow-hidden ${
              isDark 
                ? 'from-[#0A0A0A] via-[#0D0D0D] to-[#050505] border-white/5 shadow-2xl' 
                : 'from-blue-50/50 via-slate-50 to-white border-slate-205 shadow-md'
            }`}>
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              </div>

              <span className="text-[10px] font-mono py-1 px-3 bg-blue-500/10 text-blue-400 rounded-full font-bold uppercase border border-blue-500/15">
                {lang === 'en' ? 'INSTANT CONVERSIONS' : 'తక్షణ స్పందన'}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold font-display leading-tight">
                {lang === 'en' ? "Let's Grow Your Business Online" : "మీ వ్యాపారాన్ని ఆన్‌లైన్‌లో పెంచుకుందాం"}
              </h3>
              <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                {lang === 'en'
                  ? 'Skip the waiting lines! Connect directly on WhatsApp to coordinate template requirements, ask billing questions, and view live demo trials with our developers.'
                  : 'పెద్ద నిరీక్షణ సమయం అవసరం లేదు! డైరెక్ట్ వాట్సాప్ చాట్ లాంచ్ చేసి మా టెక్నికల్ డెెవలపర్లతో మాట్లాడండి. మీకు నచ్చిన డెమో సెటప్ గురించి అడగండి.'}
              </p>

              <div className="mt-8">
                <a
                  href={standardWaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2.5 w-full py-4.5 rounded-2xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/20 transition-all duration-300 transform active:scale-95 cursor-pointer text-sm"
                  id="contact-large-whatsapp-trigger"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-blue-605" />
                  <span>{lang === 'en' ? 'Chat on WhatsApp Now' : 'వాట్సాప్‌లో చాట్ చేయండి'}</span>
                </a>
              </div>
            </div>

            {/* Sub Contact channels */}
            <div className={`p-6 rounded-3xl border flex flex-col space-y-4 text-left ${
              isDark ? 'bg-black border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              {/* Highlight Card for Preferred Method */}
              <div className="p-4 rounded-2xl border border-blue-500/30 bg-blue-500/5">
                <span className="text-[9px] font-mono py-0.5 px-2 bg-blue-500/15 text-blue-400 rounded-full font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'PREFERRED CONTACT METHOD' : 'సిఫార్సు చేయబడిన సంప్రదింపు మార్గం'}
                </span>
                <p className={`text-xs font-extrabold mt-1.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  🟢 WhatsApp (+91 8919105441)
                </p>
                <p className="text-[10.5px] text-blue-400 font-semibold mt-1">
                  ⚡ {lang === 'en' ? 'Fast response in English and Telugu.' : 'తెలుగు మరియు ఇంగ్లీష్‌లలో అత్యంత వేగంగా సమాధానం లభిస్తుంది.'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    SUPPORT EMAIL
                  </span>
                  <p className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {AGENCY_EMAIL}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    CALL PHONE HELPLINE
                  </span>
                  <p className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {WHATSAPP_NUMBER_DISPLAY}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-450 rounded-xl">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    LOCATIONS
                  </span>
                  <p className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    Hyderabad, Guntur, Vijayawada • Serving AP & TS
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Outline Checklist Lead capture form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-3xl border text-left h-full flex flex-col justify-between ${
                isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="space-y-5">
                <h3 className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Bespoke Requirement Outline Form' : 'ఆన్‌లైన్ రిక్వైర్మెంట్ వివరాల సమర్పణ'}
                </h3>

                {/* Name / Phone inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold mb-1.5 ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                      {lang === 'en' ? 'Your Name' : 'మీ పేరు'} *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      required
                      value={formData.clientName}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? 'Enter full name' : 'పూర్తి పేరు ఎంటర్ చెయ్యండి'}
                      className={`text-xs h-11 px-3 rounded-xl focus:outline-none focus:ring-1 ${
                        isDark 
                          ? 'bg-black text-white placeholder-zinc-600 border border-white/10 focus:ring-blue-500' 
                          : 'bg-slate-100 text-slate-800 placeholder-slate-400 border border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={`text-xs font-bold mb-1.5 ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                      {lang === 'en' ? 'Your Mobile Number' : 'మీ మొబైల్ నెంబర్'} *
                    </label>
                    <input
                      type="tel"
                      name="clientPhone"
                      required
                      value={formData.clientPhone}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? 'For WhatsApp callbacks' : 'వాట్సాప్ కాంటాక్ట్ నెంబర్'}
                      className={`text-xs h-11 px-3 rounded-xl focus:outline-none focus:ring-1 ${
                        isDark 
                          ? 'bg-black text-white placeholder-zinc-600 border border-white/10 focus:ring-blue-500' 
                          : 'bg-slate-100 text-slate-800 placeholder-slate-400 border border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Business Type / Budget select */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold mb-1.5 ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                      {lang === 'en' ? 'Your Industry / Business Type' : 'వ్యాపార కేటగిరీ'}
                    </label>
                    <select
                      name="bizSector"
                      value={formData.bizSector}
                      onChange={handleInputChange}
                      className={`text-xs h-11 px-3 rounded-xl focus:outline-none cursor-pointer ${
                        isDark 
                          ? 'bg-black text-white border border-white/10 focus:ring-blue-500' 
                          : 'bg-slate-100 text-slate-800 border border-slate-200 focus:ring-blue-500'
                      }`}
                    >
                      <option value="School">{lang === 'en' ? '🏫 School / Academy' : '🏫 స్కూల్ / కళాశాల'}</option>
                      <option value="Cafe">{lang === 'en' ? '☕ Cafe / Foods Outlet' : '☕ కాఫీ లేదా రెస్టారెంట్'}</option>
                      <option value="Gym">{lang === 'en' ? '🏋️ Gym & Fitness Center' : '🏋️ జిమ్స్ & వెల్నెస్'}</option>
                      <option value="Clinic">{lang === 'en' ? '🏥 Clinic & Healthcare' : '🏥 క్లినికల్ హాస్పిటల్'}</option>
                      <option value="RealEstate">{lang === 'en' ? '🏡 Real Estate Agency' : '🏡 రియల్ ఎస్టేట్ సంస్థ'}</option>
                      <option value="LocalService">{lang === 'en' ? '💼 Other Local Business' : '💼 ఇతర వ్యాపార సేవలు'}</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className={`text-xs font-bold mb-1.5 ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                      {lang === 'en' ? 'Budget Objective range' : 'బడ్జెట్ శ్రేణి'}
                    </label>
                    <select
                      name="targetBudget"
                      value={formData.targetBudget}
                      onChange={handleInputChange}
                      className={`text-xs h-11 px-3 rounded-xl focus:outline-none cursor-pointer ${
                        isDark 
                          ? 'bg-black text-white border border-white/10 focus:ring-blue-500' 
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      <option value="Economical">{lang === 'en' ? 'Budget Economical (Great value)' : 'సరసమైన బేసిక్ బడ్జెట్'}</option>
                      <option value="Growth Plan">{lang === 'en' ? 'Mid-Sized Professional Growth' : 'మధ్యస్థ స్థాయి మోడరేట్ ప్లాన్'}</option>
                      <option value="Bespoke Premium">{lang === 'en' ? 'Elite Bespoke Enterprise Layout' : 'ప్రీమియం స్పెషల్ ఎంటర్ప్రైజ్'}</option>
                    </select>
                  </div>
                </div>

                {/* Checklist options */}
                <div className="space-y-2.5 pt-2">
                  <label className={`text-xs font-bold block ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                    {lang === 'en' ? 'Include specialized modules:' : 'కావాల్సిన అదనపు ప్యాకేజీలు:'}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div 
                      onClick={() => handleCheckboxChange('cmsRequired')}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.cmsRequired 
                          ? 'border-blue-500 bg-blue-500/10' 
                          : isDark ? 'border-white/5 bg-black' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-[11px] font-bold">{lang === 'en' ? 'Admin CMS Login' : 'అడ్మిన్ లాగిన్(CMS)'}</span>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${formData.cmsRequired ? 'bg-blue-600 border-transparent text-white' : 'border-zinc-700'}`}>
                        {formData.cmsRequired && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleCheckboxChange('chatbotRequired')}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.chatbotRequired 
                          ? 'border-blue-500 bg-blue-500/10' 
                          : isDark ? 'border-white/5 bg-black' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-[11px] font-bold">{lang === 'en' ? 'Smart AI Chatbot' : 'స్మార్ట్ AI చాట్‌బాట్'}</span>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${formData.chatbotRequired ? 'bg-blue-600 border-transparent text-white' : 'border-zinc-700'}`}>
                        {formData.chatbotRequired && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleCheckboxChange('mapsRequired')}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.mapsRequired 
                          ? 'border-blue-500 bg-blue-500/10' 
                          : isDark ? 'border-white/5 bg-black' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <span className="text-[11px] font-bold">{lang === 'en' ? 'Google Maps SEO' : 'గూగుల్ మ్యాప్స్ ఎస్ఈఓ'}</span>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${formData.mapsRequired ? 'bg-blue-600 border-transparent text-white' : 'border-zinc-700'}`}>
                        {formData.mapsRequired && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional requirements notes */}
                <div className="flex flex-col">
                  <label className={`text-xs font-bold mb-1.5 ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
                    {lang === 'en' ? 'Describe your special features (Menus, Gallery, Booking)' : 'అదనపు వివరాలు తెలియజేయండి'}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder={lang === 'en' ? 'Describe special requirements, pages needed or questions...' : 'మీ ప్రత్యేక ఆలోచనలు నమోదు చేయండి...'}
                    className={`text-xs p-3 rounded-xl focus:outline-none focus:ring-1 ${
                      isDark 
                        ? 'bg-black text-white placeholder-zinc-600 border border-white/10 focus:ring-blue-500' 
                        : 'bg-slate-100 text-slate-800 placeholder-slate-400 border border-slate-200 focus:ring-blue-500'
                    }`}
                  />
                </div>
              </div>

              {/* Submit CTA button compiles values and forwards to Whatsapp securely */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2.5 w-full py-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-xs"
                  id="contact-form-submit-wa"
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>{lang === 'en' ? 'Submit Outline to WhatsApp' : 'వివరాలు వాట్సాప్‌లో పంపండి'}</span>
                </button>
                <span className={`text-[10px] block text-center mt-3 ${isDark ? 'text-zinc-550' : 'text-slate-400'}`}>
                  {lang === 'en' ? '🛡️ Details are only used to prepare your blueprint proposals draft. Secure configuration.' : '🛡️ ఈ వివరాలు కేవలం మీ కస్టమ్ ప్రణాళిక కొటేషన్ తయారీకి మాత్రమే వాడబడతాయి.'}
                </span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
