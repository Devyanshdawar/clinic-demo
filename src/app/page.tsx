import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { testimonialsData } from "@/data/testimonials";
import { faqsData } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import DoctorCard from "@/components/ui/DoctorCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import BeforeAfterTeaser from "@/components/ui/BeforeAfterTeaser";
import InteractiveSymptomChecker from "@/components/ui/InteractiveSymptomChecker";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";

export default function HomePage() {
  const allServices = Object.values(servicesData);
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-gradient-to-b from-stone-100/80 via-white to-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Subtitle, CTAs, Trust Metrics */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-xs font-semibold text-brand-900 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-gold-500"></span>
                <span>Bengaluru’s Integrated Spine, Rehab & Aesthetic Center</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15]">
                Restoring Motion. <br />
                <span className="text-brand-900">Relieving Chronic Pain.</span> <br />
                <span className="italic font-normal font-serif text-stone-700">
                  Elevating Natural Vitality.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
                Veritas unites world-class <strong>Chiropractic Alignment</strong>, <strong>Evidence-Based Physiotherapy</strong>, <strong>Joint-Preserving Orthopedics</strong>, and <strong>Doctor-Led Medical Aesthetics</strong>. No rushed visits, zero aggressive sales—only ethical, multidisciplinary care tailored to your biology.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-semibold text-base shadow-elevated transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-gold-300" />
                  <span>Book In-Person Consultation</span>
                </Link>

                <a
                  href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-800 font-semibold text-base border border-stone-300 shadow-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-700" />
                  <span>{clinicData.phone}</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-600 font-medium">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>UK & AIIMS Trained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>14+ Yrs Avg Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>15,000+ Relieved Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Hospital-Grade Sterility</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image */}
                <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-stone-200">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                    alt="Veritas Modern Multi-Specialty Clinic Facility"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                  
                  {/* Overlay Clinic Status */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-card border border-stone-200/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-stone-900">
                          Comprehensive Musculoskeletal Center
                        </div>
                        <p className="text-[11px] text-stone-500">
                          Walk-ins & scheduled appointments available
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Open Today
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Pill */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3.5 shadow-elevated border border-stone-200 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold text-sm">
                    ★ 4.9
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900">Patient Satisfaction</div>
                    <p className="text-[10px] text-stone-500">Across 1,200+ verified reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR CORE SPECIALTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Multidisciplinary Excellence"
          title="Four Synchronized Clinical Specialties"
          subtitle="Unlike fragmented practices, our chiropractors, physiotherapists, orthopedic surgeons, and aesthetic physicians consult collaboratively under one roof for holistic patient recovery."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 2.5 INTERACTIVE SYMPTOM CARE NAVIGATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSymptomChecker />
      </section>

      {/* 3. WHY CHOOSE VERITAS */}
      <section className="bg-stone-100/80 py-16 sm:py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-card border border-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Veritas Clinical Consultation in Progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-900 text-white p-5 rounded-2xl shadow-elevated border border-gold-400/30 max-w-xs">
                <div className="font-serif text-2xl font-bold text-gold-300">
                  Root-Cause
                </div>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  We don’t mask symptoms with temporary painkillers; we recondition faulty mechanics permanently.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <SectionHeading
                badge="The Veritas Distinction"
                title="Why Discerning Patients Choose Veritas"
                subtitle="From elite athletes to seniors seeking mobility, our care pathways prioritize patient autonomy, conservative non-surgical protocols, and measurable progress."
                align="left"
              />

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start space-x-3.5">
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-800 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900">
                      Cross-Specialty Medical Concurrence
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      Your chiropractor, physiotherapist, and orthopedic surgeon meet on complex disc and joint cases. No contradicting advice or disjointed treatment plans.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start space-x-3.5">
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-800 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900">
                      Strict Joint-Preservation Ethos
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      Surgery is considered an absolute last resort. We exhaust cutting-edge viscosupplementation, shockwave, and decompression first.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start space-x-3.5">
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-800 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-900">
                      Doctor-Delivered Aesthetic Precision
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      All laser, RF microneedling, and cosmetic treatments are performed directly by qualified medical doctors, never delegated to non-clinical technicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCTOR HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="World-Class Practitioners"
            title="Meet Our Leading Medical Specialists"
            subtitle="Trained at premier institutions in the UK, Germany, AIIMS, and Manipal with decades of dedicated patient care."
            align="left"
            className="md:max-w-2xl"
          />
          <Link
            href="/doctors"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-brand-800 hover:text-brand-950 transition-colors"
          >
            <span>View All Doctors & Credentials</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctorsData.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* 5. BEFORE / AFTER CLINICAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Objective Outcomes"
          title="Documented Clinical Progress"
          subtitle="Explore anonymized patient progress across spinal alignment, knee rehabilitation, and dermal rejuvenation."
        />

        <div className="mt-10">
          <BeforeAfterTeaser />
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS */}
      <section className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-16 sm:py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Experiences"
            title="What Our Patients Say"
            subtitle="Real stories of mobility regained, severe nerve pain resolved, and renewed confidence."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.slice(0, 6).map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-800 hover:text-brand-950"
            >
              <span>Read all verified patient reviews</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Answers to common queries regarding treatment expectations, insurance reimbursement, and safety."
        />

        <div className="mt-10">
          <FaqAccordion items={homeFaqs} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-brand-800 hover:underline"
          >
            <span>Have more questions? Browse our complete clinical FAQ</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>
      </section>

      {/* 8. LOCATION, HOURS & CLINIC STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Information Side */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  <span>Central Bengaluru Location</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Visit Our Wellness Pavilion
                </h3>

                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Conveniently situated in Indiranagar with dedicated valet parking, elevator access, wheelchair accessibility, and soothing private suites.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-100 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Address:</strong>
                    <span className="text-stone-600">{clinicData.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Clinical Hours:</strong>
                    <p className="text-stone-600">Mon – Fri: 8:00 AM – 8:00 PM</p>
                    <p className="text-stone-600">Saturday: 8:00 AM – 6:00 PM</p>
                    <p className="text-stone-500">Sunday: 9:00 AM – 1:00 PM (Emergency care)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Telephone / WhatsApp:</strong>
                    <a
                      href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`}
                      className="text-brand-800 font-semibold hover:underline block"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={clinicData.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-brand-900 text-white font-semibold text-xs sm:text-sm hover:bg-brand-950 transition-colors"
                >
                  Get Driving Directions
                </a>
                <Link
                  href="/book-appointment"
                  className="px-5 py-2.5 rounded-full border border-stone-300 text-stone-800 font-semibold text-xs sm:text-sm hover:bg-stone-50 transition-colors"
                >
                  Book Visit
                </Link>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-6 h-80 sm:h-96 lg:h-auto min-h-[340px] relative bg-stone-100">
              <iframe
                title="Veritas Clinic Location Map"
                src={clinicData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* 10. BOTTOM CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner />
      </section>
    </div>
  );
}

