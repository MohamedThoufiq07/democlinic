import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  HeartPulse
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TopAlertBar = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-3 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center md:text-left">
        {/* Left Side: Emergency Desk & Hotline */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-400 font-semibold text-[11px] sm:text-xs border border-teal-500/30 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Emergency Desk 24/7
          </span>
          <span className="text-slate-300 text-[11px] sm:text-xs">
            <span className="hidden sm:inline text-slate-400 mr-1">Hotline:</span>
            <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="text-white font-bold hover:text-teal-300 transition-colors underline sm:no-underline">
              {CLINIC_INFO.emergencyPhone}
            </a>
          </span>
        </div>

        {/* Right Side: OPD Hours & Location */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-teal-400 shrink-0" />
            <span>OPD: 8:00 AM – 9:00 PM</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-slate-400">
            <span className="text-slate-600">•</span>
            <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
            <span>Sector 14, Health City</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments & Services', path: '/services' },
    { name: 'Patient Care & Guides', path: '/patient-care' },
    { name: 'Contact & Booking', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <TopAlertBar />
      <nav className="glass-nav py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Mark */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-teal-700 transition-colors">
                Aura<span className="text-teal-600">Care</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 mt-1">
                Multi-Specialty & Diagnostics
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                  isActive(link.path)
                    ? 'text-teal-700 bg-teal-50/80 font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${CLINIC_INFO.receptionPhone}`} 
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-600 bg-slate-100/80 hover:bg-slate-200/60 px-3.5 py-2 rounded-xl transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Call Reception</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-teal-glow shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 bg-white/95 rounded-2xl p-4 shadow-xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'text-teal-700 bg-teal-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a 
                href={`tel:${CLINIC_INFO.receptionPhone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                Call Reception
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 text-white text-sm font-semibold shadow-md shadow-teal-500/20"
              >
                <Calendar className="w-4 h-4" />
                Book Doctor Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
