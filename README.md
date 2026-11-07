# Veritas Integrative Spine, Ortho & Aesthetic Clinic
**Next.js 15 (App Router) • TypeScript • Tailwind CSS • Framer Motion Ready • Production-Ready Multi-Specialty Clinic Platform**

A modern, accessible, high-performance website designed for a multi-specialty medical center offering:
1. **Chiropractic Care & Spinal Decompression**
2. **Evidence-Based Physiotherapy & Sports Rehabilitation**
3. **Orthopedic Diagnostics & Joint Preservation**
4. **Doctor-Led Clinical Aesthetics & Skin Wellness**

---

## 🌟 Highlights & Key Features

- **Multi-Step Appointment Booking (`/book-appointment`)**:
  - Step 1: Specialty Selection
  - Step 2: Doctor Selection (filtered by department)
  - Step 3: Date & Time Slot selection
  - Step 4: Patient contact, triage symptoms, and medical consent
  - Instant Confirmation Screen with auto-generated Booking Reference (`VRT-XXXXXX`)
  - Integration with `/api/appointments` backed by Zod validation and Nodemailer/Resend support
  - WhatsApp click-to-chat with pre-filled clinical details
- **Dedicated Service Pages (`/services/[slug]`)**:
  - In-depth clinical pages for `/services/chiropractic`, `/services/physiotherapy`, `/services/orthopedics`, and `/services/aesthetics`
  - Conditions treated, modern therapeutic methods, session steps, benefits, attending doctors, and FAQs
- **Doctor Profiles (`/doctors` & `/doctors/[slug]`)**:
  - Full biographies, medical degrees, international fellowships, board certifications, specialized interventions, and direct booking links
- **Patient Knowledge Hub (`/blog` & `/blog/[slug]`)**:
  - Search bar + Category filtering
  - Clinically referenced patient education guides
- **Interactive Facility Gallery (`/gallery`)**:
  - Decompression suites, physical therapy gym, orthopedic diagnostic rooms, and aesthetic suites
- **Patient Testimonials & Reviews (`/testimonials`)**:
  - Verified patient feedback, star ratings, and treatment tags
- **Clinical FAQs (`/faq`)**:
  - Categorized expandable accordions for insurance, appointment expectations, and safety
- **Contact & Location (`/contact`)**:
  - Interactive contact form connected to `/api/contact`
  - Embedded interactive Google Map
  - Valet parking, wheelchair accessibility, and clinic operating hours
- **Legal & Compliance**:
  - Medical Disclaimer (`/medical-disclaimer`)
  - Patient Privacy Policy (`/privacy-policy`)
  - Terms of Service (`/terms-of-service`)
  - Cookie consent banner with persistence
  - Before/After ethical compliance: *"Results vary / Shown with informed patient consent"*
- **Local SEO & Schema Markup**:
  - Semantic HTML5, dynamic OpenGraph meta tags
  - Schema.org JSON-LD structured data (`MedicalClinic`, `PostalAddress`, `OpeningHoursSpecification`)
  - Auto-generated `sitemap.xml` and `robots.txt`

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.7 (App Router, Turbopack compatible)
- **Language**: TypeScript 5.7+
- **Styling**: Tailwind CSS 3.4 with custom medical palette (Deep Teal `#134e4a`, Warm Off-White `#faf9f6`, and Soft Gold `#c59b27`)
- **Icons**: Lucide React
- **Validation**: Zod 3.24
- **Email Delivery**: Nodemailer 6.10 (Resend / SMTP compatible)

---

## 📁 Project Structure

