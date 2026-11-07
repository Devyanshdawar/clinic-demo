"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Info } from "lucide-react";
import { beforeAfterCases } from "@/data/cases";

export default function BeforeAfterTeaser() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = beforeAfterCases[activeTab] || beforeAfterCases[0];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card p-6 sm:p-10">
      {/* Category selector pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {beforeAfterCases.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === idx
                ? "bg-brand-900 text-white shadow-sm"
                : "bg-stone-100 hover:bg-stone-200 text-stone-700"
            }`}
          >
            {item.title.split("&")[0]}
          </button>
        ))}
      </div>

      {/* Case Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Images */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Before Image */}
          <div className="space-y-2">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <Image
                src={currentCase.beforeImage}
                alt={`${currentCase.title} - Before`}
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3 py-1 rounded-full text-xs font-semibold">
                {currentCase.beforeLabel}
              </div>
            </div>
          </div>

          {/* After Image */}
          <div className="space-y-2">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-100 border border-brand-300">
              <Image
                src={currentCase.afterImage}
                alt={`${currentCase.title} - After`}
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-900/90 backdrop-blur-sm text-gold-300 px-3 py-1 rounded-full text-xs font-semibold border border-gold-400/30">
                {currentCase.afterLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clinical Case Summary */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
            <span className="capitalize">{currentCase.specialty} Case Study</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-stone-900">
            {currentCase.title}
          </h3>

          <div className="p-3 bg-stone-50 rounded-xl text-xs font-semibold text-stone-700 border border-stone-200/70">
            Protocol Timeline: <span className="text-brand-900 font-bold">{currentCase.sessionsCount}</span>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {currentCase.description}
          </p>

          {/* Mandatory Ethical Notice */}
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 leading-snug flex items-start space-x-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{currentCase.disclaimer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

