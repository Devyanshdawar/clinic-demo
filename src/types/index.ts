export interface ClinicInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    full: string;
  };
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  languages: string[];
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export type SpecialtyKey = "chiropractic" | "physiotherapy" | "orthopedics" | "aesthetics";

export interface ServiceDetail {
  id: SpecialtyKey;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconName: string;
  accentBadge: string;
  conditionsTreated: {
    title: string;
    description: string;
  }[];
  treatmentMethods: {
    title: string;
    description: string;
    icon?: string;
  }[];
  sessionSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  assignedDoctorIds: string[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  honorific: string;
  title: string;
  specialty: SpecialtyKey;
  specialtyLabel: string;
  qualifications: string[];
  experienceYears: number;
  image: string;
  bio: string;
  philosophies: string;
  education: string[];
  certifications: string[];
  treatmentsOffered: string[];
  availableDays: string[];
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  serviceReceived: string;
  specialty: SpecialtyKey;
  rating: number;
  quote: string;
  date: string;
  verified: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  specialty: SpecialtyKey;
  description: string;
  sessionsCount: string;
  disclaimer: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Spine & Posture" | "Injury Rehabilitation" | "Joint Health" | "Skin & Wellness";
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | SpecialtyKey;
}

export interface AppointmentFormData {
  service: SpecialtyKey;
  doctor: string;
  date: string;
  timeSlot: string;
  patientName: string;
  email: string;
  phone: string;
  age?: string;
  gender?: string;
  isFirstVisit: boolean;
  chiefComplaint: string;
  consent: boolean;
}

