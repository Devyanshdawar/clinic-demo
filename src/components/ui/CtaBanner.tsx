import Link from "next/link";
import { Calendar, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinic";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

export default function CtaBanner({
  title = "Ready to Experience Pain-Free Motion & Enhanced Vitality?",
  subtitle = "Schedule your comprehensive evaluation with our multidisciplinary clinical team at our healthcare facility.",
  primaryButtonText = "Schedule Consultation",
  primaryButtonLink = "/book-appointment",
}: CtaBannerProps) {
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent("Hello Demo Clinic, I would like to schedule a consultation.")}`;

  return (
    <div className="relative rounded-3xl overflow-hidden bg-brand-950 text-white p-8 sm:p-12 lg:p-14 shadow-elevated border border-brand-800">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-800/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-900/80 border border-brand-700/60 text-xs font-semibold text-gold-300">
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span>Patient-First • Evidence-Based Care • Zero Guesswork</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-brand-950 font-bold text-base shadow-gold transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-brand-950" />
            <span>{primaryButtonText}</span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-brand-900 hover:bg-brand-800 text-white font-semibold text-base border border-brand-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Quick WhatsApp Chat</span>
          </a>
        </div>

        {/* Small trust strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>Appointments Monday – Saturday</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Phone Support: {clinicData.phone}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

