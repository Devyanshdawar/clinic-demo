import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Award,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { testimonialsData } from "@/data/testimonials";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  return {
    title: `${doctor.name} - ${doctor.title} | Demo Clinic`,
    description: doctor.bio.slice(0, 160),
    openGraph: {
      title: `${doctor.name} - ${doctor.specialtyLabel}`,
      description: doctor.bio.slice(0, 160),
      images: [{ url: doctor.image }],
    },
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  // Filter testimonials related to this doctor's specialty
  const relatedReviews = testimonialsData.filter(
    (t) => t.specialty === doctor.specialty
  );

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/doctors" className="hover:text-stone-900 transition-colors">
            Our Doctors
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-brand-900">{doctor.name}</span>
        </nav>
      </div>

      {/* 2. Doctor Profile Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Portrait Image */}
            <div className="lg:col-span-5">
              <div className="relative h-96 sm:h-[440px] w-full rounded-2xl overflow-hidden shadow-soft bg-stone-100 border border-stone-200">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-900 shadow-sm">
                    {doctor.specialtyLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-brand-950/90 backdrop-blur-md rounded-xl text-gold-300 text-xs font-semibold flex items-center justify-between border border-gold-400/30">
                  <span className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-gold-400" />
                    <span>{doctor.experienceYears}+ Years Clinical Practice</span>
                  </span>
                  <span className="flex items-center space-x-1 text-white">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{doctor.rating} ({doctor.reviewCount} reviews)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Intro & CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-700">
                  Senior Clinical Consultant
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                  {doctor.name}
                </h1>
                <p className="text-sm sm:text-base font-medium text-stone-700">
                  {doctor.title}
                </p>
              </div>

              {/* Degrees Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {doctor.qualifications.map((q, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200/80"
                  >
                    {q}
                  </span>
                ))}
              </div>

              {/* Consulting Days */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start space-x-3 text-xs sm:text-sm text-stone-700">
                <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">In-Clinic Consultation Schedule:</strong>
                  <span>{doctor.availableDays.join(", ")}</span>
                </div>
              </div>

              {/* Biography preview */}
              <p className="text-sm text-stone-600 leading-relaxed">
                {doctor.bio}
              </p>

              {/* Booking CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}&service=${doctor.specialty}`}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-semibold text-sm shadow-soft transition-transform transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-gold-300" />
                  <span>Book Appointment with {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}</span>
                </Link>

                <Link
                  href={`/services/${doctor.specialty}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold text-sm transition-colors"
                >
                  <span>Explore Department Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-50 border border-brand-200/80 space-y-4">
          <div className="flex items-center space-x-2 text-brand-800">
            <Quote className="w-6 h-6 text-brand-700" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Practice Philosophy & Patient Care Ethos
            </h2>
          </div>
          <p className="text-base text-stone-700 italic leading-relaxed pl-8">
            &ldquo;{doctor.philosophies}&rdquo;
          </p>
        </div>
      </section>

      {/* 4. Credentials, Education, Certifications & Specialized Treatments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education & Certifications */}
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-6">
            <div>
              <div className="flex items-center space-x-2.5 mb-3 text-brand-800">
                <GraduationCap className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Medical Education & Fellowships
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {doctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-700 mt-2 shrink-0"></span>
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <div className="flex items-center space-x-2.5 mb-3 text-brand-800">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Board Certifications & Memberships
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {doctor.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-2 shrink-0"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialized Treatments Offered */}
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-4">
            <div className="flex items-center space-x-2.5 text-brand-800">
              <Award className="w-5 h-5" />
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Specialized Clinical Interventions
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              Advanced protocols administered directly by {doctor.name}:
            </p>
            <div className="space-y-2.5 pt-2">
              {doctor.treatmentsOffered.map((treat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-stone-50 border border-stone-100 flex items-center space-x-3 text-xs sm:text-sm text-stone-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{treat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patient Reviews Snippet */}
      {relatedReviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Patient Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Recent Patient Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedReviews.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-3"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-stone-100 text-xs font-semibold text-stone-900">
                  {rev.patientName} • <span className="text-brand-700 font-medium">{rev.serviceReceived}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* 7. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          title={`Schedule with ${doctor.name}`}
          subtitle={`Consult directly with ${doctor.name} at our clinic facility. Dedicated diagnostic time for your recovery.`}
          primaryButtonText="Book In-Person Visit"
          primaryButtonLink={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}&service=${doctor.specialty}`}
        />
      </section>
    </div>
  );
}

