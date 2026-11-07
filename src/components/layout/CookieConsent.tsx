"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("veritas_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("veritas_cookie_consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("veritas_cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className="bg-white rounded-2xl shadow-elevated border border-stone-200 p-5 text-stone-800">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-amber-50 rounded-xl text-gold-600">
              <Cookie className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm text-stone-900">
              Cookie & Patient Privacy Notice
            </h4>
          </div>
          <button
            onClick={acceptEssential}
            className="text-stone-400 hover:text-stone-600 p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">
          We use essential cookies to maintain secure appointment bookings and optional analytical cookies to improve portal usability. We never sell your medical browsing details. Learn more in our{" "}
          <Link
            href="/privacy-policy"
            className="text-brand-700 underline font-medium hover:text-brand-900"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-4 flex items-center space-x-2 pt-2 border-t border-stone-100">
          <button
            onClick={acceptAll}
            className="flex-1 py-2 px-3 rounded-xl bg-brand-900 hover:bg-brand-950 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={acceptEssential}
            className="py-2 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}

