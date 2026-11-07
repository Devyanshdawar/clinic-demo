import Link from "next/link";
import { AlertCircle, Home, Calendar, Phone } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-card text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
            Error 404
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-stone-600">
            The page you requested may have moved or does not exist. Let us guide you back to our care services.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-xs font-semibold shadow-soft transition-colors"
          >
            <Home className="w-4 h-4 text-gold-300" />
            <span>Return to Clinic Home</span>
          </Link>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors"
          >
            <Calendar className="w-4 h-4 text-brand-700" />
            <span>Book an Appointment</span>
          </Link>
        </div>

        <p className="text-[11px] text-stone-400 pt-2">
          Need immediate assistance? Call our desk: {clinicData.phone}
        </p>
      </div>
    </div>
  );
}

