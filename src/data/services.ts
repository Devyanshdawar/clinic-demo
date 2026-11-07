import { ServiceDetail } from "@/types";

export const servicesData: Record<string, ServiceDetail> = {
  chiropractic: {
    id: "chiropractic",
    slug: "chiropractic",
    title: "Chiropractic Care & Spinal Alignment",
    shortTitle: "Chiropractic",
    tagline:
      "Targeted biomechanical adjustments to restore spine mobility, alleviate nerve compression, and correct posture.",
    description:
      "Our chiropractic care focuses on diagnosing, treating, and preventing mechanical disorders of the musculoskeletal system, particularly the spine. Utilizing high-precision manual adjustments, flexion-distraction, and postural decompression, our licensed chiropractors address the root cause of discomfort rather than merely masking symptoms.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    iconName: "Activity",
    accentBadge: "Spine & Nervous System",
    conditionsTreated: [
      {
        title: "Cervical & Lumbar Disc Herniation",
        description:
          "Relief from disc protrusions causing nerve root irritation and acute local pain.",
      },
      {
        title: "Sciatica & Radiculopathy",
        description:
          "Decompressing the sciatic nerve to alleviate shooting pain down the glute and leg.",
      },
      {
        title: "Chronic Neck & Lower Back Pain",
        description:
          "Targeting vertebral subluxations caused by sedentary posture, heavy lifting, or repetitive strain.",
      },
      {
        title: "Postural Dysfunction & Tech Neck",
        description:
          "Correcting forward head posture, rounded shoulders, and thoracic spine stiffness.",
      },
      {
        title: "Tension & Cervicogenic Headaches",
        description:
          "Alleviating headaches triggered by tight neck musculature and upper cervical facet restrictions.",
      },
      {
        title: "SI Joint Dysfunction",
        description:
          "Realigning pelvic asymmetry and sacroiliac joint stiffness causing hip and lower back imbalance.",
      },
    ],
    treatmentMethods: [
      {
        title: "Diversified Manual Adjustments",
        description:
          "Targeted, high-velocity low-amplitude (HVLA) thrusts to restore natural joint motion and relieve joint fixation.",
      },
      {
        title: "Cox Flexion-Distraction Decompression",
        description:
          "Gentle non-surgical motorized traction table therapy specifically designed for disc bulges and stenosis.",
      },
      {
        title: "Activator Instrument-Assisted Method",
        description:
          "Ultra-low force mechanical impulse tool suited for delicate cervical adjustments or osteopenic patients.",
      },
      {
        title: "Myofascial Soft Tissue Release",
        description:
          "Releasing muscle spasms, adhesions, and trigger points prior to spinal manipulation.",
      },
      {
        title: "Postural Rehabilitation Exercises",
        description:
          "Ergonomic conditioning and core stabilizer retraining to maintain spinal alignment long-term.",
      },
    ],
    sessionSteps: [
      {
        step: 1,
        title: "Orthopedic & Neuromuscular Assessment",
        description:
          "Detailed palpation, motion-range testing, postural digitization, and neurological reflex checks.",
      },
      {
        step: 2,
        title: "Soft Tissue Warm-up & Muscle Prep",
        description:
          "Targeted percussive therapy or heat application to relax tense paravertebral muscles.",
      },
      {
        step: 3,
        title: "Precision Chiropractic Adjustments",
        description:
          "Specific gentle manipulations tailored to identified spinal subluxations and restricted joints.",
      },
      {
        step: 4,
        title: "Post-Adjustment Re-check & Ergonomics",
        description:
          "Assessment of immediate mobility gains, gait review, and home care recommendations.",
      },
    ],
    benefits: [
      "Rapid reduction in nerve compression and localized stiffness",
      "Noticeable improvement in cervical and lumbar mobility",
      "Decreased reliance on oral anti-inflammatory medications",
      "Enhanced postural symmetry and reduced chronic muscle fatigue",
      "Better sleep quality and tension headache alleviation",
    ],
    faqs: [
      {
        question: "Does a chiropractic adjustment hurt?",
        answer:
          "Most adjustments are completely painless. Many patients experience immediate relief. You may hear a popping sound (cavitation), which is simply nitrogen gas releasing within the synovial fluid inside the joint.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Acute pain often shows noticeable improvement within 3 to 6 sessions. Chronic spinal misalignments or disc conditions may require a structured 4 to 8 week protocol followed by periodic maintenance care.",
      },
      {
        question: "Is chiropractic safe for herniated discs?",
        answer:
          "Yes, when conducted by certified spine specialists. We employ gentle flexion-distraction and non-rotational decompression techniques specifically indicated for disc conditions.",
      },
    ],
    assignedDoctorIds: ["dr-arjun-mehta"],
  },
  physiotherapy: {
    id: "physiotherapy",
    slug: "physiotherapy",
    title: "Physiotherapy & Sports Rehabilitation",
    shortTitle: "Physiotherapy",
    tagline:
      "Evidence-based physical rehabilitation, manual therapy, and movement re-education for rapid recovery.",
    description:
      "Our physiotherapy department bridges acute recovery with performance resilience. Whether you are recovering from joint surgery, rehabbing a sports tear, managing neurological motor deficits, or dealing with chronic occupational strain, our physiotherapists craft individualized protocols that restore function, strength, and biomechanical endurance.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    iconName: "ShieldCheck",
    accentBadge: "Rehabilitation & Movement",
    conditionsTreated: [
      {
        title: "Sports Injuries (ACL, Meniscus, Rotator Cuff)",
        description:
          "Structured phases from acute swelling control to high-performance return-to-sport testing.",
      },
      {
        title: "Post-Surgical Rehabilitation",
        description:
          "Protocol-driven recovery following total knee/hip replacement, spinal fusion, or arthroscopy.",
      },
      {
        title: "Neurological Conditions",
        description:
          "Gait re-education, balance training, and functional mobility recovery for stroke, Parkinson's, or neuropathy.",
      },
      {
        title: "Chronic Tendinopathy & Plantar Fasciitis",
        description:
          "Targeted eccentric loading and shockwave therapy for Achilles, patellar, and tennis elbow tendinitis.",
      },
      {
        title: "Frozen Shoulder (Adhesive Capsulitis)",
        description:
          "Progressive glenohumeral capsular stretching, joint mobilization, and scapular rhythm restoration.",
      },
      {
        title: "Work-Related Ergonomic Strain (RSI)",
        description:
          "Remediating repetitive strain injury, carpal tunnel syndrome, and upper crossed syndrome.",
      },
    ],
    treatmentMethods: [
      {
        title: "Certified Dry Needling",
        description:
          "Targeting myofascial trigger points with ultra-fine monofilament needles to release stubborn muscular knotting.",
      },
      {
        title: "Class IV High-Intensity Laser & Shockwave Therapy",
        description:
          "Acoustic and photobiomodulation waves accelerating cellular tissue repair in stubborn tendon injuries.",
      },
      {
        title: "Electrotherapy (TENS / IFT / Russian Stim)",
        description:
          "Neuromuscular stimulation to inhibit pain signals, reduce edema, and reactivate dormant muscle groups.",
      },
      {
        title: "Manual Joint Mobilization (Maitland / Mulligan)",
        description:
          "Passive oscillatory movements applied to synovial joints to restore physiological gliding.",
      },
      {
        title: "Dynamic Neuromuscular Stabilization (DNS)",
        description:
          "Developmental kinesiology exercises that train the central nervous system for optimal intra-abdominal core stability.",
      },
    ],
    sessionSteps: [
      {
        step: 1,
        title: "Functional Movement & Strength Audit",
        description:
          "Evaluating muscle imbalances, kinematic movement patterns, joint angles, and baseline power.",
      },
      {
        step: 2,
        title: "Passive Modality & Pain Alleviation",
        description:
          "Utilizing electrotherapy, manual soft tissue gliding, or dry needling to manage acute inflammation.",
      },
      {
        step: 3,
        title: "Active Therapeutic Exercise",
        description:
          "Guided progressive resistance, eccentric loading, and proprioceptive drills under therapist supervision.",
      },
      {
        step: 4,
        title: "Home Exercise App Program Delivery",
        description:
          "Digital video prescription with repetition targets to sustain improvements between clinic visits.",
      },
    ],
    benefits: [
      "Restores normal joint arthrokinematics and functional range of motion",
      "Accelerates post-surgical tissue healing and reduces scar contracture",
      "Strengthens stabilizing muscles to prevent recurring injuries",
      "Improves neuromuscular balance, coordination, and proprioception",
      "Customized sports-specific conditioning for athletes",
    ],
    faqs: [
      {
        question: "How soon after surgery should I start physiotherapy?",
        answer:
          "Typically within 24 to 72 hours, depending on your surgeon's specific protocol. Early gentle mobilization prevents deep vein thrombosis (DVT) and avoids excessive scar tissue formation.",
      },
      {
        question: "What is dry needling, and how does it differ from acupuncture?",
        answer:
          "While both use thin filiform needles, dry needling is rooted in Western medical anatomy and neurophysiology. It targets irritable myofascial trigger points within muscle tissue rather than traditional energy meridians.",
      },
      {
        question: "What should I wear to my physiotherapy appointment?",
        answer:
          "Comfortable, flexible athletic clothing (shorts, t-shirt, or sports tank) and supportive running shoes so your therapist can easily examine the affected joint and guide you through movements.",
      },
    ],
    assignedDoctorIds: ["dr-priya-sharma"],
  },
  orthopedics: {
    id: "orthopedics",
    slug: "orthopedics",
    title: "Orthopedic Diagnostics & Joint Care",
    shortTitle: "Orthopedics",
    tagline:
      "Expert musculoskeletal consultations, digital radiography, arthritis management, and minimally invasive treatments.",
    description:
      "Our Orthopedic specialty provides clinical consultations, precision imaging reviews, and regenerative treatments for bones, joints, ligaments, and cartilage. We champion joint-preservation strategies, using surgical interventions only when conservative therapies have been thoroughly exhausted.",
    heroImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    iconName: "Stethoscope",
    accentBadge: "Bone & Joint Health",
    conditionsTreated: [
      {
        title: "Osteoarthritis & Degenerative Joint Disease",
        description:
          "Targeted cartilage protection protocols for knee, hip, shoulder, and spinal osteoarthritis.",
      },
      {
        title: "Ligament & Meniscal Tears",
        description:
          "Clinical grading and conservative vs. reconstructive surgical advisories for knee, ankle, and shoulder tears.",
      },
      {
        title: "Acute Fractures & Stress Reactions",
        description:
          "Precise immobilization, fiberglass casting, splinting, and progressive bone consolidation tracking.",
      },
      {
        title: "Bursitis & Synovitis",
        description:
          "Managing synovial fluid buildup and friction in trochanteric, subacromial, and prepatellar bursae.",
      },
      {
        title: "Joint Replacement Second Opinions",
        description:
          "Comprehensive evaluation of knee and hip joint readiness, risks, implant longevity, and pre-hab planning.",
      },
      {
        title: "Metabolic Bone Disorders & Osteopenia",
        description:
          "DEXA scan interpretation, calcium-vitamin D homeostasis, and bone density preservation regimens.",
      },
    ],
    treatmentMethods: [
      {
        title: "High-Resolution Musculoskeletal Ultrasound",
        description:
          "Dynamic real-time visualization of tendons, ligaments, and nerves without radiation exposure.",
      },
      {
        title: "Ultrasound-Guided Viscosupplementation",
        description:
          "Hyaluronic acid injections delivering long-lasting joint fluid lubrication directly into arthritic joints.",
      },
      {
        title: "Autologous Platelet-Rich Plasma (PRP)",
        description:
          "Concentrated biological growth factors extracted from your own blood to promote natural cartilage repair.",
      },
      {
        title: "Rigid & Dynamic Orthotic Bracing",
        description:
          "Custom unloader braces for medial compartment knee arthritis to instantly offload compressed joint spaces.",
      },
      {
        title: "Surgical Candidate Advisory & Pre-Hab",
        description:
          "Unbiased guidance on arthroscopy vs. total joint arthroplasty, complemented by pre-operative physical priming.",
      },
    ],
    sessionSteps: [
      {
        step: 1,
        title: "Comprehensive Clinical Examination",
        description:
          "Specialized stress tests, joint laxity checks, weight-bearing alignment review, and medical history intake.",
      },
      {
        step: 2,
        title: "Imaging & Diagnostic Review",
        description:
          "Detailed inspection of digital X-rays, MRI scans, or point-of-care ultrasound findings.",
      },
      {
        step: 3,
        title: "Joint Preservation Plan Formulation",
        description:
          "Collaborative discussion outlining conservative therapy, regenerative options, or surgical indications.",
      },
      {
        step: 4,
        title: "Intervention or Cross-Specialty Referral",
        description:
          "Immediate localized injection therapy, brace fitting, or coordinated warm handoff to on-site physiotherapy.",
      },
    ],
    benefits: [
      "Clear, evidence-backed diagnosis from senior orthopedic surgeons",
      "Priority focus on joint-sparing and non-surgical regeneration",
      "Immediate on-site coordination with chiropractic and physical therapy teams",
      "Ultrasound-guided precision for injection safety and maximum efficacy",
      "Transparent recommendations regarding surgical necessity",
    ],
    faqs: [
      {
        question: "When should I consider a joint replacement?",
        answer:
          "Joint replacement is considered when conservative treatments (physiotherapy, injections, weight management) no longer relieve severe pain that limits basic daily activities, and when radiographic evidence confirms end-stage joint wear.",
      },
      {
        question: "How long does a viscosupplementation injection last?",
        answer:
          "High molecular weight hyaluronic acid injections typically provide lubricative cushioning and pain relief for 6 to 12 months, depending on the severity of cartilage degeneration.",
      },
      {
        question: "Can I bring my existing MRI / X-ray scans?",
        answer:
          "Absolutely. We encourage you to bring all past scans, discs, and reports. Our orthopedic specialists will review them in detail during your consultation.",
      },
    ],
    assignedDoctorIds: ["dr-vikram-singh"],
  },
  aesthetics: {
    id: "aesthetics",
    slug: "aesthetics",
    title: "Clinical Aesthetics & Skin Wellness",
    shortTitle: "Aesthetics",
    tagline:
      "Doctor-led, medically validated non-surgical skin, hair, and anti-aging treatments prioritizing natural harmony.",
    description:
      "Our medical aesthetics suite combines clinical dermatological science with an artistic eye for natural balance. Administered exclusively by qualified aesthetic physicians, our treatments enhance your skin health, boost collagen production, and address signs of aging without invasive surgery or artificial distortion.",
    heroImage:
      "https://images.unsplash.com/photo-1512290900672-1f55b9e07802?auto=format&fit=crop&w=1600&q=80",
    iconName: "Sparkles",
    accentBadge: "Dermatological Excellence",
    conditionsTreated: [
      {
        title: "Fine Lines & Facial Wrinkles",
        description:
          "Addressing dynamic expression lines and static wrinkles while maintaining natural facial expressions.",
      },
      {
        title: "Hyperpigmentation & Melasma",
        description:
          "Gentle medical-grade peels and pigment-targeting lasers to restore uniform skin tone and clarity.",
      },
      {
        title: "Acne Scars & Textural Irregularity",
        description:
          "Fractional collagen induction and radiofrequency microneedling to smooth pitted acne scarring.",
      },
      {
        title: "Loss of Facial Volume & Elasticity",
        description:
          "Subtle hyaluronic dermal re-volumization to lift cheek contours and support jawline definition.",
      },
      {
        title: "Androgenetic Alopecia & Hair Thinning",
        description:
          "Scalp mesotherapy and autologous growth factor therapy to stimulate dormant follicular growth.",
      },
      {
        title: "Submental Fullness & Skin Laxity",
        description:
          "Non-invasive focused ultrasound and radiofrequency tightening for neck and lower face contouring.",
      },
    ],
    treatmentMethods: [
      {
        title: "Medical-Grade Hydrafacial & Infusions",
        description:
          "Vortex vacuum extraction coupled with deep peptide, antioxidant, and hyaluronic serum infusion.",
      },
      {
        title: "Fractional RF Microneedling",
        description:
          "Micro-insulated gold needles delivering controlled thermal energy into the dermis to ignite neo-collagenesis.",
      },
      {
        title: "Anti-Aging Neuromodulators & Dermal Fillers",
        description:
          "FDA-approved botulinum and cohesive hyaluronic acid fillers administered with micro-cannula safety protocols.",
      },
      {
        title: "Q-Switched & Nd:YAG Laser Rejuvenation",
        description:
          "Precision wavelengths targeting melanin clusters and stimulating deep collagen with minimal downtime.",
      },
      {
        title: "Dermatological Chemical Peels",
        description:
          "Custom acid formulations (mandelic, lactic, TCA) safely tailored to Fitzpatrick skin types III to V.",
      },
    ],
    sessionSteps: [
      {
        step: 1,
        title: "Digital Visia Skin Analysis",
        description:
          "High-definition multi-spectral imaging revealing sub-surface UV damage, pores, wrinkles, and vascularity.",
      },
      {
        step: 2,
        title: "Doctor Consultation & Ethical Goal Setting",
        description:
          "Direct discussion with our aesthetic physician to set realistic, age-appropriate, subtle aesthetic goals.",
      },
      {
        step: 3,
        title: "Sterile Clinical Procedure",
        description:
          "Application of medical numbing followed by precision treatment in a hospital-grade sterile environment.",
      },
      {
        step: 4,
        title: "Soothing Post-Procedure Protocol",
        description:
          "Calming peptide mask, medical barrier balm, broad-spectrum mineral SPF, and comprehensive aftercare plan.",
      },
    ],
    benefits: [
      "100% doctor-administered procedures ensuring utmost safety",
      "Subtle, refined results that celebrate your natural facial features",
      "Minimal to zero downtime with advanced gentle delivery systems",
      "Personalized medical formulations matched to your unique skin type",
      "Ethical, transparent guidance without aggressive sales pitches",
    ],
    faqs: [
      {
        question: "Will my results look natural?",
        answer:
          "Yes, absolutely. Our philosophy is founded on 'undetectable rejuvenation.' We aim for a refreshed, rested, and healthy appearance, strictly avoiding over-filled or frozen expressions.",
      },
      {
        question: "Is there any downtime after treatments?",
        answer:
          "Most treatments, like medical hydrafacials and superficial peels, allow immediate return to work. RF microneedling or light laser therapies may cause 24-48 hours of mild pinkness, easily managed with aftercare.",
      },
      {
        question: "Are aesthetic procedures safe for darker skin tones?",
        answer:
          "Yes. Our physicians specialize in treating diverse skin types (Fitzpatrick types I through VI) and use parameters specifically calibrated to prevent post-inflammatory hyperpigmentation (PIH).",
      },
    ],
    assignedDoctorIds: ["dr-ananya-roy"],
  },
};

