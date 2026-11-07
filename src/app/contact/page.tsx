"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Car,
  Accessibility,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    department: "General Inquiry",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please retry.");
      }
    } catch {
      setErrorMessage("Network connection error. Please connect with us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${clinicData.whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent("Hello Demo Clinic, I would like to inquire about appointments and clinic services.")}`;

  return (
    <div className="space-y-16 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <MapPin className="w-3.5 h-3.5 text-gold-600" />
          <span>Medical District, Metro City</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Contact &amp; Clinic Location
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          We welcome inquiries, patient consultations, and medical record reviews. Get in touch with our patient coordination desk.
        </p>
      </div>

      {/* Main Grid: Left Details + Right Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-soft space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Clinic Contact Details
            </h3>

            <div className="space-y-4 text-sm text-stone-700">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-brand-700 shrink-0 mt-1" />
                <div>
                  <strong className="block text-stone-900 font-bold">Address</strong>
                  <span className="leading-relaxed">{clinicData.address.full}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-brand-700 shrink-0 mt-1" />
                <div>
                  <strong className="block text-stone-900 font-bold">Telephone Support</strong>
                  <a
                    href={`tel:${clinicData.phone.replace(/[^\d+]/g, "")}`}
                    className="text-brand-800 font-semibold hover:underline"
                  >
                    {clinicData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-brand-700 shrink-0 mt-1" />
                <div>
                  <strong className="block text-stone-900 font-bold">Email</strong>
                  <a
                    href={`mailto:${clinicData.email}`}
                    className="text-brand-800 font-semibold hover:underline"
                  >
                    {clinicData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pt-3 border-t border-stone-100">
                <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-1" />
                <div>
                  <strong className="block text-stone-900 font-bold">Hours of Operation</strong>
                  <p>Monday – Friday: 8:00 AM – 8:00 PM</p>
                  <p>Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="text-stone-500">Sunday: 9:00 AM – 1:00 PM (Priority)</p>
                </div>
              </div>
            </div>

            {/* Accessibility & Valet notice */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs text-stone-600">
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-brand-700" />
                <span>Complimentary Valet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Accessibility className="w-4 h-4 text-brand-700" />
                <span>Wheelchair Accessible</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp Coordination Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Have questions about specialized treatments or need guidance on booking? Fill in the form and our desk will respond promptly.
            </p>

            {submitSuccess ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif font-bold text-xl text-stone-900">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Thank you, {formData.fullName}. A member of our patient coordination team will review your inquiry and contact you within 2-4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      subject: "",
                      department: "General Inquiry",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="text-xs font-semibold text-brand-800 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Department of Interest
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm bg-white"
                    >
                      <option value="General Inquiry">General Clinical Inquiry</option>
                      <option value="Chiropractic">Chiropractic &amp; Spine</option>
                      <option value="Physiotherapy">Physiotherapy &amp; Rehab</option>
                      <option value="Orthopedics">Orthopedics &amp; Joint Care</option>
                      <option value="Aesthetics">Clinical Aesthetics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inquiry regarding sciatica decompression sessions"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Message / Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your query..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="mt-0.5 w-4 h-4 rounded text-brand-900 focus:ring-brand-700"
                    />
                    <span className="text-xs text-stone-600">
                      I agree to allow the clinic care coordination team to contact me regarding this inquiry. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-brand-900 hover:bg-brand-950 text-white font-semibold text-sm shadow-soft transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-card">
        <div className="p-6 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-lg text-stone-900">
              Interactive Location Map
            </h4>
            <p className="text-xs text-stone-600">
              {clinicData.address.full}
            </p>
          </div>
          <a
            href={clinicData.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-900 text-white text-xs font-semibold hover:bg-brand-950 transition-colors"
          >
            Open in Google Maps App
          </a>
        </div>
        <div className="h-96 w-full">
          <iframe
            title="Clinic Location Map"
            src={clinicData.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <MedicalDisclaimerBanner />
    </div>
  );
}

