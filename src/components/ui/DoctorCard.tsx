import Link from "next/link";
import Image from "next/image";
import { Star, Award, Calendar, ArrowRight } from "lucide-react";
import { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-stone-200/90 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Photo Container */}
        <div className="relative h-72 w-full overflow-hidden bg-stone-100">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

          {/* Specialty tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-900 shadow-sm backdrop-blur-md">
              {doctor.specialtyLabel}
            </span>
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-950/90 text-gold-300 text-xs font-semibold border border-gold-400/30">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>{doctor.experienceYears}+ Years Clinical Exp.</span>
          </div>

          {/* Rating */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/90 text-stone-900 text-xs font-bold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{doctor.rating}</span>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-brand-900 transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs font-medium text-brand-700 mt-0.5">
              {doctor.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {doctor.qualifications.map((q, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
              >
                {q}
              </span>
            ))}
          </div>

          <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed pt-1">
            {doctor.bio}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="inline-flex items-center space-x-1 text-xs font-semibold text-stone-700 hover:text-brand-900 transition-colors"
        >
          <span>Full Biography</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
        </Link>

        <Link
          href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}&service=${doctor.specialty}`}
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-300" />
          <span>Consult</span>
        </Link>
      </div>
    </div>
  );
}

