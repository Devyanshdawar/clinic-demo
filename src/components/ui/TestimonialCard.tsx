import { Star, CheckCircle, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-soft flex flex-col justify-between space-y-4 relative">
      <div className="space-y-3">
        {/* Star Rating & Verified */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
            ))}
          </div>
          {testimonial.verified && (
            <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              <span>Verified Patient</span>
            </span>
          )}
        </div>

        {/* Quote text */}
        <p className="text-stone-700 text-sm leading-relaxed italic relative">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Patient identity & Service Tag */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm text-stone-900">
            {testimonial.patientName} {testimonial.age ? `(${testimonial.age})` : ""}
          </h4>
          <p className="text-xs text-brand-700 font-medium">
            {testimonial.serviceReceived}
          </p>
        </div>
        <Quote className="w-6 h-6 text-stone-200" />
      </div>
    </div>
  );
}

