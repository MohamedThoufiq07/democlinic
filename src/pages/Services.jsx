import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  Smile, 
  FlaskConical, 
  Activity, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info
} from 'lucide-react';
import { SPECIALTIES, CLINIC_INFO } from '../data/clinicData';

const IconMap = {
  Stethoscope,
  HeartPulse,
  Baby,
  Smile,
  FlaskConical,
  Activity
};

export const Services = () => {
  const [selectedDept, setSelectedDept] = useState('all');
  const navigate = useNavigate();

  const filteredSpecialties = selectedDept === 'all' 
    ? SPECIALTIES 
    : SPECIALTIES.filter(s => s.id === selectedDept);

  const handleInquire = (deptName) => {
    navigate('/contact', { state: { prefilledDepartment: deptName } });
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
          <Sparkles className="w-4 h-4 text-teal-600" />
          Outpatient Medical Specialties
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Clinical Services & Packages
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Transparent clinical care designed around prompt diagnosis, patient comfort, and evidence-based therapeutic treatment protocols.
        </p>
      </div>

      {/* 2. Department Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-6 border-b border-slate-200">
        <button
          onClick={() => setSelectedDept('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
            selectedDept === 'all'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Departments ({SPECIALTIES.length})
        </button>
        {SPECIALTIES.map((spec) => (
          <button
            key={spec.id}
            onClick={() => setSelectedDept(spec.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              selectedDept === spec.id
                ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {spec.name.split('&')[0]}
          </button>
        ))}
      </div>

      {/* 3. Detailed Specialty Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSpecialties.map((spec) => {
          const IconComp = IconMap[spec.icon] || Stethoscope;
          return (
            <div
              key={spec.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Standard OPD Fee</span>
                    <span className="text-lg font-extrabold text-slate-900">{spec.price}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{spec.name}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {spec.fullDesc}
                </p>

                {/* Scope & Package Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Department Capabilities & Scope
                  </span>
                  {spec.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleInquire(spec.name)}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire & Schedule</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(spec.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition"
                >
                  WhatsApp Query
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Preventive Health Checkup Packages Showcase */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-2xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            Annual Preventive Care
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Curated Family Wellness Packages
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Catch metabolic, cardiac, and hormonal warning signs months before clinical symptoms emerge. All packages include a comprehensive doctor review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-teal-400">Basic Essential</span>
              <h4 className="text-xl font-bold mt-1 text-white">Metabolic Shield</h4>
              <p className="text-2xl font-extrabold text-white mt-3">₹999 <span className="text-xs font-normal text-slate-400">/ test profile</span></p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Complete Hemogram (CBC, ESR)</li>
                <li>• Fasting Blood Sugar & HbA1c</li>
                <li>• Lipid Profile (Cholesterol, HDL, LDL)</li>
                <li>• Liver & Kidney Function Tests</li>
                <li>• Free General Physician review</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-6 block text-center py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold transition"
            >
              Book Metabolic Shield
            </Link>
          </div>

          <div className="bg-gradient-to-b from-teal-950/60 to-slate-800/90 border-2 border-teal-500 rounded-2xl p-6 relative flex flex-col justify-between shadow-teal-glow">
            <span className="absolute -top-3 right-6 bg-teal-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <span className="text-xs uppercase font-bold text-teal-300">Comprehensive</span>
              <h4 className="text-xl font-bold mt-1 text-white">Executive Master Health</h4>
              <p className="text-2xl font-extrabold text-white mt-3">₹2,499 <span className="text-xs font-normal text-slate-400">/ full profile</span></p>
              <ul className="mt-4 space-y-2 text-xs text-slate-200">
                <li>• Everything in Metabolic Shield</li>
                <li>• 12-Lead Resting Digital ECG</li>
                <li>• Thyroid Stimulating Hormone (TSH)</li>
                <li>• Vitamin D3 & Vitamin B12 levels</li>
                <li>• Urine Routine & Microscopic analysis</li>
                <li>• Detailed MD Physician Consultation</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-6 block text-center py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-900 text-xs font-bold transition"
            >
              Book Master Health Profile
            </Link>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-cyan-400">Senior Care</span>
              <h4 className="text-xl font-bold mt-1 text-white">Cardio-Diabetic Advanced</h4>
              <p className="text-2xl font-extrabold text-white mt-3">₹3,499 <span className="text-xs font-normal text-slate-400">/ senior profile</span></p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Full Executive Profile included</li>
                <li>• 2D Echocardiography Screening</li>
                <li>• Serum Creatinine & eGFR assessment</li>
                <li>• Diabetic Neuropathy screening</li>
                <li>• Cardiologist & Dietician consult</li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-6 block text-center py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition"
            >
              Book Cardio-Diabetic Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
