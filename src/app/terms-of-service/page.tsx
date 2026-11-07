import { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Terms of Service & Clinic Guidelines | Demo Clinic",
  description:
    "Terms of service, appointment cancellation protocol, and code of conduct for our clinic.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Terms of Service &amp; Appointment Protocols
        </h1>
        <p className="text-xs text-stone-500">
          Effective Date: January 1, 2025 • Multi-Specialty Demo Clinic
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-soft text-xs sm:text-sm text-stone-700 space-y-6 leading-relaxed">
        <h3 className="font-serif text-lg font-bold text-stone-900">
          1. Appointment Scheduling &amp; Slot Confirmation
        </h3>
        <p>
          Online appointment submissions constitute a request for a dedicated consultation slot. Our patient coordination desk confirms availability via telephone, email, or WhatsApp. Please arrive 10 to 15 minutes before your scheduled appointment time to complete preliminary vital checks.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          2. Rescheduling &amp; Cancellation Policy
        </h3>
        <p>
          We allocate substantial unhurried time (45 to 60 minutes) for each initial evaluation. If you must reschedule or cancel, please provide at least 4 hours advance notice via phone or WhatsApp so your slot can be released to patients on our emergency waitlist.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          3. Patient Conduct &amp; Zero Tolerance Policy
        </h3>
        <p>
          Our clinic maintains a safe, respectful environment for patients and clinical staff alike. Aggressive behavior, harassment, or verbal abuse toward medical or administrative team members will result in immediate termination of consultation without refund.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          4. Professional Medical Independence
        </h3>
        <p>
          Our physicians maintain absolute clinical independence. Treatments, diagnostic imaging, or prescriptions are recommended solely based on medical necessity and clinical appropriateness, never on financial quotas.
        </p>
      </div>

      <div className="text-center pt-2">
        <Link
          href="/"
          className="text-xs font-semibold text-brand-800 underline hover:text-brand-950"
        >
          ← Return to Clinic Home
        </Link>
      </div>
    </div>
  );
}

