import { AlertCircle } from "lucide-react";

export default function MedicalDisclaimerBanner() {
  return (
    <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-xs text-amber-950 flex items-start space-x-3.5 my-6">
      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
      <div className="space-y-1">
        <h4 className="font-semibold text-amber-900">
          Medical Information & Clinical Practice Notice:
        </h4>
        <p className="text-amber-800/90 leading-relaxed">
          The content on this website is published for informational and educational purposes only and must not be regarded as medical advice, clinical diagnosis, or treatment prescription. Every individual’s anatomy, pathology, and recovery timeline are unique. Prior to starting any spinal adjustments, physical rehabilitation, joint injections, or aesthetic procedures, an in-person physical clinical consultation with a licensed healthcare practitioner is required.
        </p>
      </div>
    </div>
  );
}

