/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, FileText, RefreshCw, Briefcase, Mail, Phone, Calendar, ArrowRight, HelpCircle } from 'lucide-react';

interface PolicyPageProps {
  isDark: boolean;
  lang: 'en' | 'te';
  activeView: 'terms' | 'privacy' | 'refund' | 'how-we-work';
  onBackToHome: () => void;
}

export default function PolicyPages({ isDark, lang, activeView, onBackToHome }: PolicyPageProps) {
  // Always scroll to top when a policy page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeView]);

  const premiumSpring = { type: 'spring', stiffness: 300, damping: 25 };

  // Common Header/Breadcrumb section
  const renderBreadcrumbs = () => {
    const titleMap = {
      terms: lang === 'en' ? 'Terms & Conditions' : 'నిబంధనలు & షరతులు',
      privacy: lang === 'en' ? 'Privacy Policy' : 'వ్యక్తిగత గోప్యతా విధానం',
      refund: lang === 'en' ? 'Refund Policy' : 'రీఫండ్ విధానం',
      'how-we-work': lang === 'en' ? 'How We Work' : 'మా పనితీరు విధానం'
    };

    return (
      <div className="mb-10 text-left">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-4">
          <button 
            onClick={onBackToHome}
            className="hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
          >
            {lang === 'en' ? 'Home' : 'హోమ్'}
          </button>
          <span>/</span>
          <span className={isDark ? 'text-zinc-300' : 'text-slate-800'}>{titleMap[activeView]}</span>
        </div>

        <button
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-300' 
              : 'bg-white border-slate-200 hover:bg-slate-55 text-slate-700'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Back to Home' : 'తిరిగి హోమ్‌కి వెళ్ళండి'}</span>
        </button>
      </div>
    );
  };

  // Rendering individual policy content based on views
  const renderContent = () => {
    switch (activeView) {
      case 'terms':
        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {lang === 'en' ? 'LEGAL DISCLOSURE' : 'లీగల్ పత్రం'}
                </span>
                <h1 className={`text-2xl sm:text-3xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Terms & Conditions' : 'నిబంధనలు & షరతులు'}
                </h1>
              </div>
            </div>

            <div className={`p-4.5 rounded-xl text-xs font-mono inline-flex items-center gap-2 ${isDark ? 'bg-zinc-900 text-zinc-400 border border-white/5' : 'bg-slate-100 text-slate-650'}`}>
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{lang === 'en' ? 'Last Updated: June 2026' : 'చివరిగా అప్‌డేట్ చేసినది: జూన్ 2026'}</span>
            </div>

            {/* Terms grid sections */}
            <div className={`space-y-6 text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-705'}`}>
              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  1. {lang === 'en' ? 'Introduction' : 'పరిచయం'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'Welcome to VisionCraft.Telugu. By using our services, you agree to comply with and be bound by these Terms & Conditions.'
                    : 'VisionCraft.Teluguకు స్వాగతం. మా సేవలను ఉపయోగించడం ద్వారా, మీరు ఈ నిబంధనలు మరియు షరతులకు లోబడి ఉండటానికి అంగీకరిస్తున్నారు.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  2. {lang === 'en' ? 'Services' : 'సేవలు'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'We provide premium website design, development, optimization, maintenance, and related digital services. The scope of services is strictly limited to the agreed work outlined before project starting.'
                    : 'మేము వెబ్‌సైట్ డిజైన్, డెవలప్‌మెంట్, ఆప్టిమైజేషన్, మేనేజ్‌మెంట్ మరియు సంబంధిత డిజిటల్ సేవలను అందిస్తాము. సేవల పరిధి ప్రాజెక్ట్ ప్రారంభానికి ముందు అంగీకరించిన పనులకు మాత్రమే పరిమితం చేయబడుతుంది.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6 bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10">
                <h3 className={`text-base font-bold font-display mb-3 text-blue-400`}>
                  3. {lang === 'en' ? 'Payment Terms' : 'చెల్లింపు నిబంధనలు'}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>{lang === 'en' ? '50% Advance Required:' : '50% అడ్వాన్స్ తప్పనిసరి:'}</strong>{' '}
                    {lang === 'en' ? 'Required to begin layout and development work.' : 'డిజైన్ పనులు ప్రారంభించడానికి 50% చెల్లించవలసి ఉంటుంది.'}
                  </li>
                  <li>
                    <strong>{lang === 'en' ? 'Remaining 50%:' : 'మిగిలిన 50% చెల్లింపు:'}</strong>{' '}
                    {lang === 'en' ? 'Due and required before final website launch on public servers.' : 'వెబ్‌సైట్ లైవ్ లాంచ్ కావడానికి ముందే మిగిలిన 50% చెల్లించాల్సి ఉంటుంది.'}
                  </li>
                  <li>
                    <strong>{lang === 'en' ? 'No website will be published without full payment.' : 'పూర్తి చెల్లింపు లేకుండా ఏ వెబ్‌సైట్ కూడా ప్రచురించబడదు.'}</strong>
                  </li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  4. {lang === 'en' ? 'Refund Policy' : 'రీఫండ్ పాలసీ'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'Advance payments are strictly non-refundable once design or development work begins. Completed projects are fully non-refundable.'
                    : 'ఒక్కసారి పని ప్రారంభమైన తర్వాత అడ్వాన్స్ పేమెంట్లు తిరిగి చెల్లించబడవు. పూర్తి చేసిన ప్రాజెక్టులకు ఎట్టి పరిస్థితుల్లోనూ రీఫండ్ లభించదు.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  5. {lang === 'en' ? 'Revisions' : 'సవరణలు (Revisions)'}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>{lang === 'en' ? 'Includes 2 review & revision rounds per project.' : 'ప్రతి ప్రాజెక్ట్‌కు 2 సవరణల రౌండ్లు ఉచితంగా ఉంటాయి.'}</li>
                  <li>
                    {lang === 'en' 
                      ? 'Extra revision rounds requested: ₹999 per round.' 
                      : 'అదనపు సవరణ రౌండ్‌లకు రౌండ్‌కు ₹999 వసూలు చేయబడుతుంది.'}
                  </li>
                  <li>{lang === 'en' ? 'Major structural redesign requests are considered as entirely new projects.' : 'కీలక మార్పులు లేదా రీడిజైన్లు కొత్త ప్రాజెక్ట్‌గా పరిగణించబడతాయి.'}</li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  6. {lang === 'en' ? 'Client Responsibilities' : 'క్లయింట్ బాధ్యతలు'}
                </h3>
                <p className="mb-2">
                  {lang === 'en'
                    ? 'The client agrees to provide all necessary details to complete the development:'
                    : 'ప్రాజెక్ట్ సకాలంలో పూర్తి చేయడానికి క్లయింట్ క్రింది వివరాలను అందించాలి:'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono mt-3">
                  {['Business details', 'Company Logo', 'Website Content', 'Media Images', 'Contact Info'].map((item, idx) => (
                    <div key={idx} className={`p-2.5 rounded-lg border ${isDark ? 'bg-black border-white/5 text-zinc-300' : 'bg-slate-50 border-slate-200 text-slate-750'}`}>
                      • {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-amber-500 mt-2.5 font-semibold">
                  {lang === 'en' ? '⚠️ Note: Delays in providing content will directly affect agreed delivery timelines.' : '⚠️ గమనిక: అవసరమైన సమాచారం అందించడంలో ఆలస్యం జరిగితే డెలివరీ సమయం కూడా ఆలస్యం అవుతుంది.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  7. {lang === 'en' ? 'Domain & Hosting' : 'డొమైన్ & హోస్టింగ్'}
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{lang === 'en' ? 'Domain registration and renewal charges are the sole responsibility of the client, unless agreed otherwise in writing.' : 'ప్రత్యేకంగా వ్రాతపూర్వకంగా అంగీకరిస్తే తప్ప, డొమైన్ చార్జీలు క్లయింట్ మాత్రమే భరించాలి.'}</li>
                  <li>{lang === 'en' ? 'The client must renew domain subscriptions on time. We are not responsible for expired, stolen, or suspended domains.' : 'క్లయింట్ క్లయింట్ యొక్క డొమైన్‌ను సమయానికి పునరుద్ధరించాలి. గడువు ముగిసిన డొమైన్‌లకు మేము బాధ్యత వహించము.'}</li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  8. {lang === 'en' ? 'Website Care Plan' : 'వెబ్‌సైట్ కేర్ ప్లాన్'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'Our Care Plan is completely optional and billed monthly: includes server hosting support, continuous security, regular backups, and minor updates. It strictly excludes creating new pages, major custom feature builds, or redesign requests.'
                    : 'మా కేర్ ప్లాన్ పూర్తిగా ఐచ్ఛికం మరియు నెలవారీ బిల్ చేయబడుతుంది: హోస్టింగ్ మద్దతు, భద్రతా పర్యవేక్షణ, బ్యాకప్‌లు మరియు చిన్న అప్‌డేట్‌లను కలిగి ఉంటుంది. ఇది కొత్త పేజీలు లేదా భారీ కస్టమ్ ఫీచర్లను మినహాయిస్తుంది.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  9. {lang === 'en' ? 'Project Completion' : 'ప్రాజెక్ట్ ముగింపు'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'A digital project is legally complete and finalized when the website is declared live/delivered and full final payment is received on our accounts.'
                    : 'వెబ్‌సైట్ లైవ్‌లోకి పంపబడి, పూర్తి చివరి పేమెంట్ అందినప్పుడు ఆ ప్రాజెక్ట్ అధికారికంగా పూర్తయినట్లు లెక్క.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  10. {lang === 'en' ? 'Intellectual Property' : 'బౌద్ధిక సంపత్తి (Intellectual Property)'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'After completion and full final payment, the client owns all of their customized branding text and assets. VisionCraft.Telugu retains rights to internal development templates and code structures.'
                    : 'పూర్తి చెల్లింపు తర్వాత, క్లయింట్ తన కస్టమైజ్డ్ బ్రాండింగ్ టెక్స్ట్ మరియు ఇమేజ్ ఆస్తిని కలిగి ఉంటాడు. మా అంతర్గత కోడింగ్ కోడ్ మరియు టెంప్లేట్లపై హక్కులు మా వద్దే ఉంటాయి.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  11. {lang === 'en' ? 'Portfolio Rights' : 'పోర్ట్‌ఫోలియో హక్కులు'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'Unless explicitly requested in writing otherwise, we reserve the right to showcase the completed project in our portfolio, marketing plans, and social media platforms.'
                    : 'లిఖితపూర్వకంగా నిరాకరిస్తే తప్ప, రూపొందించిన వెబ్‌సైట్‌ను మా పోర్ట్‌ఫోలియో, సోషల్ మీడియా లేదా ప్రచారాలలో ప్రదర్శించే హక్కు మాకు ఉంటుంది.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  12. {lang === 'en' ? 'Limitation of Liability' : 'బాధ్యత పరిమితి (Limitation of Liability)'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'We are not responsible for business losses, server hosting downtime, third-party plugin failures, domain expiration issues, SEO rank fluctuations, or external security attacks/hacks.'
                    : 'బిజినెస్ నష్టాలు, సర్వర్ హోస్టింగ్ డౌన్‌టైమ్, థర్డ్-పార్టీ వైఫల్యాలు, డొమైన్ గడువు ముగియడం, ఎస్ఈఓ ర్యాంకు మార్పులు లేదా హ్యాకింగ్స్ వంటి వాటికి మేము బాధ్యులం కాము.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  13. {lang === 'en' ? 'Termination' : 'రద్దు నిబంధన'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'We may terminate services immediately due to non-payment of care bills, misuse, storage of illegal/copyrighted activities, or violation of these Terms.'
                    : 'అడ్వాన్స్ పేమెంట్ చేయకపోవడం, వెబ్‌సైట్ దుర్వినియోగం చేయడం, చట్టవిరుద్ధమైన సాఫ్ట్‌వేర్ లేదా కాపీరైట్ ఉల్లంఘన వంటి సందర్భాలలో సేవలను వెనువెంటనే నిలిపివేసే హక్కు మాకు ఉంటుంది.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  14. {lang === 'en' ? 'Policy Updates' : 'విధానాల మార్పు'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'These Terms & Conditions may be updated at any time without prior written notice to client.'
                    : 'ఈ నిబంధనలు మరియు నిబంధనలు క్లయింట్కి ముందస్తు సమాచారం ఇవ్వకుండా ఎప్పుడైనా మారవచ్చు.'}
                </p>
              </section>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {lang === 'en' ? 'DATA PROTECTIONS' : 'సమాచార రక్షణ'}
                </span>
                <h1 className={`text-2xl sm:text-3xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Privacy Policy' : 'వ్యక్తిగత గోప్యతా విధానం'}
                </h1>
              </div>
            </div>

            <div className={`p-4.5 rounded-xl text-xs font-mono inline-flex items-center gap-2 ${isDark ? 'bg-zinc-900 text-zinc-400 border border-white/5' : 'bg-slate-100 text-slate-650'}`}>
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{lang === 'en' ? 'Last Updated: June 2026' : 'చివరిగా అప్‌డేట్ చేసినది: జూన్ 2026'}</span>
            </div>

            <div className={`space-y-6 text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-705'}`}>
              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Information We Collect' : 'మేము సేకరించే మీ వ్యక్తిగత సమాచారం'}
                </h3>
                <p className="mb-2">
                  {lang === 'en'
                    ? 'We collect information directly from you when you submit details, contact us for estimates, or use our digital forms:'
                    : 'మీరు మమ్మల్ని సంప్రదించినప్పుడు లేదా ఫారమ్‌లు సమర్పించినప్పుడు మాత్రమే మేము ఈ కింది సమాచారాన్ని సేకరిస్తాము:'}
                </p>
                <ul className="list-disc pl-5 space-y-1 font-semibold">
                  <li>{lang === 'en' ? 'Name / Authorized Contact person' : 'పేరు / ప్రతినిధి పేరు'}</li>
                  <li>{lang === 'en' ? 'Active Business Email address' : 'బిజినెస్ ఈమెయిల్ అడ్రస్'}</li>
                  <li>{lang === 'en' ? 'Contact Phone / WhatsApp connection' : 'ఫోన్ నెంబర్ / వాట్సాప్ కనెక్షన్'}</li>
                  <li>{lang === 'en' ? 'Detailed Business Sector specifications' : 'వ్యాపార కేటగిరీ & వివరాలు'}</li>
                  <li>{lang === 'en' ? 'Custom messages & notes from consult forms' : 'ఫారమ్‌ సమాచారంలో సూచించిన కస్టమ్ నోట్స్'}</li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'How We Use Your Data' : 'సేకరించిన సమాచారాన్ని మేము ఎలా వాడతాము'}
                </h3>
                <p className="mb-2">
                  {lang === 'en'
                    ? 'Your collected coordinates are utilized strictly for professional outcomes:'
                    : 'సేకరించిన వివరాలు కేవలం వృత్తిపరమైన ఆవశ్యకతల కొరకు మాత్రమే ఉపయోగించబడతాయి:'}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{lang === 'en' ? 'Fulfilling prompt customer support & communication.' : 'త్వరితగతిన కాంటాక్ట్ చేయడం మరియు సపోర్ట్ అందించడం.'}</li>
                  <li>{lang === 'en' ? 'Preparing draft layout mockups and price estimates.' : 'మీ బిజినెస్ నివేదికల కొటేషన్ మరియు డెమో డిజైన్ ప్లాన్ సిద్ధం చేయడం.'}</li>
                  <li>{lang === 'en' ? 'Coordinating hosting servers, maps, and domain configuration.' : 'హోస్టింగ్ సర్వర్లు, మ్యాప్స్ మరియు డొమైన్‌ల అనుసంధానం.'}</li>
                  <li>{lang === 'en' ? 'Executing direct client communication pipelines.' : 'క్లయింట్ సంప్రదింపులను ట్రాక్ చేస్కోవడం.'}</li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Data Protection' : 'డేటా భద్రతా రక్షణ'}
                </h3>
                <p>
                  {lang === 'en'
                    ? 'We take high-level industry standard administrative and digital precautions to safeguard your business specifications and contact information.'
                    : 'మీ వ్యక్తిగత వివరాల రక్షణ నిమిత్తం మేము లీడర్ సర్వర్ సెక్యూరిటీ మరియు ఎన్‌క్రిప్షన్స్ నియమాలను పాటిస్తున్నాము.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Third-Party Services' : 'లింక్ చేయబడిన థర్డ్-పార్టీ సేవలు'}
                </h3>
                <p className="mb-1">
                  {lang === 'en'
                    ? 'To provide continuous features, our platform and your web uses these authorized third-parties:'
                    : 'వెబ్‌సైట్ సరిగ్గా పంచ్ చేయడానికి ఈ కింది లీడింగ్ థర్డ్-పార్టీ సేవలతో మేము కలిసి పని చేయవచ్చు:'}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs font-mono">
                  <li>Cloud Hosting Infrastructure Providers (Vercel, AWS, Cloud Run or Hostinger)</li>
                  <li>Analytics Tools (Google Analytics for metric tracking)</li>
                  <li>Secure Direct Communication gateways (WhatsApp API, Mail Clients)</li>
                </ul>
              </section>

              <section className="border-t border-white/5 pt-6">
                <h3 className={`text-base font-bold font-display mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'No Data Sharing (Strict Guarantee)' : 'సమాచారాన్ని ఎవరికీ అమ్మము - ఎక్స్క్లూసివ్ హామీ'}
                </h3>
                <p className="font-semibold text-emerald-500">
                  {lang === 'en'
                    ? '🛡️ We do NOT sell, lease, trade, or distribute your email or contact coordinates to advertising networks or external brokers under any circumstances.'
                    : '🛡️ మేము మీ వ్యక్తిగత ఈమెయిల్, మొబైల్ వివరాలను థర్డ్-పార్టీ బ్రోకర్లకు అమ్మము లేదా బదలాయించము.'}
                </p>
              </section>

              <section className="border-t border-white/5 pt-6 bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10">
                <h3 className={`text-base font-bold font-display mb-3 text-blue-400`}>
                  {lang === 'en' ? 'Contact Details' : 'సంప్రదించండి'}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span><strong>Email:</strong> visioncraft.telugu01@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span><strong>Phone/WhatsApp:</strong> +91 8919105441</span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        );

      case 'refund':
        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl">
                <RefreshCw className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {lang === 'en' ? 'REIMBURSEMENTS' : 'తిరిగి చెల్లింపులు'}
                </span>
                <h1 className={`text-2xl sm:text-3xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'Refund Policy' : 'రీఫండ్ విధానం'}
                </h1>
              </div>
            </div>

            <div className={`p-4.5 rounded-xl text-xs font-mono inline-flex items-center gap-2 ${isDark ? 'bg-zinc-900 text-zinc-400 border border-white/5' : 'bg-slate-100 text-slate-650'}`}>
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{lang === 'en' ? 'Last Updated: June 2026' : 'చివరిగా అప్‌డేట్ చేసినది: జూన్ 2026'}</span>
            </div>

            <div className={`space-y-6 text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-705'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Rule Card 1 */}
                <div className={`p-6 rounded-2xl border text-left ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-[10px] font-mono py-0.5 px-2 bg-red-500/10 text-red-400 rounded-full font-bold uppercase border border-red-500/15">
                    {lang === 'en' ? 'ADVANCE DEPOSITS' : 'అడ్వాన్స్ పేమెంట్'}
                  </span>
                  <h4 className={`text-md font-bold font-display mt-3 mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Non-Refundable Once Work Commences' : 'పని ప్రారంభమైన పిదప రీఫండ్ లేదు'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {lang === 'en'
                      ? 'The 50% advance payment required at initial contract startup is fully non-refundable once layout designing, coding, or server provisioning commences.'
                      : 'డిజైన్ లేదా డెవలప్‌మెంట్ పనులు ప్రారంభించిన తర్వాత చెల్లించిన 50% అడ్వాన్స్ డిపాజిట్ తిరిగి లభించదు.'}
                  </p>
                </div>

                {/* Rule Card 2 */}
                <div className={`p-6 rounded-2xl border text-left ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-[10px] font-mono py-0.5 px-2 bg-red-500/10 text-red-400 rounded-full font-bold uppercase border border-red-500/15">
                    {lang === 'en' ? 'COMPLETED SERVICES' : 'పూర్తి చేసిన సేవలు'}
                  </span>
                  <h4 className={`text-md font-bold font-display mt-3 mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Fully Non-Refundable' : 'ఎట్టి పరిస్థితుల్లోనూ తిరిగి చెల్లింపు లేదు'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {lang === 'en'
                      ? 'Digital services, completed codebases, templates, and final server delivery setups are deemed complete upon launch and are 100% non-refundable.'
                      : 'లైవ్ చేయబడిన వెబ్‌సైట్లు, డిజిటల్ టెంప్లేట్స్ మరియు ల్యాండింగ్ పేజీల పనులు పూర్తయిన తర్వాత ఎటువంటి రీఫండ్ స్వీకరించబడదు.'}
                  </p>
                </div>

                {/* Rule Card 3 */}
                <div className={`p-6 rounded-2xl border text-left ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-[10px] font-mono py-0.5 px-2 bg-zinc-500/10 text-zinc-400 rounded-full font-bold uppercase border border-white/10">
                    {lang === 'en' ? 'THIRD-PARTY INTEGRATIONS' : 'థర్డ్-పార్టీ చార్జీలు'}
                  </span>
                  <h4 className={`text-md font-bold font-display mt-3 mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Domain & External Costs Excluded' : 'డొమైన్ & థర్డ్-పార్టీ రుసుములు ఎక్స్‌క్లూడెడ్'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {lang === 'en'
                      ? 'Fees paid directly to licensing databases, dynamic translations, custom maps widgets, hosting providers, or domain registrars are entirely non-refundable.'
                      : 'మ్యాప్స్, ఈ-కామర్స్ పేమెంట్ గేట్‌వేస్, లేదా డొమైన్ రిజిస్ట్రేషన్ల కొరకు అయ్యే అవుట్‌సైడ్ రుసుములు మా పరిధిలో ఉండవు, అవి రీఫండ్ కావు.'}
                  </p>
                </div>

                {/* Rule Card 4 */}
                <div className={`p-6 rounded-2xl border text-left ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-[10px] font-mono py-0.5 px-2 bg-emerald-500/10 text-emerald-400 rounded-full font-bold uppercase border border-emerald-500/15">
                    {lang === 'en' ? 'REVIEW EXCEPTION' : 'సవరణ సమీక్ష'}
                  </span>
                  <h4 className={`text-md font-bold font-display mt-3 mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'en' ? 'Reviewed Prior to Project Start' : 'పని మొదలు పెట్టక ముందే సమీక్షించబడుతుంది'}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {lang === 'en'
                      ? 'Refund requests (if any exceptional technical mismatch exists) will be audited and reviewed only prior to project commencement.'
                      : 'పని ప్రారంభించే ముందు తలెత్తే అరుదైన సాంకేతిక సమస్యల కొరకు మాత్రమే రీఫండ్ అభ్యర్థనలు సమీక్షించబడతాయి.'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        );

      case 'how-we-work':
        return (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {lang === 'en' ? 'TRANSPARENT SYSTEM' : 'సులభమైన మెకానిజం'}
                </span>
                <h1 className={`text-2xl sm:text-3xl font-extrabold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'en' ? 'How We Work' : 'మా పనితీరు విధానం'}
                </h1>
              </div>
            </div>

            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'} leading-relaxed max-w-2xl`}>
              {lang === 'en' 
                ? 'We believe in absolute transparency. Here is our step-by-step collaboration model, designed to take your local business online with absolute precision and no hidden traps.'
                : 'వినియోగదారులకు స్పష్టమైన నమ్మకం కలిగించడమే విజన్‌క్రాఫ్ట్ సిద్ధాంతం. మీ స్థానిక వ్యాపారాన్ని ల్యాండ్ ప్లాన్ మరియు లైవ్ స్థాయికి తీసుకువెళ్ళే పూర్తి గమ్యాలు కింద ఇవ్వబడ్డాయి.'}
            </p>

            {/* Timelines list */}
            <div className="relative border-l-2 border-blue-500/20 pl-6 ml-4 space-y-12 py-4 text-left">
              {[
                {
                  title: lang === 'en' ? 'Initial Consultation' : '1. ప్రాథమిక సంప్రదింపులు',
                  desc: lang === 'en' ? 'A direct phone or WhatsApp consultation to understand your business, targets, and goals.' : 'మీ వ్యాపారం మరియు లక్ష్యాలను అర్థం చేసుకోవడానికి నేరుగా ఫోన్ లేదా వాట్సాప్ ద్వారా ఉచిత సలహా అందించడం.'
                },
                {
                  title: lang === 'en' ? 'Requirement Discussion' : '2. అవసరాల చర్చ',
                  desc: lang === 'en' ? 'Identifying the pages, colors, structures, language switch, chatbot modules, or map rankings we need to create.' : 'పేజీలు, రంగులు, ద్విభాషా సపోర్ట్, మ్యాప్స్ మరియు ఆటోమేటిక్ చాట్ బాట్ వంటి అవసరాలను సిద్ధం చేయడం.'
                },
                {
                  title: lang === 'en' ? '50% Advance Payment' : '3. 50% అడ్వాన్స్ పేమెంట్',
                  desc: lang === 'en' ? 'Payment processed through secure UPI or transfers to kickstart design planning and coding pipeline.' : 'మాతో అగ్రిమెంట్ చేసుకొని వర్క్ ప్రారంభించుకోవడానికి 50% అడ్వాన్స్ పేమెంట్ చెల్లించడం.'
                },
                {
                  title: lang === 'en' ? 'Design & Development' : '4. డిజైన్ & డెవలప్‌మెంట్',
                  desc: lang === 'en' ? 'Crafting lightweight layouts, high performance, and responsive screens optimized for Telugu and English viewers.' : 'తీరిక లేకుండా వేగంగా లోడ్ అయ్యేలా తెలుగు మరియు ఇంగ్లీష్‌లలో ప్రొఫెషనల్ వెబ్‌సైట్ రూపకల్పన చేయడం.'
                },
                {
                  title: lang === 'en' ? 'Client Review' : '5. క్లయింట్ సమీక్ష',
                  desc: lang === 'en' ? 'Private hosting link shared with you to see the exact flow, click links, test chatbot, and preview mobile screens.' : 'డెవలప్ చేసిన ప్రతీ డ్రాఫ్ట్‌ను మీరు క్షుణ్ణంగా పరిశీలించేలా కస్టమ్ ప్రైవేట్ లింక్ అందించడం.'
                },
                {
                  title: lang === 'en' ? '2 Revision Rounds' : '6. 2 సవరణల రౌండ్లు (Revisions)',
                  desc: lang === 'en' ? 'Making precise text changes, image swaps, or form modifications based on your feedback.' : 'మీ అభిప్రాయానికి అనుగుణంగా మార్పులు మరియు చేర్పులు ఉచితంగా 2 సార్లు రౌండ్లు చేయడం.'
                },
                {
                  title: lang === 'en' ? 'Final Payment' : '7. చివరి చెల్లింపు (Final Payment)',
                  desc: lang === 'en' ? 'Clearing the remaining 50% invoice prior to launching on your official domain name.' : 'వెబ్‌సైట్ పబ్లిక్ సర్వర్లలోకి ప్రచురింపబడే ముందు మిగిలిన 50% బ్యాలెన్స్ పూర్తవ్వడం.'
                },
                {
                  title: lang === 'en' ? 'Website Launch' : '8. వెబ్‌సైట్ లాంచ్',
                  desc: lang === 'en' ? 'Pointing the domain, final code security checks, and making your business search profile official across active maps.' : 'మీ డొమైన్‌ను అమర్చి, గూగుల్ మ్యాప్స్ ఎస్ఈఓ రికార్డ్స్‌తో వెబ్‌సైట్ ప్రొఫెషినల్ ప్రదర్శనకు తీసుకురావడం.'
                },
                {
                  title: lang === 'en' ? 'Optional Monthly Care Plan' : '9. ఐచ్ఛిక నెలవారీ కేర్ ప్లాన్',
                  desc: lang === 'en' ? 'Rest in peace! Optional ₹699 care plan takes care of hosting administration, monthly security, and backup monitoring.' : 'నెలకు కేవలం ₹699 కేర్ ప్లాన్‌తో, హోస్టింగ్ యాజమాన్యం, రెగ్యులర్ సర్వర్ బ్యాకప్ లు, మరియు సెక్యూరిటీ సేవలు అందుకోవడం.'
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot marker icon */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border-2 border-slate-500/10"></div>
                  <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-650'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`py-32 transition-all duration-300 relative ${isDark ? 'bg-[#050505] text-white' : 'bg-slate-50 text-slate-900'}`} id="policy-pages-master-root">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderBreadcrumbs()}
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`p-8 sm:p-12 rounded-3xl border text-left ${
            isDark 
              ? 'bg-[#0A0A0A] border-white/5 shadow-2xl' 
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          {renderContent()}
        </motion.div>

        {/* Back button at the bottom for quick feedback */}
        <div className="mt-10 text-center">
          <motion.button
            onClick={onBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={premiumSpring}
            className={`inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-lg shadow-blue-950/25`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'en' ? 'Back to Home' : 'తిరిగి హోమ్‌కి వెళ్ళండి'}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
