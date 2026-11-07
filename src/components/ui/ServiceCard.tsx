import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import { ServiceDetail } from "@/types";

interface ServiceCardProps {
  service: ServiceDetail;
  isFeatured?: boolean;
}

export default function ServiceCard({ service, isFeatured = false }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Activity":
        return <Activity className="w-5 h-5 text-brand-700" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-brand-700" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-brand-700" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gold-600" />;
      default:
        return <Activity className="w-5 h-5 text-brand-700" />;
    }
  };

  const isAesthetics = service.id === "aesthetics";

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden transition-all duration-300 ${
        isFeatured
          ? "bg-white border-2 border-brand-700/40 shadow-elevated"
          : "bg-white border border-stone-200/80 shadow-soft hover:shadow-card hover:-translate-y-1"
      }`}
    >
      {/* Top Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-stone-100">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>

        {/* Floating Specialty Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-md ${
              isAesthetics
                ? "bg-amber-950/80 text-amber-200 border border-amber-400/30"
                : "bg-brand-950/80 text-brand-100 border border-brand-400/30"
            }`}
          >
            <span>{service.accentBadge}</span>
          </span>
        </div>

        {/* Floating Icon Bottom Right */}
        <div className="absolute bottom-4 right-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
          {getIcon(service.iconName)}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-brand-900 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Conditions Treated Preview */}
        <div className="pt-2 border-t border-stone-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
            Targeted Conditions:
          </span>
          <ul className="space-y-1.5 text-xs text-stone-700">
            {service.conditionsTreated.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0"></span>
                <span className="line-clamp-1">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-stone-100">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-800 hover:text-brand-950 group-hover:translate-x-0.5 transition-all"
          >
            <span>Clinical Protocols</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
          <Link
            href={`/book-appointment?service=${service.id}`}
            className="px-3 py-1.5 rounded-full bg-stone-100 hover:bg-brand-900 hover:text-white text-stone-800 text-xs font-semibold transition-colors"
          >
            Book Care
          </Link>
        </div>
      </div>
    </div>
  );
}

