import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  GraduationCap, 
  Star,
  Activity,
  HeartHandshake,
  Stethoscope
} from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';

export const About = () => {
  return (
    <div className="space-y-20 lg:space-y-24 py-10">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
          <HeartHandshake className="w-4 h-4 text-teal-600" />
          About AuraCare Healthcare
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pioneering Human-Centric Clinical Excellence
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Founded by senior hospital physicians seeking to create a tranquil, patient-first clinic that eliminates tertiary hospital congestion without compromising on academic clinical standards.
        </p>
      </section>

      {/* 2. Mission & Vision Editorial Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Core Clinical Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To deliver patient-centric outpatient diagnostic and therapeutic care grounded in uncompromising integrity, medical transparency, and active communication. We believe patient healing starts the moment you are treated with dignity, active listening, and respect.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Zero unneeded diagnostic upsells or polypharmacy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Detailed consultation times with dedicated question answering
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Compassionate bedside manners with transparent clinical notes
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-6 border border-teal-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Long-term Vision</h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To establish a benchmark for neighborhood outpatient clinics across India, bridging the gap between primary neighborhood dispensaries and distant, crowded corporate hospitals through digital records, modern diagnostic precision, and board-certified doctors.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>National Accreditation Board (NABH) Audited</span>
              <span className="text-teal-400 font-semibold">Standard 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Doctor Profile Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Verified Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Senior Medical Consultants
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every consultant at AuraCare holds recognized postgraduate credentials (MD / MS / DNB) with active state medical registrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOCTORS.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition flex flex-col sm:flex-row gap-6"
            >
              <div className="sm:w-44 shrink-0">
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-full h-52 sm:h-full object-cover rounded-2xl shadow-sm"
                />
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {doc.specialization}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">{doc.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{doc.qualification}</p>

                  <div className="mt-2 text-xs text-slate-400 space-y-1">
                    <p className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                      <span>Reg: <strong className="text-slate-700">{doc.registrationNo}</strong></span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-teal-600" />
                      <span>{doc.experience}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-2.5">
                    {doc.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">OPD Timings</span>
                    <span className="font-semibold text-slate-800">{doc.timings}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-teal-700 px-3.5 py-2 rounded-xl transition"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Clinic Infrastructure & Hygiene Standards */}
      <section className="bg-slate-100/70 rounded-3xl p-8 sm:p-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-200">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-teal-800 text-xs font-bold uppercase tracking-wider border border-slate-200">
            Safety & Clinical Technology
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sterile Infrastructure Built for Infection Prevention
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our clinic maintains hospital-grade clean air standards and biological barrier sterilization so you and your loved ones remain safe from nosocomial infections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Class-B Vacuum Autoclaving</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dental and minor surgical instruments are sterilized under high pressure steam vacuum, individually sealed in sterile color-coded pouches opened only in front of the patient.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">HEPA Air Disinfection</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consultation suites and waiting lounges feature medical-grade continuous air filtration with germicidal UV sterilization cycles between patient intervals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Zero Contamination Sample Hub</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Barcoded phlebotomy collection using vacutainer tubes eliminates manual pipetting errors and provides completely tamper-free blood profiling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
