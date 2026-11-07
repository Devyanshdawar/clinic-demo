"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Activity,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SpecialtyKey } from "@/types";

interface SymptomOption {
  id: string;
  label: string;
  area: string;
  recommendedSpecialty: SpecialtyKey;
  specialtyName: string;
  doctorName: string;
  rationale: string;
  badge: string;
}

export default function InteractiveSymptomChecker() {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>("neck-headache");

  const symptoms: SymptomOption[] = [
    {
      id: "neck-headache",
      label: "Tech Neck, Cervical Stiffness & Chronic Headaches",
      area: "Neck & Upper Spine",
      recommendedSpecialty: "chiropractic",
      specialtyName: "Chiropractic Care & Spine Alignment",
      doctorName: "Dr. Arjun Mehta",
      rationale:
        "Suboccipital tension and forward head posture compress cervical facet joints, producing cervicogenic headaches. Gentle spinal adjustments and flexion-distraction decompress nerve roots at the source.",
      badge: "Targeted Spine Decompression",
    },
    {
      id: "sciatica-disc",
      label: "Shooting Leg Pain, Sciatica & Lumbar Disc Herniation",
      area: "Lower Back & Legs",
      recommendedSpecialty: "chiropractic",
      specialtyName: "Chiropractic Care (Cox Decompression)",
      doctorName: "Dr. Arjun Mehta",
      rationale:
        "When an L4-L5 or L5-S1 disc impinges on the sciatic nerve, specialized non-rotational motorized traction reduces intradiscal pressure to relieve nerve irritation.",
      badge: "Non-Surgical Disc Relief",
    },
    {
      id: "sports-acl-shoulder",
      label: "Sports Tears (ACL, Rotator Cuff, Sprains) & Post-Op Rehab",
      area: "Knees, Shoulders & Ligaments",
      recommendedSpecialty: "physiotherapy",
      specialtyName: "Physiotherapy & Sports Medicine",
      doctorName: "Dr. Priya Sharma",
      rationale:
        "Rebuilding neuromuscular firing patterns, joint stability, and restoring 100% limb symmetry through progressive kinetic exercise, dry needling, and acoustic shockwave.",
      badge: "Active Functional Reconditioning",
    },
    {
      id: "knee-hip-arthritis",
      label: "Chronic Knee/Hip Osteoarthritis & Cartilage Wear",
      area: "Major Weight-Bearing Joints",
      recommendedSpecialty: "orthopedics",
      specialtyName: "Orthopedics & Joint Preservation",
      doctorName: "Dr. Vikram Singh",
      rationale:
        "Evaluating joint space narrowing via point-of-care ultrasound, offering hyaluronic viscosupplementation injections and offloader bracing to postpone or eliminate surgical replacement.",
      badge: "Joint-Sparing Biologics",
    },
    {
      id: "acne-scars-anti-aging",
      label: "Acne Scars, Expression Lines, Melasma & Skin Laxity",
      area: "Facial Aesthetics & Dermatology",
      recommendedSpecialty: "aesthetics",
      specialtyName: "Clinical Aesthetics & Skin Medicine",
      doctorName: "Dr. Ananya Roy",
      rationale:
        "Doctor-delivered fractional RF microneedling and multi-spectral skin analysis to trigger true dermal neo-collagenesis while preserving subtle, natural facial expressions.",
      badge: "Medical Dermal Collagenesis",
    },
  ];

  const currentSelection =
    symptoms.find((s) => s.id === selectedSymptomId) || symptoms[0];

  const getIcon = (spec: SpecialtyKey) => {
    switch (spec) {
      case "chiropractic":
        return <Activity className="w-5 h-5 text-brand-700" />;
      case "physiotherapy":
        return <ShieldCheck className="w-5 h-5 text-brand-700" />;
      case "orthopedics":
        return <Stethoscope className="w-5 h-5 text-brand-700" />;
      case "aesthetics":
        return <Sparkles className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card p-6 sm:p-10">
      <div className="max-w-2xl mb-8 space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-gold-600" />
          <span>Interactive Care Navigator</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          Find the Right Specialty for Your Symptoms
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Not sure whether your condition requires Chiropractic alignment, Physical rehabilitation, Orthopedic imaging, or Aesthetic dermatology? Select your symptoms below:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Symptom Selectors */}
        <div className="lg:col-span-6 space-y-2.5">
          {symptoms.map((s) => {
            const isSelected = selectedSymptomId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSymptomId(s.id)}
                className={`w-full p-4 rounded-2xl text-left border-2 transition-all flex items-center justify-between ${
                  isSelected
                    ? "border-brand-900 bg-brand-50/60 shadow-sm"
                    : "border-stone-200/80 hover:border-stone-300 bg-white"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-0.5">
                    {s.area}
                  </span>
                  <div className="font-serif font-bold text-sm text-stone-900">
                    {s.label}
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                    isSelected
                      ? "border-brand-900 bg-brand-900 text-white"
                      : "border-stone-300"
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Recommendation Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-brand-950 via-brand-900 to-stone-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-brand-800 shadow-elevated">
          <div className="flex items-center justify-between border-b border-brand-800/80 pb-4">
            <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider">
              Recommended Clinical Specialty:
            </span>
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
              {getIcon(currentSelection.recommendedSpecialty)}
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-2xl font-bold text-white">
              {currentSelection.specialtyName}
            </h4>
            <p className="text-xs text-gold-300 font-medium">
              Lead Specialist: {currentSelection.doctorName}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-300">
              Why this pathway is recommended:
            </span>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {currentSelection.rationale}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={`/book-appointment?service=${currentSelection.recommendedSpecialty}&doctor=${encodeURIComponent(
                currentSelection.doctorName
              )}`}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-brand-950 font-bold text-xs shadow-gold transition-transform transform hover:-translate-y-0.5"
            >
              <span>Book with {currentSelection.doctorName}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-950" />
            </Link>

            <Link
              href={`/services/${currentSelection.recommendedSpecialty}`}
              className="inline-flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              <span>View Department Protocols</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

