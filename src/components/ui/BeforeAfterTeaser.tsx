"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Info, Sliders, Columns } from "lucide-react";
import { beforeAfterCases } from "@/data/cases";
import ImageComparisonSlider from "@/components/ui/ImageComparisonSlider";

export default function BeforeAfterTeaser() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<"sideBySide" | "slider">("slider");
  const currentCase = beforeAfterCases[activeTab] || beforeAfterCases[0];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card p-6 sm:p-10 space-y-6">
      {/* Category selector pills & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-100 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
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

        {/* View Toggle */}
        <div className="flex items-center space-x-1 bg-stone-100 p-1 rounded-2xl">
          <button
            onClick={() => setViewMode("slider")}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === "slider"
                ? "bg-white text-brand-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Drag Slider</span>
          </button>
          <button
            onClick={() => setViewMode("sideBySide")}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === "sideBySide"
                ? "bg-white text-brand-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Side by Side</span>
          </button>
        </div>
      </div>

      {viewMode === "slider" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <ImageComparisonSlider
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              beforeLabel={currentCase.beforeLabel}
              afterLabel={currentCase.afterLabel}
              title={currentCase.title}
              subtitle={`Protocol duration: ${currentCase.sessionsCount}`}
              disclaimer={currentCase.disclaimer}
            />
          </div>
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
          </div>
        </div>
      ) : (
        /* Side by Side Mode */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

            <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 leading-snug flex items-start space-x-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{currentCase.disclaimer}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
