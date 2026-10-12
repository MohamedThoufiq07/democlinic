import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle, 
  User, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SPECIALTIES } from '../data/clinicData';

export const Contact = () => {
  const location = useLocation();
  const prefilled = location.state?.prefilledDepartment || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    department: prefilled || 'General Medicine & Diabetology',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real API interaction
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      department: 'General Medicine & Diabetology',
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
          <Calendar className="w-4 h-4 text-teal-600" />
          Direct Scheduling & OPD Assistance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Book an Appointment or Inquire
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Select your preferred department and convenient time slot. Our scheduling coordinator will confirm your appointment within 15 minutes.
        </p>
      </div>

      {/* 2. Main Two-Column Scheduling Form & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft-md">
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Appointment Request Submitted!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your consultation slot for <span className="text-teal-700 font-semibold">{formData.department}</span> on <span className="font-semibold text-slate-800">{formData.preferredDate || 'your chosen date'}</span> ({formData.timeSlot}) has been queued.
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl max-w-sm mx-auto text-xs text-slate-500 border border-slate-200 space-y-1">
                <p>A confirmation SMS and WhatsApp ticket will be dispatched to <strong className="text-slate-700">{formData.phone}</strong>.</p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition"
                >
                  Book Another Patient
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hi%2C%20I%20just%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(formData.fullName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white font-medium text-xs hover:bg-emerald-600 transition"
                >
                  Verify over WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Patient Consultation Form</h3>
                <p className="text-xs text-slate-500 mt-1">Please provide accurate contact details for token assignment.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Consultation Date *
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50 text-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Department Dropdown */}
                <div>
                  <label htmlFor="department" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Department / Specialty *
                  </label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50 text-slate-800"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.name}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time Slot */}
                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Convenient Slot *
                  </label>
                  <select
                    id="timeSlot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50 text-slate-800"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:30 PM - 04:00 PM)">Afternoon (12:30 PM - 04:00 PM)</option>
                    <option value="Evening (04:30 PM - 08:30 PM)">Evening (04:30 PM - 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Medical Concern / Symptoms (Optional)
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="e.g. Mild continuous cough for 4 days and high temperature in evenings..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-slate-50/50"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero pre-payment required. Pay comfortably at clinic reception after consultation.</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-sm shadow-teal-glow shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Consultation Appointment</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact Details, WhatsApp Link, Emergency Call, & Map Placeholder */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact & Emergency Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-7 shadow-xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-400" />
              <span>Direct Clinic Lines</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Emergency Desk (24/7)</span>
                <p className="text-lg font-extrabold text-teal-400 mt-1">
                  <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="hover:underline">
                    {CLINIC_INFO.emergencyPhone}
                  </a>
                </p>
                <p className="text-xs text-slate-400 mt-1">Acute nebulization, trauma, emergency triage</p>
              </div>

              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">OPD Helpdesk & Billing</span>
                <p className="text-lg font-extrabold text-white mt-1">
                  <a href={`tel:${CLINIC_INFO.receptionPhone}`} className="hover:underline">
                    {CLINIC_INFO.receptionPhone}
                  </a>
                </p>
                <p className="text-xs text-slate-400 mt-1">Timings: Mon – Sat (8:00 AM – 9:00 PM)</p>
              </div>
            </div>

            {/* Direct WhatsApp trigger */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${CLINIC_INFO.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          {/* Embedded Google Maps Placeholder Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft-sm space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  Clinic Location
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{CLINIC_INFO.address}</p>
              </div>
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                Valet Parking
              </span>
            </div>

            {/* Styled Map Graphic Representation */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                alt="Clinic Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-white text-xs font-bold mt-2 drop-shadow-md">
                  AuraCare Medical Enclave
                </span>
                <span className="text-slate-200 text-[11px] drop-shadow-sm">
                  Opposite Central Park Gate 2
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
              <span>Landmark: Near Metro Pillar 142</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-bold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
