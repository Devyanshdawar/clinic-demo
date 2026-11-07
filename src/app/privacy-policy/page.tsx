import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Patient Data Privacy Policy | Veritas Clinic",
  description:
    "How Veritas Clinic safeguards patient medical records, personal information, and digital communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 text-brand-900 border border-brand-200 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-brand-700" />
          <span>Patient Data Protection</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Patient Privacy &amp; Data Protection Policy
        </h1>
        <p className="text-xs text-stone-500">
          Effective Date: January 1, 2025 • {clinicData.name}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-soft text-xs sm:text-sm text-stone-700 space-y-6 leading-relaxed">
        <p>
          At {clinicData.name}, protecting the confidentiality and integrity of your medical and personal data is a foundational responsibility. This policy outlines how we collect, store, and utilize information through our online appointment booking portal and in-clinic records.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          1. Information We Collect
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Personal Identifiers:</strong> Name, phone number, email address, age, gender.</li>
          <li><strong>Clinical Intake Notes:</strong> Chief symptoms, previous surgery history, preferred physician, and requested consultation date.</li>
          <li><strong>Digital Technical Data:</strong> Browser type, anonymized IP address, and cookie tokens strictly utilized to enhance security and session stability.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          2. How We Utilize Patient Information
        </h3>
        <p>
          Your information is solely used to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Register and confirm your in-person medical appointment.</li>
          <li>Send administrative reminders and clinical preparation instructions via SMS, WhatsApp, or email.</li>
          <li>Ensure attending physicians have accurate baseline symptom descriptions prior to your arrival.</li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          3. Absolute Prohibition on Sale of Medical Data
        </h3>
        <p>
          <strong>We never sell, rent, lease, or monetize patient personal or medical data to third-party advertisers, pharmaceutical companies, or data brokers.</strong> Your data is shared strictly with attending healthcare providers directly involved in your care continuum.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          4. Data Security Standards
        </h3>
        <p>
          All electronic transmission of patient data is secured using TLS 1.3 encryption. Internal records are stored on protected, access-controlled healthcare databases with role-based authentication.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          5. Contact Our Privacy Officer
        </h3>
        <p>
          For inquiries or requests regarding data correction or record deletion, please reach our privacy coordinator at <a href={`mailto:${clinicData.email}`} className="text-brand-800 font-semibold underline">{clinicData.email}</a> or visit us at our Indiranagar clinic.
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

