import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Specialties & Departments | Chiropractic, Physiotherapy, Orthopedics & Aesthetics",
  description:
    "Explore our 4 specialized medical disciplines: Chiropractic Spine Care, Evidence-Based Physiotherapy, Orthopedic Joint Preservation, and Doctor-Led Medical Aesthetics.",
};

export default function ServicesOverviewPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <span>Integrated Care Framework</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Comprehensive Clinical Specialties
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Each department operates with state-of-the-art diagnostic and therapeutic modalities, synchronizing treatment plans to accelerate your overall health and mobility.
        </p>
      </section>

      {/* Grid of 4 Specialty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} isFeatured={true} />
          ))}
        </div>
      </section>

      {/* Cross-Specialty Advantage */}
      <section className="bg-stone-100/80 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <SectionHeading
              badge="Why Multi-Specialty Synergy Matters"
              title="How Our Departments Work Together"
              subtitle="Musculoskeletal and aesthetic problems rarely exist in isolation. Here is how our cross-referral model benefits you."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Spine + Physical Rehabilitation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Chiropractic adjustments decompress locked facet joints and relieve nerve impingement, creating the optimal mechanical window for our physiotherapists to strengthen stabilizing core musculature.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Orthopedics + Kinetic Conditioning
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                When knee osteoarthritis or shoulder impingement is evaluated, Dr. Vikram Singh provides diagnostic ultrasound and lubrication injections while our rehab team corrects lower-limb gait discrepancies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Clinical Aesthetics + Wellness
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Healthy posture and musculoskeletal balance naturally improve neck lines, jawline alignment, and facial symmetry, complemented by Dr. Ananya Roy’s medically supervised dermal collagen protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          title="Not Sure Which Specialty You Need?"
          subtitle="Our patient intake coordinators will assess your symptoms and pair you with the most appropriate senior physician."
          primaryButtonText="Request Assessment"
        />
      </section>
    </div>
  );
}