```text
/Users/apple/clinic/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── appointments/route.ts  # Zod validation & appointment email dispatch
│   │   │   └── contact/route.ts       # Contact inquiry handler
│   │   ├── about/page.tsx             # Clinic story, mission, equipment
│   │   ├── blog/                      # Patient Resources & articles
│   │   │   ├── page.tsx               # Searchable article listing
│   │   │   └── [slug]/page.tsx        # Dynamic single article view
│   │   ├── book-appointment/page.tsx  # Multi-step appointment intake flow
│   │   ├── contact/page.tsx           # Contact form & embedded map
│   │   ├── doctors/                   # Doctor directory
│   │   │   ├── page.tsx               # Specialist listing
│   │   │   └── [slug]/page.tsx        # Detailed doctor biography & credentials
│   │   ├── faq/page.tsx               # Comprehensive categorized FAQs
│   │   ├── gallery/page.tsx           # Facility suites & equipment photo gallery
│   │   ├── medical-disclaimer/page.tsx# Legal & clinical compliance notice
│   │   ├── privacy-policy/page.tsx    # Patient data privacy statement
│   │   ├── services/                  # Specialty pages
│   │   │   ├── page.tsx               # Services overview & multidisciplinary model
│   │   │   └── [slug]/page.tsx        # Detailed clinical service pages
│   │   ├── terms-of-service/page.tsx  # Appointment rules & clinic terms
│   │   ├── testimonials/page.tsx      # Verified patient reviews
│   │   ├── error.tsx                  # Error boundary
│   │   ├── not-found.tsx              # Custom 404 page
│   │   ├── layout.tsx                 # Root layout, fonts, JSON-LD, Navigation, Footer
│   │   ├── page.tsx                   # Homepage (Hero, Services, Doctors, Teasers, FAQs)
│   │   ├── robots.ts                  # Dynamic robots.txt
│   │   └── sitemap.ts                 # Dynamic sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Responsive header with specialty dropdown
│   │   │   ├── Footer.tsx             # Clinic credentials, hours, legal links
│   │   │   ├── StickyActionButtons.tsx# Floating WhatsApp & Book Now pill
│   │   │   └── CookieConsent.tsx      # Privacy banner
│   │   └── ui/
│   │       ├── SectionHeading.tsx     # Reusable serif heading with badge
│   │       ├── ServiceCard.tsx        # Specialty card component
│   │       ├── DoctorCard.tsx         # Doctor showcase card
│   │       ├── TestimonialCard.tsx    # Verified patient review card
│   │       ├── FaqAccordion.tsx       # Expandable question item
│   │       ├── BeforeAfterTeaser.tsx  # Case comparison with ethical disclaimer
│   │       ├── CtaBanner.tsx          # Consultation banner
│   │       └── MedicalDisclaimerBanner.tsx
│   ├── data/
│   │   ├── clinic.ts                  # Address, phones, emails, hours, maps
│   │   ├── services.ts                # Conditions treated, methods, session steps, benefits
│   │   ├── doctors.ts                 # Qualifications, experience, bios, schedules
│   │   ├── articles.ts                # Patient blog posts & ergonomic guides
│   │   ├── testimonials.ts            # Patient feedback items
│   │   ├── faqs.ts                    # Questions & answers by specialty
│   │   ├── gallery.ts                 # Room & facility images
│   │   └── cases.ts                   # Before / after clinical cases
│   ├── lib/
│   │   └── utils.ts                   # Tailwind merge & helper utilities
│   └── types/
│       └── index.ts                   # Typed TypeScript interfaces
├── .env.example                       # Template for environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your email settings:
```ini
NEXT_PUBLIC_APP_URL=http://localhost:3000
CLINIC_NOTIFICATION_EMAIL=care@veritashealthclinic.com
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=re_your_api_key_here
SMTP_FROM=appointments@veritashealthclinic.com
```
*(In development, if SMTP credentials are left blank, appointments and contact inquiries will log safely to your terminal console.)*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content (Without Touching Code)

All clinic text, doctors, services, and blog articles are strictly decoupled into typed TypeScript files inside `src/data/`:

| Content | File Path | What to Edit |
|---|---|---|
| **Clinic Details** | `src/data/clinic.ts` | Clinic name, address, telephone, WhatsApp number, opening hours, Google Maps URL |
| **Specialties & Protocols** | `src/data/services.ts` | Conditions treated, treatment modalities, what to expect steps, benefits, FAQs |
| **Doctors & Specialists** | `src/data/doctors.ts` | Doctor names, qualifications, degrees, experience years, biographies, consulting days |
| **Patient Guides / Blog** | `src/data/articles.ts` | Article titles, categories, author credits, and full Markdown content |
| **Patient Reviews** | `src/data/testimonials.ts` | Verified quotes, star ratings, and treatment tags |
| **Frequently Asked Questions** | `src/data/faqs.ts` | Questions and answers grouped by specialty |
| **Facility Gallery** | `src/data/gallery.ts` | Treatment suite images and descriptions |
| **Clinical Case Studies** | `src/data/cases.ts` | Before/after images and clinical recovery summaries |

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository. Next.js 15 App Router will be automatically detected.
4. Add your Production Environment Variables (`NEXT_PUBLIC_APP_URL`, `CLINIC_NOTIFICATION_EMAIL`, `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`).
5. Click **Deploy**. Vercel will build and serve all 32 static and dynamic routes instantly.

---

## 📋 Launch Replacement Checklist (Things You Must Replace Before Going Live)

Before launching the website publicly:
- [ ] **Logo & Brand Icon**: Replace the `V` placeholder logo in `Navbar.tsx` and `Footer.tsx` with your SVG/PNG logo.
- [ ] **Real Contact Info**: Update phone number, WhatsApp number, and clinic email in `src/data/clinic.ts`.
- [ ] **Real Address & Google Map Link**: Replace the Indiranagar address and Google Maps embed URL with your exact clinic coordinates in `src/data/clinic.ts`.
- [ ] **Real Doctor Details**: Replace placeholder doctor photos, degrees, registration numbers, and schedules in `src/data/doctors.ts`.
- [ ] **Real Facility Photos**: Replace Unsplash stock images in `src/data/gallery.ts` with authentic photographs of your clinic, reception, and treatment suites.
- [ ] **Real Patient Testimonials & Cases**: Update `src/data/testimonials.ts` and `src/data/cases.ts` with written patient authorization.
- [ ] **Email / Resend Credentials**: Add production SMTP or Resend credentials in `.env.local` to receive automated appointment notifications.
- [ ] **Google Analytics & Meta Pixel**: Insert your real GA4 measurement ID (`G-XXXXXXXXXX`) and Meta Pixel ID in `.env.local`.

