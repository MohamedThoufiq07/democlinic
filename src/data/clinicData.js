export const CLINIC_INFO = {
  name: "AuraCare Multi-Specialty Clinic",
  tagline: "Compassionate Care Meets Modern Clinical Excellence",
  regNo: "NABH-CLIN-2024-8841",
  emergencyPhone: "+91 98765 43210",
  receptionPhone: "+91 98765 43211",
  email: "care@auraclinic.health",
  address: "Plot 42, Medical Enclave, Sector 14, Health City, Metro 110001",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hi%2C%20I%20would%20like%20to%20inquire%20about%20a%20clinic%20consultation",
  timings: {
    weekdays: "8:00 AM – 9:00 PM",
    saturdays: "8:30 AM – 7:00 PM",
    sundays: "9:00 AM – 2:00 PM (Emergency 24/7)",
  }
};

export const DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Arvind Varma",
    qualification: "MBBS, MD (Internal Medicine), FACP",
    registrationNo: "MCI-48921/2009",
    specialization: "Chief Physician & Internal Medicine",
    experience: "16+ Years Experience",
    bio: "Ex-Senior Consultant at Max Healthcare & Apollo. Specializes in metabolic syndrome, cardiovascular disease prevention, and geriatric complex disorders.",
    timings: "Mon - Sat: 9:00 AM - 1:00 PM",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    rating: "4.9",
    reviewsCount: 420
  },
  {
    id: "doc-2",
    name: "Dr. Shreya Sengupta",
    qualification: "MBBS, MS (Obstetrics & Gynaecology), DNB",
    registrationNo: "DMC-77312/2013",
    specialization: "Senior Gynaecologist & Women's Health",
    experience: "12+ Years Experience",
    bio: "Specialist in laparoscopic surgery, high-risk pregnancies, hormonal imbalances (PCOS/PCOD), and preventive oncology screenings.",
    timings: "Mon - Fri: 2:00 PM - 6:30 PM",
    avatar: "https://images.unsplash.com/photo-1594824813501-483526685a97?auto=format&fit=crop&q=80&w=600",
    rating: "5.0",
    reviewsCount: 388
  },
  {
    id: "doc-3",
    name: "Dr. Rajeshwar Rao",
    qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology (UK)",
    registrationNo: "KMC-62104/2011",
    specialization: "Pediatrician & Neonatologist",
    experience: "14+ Years Experience",
    bio: "Passionate child specialist dedicated to developmental milestones, painless pediatric vaccinations, and seasonal infectious illness management.",
    timings: "Mon - Sat: 10:00 AM - 4:00 PM",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    rating: "4.9",
    reviewsCount: 512
  },
  {
    id: "doc-4",
    name: "Dr. Priyamvada Das",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    registrationNo: "DCI-19842/2016",
    specialization: "Aesthetic Dentist & Micro-Endodontist",
    experience: "9+ Years Experience",
    bio: "Expert in single-sitting rotary root canal therapies, porcelain veneers, laser teeth whitening, and pediatric conservative dentistry.",
    timings: "Tue - Sun: 11:00 AM - 7:00 PM",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    rating: "4.9",
    reviewsCount: 295
  }
];

