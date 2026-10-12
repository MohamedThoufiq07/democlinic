import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${CLINIC_INFO.whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Optional chat popup greeting */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl p-3.5 max-w-xs border border-teal-100 animate-bounce duration-1000 hidden sm:block">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0 animate-ping"></span>
            <div>
              <p className="text-xs font-bold text-slate-900">Need instant appointment booking?</p>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                Chat directly with our OPD help desk on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with AuraCare Clinic"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:px-4 sm:py-3.5 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-sm font-semibold tracking-wide pr-1">WhatsApp Chat</span>
      </a>
    </div>
  );
};
