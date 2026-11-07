"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import { Sparkles, X, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Spine & Neuro",
    "Physio Gym",
    "Consultation",
    "Aesthetics Suite",
    "Facility",
  ];

  const filteredItems = galleryItems.filter(
    (item) => selectedFilter === "All" || item.category === selectedFilter
  );

  return (
    <div className="space-y-16 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Clinical Architecture &amp; Atmosphere</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Facility &amp; Treatment Suites
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Designed with serene natural materials, biophilic greenery, acoustic privacy, and surgical-grade sanitation to elevate your healing experience.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === cat
                ? "bg-brand-900 text-white shadow-sm"
                : "bg-white border border-stone-200 hover:border-stone-300 text-stone-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-64 w-full overflow-hidden bg-stone-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-950/80 backdrop-blur-md text-gold-300">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-white/80 backdrop-blur-md text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-brand-900 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-96 w-full bg-stone-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                sizes="800px"
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                {activeModalItem.category}
              </span>
              <h3 className="font-serif font-bold text-2xl text-stone-900">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <MedicalDisclaimerBanner />

      <CtaBanner
        title="Experience Our Facility in Person"
        subtitle="Book a consultation and take a private tour of our treatment suites in Indiranagar, Bengaluru."
      />
    </div>
  );
}
