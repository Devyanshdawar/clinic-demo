import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldAlert, HeartHandshake } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-stone-300 pt-16 pb-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-900/80">
          {/* Col 1 & 2: Brand & Clinic Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center text-white shadow-md">
                <span className="font-serif text-2xl font-bold text-gold-300">V</span>
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-tight">
                  VERITAS
                </span>
                <p className="text-[10px] uppercase tracking-wider text-gold-400 font-medium">
                  Spine • Orthopedics • Physio • Aesthetics
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An evidence-first multidisciplinary center offering non-invasive chiropractic spinal care, sports physiotherapy, joint-preserving orthopedics, and clinical aesthetics under one roof.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-brand-900/60 border border-brand-800 text-xs text-gold-300">
                <HeartHandshake className="w-4 h-4 text-gold-400" />
                <span>Ethical Medical Practice • Zero Exaggerated Claims</span>
              </div>
            </div>
          </div>

          {/* Col 3: Clinical Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Specialties
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/chiropractic"
                  className="hover:text-gold-300 transition-colors"
                >
                  Chiropractic Care & Spine
                </Link>
              </li>
              <li>
                <Link
                  href="/services/physiotherapy"
                  className="hover:text-gold-300 transition-colors"
                >
                  Physiotherapy & Rehab
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orthopedics"
                  className="hover:text-gold-300 transition-colors"
                >
                  Orthopedics & Joint Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aesthetics"
                  className="hover:text-gold-300 transition-colors"
                >
                  Clinical Aesthetics & Skin
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-brand-400 hover:text-brand-300 font-semibold"
                >
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Patient Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-300 transition-colors">
                  About Our Clinic
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-gold-300 transition-colors">
                  Our Medical Specialists
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-gold-300 transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-300 transition-colors">
                  Patient Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-300 transition-colors">
                  Facility & Treatment Rooms
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hours & Location
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{clinicData.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                  {clinicData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${clinicData.email}`} className="hover:text-white">
                  {clinicData.email}
                </a>
              </div>
              <div className="flex items-start space-x-2 pt-1 border-t border-brand-900">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p>Mon - Fri: 8:00 AM – 8:00 PM</p>
                  <p>Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="text-stone-400">Sunday: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency & Medical Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-brand-900/40 border border-brand-800/80 text-xs text-stone-400 flex items-start space-x-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-stone-200">
              Medical Disclaimer & Emergency Notice:
            </p>
            <p className="leading-relaxed">
              The medical information provided on this website is for general educational purposes only and must not be used as a substitute for professional clinical diagnosis or medical advice. Results vary per individual depending on biological response, age, compliance, and severity. If you are experiencing an acute medical emergency, chest pain, or sudden severe neurological symptoms, please proceed immediately to your nearest emergency room or call local emergency dispatch.
            </p>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 space-y-4 md:space-y-0">
          <div>
            © {currentYear} {clinicData.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-stone-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-stone-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/medical-disclaimer" className="hover:text-stone-200 transition-colors">
              Medical Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-stone-200 transition-colors">
              Locate Clinic
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

