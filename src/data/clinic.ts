import { ClinicInfo } from "@/types";

export const clinicData: ClinicInfo = {
  name: "XYZ Multi-Specialty Demo Clinic",
  shortName: "XYZ Demo Clinic",
  tagline: "Restoring Motion, Relieving Pain, Enhancing Natural Vitality",
  description:
    "A premier multidisciplinary medical center uniting Chiropractic Care, Evidence-Based Physiotherapy, Advanced Orthopedics, and Non-Invasive Medical Aesthetics under one roof.",
  address: {
    street: "123 Healthcare Avenue, Suite 100",
    suite: "Medical District",
    city: "Metro City",
    state: "State",
    zip: "000000",
    country: "Country",
    full: "Suite 100, Healthcare Pavilion, 123 Healthcare Avenue, Medical District, City 000000",
  },
  phone: "+91 (000) 000-0000",
  whatsappNumber: "+910000000000",
  whatsappMessage:
    "Hello Demo Clinic, I would like to inquire about booking an appointment.",
  email: "care@democlinic.example.com",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
    { days: "Saturday", time: "8:00 AM – 6:00 PM" },
    { days: "Sunday", time: "9:00 AM – 1:00 PM (Priority & Emergencies)" },
  ],
  languages: ["English", "Hindi"],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHealthcare+Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectionsUrl: "https://maps.google.com/?q=Clinic+Location",
  socials: {
    facebook: "https://facebook.com/democlinic",
    instagram: "https://instagram.com/democlinic",
    linkedin: "https://linkedin.com/company/democlinic",
    youtube: "https://youtube.com/@democlinic",
  },
};
