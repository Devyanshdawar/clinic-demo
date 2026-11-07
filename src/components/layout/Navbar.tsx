"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  Activity,
  ShieldCheck,
  Stethoscope,
  MapPin,
} from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const serviceLinks = [
    {
      title: "Chiropractic Care",
      href: "/services/chiropractic",
      desc: "Spinal adjustments, disc decompression & posture",
      icon: Activity,
    },
    {
      title: "Physiotherapy & Rehab",
      href: "/services/physiotherapy",
      desc: "Sports injuries, dry needling & post-op rehab",
      icon: ShieldCheck,
    },
    {
      title: "Orthopedics & Joint Care",
      href: "/services/orthopedics",
      desc: "Cartilage preservation, ultrasound & arthritis",
      icon: Stethoscope,
    },
    {
      title: "Clinical Aesthetics",
      href: "/services/aesthetics",
      desc: "Doctor-led skin rejuvenation, RF microneedling & anti-aging",
      icon: Sparkles,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top utility strip */}
      <div className="bg-brand-950 text-stone-200 text-xs py-2 px-4 border-b border-brand-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Mon-Fri: 8AM-8PM | Sat: 8AM-6PM</span>
            </span>
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Indiranagar, Bengaluru</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-stone-400">
              Languages: <strong className="text-stone-200 font-medium">English / Hindi / Kannada</strong>
            </span>
            <a
              href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center space-x-1.5 text-gold-300 hover:text-gold-200 font-semibold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{clinicData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-stone-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center text-white shadow-md group-hover:bg-brand-800 transition-colors">
              <span className="font-serif text-2xl font-bold tracking-tighter text-gold-300">V</span>
            </div>
            <div>
              <div className="font-serif font-bold text-xl md:text-2xl text-stone-900 tracking-tight leading-tight">
                VERITAS
              </div>
              <p className="text-[10px] md:text-[11px] font-medium tracking-wider uppercase text-brand-700">
                Spine • Ortho • Physio • Aesthetics
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/" ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              About Clinic
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-brand-800 font-semibold bg-brand-50"
                    : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
                }`}
              >
                <span>Specialties</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-elevated border border-stone-200/80 p-3 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 px-3 py-1">
                    Specialized Departments
                  </div>
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-900 group-hover:text-gold-300 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-brand-900">
                            {item.title}
                          </div>
                          <div className="text-xs text-stone-500 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="mt-2 pt-2 border-t border-stone-100 px-3">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center justify-between"
                    >
                      <span>Explore all 4 specialties overview</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/doctors"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/doctors" ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              Our Specialists
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/blog") ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              Patient Resources
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/gallery" ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              Facility
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact" ? "text-brand-800 font-semibold bg-brand-50" : "text-stone-700 hover:text-brand-800 hover:bg-stone-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center space-x-2 bg-brand-900 text-white hover:bg-brand-950 px-5 py-2.5 rounded-full font-medium text-sm shadow-soft transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-gold-300" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              href="/book-appointment"
              className="inline-flex items-center space-x-1.5 bg-brand-900 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-300" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                About Clinic & Facility
              </Link>
              <div className="px-3 py-2">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Clinical Specialties
                </div>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-sm font-medium text-stone-700 hover:text-brand-800 py-1"
                    >
                      • {s.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/doctors"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                Our Specialists
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                Patient Resources / Articles
              </Link>
              <Link
                href="/gallery"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                Facility Gallery
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50"
              >
                Contact & Location
              </Link>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-2">
              <a
                href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-700" />
                <span>Call Clinic: {clinicData.phone}</span>
              </a>
              <Link
                href="/book-appointment"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-brand-900 text-white text-sm font-semibold shadow-soft"
              >
                <Calendar className="w-4 h-4 text-gold-300" />
                <span>Book Appointment Online</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

