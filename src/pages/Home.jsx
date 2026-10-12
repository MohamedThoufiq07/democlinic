import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Star, 
  Calendar, 
  Phone, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  ChevronDown, 
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Baby,
  Smile,
  FlaskConical,
  Activity,
  Sparkles,
  MapPin
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES, TESTIMONIALS, FAQS, DOCTORS } from '../data/clinicData';

// Map icon string names to Lucide icons
const IconMap = {
  Stethoscope,
  HeartPulse,
  Baby,
  Smile,
  FlaskConical,
  Activity
};

export const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Soft background ambient gradient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category pill & Social proof */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-soft-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs font-bold text-teal-800 tracking-wide uppercase">
                  Accredited Clinical Excellence
                </span>
                <span className="text-teal-400 font-normal">|</span>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9/5 (15,000+ Consultations)</span>
                </div>
              </div>

              {/* Catchy headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Compassionate Care <br />
                <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600 bg-clip-text text-transparent">
                  Meets Modern Medicine.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Experience healthcare the way it was meant to be. Top senior medical specialists, cutting-edge diagnostic equipment, zero-wait OPD scheduling, and patient-first empathy under one welcoming roof.
              </p>

              {/* Dual CTA buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold px-6 py-4 rounded-2xl shadow-teal-glow shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.receptionPhone}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span>Direct Desk: {CLINIC_INFO.receptionPhone}</span>
                </a>
              </div>

              {/* Doctor Avatar Stack & Micro-Trust */}
              <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  {DOCTORS.map((doc) => (
                    <img
                      key={doc.id}
                      className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                      src={doc.avatar}
                      alt={doc.name}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Board-Certified Specialists on Duty</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available for in-person consultations & diagnostics today.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Hero Card / Graphic Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Doctor Hero Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200/90 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                    alt="AuraCare Modern Consultation Room"
                    className="w-full h-80 object-cover object-top"
                  />
                  
                  {/* Floating badge top-right */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-bold text-slate-800">OPD Open Now</span>
                  </div>

                  <div className="p-6 space-y-4 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                        Today's Walk-in Slots
                      </span>
                      <span className="text-xs text-slate-500">Wait Time: &lt; 10 Mins</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      NABH-Recognized Patient Experience Standards
                    </h3>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-500">Next Consultation</p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">General Medicine</p>
                        <p className="text-xs text-teal-600 font-medium">Dr. Arvind Varma</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-500">In-house Lab</p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">Digital ECG & Blood</p>
                        <p className="text-xs text-teal-600 font-medium">Instant Reporting</p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="block text-center w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition shadow-sm"
                    >
                      Check Consultant Availability →
                    </Link>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3.5 max-w-xs animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">100% Sterile Standards</p>
                    <p className="text-[11px] text-slate-500">Class-B Autoclave & HEPA filtration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TRUST METRICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-md border border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">16+</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Years Clinical Service</span>
              <span className="text-xs text-slate-400 mt-0.5">Established excellence</span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">15,000+</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Happy Patients</span>
              <span className="text-xs text-slate-400 mt-0.5">Verified Google 4.9★</span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">12+</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Senior MD Specialists</span>
              <span className="text-xs text-slate-400 mt-0.5">Premier hospital backgrounds</span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">24/7</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Emergency Triage</span>
              <span className="text-xs text-slate-400 mt-0.5">Day & night assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SPECIALTIES TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200/60">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Dedicated Outpatient Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Healthcare for Every Family Member
            </h2>
            <p className="text-slate-600 text-base max-w-xl">
              From daily preventive consultations to acute diagnostics and dental aesthetics, explore our core departments.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold text-sm group"
          >
            <span>View All Departments & Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.slice(0, 4).map((spec) => {
            const IconComponent = IconMap[spec.icon] || Stethoscope;
            return (
              <div
                key={spec.id}
                className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 group-hover:bg-teal-600 text-teal-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm mb-5">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                    {spec.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    Consultation {spec.price}
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 group-hover:text-teal-800"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. "WHY CHOOSE US" DUAL-COLUMN SHOWCASE */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden rounded-3xl max-w-7xl mx-auto px-6 lg:px-12 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clinic Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              The AuraCare Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Why Discerning Patients Choose AuraCare Over Overcrowded Hospitals
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We eliminate the chaotic waiting times and impersonal clinical bureaucracy of massive tertiary hospitals while keeping the exact same medical rigor and senior specialist qualifications.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Guaranteed Zero-Wait Appointments</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pre-scheduled consultation slots mean you sit with your doctor within 10 minutes of arrival.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ethical, Transparent Diagnosis</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No unnecessary battery of tests or unneeded prescription load. We focus on conservative, evidence-based recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Hospital-Grade Sterilization Protocol</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every instrument goes through medical vacuum autoclaving with color-change indicators inspected daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition shadow-teal-glow"
              >
                <span>Read Our Clinical Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Comparative Feature Matrix Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>The Patient Care Difference</span>
                <span className="text-xs font-normal text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40">Benchmark</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-12 gap-2 pb-3 border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px]">
                  <span className="col-span-6">Care Dimension</span>
                  <span className="col-span-3 text-teal-400">AuraCare</span>
                  <span className="col-span-3 text-slate-500">Typical OPD</span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-2 border-b border-slate-800/60 items-center">
                  <span className="col-span-6 text-slate-200 font-medium">Average OPD Wait Time</span>
                  <span className="col-span-3 text-emerald-400 font-bold">&lt; 10 Mins</span>
                  <span className="col-span-3 text-slate-400">45 - 90 Mins</span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-2 border-b border-slate-800/60 items-center">
                  <span className="col-span-6 text-slate-200 font-medium">Consultation Duration</span>
                  <span className="col-span-3 text-emerald-400 font-bold">15 - 25 Mins</span>
                  <span className="col-span-3 text-slate-400">3 - 5 Mins</span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-2 border-b border-slate-800/60 items-center">
                  <span className="col-span-6 text-slate-200 font-medium">Diagnostic Delivery</span>
                  <span className="col-span-3 text-emerald-400 font-bold">Instant WhatsApp</span>
                  <span className="col-span-3 text-slate-400">Physical Counter</span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-2 items-center">
                  <span className="col-span-6 text-slate-200 font-medium">Post-Visit Follow-Up</span>
                  <span className="col-span-3 text-emerald-400 font-bold">Care Coordinator</span>
                  <span className="col-span-3 text-slate-400">None</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>NABH Standard Compliance Score: <strong>98.4%</strong></span>
                <span className="text-teal-400 font-semibold">Audited Quarterly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT TESTIMONIALS CAROUSEL/GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
            Real Patient Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Over 15,000 Local Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Read unedited feedback from patients who experience our diagnostics, pediatrics, and physician care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified Patient
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                  <p className="text-xs text-slate-500">{test.role}</p>
                </div>
                <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                  {test.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMPREHENSIVE FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Clinic Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about consultation booking, reports, and cashless insurance.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-soft-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-50 text-teal-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM APPOINTMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Consult with Our Senior Specialists?
            </h3>
            <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
              Book your slot online in under 60 seconds with no upfront cancellation fees or waiting lines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 hover:bg-slate-100 font-bold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Now
            </Link>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${CLINIC_INFO.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
