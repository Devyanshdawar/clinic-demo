import { Metadata } from "next";
import { doctorsData } from "@/data/doctors";
import DoctorCard from "@/components/ui/DoctorCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import { Award, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Medical Specialists & Doctors | Demo Clinic",
  description:
    "Meet our team of licensed chiropractors, sports physiotherapists, orthopedic surgeons, and aesthetic physicians. Internationally trained and accredited.",
};

export default function DoctorsPage() {
  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <Award className="w-3.5 h-3.5 text-gold-600" />
          <span>Accredited Medical Leadership</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Our Senior Medical Specialists
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Every consultation and clinical procedure is conducted by senior specialists with over a decade of dedicated clinical practice. We do not delegate clinical care to junior assistants.
        </p>
      </section>

      {/* Trust Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-brand-950 text-white">
          <div className="flex items-center space-x-4 p-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center text-gold-300 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-300">14+ Years</div>
              <div className="text-xs text-stone-300">Average Clinical Experience</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 border-t md:border-t-0 md:border-l border-brand-800">
            <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center text-gold-300 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-300">International</div>
              <div className="text-xs text-stone-300">Fellowships in UK, Munich & AIIMS</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 border-t md:border-t-0 md:border-l border-brand-800">
            <div className="w-12 h-12 rounded-2xl bg-brand-900 flex items-center justify-center text-gold-300 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-300">Synchronized</div>
              <div className="text-xs text-stone-300">Weekly Cross-Specialty Case Boards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </section>

      {/* Medical Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          title="Schedule Your Specialist Consultation"
          subtitle="Choose your preferred doctor and select a convenient consultation slot online."
          primaryButtonText="Choose Doctor & Book"
        />
      </section>
    </div>
  );
}

