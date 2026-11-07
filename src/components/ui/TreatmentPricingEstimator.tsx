"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { SpecialtyKey } from "@/types";

interface PricingPlan {
  id: string;
  specialty: SpecialtyKey;
  serviceTitle: string;
  sessionDuration: string;
  initialConsultCost: string;
  followUpCost: string;
  recommendedSessions: string;
  inclusions: string[];
  insuranceReimbursable: boolean;
}

export const clinicPricingData: PricingPlan[] = [
  {
    id: "price-chiro",
    specialty: "chiropractic",
    serviceTitle: "Chiropractic Spine & Decompression",
    sessionDuration: "45 - 60 minutes",
    initialConsultCost: "₹1,800 - ₹2,200",
    followUpCost: "₹1,200 - ₹1,500 / session",
    recommendedSessions: "3 to 6 sessions (protocol-dependent)",
    inclusions: [
      "Biomechanical spine & posture scan",
      "Neurological reflex and dermatome evaluation",
      "Manual alignment & Cox flexion-distraction",
      "Ergonomic workstation advice",
    ],
    insuranceReimbursable: true,
  },
  {
    id: "price-physio",
    specialty: "physiotherapy",
    serviceTitle: "Physiotherapy & Sports Rehab",
    sessionDuration: "45 minutes",
    initialConsultCost: "₹1,500 - ₹1,800",
    followUpCost: "₹1,000 - ₹1,300 / session",
    recommendedSessions: "6 to 12 sessions (condition-dependent)",
    inclusions: [
      "Dynamic functional movement audit",
      "Targeted dry needling / electrotherapy",
      "Supervised kinetic chain exercises",
      "Digital video home exercise program",
    ],
    insuranceReimbursable: true,
  },
  {
    id: "price-ortho",
    specialty: "orthopedics",
    serviceTitle: "Orthopedic & Joint Consultation",
    sessionDuration: "30 - 45 minutes",
    initialConsultCost: "₹2,000 - ₹2,500",
    followUpCost: "₹1,200 (within 30 days)",
    recommendedSessions: "Consultative review + periodic checkups",
    inclusions: [
      "Senior orthopedic surgeon evaluation",
      "In-depth review of MRI / X-ray discs",
      "Point-of-care joint ultrasound review",
      "Personalized non-surgical joint roadmap",
    ],
    insuranceReimbursable: true,
  },
  {
    id: "price-aesthetics",
    specialty: "aesthetics",
    serviceTitle: "Clinical Aesthetics & Skin Medicine",
    sessionDuration: "45 - 75 minutes",
    initialConsultCost: "₹1,500 (Adjustable against treatment)",
    followUpCost: "Custom per procedure",
    recommendedSessions: "3 to 4 sessions for collagen induction",
    inclusions: [
      "Visia multi-spectral UV complexion analysis",
      "Direct dermatologist consultation",
      "Custom medical protocol formulation",
      "Clinical post-procedure soothing barrier care",
    ],
    insuranceReimbursable: false,
  },
];

export default function TreatmentPricingEstimator() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("price-chiro");
  const plan = clinicPricingData.find((p) => p.id === selectedPlanId) || clinicPricingData[0];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card p-6 sm:p-10">
      <div className="max-w-2xl mb-8 space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5 text-gold-600" />
          <span>Transparent Patient Economics</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          Transparent Consultation &amp; Treatment Estimates
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          We believe in honest, predictable clinical fees with zero unexpected charges. Select a clinical specialty below to view typical consultation and therapy fee structures.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {clinicPricingData.map((p) => {
          const isSelected = p.id === selectedPlanId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPlanId(p.id)}
              className={`p-3.5 rounded-2xl text-center text-xs font-semibold transition-all border ${
                isSelected
                  ? "bg-brand-900 text-white border-brand-900 shadow-sm"
                  : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
              }`}
            >
              {p.serviceTitle.split("&")[0]}
            </button>
          );
        })}
      </div>

      {/* Card Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-50/70 p-6 sm:p-8 rounded-3xl border border-stone-200">
        <div className="lg:col-span-6 space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">
              Department Tier
            </span>
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              {plan.serviceTitle}
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              Typical Session Duration: <strong>{plan.sessionDuration}</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">
                Initial Comprehensive Consult
              </span>
              <span className="font-serif text-lg font-bold text-brand-900">
                {plan.initialConsultCost}
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-stone-400 block">
                Follow-up Therapy Rate
              </span>
              <span className="font-serif text-lg font-bold text-stone-900">
                {plan.followUpCost}
              </span>
            </div>
          </div>

          <div className="text-xs text-stone-600">
            <strong>Expected Frequency:</strong> {plan.recommendedSessions}
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
              {plan.insuranceReimbursable
                ? "✓ Eligible for Outpatient Medical Insurance Reimbursement"
                : "ℹ Elective Aesthetic Procedure (Non-Insurance)"}
            </span>
          </div>
        </div>

        {/* Right Side: Inclusions & CTA */}
        <div className="lg:col-span-6 space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
            What is Included in Your Evaluation:
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
            {plan.inclusions.map((inc, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{inc}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <Link
              href={`/book-appointment?service=${plan.specialty}`}
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-xs font-semibold shadow-soft transition-transform transform hover:-translate-y-0.5"
            >
              <span>Book Appointment for {plan.specialty}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 leading-relaxed flex items-start space-x-2">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <span>
          <strong>Ethical Fee Notice:</strong> The rates shown are standardized indicative estimates. Exact diagnostic imaging requirements, needle interventions, or specialized injectable quantities are determined only following an in-person physical clinical examination.
        </span>
      </div>
    </div>
  );
}
