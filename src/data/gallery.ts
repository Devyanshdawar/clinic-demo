export interface GalleryItem {
  id: string;
  title: string;
  category: "Spine & Neuro" | "Physio Gym" | "Consultation" | "Aesthetics Suite" | "Facility";
  description: string;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Spinal Decompression & Chiropractic Suite",
    category: "Spine & Neuro",
    description: "Equipped with Cox Technic motorized flexion-distraction tables and computerized postural analysis.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-2",
    title: "High-Performance Rehabilitation Gym",
    category: "Physio Gym",
    description: "Spacious kinetic rehab floor featuring pneumatic resistance machines, balance trainers, and gait analysis tracks.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-3",
    title: "Orthopedic Examination & Ultrasound Room",
    category: "Consultation",
    description: "Sterile private diagnostic room equipped with point-of-care high-resolution musculoskeletal ultrasound.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-4",
    title: "Luxury Clinical Aesthetics Suite",
    category: "Aesthetics Suite",
    description: "Private treatment room designed with ambient chromotherapy, sterile surgical lighting, and Visia skin diagnostics.",
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e07802?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-5",
    title: "Acoustic Shockwave & Electrotherapy Station",
    category: "Physio Gym",
    description: "Dedicated bays for non-invasive acoustic shockwave therapy, class IV laser, and cryo-thermal recovery.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-6",
    title: "Serene Patient Reception & Herbal Lounge",
    category: "Facility",
    description: "Welcoming biophilic waiting lounge with air purification, soothing acoustics, and complimentary health elixirs.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
  },
];

