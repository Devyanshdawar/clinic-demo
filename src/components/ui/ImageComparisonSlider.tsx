"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle: string;
  disclaimer: string;
}

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before (Baseline)",
  afterLabel = "After (Post-Treatment)",
  title,
  subtitle,
  disclaimer,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h3 className="font-serif text-2xl font-bold text-stone-900">{title}</h3>
        <p className="text-xs sm:text-sm text-stone-600">{subtitle}</p>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-stone-100 border border-stone-200 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-brand-900/90 text-gold-300 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border border-gold-400/30">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped with width percentage) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-stone-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-elevated"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-900 text-gold-300 border-2 border-white shadow-md flex items-center justify-center text-xs font-bold">
            ↔
          </div>
        </div>
      </div>

      {/* Instructions & Ethical Disclaimer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-500 pt-1">
        <span className="font-medium text-stone-700">
          👆 Drag the slider horizontally to compare before and after.
        </span>
        <div className="inline-flex items-center space-x-1.5 text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
          <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span className="text-[11px]">{disclaimer}</span>
        </div>
      </div>
    </div>
  );
}

