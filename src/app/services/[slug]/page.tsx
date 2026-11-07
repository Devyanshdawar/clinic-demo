import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import DoctorCard from "@/components/ui/DoctorCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Specialty Not Found",
    };
  }

  return {
    title: `${service.title} | Demo Clinic`,
    description: service.description.slice(0, 160),
    openGraph: {
      title: `${service.title} - Multi-Specialty Demo Clinic`,
      description: service.tagline,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Find related attending doctors
  const attendingDoctors = doctorsData.filter((doc) =>
    service.assignedDoctorIds.includes(doc.id)
  );

  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/services" className="hover:text-stone-900 transition-colors">
            Specialties
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-semibold text-brand-900">{service.shortTitle}</span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-900">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              <span>{service.accentBadge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={`/book-appointment?service=${service.id}`}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-semibold text-sm sm:text-base shadow-soft transition-transform transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-gold-300" />
                <span>Book {service.shortTitle} Consultation</span>
              </Link>

              <a
                href="#what-to-expect"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm sm:text-base transition-colors"
              >
                <span>What to Expect</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-stone-100">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-card">
                <span className="text-xs font-bold text-brand-900 block">
                  {service.tagline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conditions Treated */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diagnostic Scope"
          title="Conditions & Symptoms We Address"
          subtitle="Our evidence-based diagnostic protocols target the precise physiological origins of chronic and acute conditions."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.conditionsTreated.map((cond, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-soft space-y-2 hover:border-brand-300 transition-colors"
            >
              <div className="flex items-center space-x-2 text-brand-800">
                <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  {cond.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-7">
                {cond.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Treatment Methods & Technologies */}
      <section className="bg-stone-100/80 py-16 sm:py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Therapeutic Modalities"
            title="Advanced Treatment Methods"
            subtitle="Explore the modern equipment and clinical methods deployed during your treatment course."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.treatmentMethods.map((method, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {method.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What to Expect in a Session */}
      <section id="what-to-expect" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          badge="Step-by-Step Experience"
          title="What to Expect During Your Session"
          subtitle="From intake to aftercare, our visits are calm, unhurried, and thoroughly explained."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.sessionSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold">
                  Step 0{step.step}
                </span>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-950 text-white rounded-3xl p-8 sm:p-12 border border-brand-900 shadow-elevated">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-900 text-xs font-semibold text-gold-300">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Evidence-Backed Outcomes</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Clinically Documented Patient Benefits
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-300 pt-2">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Attending Doctors */}
      {attendingDoctors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clinical Leadership"
            title={`Specialist Leading ${service.shortTitle}`}
            subtitle="Meet the senior physician who oversees clinical protocols and directs your personalized care pathway."
          />

          <div className="mt-10 max-w-xl mx-auto">
            {attendingDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </section>
      )}

      {/* 8. Department Specific FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialty FAQs"
          title={`Frequently Asked About ${service.shortTitle}`}
          subtitle="Clear clinical answers to common questions regarding procedure safety, recovery, and session frequency."
        />

        <div className="mt-8">
          <FaqAccordion items={service.faqs.map(f => ({ ...f, category: service.id }))} />
        </div>
      </section>

      {/* 9. Medical Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* 10. Direct CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          title={`Schedule Your ${service.shortTitle} Consultation`}
          subtitle={`Take the decisive first step toward relief. Our ${service.shortTitle} clinical team is ready to evaluate your condition.`}
          primaryButtonText={`Book ${service.shortTitle}`}
          primaryButtonLink={`/book-appointment?service=${service.id}`}
        />
      </section>
    </div>
  );
}

