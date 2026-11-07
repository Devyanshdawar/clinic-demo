"use client";

import { useState } from "react";
import { HelpCircle, ChevronRight } from "lucide-react";
import { faqsData } from "@/data/faqs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { key: "All", label: "All Questions" },
    { key: "General", label: "General & Insurance" },
    { key: "chiropractic", label: "Chiropractic Care" },
    { key: "physiotherapy", label: "Physiotherapy" },
    { key: "orthopedics", label: "Orthopedics" },
    { key: "aesthetics", label: "Medical Aesthetics" },
  ];

  const filteredFaqs = faqsData.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="space-y-16 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
          <span>Patient Knowledge &amp; Guidance</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Clear, medically reviewed answers to guide your decision-making across appointments, insurance reimbursement, safety, and rehabilitation expectations.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setSelectedCategory(c.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === c.key
                ? "bg-brand-900 text-white shadow-sm"
                : "bg-white border border-stone-200 hover:border-stone-300 text-stone-700"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft">
        <FaqAccordion items={filteredFaqs} defaultOpenIndex={0} />
      </div>

      <MedicalDisclaimerBanner />

      <CtaBanner
        title="Still Have Unanswered Questions?"
        subtitle="Our patient desk is happy to answer any questions about treatments or pricing."
        primaryButtonText="Contact Our Care Desk"
        primaryButtonLink="/contact"
      />
    </div>
  );
}

