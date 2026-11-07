"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Activity,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { SpecialtyKey, AppointmentFormData } from "@/types";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";

function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = (searchParams.get("service") as SpecialtyKey) || "chiropractic";
  const initialDoctor = searchParams.get("doctor") || "";

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<AppointmentFormData>({
    service: initialService,
    doctor: initialDoctor,
    date: "",
    timeSlot: "",
    patientName: "",
    email: "",
    phone: "",
    age: "",
    gender: "prefer-not-to-say",
    isFirstVisit: true,
    chiefComplaint: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialService, initialDoctor]);

  const specialtyOptions = [
    {
      id: "chiropractic" as SpecialtyKey,
      title: "Chiropractic Care & Spine",
      desc: "Disc decompression, neck/back pain, posture realignment",
      icon: Activity,
    },
    {
      id: "physiotherapy" as SpecialtyKey,
      title: "Physiotherapy & Rehab",
      desc: "Sports injuries, post-op recovery, dry needling, mobility",
      icon: ShieldCheck,
    },
    {
      id: "orthopedics" as SpecialtyKey,
      title: "Orthopedics & Joint Care",
      desc: "Cartilage preservation, ultrasound injections, fracture care",
      icon: Stethoscope,
    },
    {
      id: "aesthetics" as SpecialtyKey,
      title: "Clinical Aesthetics & Skin",
      desc: "Doctor-led skin rejuvenation, RF microneedling, anti-aging",
      icon: Sparkles,
    },
  ];

  const availableDoctors = doctorsData.filter(
    (d) => d.specialty === formData.service
  );

  const timeSlots = [
    "08:30 AM",
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:30 PM",
    "06:30 PM",
    "07:15 PM",
  ];

  // Helper date generator for next 14 days (excluding Sundays if desired)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const isSunday = nextDate.getDay() === 0;
      dates.push({
        iso: nextDate.toISOString().split("T")[0],
        display: nextDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        isSunday,
      });
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.service) errors.service = "Please select a specialty.";
    }

    if (step === 2) {
      if (!formData.doctor) errors.doctor = "Please select an attending physician.";
    }

    if (step === 3) {
      if (!formData.date) errors.date = "Please pick a consultation date.";
      if (!formData.timeSlot) errors.timeSlot = "Please choose a preferred time slot.";
    }

    if (step === 4) {
      if (!formData.patientName || formData.patientName.trim().length < 2) {
        errors.patientName = "Please enter your full name.";
      }
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
      }
      if (!formData.phone || formData.phone.trim().length < 8) {
        errors.phone = "Please enter a valid phone or WhatsApp number.";
      }
      if (!formData.chiefComplaint || formData.chiefComplaint.trim().length < 10) {
        errors.chiefComplaint = "Please describe your symptoms (at least 10 characters).";
      }
      if (!formData.consent) {
        errors.consent = "You must acknowledge the clinical communication consent.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setBookingRef(result.bookingReference || "VRT-CONFIRMED");
        setSubmitSuccess(true);
      } else {
        setFormErrors({
          api: result.message || "Failed to submit appointment. Please try again.",
        });
      }
    } catch {
      setFormErrors({
        api: "Network error. Please check your connection or contact us via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${clinicData.whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Demo Clinic, I would like to book an appointment for ${formData.service} with ${formData.doctor || "a specialist"}.`
  )}`;

  // Render Confirmation Screen
  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-stone-200/90 shadow-elevated p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Booking Confirmed &amp; Logged
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Thank You, {formData.patientName}!
          </h2>
          <p className="text-sm text-stone-600">
            Your consultation request has been delivered to our medical coordination desk.
          </p>
        </div>

        {/* Reference Code Box */}
        <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-3">
          <div className="flex justify-between items-center border-b border-stone-200 pb-2">
            <span className="text-xs text-stone-500 font-semibold uppercase">Booking Reference:</span>
            <span className="font-mono text-sm font-bold text-brand-900">{bookingRef}</span>
          </div>
          <div className="text-xs space-y-1.5 text-stone-700">
            <p><strong>Specialty:</strong> <span className="capitalize">{formData.service}</span></p>
            <p><strong>Attending Doctor:</strong> {formData.doctor}</p>
            <p><strong>Requested Date:</strong> {formData.date}</p>
            <p><strong>Requested Time:</strong> {formData.timeSlot}</p>
            <p><strong>Clinic Address:</strong> {clinicData.address.full}</p>
          </div>
        </div>

        <p className="text-xs text-stone-500 leading-relaxed">
          A confirmation SMS and email have been dispatched. Our patient coordinator will contact you if any timing adjustments are required.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Notify us via WhatsApp</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold text-xs transition-colors"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stepper indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[
            { step: 1, label: "Specialty" },
            { step: 2, label: "Doctor" },
            { step: 3, label: "Schedule" },
            { step: 4, label: "Patient Info" },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center flex-1 relative">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === item.step
                    ? "bg-brand-900 text-white ring-4 ring-brand-100"
                    : currentStep > item.step
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-200 text-stone-600"
                }`}
              >
                {currentStep > item.step ? "✓" : item.step}
              </div>
              <span className="text-[11px] font-medium text-stone-600 mt-1.5 hidden sm:block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-card p-6 sm:p-10">
        {formErrors.api && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{formErrors.api}</span>
          </div>
        )}

        {/* STEP 1: SELECT SPECIALTY */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                1. Select Clinical Specialty
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Choose the primary area for your medical evaluation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {specialtyOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = formData.service === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        service: opt.id,
                        doctor: "", // reset doctor when service changes
                      }));
                    }}
                    className={`p-5 rounded-2xl text-left border-2 transition-all flex items-start space-x-4 ${
                      isSelected
                        ? "border-brand-900 bg-brand-50/50 shadow-sm"
                        : "border-stone-200 hover:border-stone-300 bg-white"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-brand-900 text-gold-300"
                          : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {formErrors.service && (
              <p className="text-xs text-red-600">{formErrors.service}</p>
            )}

            <div className="pt-6 flex justify-end">
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-sm font-semibold shadow-soft transition-all"
              >
                <span>Continue to Select Doctor</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT DOCTOR */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                2. Select Attending Specialist
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Choose your preferred physician for <strong className="capitalize">{formData.service}</strong>:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {availableDoctors.map((doc) => {
                const isSelected = formData.doctor === doc.name;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, doctor: doc.name }))
                    }
                    className={`w-full p-4 sm:p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between ${
                      isSelected
                        ? "border-brand-900 bg-brand-50/50 shadow-sm"
                        : "border-stone-200 hover:border-stone-300 bg-white"
                    }`}
                  >
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-brand-700 font-medium">
                        {doc.title}
                      </p>
                      <p className="text-xs text-stone-500 mt-1">
                        {doc.qualifications.join(" • ")} • {doc.experienceYears}+ Yrs Exp
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-brand-900 bg-brand-900 text-white"
                          : "border-stone-300"
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-gold-400"></span>}
                    </div>
                  </button>
                );
              })}

              {/* Any Available Specialist Option */}
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    doctor: `First Available ${formData.service.toUpperCase()} Specialist`,
                  }))
                }
                className={`w-full p-4 rounded-2xl text-left border-2 transition-all flex items-center justify-between ${
                  formData.doctor.startsWith("First Available")
                    ? "border-brand-900 bg-brand-50/50"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    First Available Specialist
                  </h4>
                  <p className="text-xs text-stone-500">
                    Recommended if you require the soonest available consultation.
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    formData.doctor.startsWith("First Available")
                      ? "border-brand-900 bg-brand-900 text-white"
                      : "border-stone-300"
                  }`}
                >
                  {formData.doctor.startsWith("First Available") && (
                    <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  )}
                </div>
              </button>
            </div>

            {formErrors.doctor && (
              <p className="text-xs text-red-600">{formErrors.doctor}</p>
            )}

            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-sm font-semibold shadow-soft"
              >
                <span>Continue to Date &amp; Time</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SELECT DATE & TIME SLOT */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                3. Choose Date &amp; Time Slot
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Select your preferred in-person consultation timing:
              </p>
            </div>

            {/* Date Grid */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Available Dates (Next 14 Days):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {availableDates.map((d) => {
                  const isSelected = formData.date === d.iso;
                  return (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, date: d.iso }))
                      }
                      className={`p-3 rounded-xl text-center border transition-all ${
                        isSelected
                          ? "bg-brand-900 text-white border-brand-900 font-bold shadow-sm"
                          : d.isSunday
                          ? "bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100"
                          : "bg-white border-stone-200 text-stone-800 hover:border-brand-700"
                      }`}
                    >
                      <div className="text-xs font-semibold">{d.display}</div>
                      {d.isSunday && (
                        <div className="text-[10px] text-amber-500">Morning only</div>
                      )}
                    </button>
                  );
                })}
              </div>
              {formErrors.date && (
                <p className="text-xs text-red-600 mt-1.5">{formErrors.date}</p>
              )}
            </div>

            {/* Time Slot Grid */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Available Time Slots:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = formData.timeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, timeSlot: slot }))
                      }
                      className={`py-2.5 px-3 rounded-xl text-center text-xs font-semibold border transition-all ${
                        isSelected
                          ? "bg-brand-900 text-white border-brand-900 shadow-sm"
                          : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-white hover:border-stone-300"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {formErrors.timeSlot && (
                <p className="text-xs text-red-600 mt-1.5">{formErrors.timeSlot}</p>
              )}
            </div>

            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-brand-900 hover:bg-brand-950 text-white text-sm font-semibold shadow-soft"
              >
                <span>Continue to Patient Details</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: PATIENT DETAILS & SUBMISSION */}
        {currentStep === 4 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                4. Patient Contact &amp; Clinical Symptoms
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Please provide your contact information and brief clinical concerns.
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200/80 text-xs text-stone-800 flex flex-wrap gap-4 justify-between">
              <div>
                <span className="text-stone-500 block">Selected Care:</span>
                <strong className="capitalize">{formData.service}</strong>
              </div>
              <div>
                <span className="text-stone-500 block">Physician:</span>
                <strong>{formData.doctor}</strong>
              </div>
              <div>
                <span className="text-stone-500 block">Date &amp; Time:</span>
                <strong>{formData.date} at {formData.timeSlot}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditi Deshmukh"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                />
                {formErrors.patientName && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.patientName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="aditi@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
                />
                {formErrors.email && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Phone / WhatsApp Number *
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
                {formErrors.phone && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Age &amp; Patient Category
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Age"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-24 px-4 py-2.5 rounded-xl border border-stone-300 text-sm"
                  />
                  <select
                    value={formData.isFirstVisit ? "first" : "returning"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isFirstVisit: e.target.value === "first",
                      })
                    }
                    className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 text-sm bg-white"
                  >
                    <option value="first">First-Time Patient</option>
                    <option value="returning">Returning Patient</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Chief Complaint / Symptoms */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Primary Symptoms / Reason for Visit *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe what symptoms you are experiencing (e.g., lower back pain radiating to left leg for 3 weeks, knee swelling after stairs, or acne scar consultation)..."
                value={formData.chiefComplaint}
                onChange={(e) =>
                  setFormData({ ...formData, chiefComplaint: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
              ></textarea>
              {formErrors.chiefComplaint && (
                <p className="text-xs text-red-600 mt-1">
                  {formErrors.chiefComplaint}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start space-x-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 rounded text-brand-900 focus:ring-brand-700"
                />
                <span className="text-xs text-stone-600 leading-relaxed">
                  I consent to the clinic storing my details to coordinate this appointment and sending confirmation via SMS/Email/WhatsApp. I understand this booking request is subject to clinic confirmation. *
                </span>
              </label>
              {formErrors.consent && (
                <p className="text-xs text-red-600 mt-1">{formErrors.consent}</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={isSubmitting}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-brand-950 text-sm font-bold shadow-gold transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Registering Appointment...</span>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4" />
                    <span>Confirm &amp; Register Appointment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* WhatsApp Click-to-chat fallback */}
      <div className="mt-8 text-center p-6 bg-stone-50 rounded-3xl border border-stone-200">
        <h4 className="font-serif font-bold text-base text-stone-900 mb-1">
          Prefer Instant Chat or Urgent Scheduling?
        </h4>
        <p className="text-xs text-stone-600 mb-4">
          Our patient coordinators are active on WhatsApp from 8:00 AM to 8:00 PM for real-time slot checking.
        </p>
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Directly on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <div className="space-y-12 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <CalendarIcon className="w-3.5 h-3.5 text-gold-600" />
          <span>In-Person Clinical Consultations</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Book Your Appointment
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Follow our 4-step intake form to match with the appropriate specialist at our clinic.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12 text-sm text-stone-500">Loading booking portal...</div>}>
        <BookingForm />
      </Suspense>

      <div className="max-w-4xl mx-auto">
        <MedicalDisclaimerBanner />
      </div>
    </div>
  );
}

