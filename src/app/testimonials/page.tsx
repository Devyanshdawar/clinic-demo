"use client";

import { useState } from "react";
import { Star, ShieldCheck, HeartHandshake } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import { SpecialtyKey } from "@/types";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = testimonialsData.filter((t) =>
    activeFilter === "all" ? true : t.specialty === activeFilter
  );

  return (
    <div className="space-y-16 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
          <span>Patient Trust &amp; Verified Reviews</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Patient Stories &amp; Clinical Outcomes
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Read genuine feedback from patients who overcame debilitating disc herniations, post-operative stiffness, knee arthritis, and skin concerns at Veritas.
        </p>
      </div>

      {/* Aggregate Rating Banner */}
      <div className="p-8 rounded-3xl bg-brand-950 text-white flex flex-col md:flex-row items-center justify-around gap-6 text-center md:text-left">
        <div>
          <div className="font-serif text-4xl font-bold text-gold-300">4.94 / 5.0</div>
          <div className="flex items-center justify-center md:justify-start space-x-1 my-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
            ))}
          </div>
          <p className="text-xs text-stone-300">Based on 1,360+ verified patient reviews</p>
        </div>

        <div className="h-10 w-px bg-brand-800 hidden md:block"></div>

        <div>
          <div className="font-serif text-4xl font-bold text-white">96.8%</div>
          <p className="text-xs text-stone-300 mt-1">Patients Report Measurable Functional Gain</p>
        </div>

        <div className="h-10 w-px bg-brand-800 hidden md:block"></div>

        <div>
          <div className="font-serif text-4xl font-bold text-white">98.2%</div>
          <p className="text-xs text-stone-300 mt-1">Would Recommend Veritas to Friends &amp; Family</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { key: "all", label: "All Departments" },
          { key: "chiropractic", label: "Chiropractic & Spine" },
          { key: "physiotherapy", label: "Physiotherapy & Sports" },
          { key: "orthopedics", label: "Orthopedics & Joint" },
          { key: "aesthetics", label: "Clinical Aesthetics" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeFilter === tab.key
                ? "bg-brand-900 text-white shadow-sm"
                : "bg-white border border-stone-200 hover:border-stone-300 text-stone-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>

      <MedicalDisclaimerBanner />

      <CtaBanner
        title="Start Your Healing Story Today"
        subtitle="Consult directly with our experienced physicians in Bengaluru."
      />
    </div>
  );
}

