"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-card text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            System Notice
          </span>
          <h1 className="font-serif text-2xl font-bold text-stone-900">
            Something went wrong
          </h1>
          <p className="text-xs text-stone-600">
            We encountered an unexpected error while loading this page. Our team has been notified.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-xs font-semibold shadow-soft transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-gold-300" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4 text-brand-700" />
            <span>Return to Clinic Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

