import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Target,
  Sparkles,
  Award,
  CheckCircle,
  ArrowRight,
  Activity,
  Layers,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "About Our Clinic, Story & Medical Technology",
  description:
    "Learn about Veritas Spine, Ortho & Aesthetic Clinic—our founding philosophy, multidisciplinary synergy, advanced diagnostic technologies, and patient-first standards.",
};

export default function AboutPage() {
  const technologies = [
    {
      title: "Cox Technic 8 Flexion-Distraction",
      category: "Chiropractic & Spine",
      desc: "Motorized non-surgical traction table that reduces intradiscal pressure inside lumbar and cervical discs to as low as -192 mmHg, promoting nutrient rehydration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "High-Frequency Acoustic Shockwave & Class IV Laser",
      category: "Physiotherapy & Sports Rehab",
      desc: "Radial soundwaves and deep infrared photobiomodulation to break calcific tendinitis, accelerate collagen synthesis, and dissolve myofascial adhesions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "High-Resolution Musculoskeletal Ultrasound (MSK-US)",
      category: "Orthopedics & Biologics",
      desc: "Point-of-care dynamic real-time joint and tendon imaging, ensuring millimetric needle precision during viscosupplementation and PRP injections.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Visia Multi-Spectral Complexion Analysis & RF Microneedling",
      category: "Clinical Aesthetics",
      desc: "Cross-polarized UV photography to quantify subsurface pigmentation and pores, coupled with micro-insulated fractional radiofrequency for deep dermal remodeling.",
      image: "https://images.unsplash.com/photo-1512290900672-1f55b9e07802?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-xs font-semibold text-brand-800">
            <ShieldCheck className="w-4 h-4 text-brand-700" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            A New Standard for Integrated Musculoskeletal & Aesthetic Health
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Bridging the gap between conservative non-surgical biomechanics, advanced orthopedics, and doctor-led clinical aesthetics.
          </p>
        </div>
      </section>

      {/* 2. Clinic Story & Genesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Why We Founded Veritas
            </h2>
            <p>
              For years, patients suffering from chronic pain experienced an exhausting medical merry-go-round. An orthopedic surgeon might advise immediate surgery, while an isolated therapist offered exercise without diagnostic confirmation, and a chiropractor worked in a silo without surgical liaison.
            </p>
            <p>
              In 2018, our founders—Dr. Arjun Mehta, Dr. Priya Sharma, and Dr. Vikram Singh—decided to dissolve these artificial barriers. They recognized that patient outcomes accelerate dramatically when <strong>Chiropractic Biomechanics</strong>, <strong>Kinetic Physiotherapy</strong>, and <strong>Orthopedic Diagnostics</strong> sit at the very same table.
            </p>
            <p>
              Later, welcoming Dr. Ananya Roy to head our <strong>Clinical Aesthetics & Skin Medicine</strong> suite fulfilled our broader vision: true vitality encompasses both physical mobility and confidence in one’s natural personal presentation.
            </p>

            <div className="pt-3 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <div className="text-2xl font-serif font-bold text-brand-900">100%</div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">Doctor-Administered Procedures</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <div className="text-2xl font-serif font-bold text-gold-600">Zero</div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">Aggressive Sales Tactics</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Veritas Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Principles */}
      <section className="bg-stone-100/80 py-16 sm:py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Guiding Ethos"
            title="The 4 Pillars of Veritas Care"
            subtitle="The uncompromising standards that guide every consultation, injection, and adjustment."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-800">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">1. Root-Cause Focus</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We refuse to settle for transient pain suppression. We isolate the kinematic failure, disk compression, or tissue imbalance causing your symptoms.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">2. Joint Preservation First</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Native joint cartilage is irreplaceable. We deploy every evidence-based non-surgical therapy before discussing surgical reconstruction.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">3. Natural Aesthetic Harmony</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our dermatological ethos is &lsquo;undetectable rejuvenation.&rsquo; We enhance cellular collagen and skin tone without over-filling or unnatural distortion.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-soft space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-800">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">4. Transparent Communication</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Clear diagnoses, realistic prognosis timelines, zero hidden fees, and respect for your autonomy at every decision point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology & Equipment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diagnostic & Therapeutic Precision"
          title="Hospital-Grade Technology & Equipment"
          subtitle="We invest continuously in advanced rehabilitation and medical technologies to deliver measurable, quantifiable recovery."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-soft flex flex-col sm:flex-row"
            >
              <div className="relative h-48 sm:h-auto sm:w-48 bg-stone-100 shrink-0">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  {tech.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {tech.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Facility Gallery Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeading
            badge="Designed for Healing"
            title="A Serene, Biophilic Clinical Environment"
            subtitle="Explore our thoughtfully designed private treatment rooms, recovery suites, and rehabilitation gym."
            align="left"
            className="md:max-w-2xl"
          />
          <Link
            href="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-brand-800 hover:text-brand-950"
          >
            <span>View Full Facility Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold-600" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-soft border border-stone-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-base mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Medical Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimerBanner />
      </div>

      {/* 7. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          title="Meet Our Physicians In Person"
          subtitle="Experience the difference of compassionate, evidence-based multidisciplinary care."
        />
      </section>
    </div>
  );
}

