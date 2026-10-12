import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CreditCard, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { HEALTH_ARTICLES, CLINIC_INFO } from '../data/clinicData';

export const PatientCare = () => {
  return (
    <div className="space-y-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
          <BookOpen className="w-4 h-4 text-teal-600" />
          Patient Education & First-Time Visitor Guide
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Your Health, Our Guidance
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Everything you need for a frictionless clinic visit, plus evidence-based wellness articles written by our practicing physicians.
        </p>
      </div>

      {/* 2. First-Time Patient Guide (What to bring, timings, insurance) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: What to Bring */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft-sm">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">What to Bring to Your OPD Visit</h3>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Helping our doctors evaluate your medical history with 100% accuracy:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Previous doctor prescriptions & discharge summaries</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Current medication strips or list of daily dosages</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Any blood reports or imaging done in last 6-12 months</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>Govt Photo ID (Aadhaar / Driving License / Passport)</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Insurance & Billing Assistance */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft-sm">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Insurance & Cashless Support</h3>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Hassle-free reimbursement documentation prepared at our front desk:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Itemized bills compliant with Star Health, HDFC ERGO, Care</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Doctor signature & medical council registration seal</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Diagnostic lab report copies signed by Pathologist</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Digital payment receipts dispatched over WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* Card 3: OPD Protocols & Timings */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">OPD Flow & Fast-Track Triage</h3>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Smooth, respectful care designed to respect your valuable time:
          </p>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Check-in 10 minutes prior to your allocated time slot</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Preliminary vitals recorded by nursing staff (BP, Pulse, SpO2)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Priority express triage for elderly patients & infants</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Pharmacy counter right beside reception for immediate pickup</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. SEO-Rich Health Blog & Medical Articles */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Doctor-Authored Wellness Library
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Preventive Health Articles & Practical Advice
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-2 sm:mt-0">
            Medically reviewed insights designed to empower you with lifestyle interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-teal-800 shadow-sm">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">By {art.author}</span>
                <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 4. Help desk callout */}
      <div className="bg-teal-50 border border-teal-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">Have a specific question before coming in?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Our front-desk care coordinators are available from 8 AM to 9 PM daily to assist with directions and prep instructions.
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="shrink-0 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-3 rounded-xl transition shadow-sm"
        >
          Contact Support Desk
        </Link>
      </div>
    </div>
  );
};
