import { Doctor } from "@/types";

export const doctorsData: Doctor[] = [
  {
    id: "dr-arjun-mehta",
    slug: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    honorific: "Dr.",
    title: "Lead Chiropractic Physician & Spine Specialist",
    specialty: "chiropractic",
    specialtyLabel: "Chiropractic & Spine",
    qualifications: ["DC (Doctor of Chiropractic)", "M.Sc Chiropractic (UK)", "CACCP"],
    experienceYears: 14,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Arjun Mehta is a UK-trained chiropractic physician with over 14 years of clinical experience specializing in non-surgical spinal decompression, acute disc herniation management, and ergonomic postural correction. Having consulted for national athletes and busy corporate professionals alike, Dr. Mehta advocates a biomechanical approach to restoring nervous system vitality without reliance on chronic pharmaceuticals.",
    philosophies:
      "The spine is the central highway of human vitality. When we restore true structural alignment and joint mechanics, the human body exhibits an extraordinary innate ability to heal, decompress nerves, and perform without pain.",
    education: [
      "Doctor of Chiropractic (DC) - Anglo-European College of Chiropractic, UK",
      "M.Sc in Musculoskeletal Clinical Biomechanics - King's College London",
      "B.Sc in Human Biology & Kinesiology",
    ],
    certifications: [
      "Certified Cox Technic Flexion-Distraction Practitioner",
      "International Federation of Sports Chiropractic (FICS) Credential",
      "Advanced Postural Ergonomics Certified Specialist",
    ],
    treatmentsOffered: [
      "Spinal Subluxation Adjustments",
      "Cox Flexion-Distraction Disc Decompression",
      "Sciatica & Radicular Pain Management",
      "Cervicogenic Headache Relief Protocols",
      "Posture & Tech Neck Correction",
    ],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday morning"],
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: "dr-priya-sharma",
    slug: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    honorific: "Dr.",
    title: "Head of Physiotherapy & Sports Rehabilitation",
    specialty: "physiotherapy",
    specialtyLabel: "Physiotherapy & Rehab",
    qualifications: ["MPT (Sports Medicine)", "BPT", "CMP (Mulligan Certified)"],
    experienceYears: 11,
    image:
      "https://images.unsplash.com/photo-1594824813576-963b51eebe82?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Priya Sharma leads the Physiotherapy and Sports Rehabilitation wing at Veritas Clinic. With extensive experience rehabilitating competitive marathoners, badminton champions, and post-operative orthopedic patients, Priya combines hands-on joint mobilization with advanced neuromuscular activation to bridge recovery back into peak daily living.",
    philosophies:
      "Movement is medicine when dosed correctly. Rather than treating an isolated painful joint, we reconstruct entire functional movement chains so patients regain total confidence in their bodies.",
    education: [
      "Master of Physiotherapy (MPT - Sports Medicine) - Manipal Academy of Higher Education",
      "Bachelor of Physiotherapy (BPT) - Rajiv Gandhi University of Health Sciences",
    ],
    certifications: [
      "Certified Mulligan Manual Therapist (CMP, New Zealand)",
      "Certified Dry Needling Practitioner (GEMt, Australia)",
      "Dynamic Neuromuscular Stabilization (DNS) Level 2 - Prague School",
    ],
    treatmentsOffered: [
      "Post-Surgical Joint Rehabilitation (ACL, Meniscus, TKR)",
      "Deep Dry Needling & Myofascial Trigger Release",
      "Shockwave & High-Intensity Laser Therapy",
      "Neurological Gait & Balance Retraining",
      "Rotator Cuff & Shoulder Impingement Conditioning",
    ],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rating: 4.95,
    reviewCount: 284,
  },
  {
    id: "dr-vikram-singh",
    slug: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    honorific: "Dr.",
    title: "Senior Consultant Orthopedic Surgeon & Joint Preservation Specialist",
    specialty: "orthopedics",
    specialtyLabel: "Orthopedics & Joint Care",
    qualifications: ["MBBS", "MS (Orthopedics)", "Fellowship in Joint Preservation (Germany)", "MCh (Ortho)"],
    experienceYears: 18,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Vikram Singh brings nearly two decades of senior orthopedic surgical and clinical mastery. Having completed advanced fellowships in joint-preserving arthroscopy and minimally invasive orthopedic interventions in Munich, Dr. Singh strongly favors conservative regeneration and joint-sparing biologics before evaluating any surgical pathway.",
    philosophies:
      "Surgical intervention must always be the considered last resort, not the first reaction. Preserving the patient's native joint biology through modern diagnostics, guided injections, and collaborative rehab yields superior lifelong outcomes.",
    education: [
      "MS (Orthopedic Surgery) - All India Institute of Medical Sciences (AIIMS)",
      "MBBS - Bangalore Medical College and Research Institute",
      "Clinical Fellowship in Adult Joint Reconstruction - Ludwig Maximilian University, Munich",
    ],
    certifications: [
      "Member of Indian Orthopaedic Association (IOA)",
      "International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS)",
      "Musculoskeletal Ultrasound Certified Sonologist",
    ],
    treatmentsOffered: [
      "Joint-Preserving Arthritis Management",
      "Ultrasound-Guided Viscosupplementation & PRP Injections",
      "Comprehensive Ligament & Meniscal Injury Evaluation",
      "Pre- and Post-Joint Arthroplasty Surgical Advisory",
      "Osteoporosis & Bone Density Therapeutics",
    ],
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    rating: 4.92,
    reviewCount: 420,
  },
  {
    id: "dr-ananya-roy",
    slug: "dr-ananya-roy",
    name: "Dr. Ananya Roy",
    honorific: "Dr.",
    title: "Consultant Dermatologist & Aesthetic Medicine Physician",
    specialty: "aesthetics",
    specialtyLabel: "Aesthetic Medicine & Skin",
    qualifications: ["MBBS", "MD (Dermatology, Venereology & Leprosy)", "FAM (Fellowship in Aesthetic Medicine)"],
    experienceYears: 12,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Ananya Roy is a board-certified dermatologist and aesthetic physician celebrated for her nuanced, natural-first ethos. With over 12 years of specialized practice, Dr. Roy combines cutting-edge non-invasive technologies like RF microneedling, medical lasers, and micro-cannula injectables with deep dermatological rigor to deliver radiant, harmonious skin transformations.",
    philosophies:
      "True aesthetic medicine doesn't alter who you are; it refreshes and honors your facial anatomy. Healthy, radiant skin is an outward reflection of inner cellular vitality and precise dermatological science.",
    education: [
      "MD (Dermatology, Venereology & Leprosy) - PGIMER",
      "MBBS - Christian Medical College (CMC), Vellore",
      "Fellowship in Aesthetic Medicine (FAM) - University of Greifswald, Germany",
    ],
    certifications: [
      "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
      "International Society of Dermatology (ISD)",
      "Advanced Facial Aesthetic Masterclass (Paris)",
    ],
    treatmentsOffered: [
      "Medical Collagen Induction & RF Microneedling",
      "Targeted Melasma & Pigmentation Laser Rejuvenation",
      "Natural Facial Contouring & Micro-Tox Injections",
      "Deep Medical Hydrafacials & Bio-Revitalization Peels",
      "Scalp Mesotherapy & Hair Growth Therapeutics",
    ],
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rating: 4.96,
    reviewCount: 350,
  },
];

