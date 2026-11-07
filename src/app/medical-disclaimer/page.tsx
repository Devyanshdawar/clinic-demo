import { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, AlertTriangle } from "lucide-react";
import { clinicData } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Medical & Clinical Disclaimer | Demo Clinic",
  description:
    "Important clinical notice regarding medical information, individualized patient outcomes, and emergency health situations.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Patient Notice</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Medical Disclaimer &amp; Compliance Statement
        </h1>
        <p className="text-xs text-stone-500">
          Last revised: January 2025 • Governing Clinical Practice at {clinicData.name}
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
        <div className="flex items-center space-x-2 font-bold text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
          <span>Emergency Medical Notice</span>
        </div>
        <p>
          If you are experiencing a life-threatening medical emergency, acute chest pain, severe shortness of breath, loss of consciousness, sudden onset of facial weakness, or acute traumatic bone fractures, please do NOT wait for an online appointment. Proceed immediately to the nearest hospital emergency department or call your local ambulance service (112 / 102).
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-soft prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 space-y-5">
        <h3 className="font-serif text-lg font-bold text-stone-900">
          1. Informational &amp; Educational Purpose Only
        </h3>
        <p>
          All content, articles, images, diagnostic explanations, and therapeutic outlines presented on this website are provided strictly for educational and informational purposes. The information is not intended to be, nor should it ever be treated as, a substitute for professional medical diagnosis, clinical evaluation, or doctor-prescribed treatment.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          2. No Doctor-Patient Relationship
        </h3>
        <p>
          Accessing this portal, reading its articles, submitting a contact form inquiry, or requesting an appointment slot does not establish a formal doctor-patient relationship. A binding doctor-patient relationship is established only once an in-person clinical intake consultation has been conducted by a licensed physician at our clinic and verified with informed consent.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          3. Individual Patient Variances &amp; No Guaranteed Cures
        </h3>
        <p>
          In accordance with medical ethics and governing healthcare regulations, {clinicData.name} strictly refrains from guaranteeing specific outcomes or making exaggerated clinical promises. Human anatomy, biological healing rates, chronicity of spinal subluxation, ligament tear severity, cartilage wear, and dermal cellular response vary widely between individuals. Case studies and before/after comparisons presented on this site illustrate individual historical responses under specific clinical conditions and do not represent a guarantee of identical results for any other individual.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          4. Medical Aesthetics Regulations
        </h3>
        <p>
          All medical aesthetic treatments (including radiofrequency microneedling, chemical peels, and laser rejuvenation) are medical procedures with defined indications and contraindications. Individual suitability is assessed through comprehensive skin typing (Fitzpatrick scale review) and health screening by our consultant dermatologist prior to any treatment administration.
        </p>

        <h3 className="font-serif text-lg font-bold text-stone-900">
          5. Third-Party Links &amp; Scientific Citations
        </h3>
        <p>
          External links to clinical research databases, medical journals, or map navigations are provided for patient convenience. Our clinic does not control nor endorse third-party software or unverified claims found on external websites.
        </p>
      </div>

      <div className="text-center pt-4">
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

