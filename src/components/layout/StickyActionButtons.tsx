"use client";

import Link from "next/link";
import { MessageCircle, Calendar } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function StickyActionButtons() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(clinicData.whatsappMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Demo Clinic on WhatsApp"
        className="pointer-events-auto flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-elevated transition-transform transform hover:scale-105 group"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white" />
        <span className="text-xs font-semibold hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Book Now Quick Button */}
      <Link
        href="/book-appointment"
        className="pointer-events-auto flex items-center space-x-2 bg-brand-900 hover:bg-brand-950 text-white px-4 py-3 rounded-full shadow-elevated border border-gold-400/40 transition-transform transform hover:scale-105 group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
        </span>
        <Calendar className="w-4 h-4 text-gold-300" />
        <span className="text-xs font-semibold">Book Appointment</span>
      </Link>
    </div>
  );
}

