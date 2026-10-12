import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES } from '../data/clinicData';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Bio & Accreditation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Aura<span className="text-teal-400">Care</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              AuraCare Multi-Specialty Clinic & Diagnostics delivers compassionate, ethical, and technology-driven healthcare. Certified under stringent quality controls, our team brings top-tier tertiary care experience to community outpatient medicine.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-medium border border-teal-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                NABH Benchmark Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-medium border border-cyan-500/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Reg. No: {CLINIC_INFO.regNo}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  About Clinical Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  Treatments & Specialties
                </Link>
              </li>
              <li>
                <Link to="/patient-care" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  Patient Care & Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  Contact & Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Clinical Depts</h4>
            <ul className="space-y-2.5 text-sm">
              {SPECIALTIES.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <Link to="/services" className="text-slate-400 hover:text-teal-400 transition flex items-center justify-between group">
                    <span>{spec.name.split('&')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Timings & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Contact & Hours</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="hover:text-white">
                  {CLINIC_INFO.emergencyPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs">Mon – Sat: 8:00 AM – 9:00 PM</p>
                  <p className="text-slate-400 text-xs">Sun: 9:00 AM – 2:00 PM (Emergency 24/7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Medical Disclaimer */}
        <div className="pt-8 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Medical Notice:</strong> Information provided on this website is intended for educational, preventive, and appointment scheduling purposes only. It is not a substitute for direct clinical examination, diagnostic confirmation, or medical advice by a licensed doctor. For acute life-threatening emergencies, immediately dial national emergency numbers (112 / 102) or proceed to the nearest hospital casualty department.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
            <p>© {new Date().getFullYear()} AuraCare Healthcare Clinic. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition">Patient Rights</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition">NABH Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