export const SPECIALTIES = [
  {
    id: "gen-med",
    name: "General Medicine & Diabetology",
    shortDesc: "Comprehensive diagnostics, lifestyle diseases, chronic condition management & adult immunizations.",
    fullDesc: "Our department of Internal Medicine acts as the first line of defense for non-surgical medical conditions. We diagnose and manage complex symptoms, diabetes, thyroid disorders, and infectious fevers.",
    icon: "Stethoscope",
    highlights: ["Complete Diabetic Foot & HbA1c profiling", "Hypertension & lipid monitoring", "Preventive annual master checkups"],
    price: "₹700"
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Wellness",
    shortDesc: "Painless vaccination clinics, growth milestone tracking, and pediatric allergy therapy.",
    fullDesc: "Dedicated child-friendly care space equipped with nebulization units, temperature stabilization, and WHO-standard immunization tracking for infants to teens.",
    icon: "Baby",
    highlights: ["WHO & IAP vaccination protocols", "Nutritional & allergy counselling", "Growth & neurological milestones check"],
    price: "₹800"
  },
  {
    id: "cardiology",
    name: "Preventive Cardiology & ECG",
    shortDesc: "Digital 12-lead ECG, 2D Echocardiography, lipid profiling, and coronary risk estimation.",
    fullDesc: "Early detection of cardiac risks using modern telemetry, resting ECG analysis, stress assessments, and tailored lifestyle intervention protocols.",
    icon: "HeartPulse",
    highlights: ["Instant 12-Lead Digital ECG printout", "2D Echo with color doppler", "Coronary artery disease risk calculation"],
    price: "₹1,200"
  },
  {
    id: "dental",
    name: "Advanced Dentistry & Implants",
    shortDesc: "Digital intraoral scanning, pain-free rotary root canals, ultrasonic scaling & invisible aligners.",
    fullDesc: "Sterilized clinical suites utilizing Class-B autoclave technology for pristine hygiene in painless restorative and cosmetic dentistry.",
    icon: "Smile",
    highlights: ["Single-visit painless root canal (RCT)", "Clear aligners & orthodontic scans", "Ultrasonic scaling & polishing"],
    price: "₹600"
  },
  {
    id: "diagnostics",
    name: "NABL-Accredited Lab & Imaging",
    shortDesc: "Fully automated biochemistry analyzers, hormonal assays, digital X-rays, and quick turnaround.",
    fullDesc: "High-precision diagnostic testing facility delivering same-day barcoded reports to your WhatsApp and email with zero sample contamination.",
    icon: "FlaskConical",
    highlights: ["Same-day digital reports on WhatsApp", "Home sample collection available", "Biochem, Hematology & Hormonal profiling"],
    price: "Packages from ₹499"
  },
  {
    id: "physiotherapy",
    name: "Orthopedic Rehab & Physio",
    shortDesc: "TENS therapy, ultrasound rehab, post-surgical recovery, and spine posture correction.",
    fullDesc: "Evidence-based kinetic therapy helping patients recover range of motion, post-trauma strength, and resolve chronic lower back or neck pain.",
    icon: "Activity",
    highlights: ["Interferential therapy & heat packs", "Ergonomic & desk worker posture clinic", "Sports injury fast-recovery regimens"],
    price: "₹750"
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sunita Kapoor",
    role: "Teacher • Sector 18",
    rating: 5,
    date: "2 days ago",
    comment: "Dr. Arvind Varma listened to my symptoms without rushing. The in-house pharmacy and ECG took less than 20 minutes total. The cleanliness is on par with 5-star private hospitals.",
    treatment: "Diabetes Management"
  },
  {
    id: "t2",
    name: "Rohan & Neha Mehra",
    role: "Parents of 3yo Vihaan",
    rating: 5,
    date: "1 week ago",
    comment: "Dr. Rajeshwar was unbelievable with our toddler who is terrified of needles. The painless vaccination protocol really made a difference. Highly recommended pediatric team!",
    treatment: "Child Immunization"
  },
  {
    id: "t3",
    name: "Vikramjit Singh",
    role: "Architect • Metro City",
    rating: 5,
    date: "2 weeks ago",
    comment: "Had an emergency toothache and walked into AuraCare. Dr. Priyamvada explained everything on the digital screen and completed the root canal with zero pain. The follow-up call was sweet.",
    treatment: "Emergency Endodontics"
  }
];

export const FAQS = [
  {
    q: "Do I need a prior appointment or do you accept walk-ins?",
    a: "We welcome both walk-in patients and booked appointments. However, pre-booking guarantees zero waiting time and ensures your preferred consultant is immediately available."
  },
  {
    q: "Are diagnostic and lab reports provided digitally?",
    a: "Yes! All test results are NABL-benchmarked and automatically dispatched via encrypted PDF to your registered WhatsApp number and email within 4 to 8 hours."
  },
  {
    q: "Do you offer cashless mediclaim or health insurance reimbursement?",
    a: "We provide seamless itemized bills, doctor prescriptions, diagnostic reports, and discharge receipts structured specifically for hassle-free claim reimbursements across Star Health, HDFC Ergo, Care, ICICI Lombard, and all major TPAs."
  },
  {
    q: "What emergency facilities are available after regular OPD hours?",
    a: "Our emergency triage desk is operational 24/7 for acute asthma nebulization, trauma wound dressings, diabetic emergencies, and urgent tele-consult triage with duty medical officers."
  },
  {
    q: "Is parking available at the clinic premises?",
    a: "Yes, dedicated valet and reserved wheelchair-accessible patient parking are available right in front of the clinic lobby."
  }
];

export const HEALTH_ARTICLES = [
  {
    id: "art-1",
    title: "10 Subtle Signs Your Blood Sugar Needs Immediate Clinical Attention",
    category: "Preventive Endocrinology",
    readTime: "4 min read",
    date: "October 2026",
    summary: "Recognize the early markers of pre-diabetes before irreversible metabolic complications emerge, from post-meal fatigue to skin tags.",
    author: "Dr. Arvind Varma",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "art-2",
    title: "The Essential 2026 Pediatric Immunization Checklist for Parents",
    category: "Pediatric Wellness",
    readTime: "6 min read",
    date: "September 2026",
    summary: "A simplified, doctor-approved guide through optional vs recommended vaccines for children aged 0-12 years under latest IAP norms.",
    author: "Dr. Rajeshwar Rao",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: "art-3",
    title: "Ergonomics for Desk Professionals: Preventing Spinal Disc Strain",
    category: "Orthopedic Health",
    readTime: "5 min read",
    date: "September 2026",
    summary: "Practical 5-minute desk stretches, monitor eye-level adjustments, and posture corrections that prevent chronic cervical spondylosis.",
    author: "AuraCare Physio Team",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=700"
  }
];
