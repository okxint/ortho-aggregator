export interface Vendor {
  name: string;
  phone: string;
  url: string; // Google Maps link
  technicianSupport?: {
    available: boolean;
    type: string; // e.g. "OT Technician", "Clinical Specialist", "Field Service"
    details: string;
  };
}

export interface BrandEntry {
  name: string;
  rating: number;
  reviews: number;
  vendors: Vendor[];
  technicianSupport?: {
    available: boolean;
    type: string;
    details: string;
  };
}

export interface SurgicalStep {
  title: string;
  description: string;
  image?: string; // Auto-assigned from step title if not specified
}

// Category-specific step image mappings — each category gets its own surgical illustrations
const categoryStepImages: Record<string, Record<string, string>> = {
  "bone-plates": {
    exposure: "/steps/plates/exposure.svg",
    approach: "/steps/plates/exposure.svg",
    incision: "/steps/plates/exposure.svg",
    reduction: "/steps/plates/reduction.svg",
    align: "/steps/plates/reduction.svg",
    clamp: "/steps/plates/reduction.svg",
    position: "/steps/plates/positioning.svg",
    placement: "/steps/plates/positioning.svg",
    contour: "/steps/plates/positioning.svg",
    plate: "/steps/plates/positioning.svg",
    drill: "/steps/plates/drilling.svg",
    measurement: "/steps/plates/drilling.svg",
    tap: "/steps/plates/drilling.svg",
    screw: "/steps/plates/screw-insertion.svg",
    fixation: "/steps/plates/screw-insertion.svg",
    compress: "/steps/plates/compression.svg",
    eccentric: "/steps/plates/compression.svg",
    dynamic: "/steps/plates/compression.svg",
    lock: "/steps/plates/screw-insertion.svg",
    fluoroscop: "/steps/fluoroscopy.svg",
    verification: "/steps/fluoroscopy.svg",
    check: "/steps/fluoroscopy.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    final: "/steps/plates/screw-insertion.svg",
    dressing: "/steps/closure.svg",
    irrigat: "/steps/closure.svg",
  },
  "bone-screws": {
    exposure: "/steps/plates/exposure.svg",
    approach: "/steps/plates/exposure.svg",
    drill: "/steps/screws/drilling.svg",
    pilot: "/steps/screws/drilling.svg",
    measurement: "/steps/screws/measurement.svg",
    depth: "/steps/screws/measurement.svg",
    gauge: "/steps/screws/measurement.svg",
    tap: "/steps/screws/tapping.svg",
    thread: "/steps/screws/tapping.svg",
    screw: "/steps/screws/insertion.svg",
    insert: "/steps/screws/insertion.svg",
    fixation: "/steps/screws/insertion.svg",
    final: "/steps/screws/insertion.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    fluoroscop: "/steps/fluoroscopy.svg",
    check: "/steps/fluoroscopy.svg",
    dressing: "/steps/closure.svg",
  },
  "intramedullary-nails": {
    entry: "/steps/nails/entry-point.svg",
    position: "/steps/nails/entry-point.svg",
    approach: "/steps/nails/entry-point.svg",
    awl: "/steps/nails/entry-point.svg",
    ream: "/steps/nails/reaming.svg",
    canal: "/steps/nails/reaming.svg",
    guide: "/steps/nails/reaming.svg",
    wire: "/steps/nails/reaming.svg",
    insert: "/steps/nails/insertion.svg",
    nail: "/steps/nails/insertion.svg",
    driv: "/steps/nails/insertion.svg",
    lock: "/steps/nails/locking.svg",
    interlock: "/steps/nails/locking.svg",
    bolt: "/steps/nails/locking.svg",
    proximal: "/steps/nails/locking.svg",
    distal: "/steps/nails/locking.svg",
    fluoroscop: "/steps/nails/verification.svg",
    verification: "/steps/nails/verification.svg",
    confirm: "/steps/nails/verification.svg",
    check: "/steps/nails/verification.svg",
    final: "/steps/nails/verification.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    dressing: "/steps/closure.svg",
  },
  "hip-replacement": {
    approach: "/steps/hip/approach.svg",
    exposure: "/steps/hip/approach.svg",
    incision: "/steps/hip/approach.svg",
    disloc: "/steps/hip/approach.svg",
    acetabul: "/steps/hip/acetabular-prep.svg",
    ream: "/steps/hip/acetabular-prep.svg",
    cup: "/steps/hip/cup-insertion.svg",
    shell: "/steps/hip/cup-insertion.svg",
    liner: "/steps/hip/cup-insertion.svg",
    femoral: "/steps/hip/femoral-prep.svg",
    broach: "/steps/hip/femoral-prep.svg",
    rasp: "/steps/hip/femoral-prep.svg",
    canal: "/steps/hip/femoral-prep.svg",
    stem: "/steps/hip/stem-insertion.svg",
    implant: "/steps/hip/stem-insertion.svg",
    trial: "/steps/hip/trial-reduction.svg",
    reduction: "/steps/hip/trial-reduction.svg",
    head: "/steps/hip/trial-reduction.svg",
    range: "/steps/hip/trial-reduction.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    final: "/steps/hip/trial-reduction.svg",
    dressing: "/steps/closure.svg",
  },
  "knee-replacement": {
    approach: "/steps/knee/approach.svg",
    exposure: "/steps/knee/approach.svg",
    incision: "/steps/knee/approach.svg",
    parapatellar: "/steps/knee/approach.svg",
    femoral: "/steps/knee/femoral-cuts.svg",
    distal: "/steps/knee/femoral-cuts.svg",
    cut: "/steps/knee/femoral-cuts.svg",
    saw: "/steps/knee/femoral-cuts.svg",
    tibial: "/steps/knee/tibial-cut.svg",
    plateau: "/steps/knee/tibial-cut.svg",
    trial: "/steps/knee/trial.svg",
    balance: "/steps/knee/trial.svg",
    gap: "/steps/knee/trial.svg",
    cement: "/steps/knee/cementation.svg",
    implant: "/steps/knee/cementation.svg",
    final: "/steps/knee/cementation.svg",
    poly: "/steps/knee/cementation.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    dressing: "/steps/closure.svg",
  },
  "spine-implants": {
    exposure: "/steps/spine/exposure.svg",
    approach: "/steps/spine/exposure.svg",
    incision: "/steps/spine/exposure.svg",
    decompress: "/steps/spine/decompression.svg",
    laminect: "/steps/spine/decompression.svg",
    laminot: "/steps/spine/decompression.svg",
    pedicle: "/steps/spine/pedicle-screw.svg",
    screw: "/steps/spine/pedicle-screw.svg",
    tap: "/steps/spine/pedicle-screw.svg",
    rod: "/steps/spine/rod-placement.svg",
    connect: "/steps/spine/rod-placement.svg",
    contour: "/steps/spine/rod-placement.svg",
    cage: "/steps/spine/fusion.svg",
    fusion: "/steps/spine/fusion.svg",
    graft: "/steps/spine/fusion.svg",
    interbody: "/steps/spine/fusion.svg",
    closure: "/steps/closure.svg",
    close: "/steps/closure.svg",
    final: "/steps/spine/rod-placement.svg",
    dressing: "/steps/closure.svg",
    fluoroscop: "/steps/fluoroscopy.svg",
    check: "/steps/fluoroscopy.svg",
  },
  "external-fixation": {
    pin: "/steps/exfix/pin-insertion.svg",
    drill: "/steps/exfix/pin-insertion.svg",
    schanz: "/steps/exfix/pin-insertion.svg",
    wire: "/steps/exfix/pin-insertion.svg",
    frame: "/steps/exfix/frame-assembly.svg",
    assembl: "/steps/exfix/frame-assembly.svg",
    connect: "/steps/exfix/frame-assembly.svg",
    clamp: "/steps/exfix/frame-assembly.svg",
    bar: "/steps/exfix/frame-assembly.svg",
    reduction: "/steps/exfix/reduction.svg",
    align: "/steps/exfix/reduction.svg",
    adjust: "/steps/exfix/reduction.svg",
    final: "/steps/exfix/final-check.svg",
    check: "/steps/exfix/final-check.svg",
    fluoroscop: "/steps/exfix/final-check.svg",
    verification: "/steps/exfix/final-check.svg",
    closure: "/steps/closure.svg",
    dressing: "/steps/closure.svg",
  },
};

// Fallback generic step images (for categories without specific mappings)
const genericStepImages: Record<string, string> = {
  exposure: "/steps/exposure.svg",
  approach: "/steps/exposure.svg",
  incision: "/steps/exposure.svg",
  reduction: "/steps/exposure.svg",
  drill: "/steps/drilling.svg",
  measurement: "/steps/drilling.svg",
  tap: "/steps/drilling.svg",
  ream: "/steps/reaming.svg",
  canal: "/steps/reaming.svg",
  placement: "/steps/implant-placement.svg",
  position: "/steps/implant-placement.svg",
  insert: "/steps/nail-insertion.svg",
  nail: "/steps/nail-insertion.svg",
  screw: "/steps/screw-fixation.svg",
  fixation: "/steps/screw-fixation.svg",
  lock: "/steps/locking.svg",
  interlock: "/steps/locking.svg",
  fluoroscop: "/steps/fluoroscopy.svg",
  verification: "/steps/fluoroscopy.svg",
  confirm: "/steps/fluoroscopy.svg",
  check: "/steps/fluoroscopy.svg",
  closure: "/steps/closure.svg",
  close: "/steps/closure.svg",
  dressing: "/steps/closure.svg",
  irrigat: "/steps/closure.svg",
  final: "/steps/closure.svg",
};

export function getStepImage(stepTitle: string, categoryId?: string): string {
  const lower = stepTitle.toLowerCase();
  // Use category-specific images if available
  const images = (categoryId && categoryStepImages[categoryId]) || genericStepImages;
  for (const [keyword, img] of Object.entries(images)) {
    if (lower.includes(keyword)) return img;
  }
  // Fallback to generic if category-specific didn't match
  if (categoryId && categoryStepImages[categoryId]) {
    for (const [keyword, img] of Object.entries(genericStepImages)) {
      if (lower.includes(keyword)) return img;
    }
  }
  return "/steps/implant-placement.svg";
}

export interface ProductDetail {
  description: string;
  indications: string[];
  surgicalTechnique: string;
  material: string;
  sizes: string;
  image: string;
  steps?: SurgicalStep[];
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  description: string;
  detail?: ProductDetail;
  brands: BrandEntry[];
}

export interface Category {
  id: string;
  name: string;
  number: number;
  image: string;
  description: string;
}

export type CityId = "pondicherry" | "chennai";

export function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/[()\/]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ── Vendors by city ──────────────────────────────────────────────────

const vendorsByCity: Record<CityId, Vendor[]> = {
  pondicherry: [
    { name: "Gravity Medical Equipment & Surgical", phone: "097902 17611", url: "https://www.google.com/maps/search/Gravity+Medical+Equipment+Surgical+Pondicherry" },
    { name: "Auro Medical Systems", phone: "098423 22023", url: "https://www.google.com/maps/search/Auro+Medical+Systems+Pondicherry" },
    { name: "Gokul Surgicals", phone: "093601 62000", url: "https://www.google.com/maps/search/Gokul+Surgicals+Pondicherry" },
    { name: "Steril-Gene Life Sciences", phone: "0413-2661103", url: "https://www.google.com/maps/search/Steril+Gene+Life+Sciences+Puducherry" },
    { name: "Kalki Medical Enterprises", phone: "0413-2277645", url: "https://www.google.com/maps/search/Kalki+Medical+Enterprises+Pondicherry" },
    { name: "MedLife Pharma & Surgicals", phone: "090477 66644", url: "https://www.google.com/maps/search/MedLife+Pharma+Surgicals+Pondicherry" },
    { name: "Vaishnavi Surgicals", phone: "0413-2226267", url: "https://www.google.com/maps/search/Vaishnavi+Surgicals+Pondicherry" },
    { name: "Bangalore Surgicals", phone: "0413-2339838", url: "https://www.google.com/maps/search/Bangalore+Surgicals+Pondicherry" },
    { name: "Sri Goutham Surgicals", phone: "093454 53084", url: "https://www.google.com/maps/search/Sri+Goutham+Surgicals+Pondicherry" },
    { name: "Sri Rajendra Scientific & Surgicals", phone: "094433 44108", url: "https://www.google.com/maps/search/Sri+Rajendra+Scientific+Surgicals+Pondicherry" },
    { name: "Sakthi Murugan Surgicals", phone: "070940 13411", url: "https://www.google.com/maps/search/Sakthi+Murugan+Surgicals+Pondicherry" },
    { name: "Javana Medical Systems", phone: "097245 18194", url: "https://www.google.com/maps/search/Javana+Medical+Systems+Pondicherry" },
    { name: "Primelaze Meditech", phone: "080489 85107", url: "https://www.google.com/maps/search/Primelaze+Meditech+Pondicherry" },
    { name: "Ezhil Biomedical Sales & Services", phone: "080476 73620", url: "https://www.google.com/maps/search/Ezhil+Biomedical+Pondicherry" },
    { name: "Star Equipments and Surgicals", phone: "", url: "https://www.google.com/maps/search/Star+Equipments+Surgicals+Pondicherry" },
    { name: "Getwell Surgicals", phone: "", url: "https://www.google.com/maps/search/Getwell+Surgicals+Pondicherry" },
    { name: "Sri Sai Santhosh Surgicals", phone: "", url: "https://www.google.com/maps/search/Sri+Sai+Santhosh+Surgicals+Pondicherry" },
    { name: "Surgi Point", phone: "", url: "https://www.google.com/maps/search/Surgi+Point+Pondicherry" },
    { name: "Aarvam Medical Systems", phone: "", url: "https://www.google.com/maps/search/Aarvam+Medical+Systems+Pondicherry" },
    { name: "Esha Biomedical Services", phone: "079428 26276", url: "https://www.google.com/maps/search/Esha+Biomedical+Services+Pondicherry" },
    { name: "Suryaa Medicals", phone: "", url: "https://www.google.com/maps/search/Suryaa+Medicals+Lawspet+Pondicherry" },
    { name: "N.N. Surgicals", phone: "", url: "https://www.google.com/maps/search/NN+Surgicals+Pondicherry" },
    { name: "Matri Instruments & Surgicals", phone: "", url: "https://www.google.com/maps/search/Matri+Instruments+Surgicals+Pondicherry" },
    { name: "CMC Surgicals", phone: "", url: "https://www.google.com/maps/search/CMC+Surgicals+Pondicherry" },
  ],
  chennai: [
    { name: "Sri Rohini Impex", phone: "080438 74468", url: "https://www.google.com/maps/search/Sri+Rohini+Impex+Chennai" },
    { name: "B S Surgicals", phone: "080473 06714", url: "https://www.google.com/maps/search/BS+Surgicals+Chennai" },
    { name: "Gesco Healthcare Pvt. Ltd.", phone: "080478 12548", url: "https://www.google.com/maps/search/Gesco+Healthcare+Chennai" },
    { name: "Braun Medisys Surgicals", phone: "080445 66761", url: "https://www.google.com/maps/search/Braun+Medisys+Surgicals+Chennai" },
    { name: "Gladon Hospital Suppliers", phone: "080445 66750", url: "https://www.google.com/maps/search/Gladon+Hospital+Suppliers+Chennai" },
    { name: "National Surgical Co.", phone: "080444 64577", url: "https://www.google.com/maps/search/National+Surgical+Co+Chennai" },
    { name: "Plus Orthopedics India", phone: "044-4210 4112", url: "https://www.google.com/maps/search/Plus+Orthopedics+India+Chennai" },
    { name: "Paul Medical Systems", phone: "080486 06605", url: "https://www.google.com/maps/search/Paul+Medical+Systems+Chennai" },
    { name: "Rex Enterprises", phone: "080478 18453", url: "https://www.google.com/maps/search/Rex+Enterprises+Chennai+surgical" },
    { name: "Dynamed Equipments Pvt. Ltd.", phone: "044-2650 2264", url: "https://www.google.com/maps/search/Dynamed+Equipments+Chennai", technicianSupport: { available: true, type: "Clinical Specialist", details: "Authorized Stryker & Zimmer Biomet distributor. 45+ staff across TN including Puducherry. Provides training and on-site technical support till customers are familiarized." } },
    { name: "Jayon Implants Pvt. Ltd.", phone: "080457 29507", url: "https://www.google.com/maps/search/Jayon+Implants+Chennai" },
    { name: "Tetramed Surgicals", phone: "080438 68802", url: "https://www.google.com/maps/search/Tetramed+Surgicals+Chennai", technicianSupport: { available: true, type: "Field Service Staff", details: "Service staff in every district of Tamil Nadu with 20+ branches. Named technical support contact available. 18+ years serving orthopaedic surgeons across TN." } },
    { name: "V. S. Surgicals Co.", phone: "080410 14324", url: "https://www.google.com/maps/search/VS+Surgicals+Chennai" },
    { name: "Medifield Equipments Corp", phone: "080444 64610", url: "https://www.google.com/maps/search/Medifield+Equipments+Chennai", technicianSupport: { available: true, type: "Field Service Personnel", details: "Team of trained marketing & service personnel across South India. Offices in Chennai, Coimbatore, Hyderabad, Madurai, Trichy, and more. Established 1985." } },
    { name: "Eagle Osteon Technologies", phone: "", url: "https://www.google.com/maps/search/Eagle+Osteon+Technologies+Chennai" },
    { name: "Sudar Surgical Pvt Ltd", phone: "", url: "https://www.google.com/maps/search/Sudar+Surgical+Chennai" },
    { name: "Medyssey India Pvt. Ltd.", phone: "080445 63506", url: "https://www.google.com/maps/search/Medyssey+India+Chennai" },
    { name: "Maax Health Care", phone: "080445 66912", url: "https://www.google.com/maps/search/Maax+Health+Care+Chennai" },
    { name: "Care Cure Inc", phone: "080478 15630", url: "https://www.google.com/maps/search/Care+Cure+Inc+Chennai" },
    { name: "Surgical Avenue", phone: "", url: "https://www.google.com/maps/search/Surgical+Avenue+Chennai" },
  ],
};

export function getVendorsForCity(city: CityId): Vendor[] {
  return vendorsByCity[city] || [];
}

export const supportedCities: { id: CityId; name: string }[] = [
  { id: "pondicherry", name: "Pondicherry" },
  { id: "chennai", name: "Chennai" },
];

// ── Brands with verified category mappings ──────────────────────

type BrandTier = "intl" | "tier1" | "tier2" | "tier3";

interface BrandInfo {
  name: string;
  rating: number;
  reviews: number;
  tier: BrandTier;
  categories: string[]; // which product categories this brand manufactures
  priority?: boolean; // always include in results for matching categories
  technicianSupport?: {
    available: boolean;
    type: string;
    details: string;
  };
}

// Known brand → vendor pairings (brand name → vendor name)
// These ensure specific dealers always appear for their known brands
const knownBrandVendors: Record<string, string[]> = {
  "Hardik International": ["Suryaa Medicals"],
};

const brandPool: BrandInfo[] = [
  // ── International / Multinational brands (2-4 authorized distributors per city) ──
  { name: "DePuy Synthes (J&J)", rating: 4.9, reviews: 210, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"], technicianSupport: { available: true, type: "Clinical Specialist", details: "Field-based Clinical & Product Specialists provide in-theatre procedural support, technical guidance, and surgeon training for trauma, spine, and joint reconstruction." } },
  { name: "Stryker", rating: 4.8, reviews: 198, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"], technicianSupport: { available: true, type: "Onsite Specialist", details: "Onsite Specialists and Mako Product Specialists provide intraoperative surgical support including equipment setup, troubleshooting, and technical expertise. Chennai regional office with 1000+ India employees." } },
  { name: "Zimmer Biomet", rating: 4.7, reviews: 189, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"], technicianSupport: { available: true, type: "Product Specialist SET", details: "Surgical Excellence Team (SET) product specialists in Chennai. Provide surgical demonstrations, peer-to-peer engagement, and technical support for hip, knee, and shoulder systems." } },
  { name: "Smith+Nephew", rating: 4.7, reviews: 176, tier: "intl", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","external-fixation"], technicianSupport: { available: true, type: "Clinical Support Specialist", details: "Clinical and Medical Affairs specialists dedicated to Orthopaedics, Sports Medicine & ENT. Medical education and commercial support teams." } },
  { name: "Medtronic", rating: 4.8, reviews: 165, tier: "intl", categories: ["spine-implants"], technicianSupport: { available: true, type: "Clinical Specialist", details: "Clinical Specialists for Spine & Biologics provide intraoperative support. Confirmed specialist based in Chennai (600041) covering entire Tamil Nadu. Office at Doshi Towers, Kilpauk." } },
  { name: "B. Braun", rating: 4.6, reviews: 142, tier: "intl", categories: ["hip-replacement","knee-replacement","spine-implants"], technicianSupport: { available: true, type: "Aesculap Technical Service", details: "Aesculap division provides repair, maintenance, and OR support for surgical instruments and motor systems. Technicians trained at HQ in Germany. OrthoPilot navigation system support." } },
  { name: "Arthrex", rating: 4.7, reviews: 138, tier: "intl", categories: ["bone-plates","bone-screws","shoulder-upper-limb","spine-implants","specialized-implants"] },
  { name: "Orthofix", rating: 4.3, reviews: 71, tier: "intl", categories: ["spine-implants","external-fixation","specialized-implants"] },
  { name: "NuVasive", rating: 4.5, reviews: 96, tier: "intl", categories: ["spine-implants","specialized-implants"] },
  { name: "Globus Medical", rating: 4.5, reviews: 88, tier: "intl", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","specialized-implants"] },
  { name: "Exactech", rating: 4.4, reviews: 72, tier: "intl", categories: ["hip-replacement","knee-replacement","shoulder-upper-limb","specialized-implants"] },
  { name: "CONMED", rating: 4.3, reviews: 68, tier: "intl", categories: ["shoulder-upper-limb","specialized-implants"] },
  { name: "Integra LifeSciences", rating: 4.4, reviews: 74, tier: "intl", categories: ["shoulder-upper-limb","specialized-implants"] },
  // ── Indian brands - Tier 1 (5-8 dealers per city, wide distribution) ──
  { name: "GPC Medical", rating: 4.5, reviews: 187, tier: "tier1", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","spine-implants","external-fixation","specialized-implants"], technicianSupport: { available: true, type: "Customer Support & Training", details: "Dedicated customer support team. Interactive surgical skills learning platform for healthcare professionals. Educational seminars, workshops, and after-sales service with trained staff." } },
  { name: "Siora Surgicals", rating: 4.4, reviews: 156, tier: "tier1", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation"], technicianSupport: { available: true, type: "Distributor Technical Support", details: "Product training, promotional materials, and technical support provided to distributor network. Team of experts for product queries and technical issues. 130+ distributors globally." } },
  { name: "Narang Medical", rating: 4.3, reviews: 134, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation"], technicianSupport: { available: true, type: "Technical Assistance & Training", details: "Technical assistance, training, and educational resources for surgeons and medical staff. In-house sales consultants with technical expertise. Workshops to demonstrate surgical techniques." } },
  { name: "Meril Life Sciences", rating: 4.4, reviews: 94, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","spine-implants"], technicianSupport: { available: true, type: "Technical Application Specialist", details: "On-site technical assistance during orthopaedic surgeries — correct application of implants, instruments, and systems. Troubleshoots intraoperative issues. Meril Academy provides workshops for OT nursing and surgeons." } },
  { name: "Auxein Medical", rating: 4.4, reviews: 112, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "S.H. Pitkar Orthotools", rating: 4.5, reviews: 128, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Sharma Ortho", rating: 4.2, reviews: 98, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Atlas Surgical", rating: 4.3, reviews: 91, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation"] },
  { name: "Uteshiya Medicare", rating: 4.2, reviews: 86, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","specialized-implants"] },
  { name: "Plus Orthopedics", rating: 4.3, reviews: 92, tier: "tier1", categories: ["hip-replacement","knee-replacement"] },
  { name: "Greens Surgicals", rating: 4.1, reviews: 54, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation","specialized-implants"] },
  // ── Indian brands - Tier 2 (3-6 dealers per city) ──
  { name: "Hardik International", rating: 4.3, reviews: 105, tier: "tier2", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Zealmax Innovations", rating: 4.2, reviews: 78, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","spine-implants","external-fixation","specialized-implants"] },
  { name: "Matrix Meditec", rating: 4.1, reviews: 65, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Biorad Medisys", rating: 4.2, reviews: 82, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","specialized-implants"] },
  { name: "Miraclus Life Sciences", rating: 4.1, reviews: 59, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation"] },
  { name: "Bombay Ortho Industries", rating: 4.2, reviews: 76, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","spine-implants"] },
  { name: "Bonetech Medisys", rating: 4.1, reviews: 63, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","specialized-implants"] },
  { name: "Austeofix Surgical", rating: 4.2, reviews: 70, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","spine-implants","external-fixation"] },
  { name: "MJ Surgical", rating: 4.0, reviews: 55, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","specialized-implants"] },
  { name: "Response Ortho", rating: 4.1, reviews: 61, tier: "tier2", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","external-fixation"] },
  // ── Indian brands - Tier 3 (2-4 dealers per city, regional/niche) ──
  { name: "Biotek India", rating: 4.3, reviews: 89, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","shoulder-upper-limb","spine-implants","specialized-implants"] },
  { name: "Nebula Surgical", rating: 4.0, reviews: 67, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Genius Ortho", rating: 4.1, reviews: 58, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation"] },
  { name: "Inor Orthopaedics", rating: 4.2, reviews: 63, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement"] },
  { name: "Hi-Tech Ortho", rating: 4.0, reviews: 45, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","external-fixation"] },
  { name: "Global Orthosys", rating: 4.0, reviews: 41, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","spine-implants","external-fixation","specialized-implants"] },
  { name: "Sofia Surgicals", rating: 4.1, reviews: 48, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","spine-implants","external-fixation"] },
  { name: "Jayon Implants", rating: 4.2, reviews: 52, tier: "tier3", categories: ["bone-plates","bone-screws","spine-implants","external-fixation","specialized-implants"] },
  { name: "Saamarth Ortho", rating: 4.0, reviews: 39, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","external-fixation"] },
  { name: "Changzhou Meditech", rating: 4.1, reviews: 44, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation","specialized-implants"] },
  { name: "Titanium Implants", rating: 4.0, reviews: 37, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","external-fixation"] },
  { name: "Ortho Care", rating: 4.1, reviews: 50, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Kaushik Orthopaedic", rating: 4.0, reviews: 42, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation"] },
  { name: "Bharath Orthopaedics", rating: 4.1, reviews: 46, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","external-fixation"] },
];

// Vendor count per brand tier (realistic distribution network sizes)
const vendorCountByTier: Record<BrandTier, { min: number; max: number }> = {
  intl:  { min: 1, max: 2 },  // International: 1-2 authorized distributors only
  tier1: { min: 1, max: 3 },  // Large Indian: few select dealers
  tier2: { min: 1, max: 2 },  // Mid-size Indian: limited network
  tier3: { min: 1, max: 2 },  // Regional/niche: very few distributors
};

// Max brands per product by category — realistic market availability
const maxBrandsPerProduct: Record<string, { intl: number; indian: number }> = {
  "bone-plates":          { intl: 3, indian: 6 },   // ~9 brands per plate type
  "bone-screws":          { intl: 3, indian: 6 },   // ~9 brands per screw type
  "intramedullary-nails": { intl: 3, indian: 5 },   // ~8 brands per nail type
  "wires-pins-staples":   { intl: 2, indian: 5 },   // ~7 brands
  "hip-replacement":      { intl: 4, indian: 4 },   // ~8 brands (more intl for joints)
  "knee-replacement":     { intl: 4, indian: 3 },   // ~7 brands
  "shoulder-upper-limb":  { intl: 4, indian: 2 },   // ~6 brands (fewer Indian options)
  "spine-implants":       { intl: 4, indian: 4 },   // ~8 brands
  "external-fixation":    { intl: 2, indian: 5 },   // ~7 brands
  "specialized-implants": { intl: 3, indian: 4 },   // ~7 brands
};

// Deterministically select which brands supply a specific product.
// Not every brand that makes a category makes every product in it.
function assignBrands(categoryId: string, productIndex: number, city: CityId): BrandEntry[] {
  const cityVendors = vendorsByCity[city];
  const catSeed = categoryId.length + categoryId.charCodeAt(0);
  const limits = maxBrandsPerProduct[categoryId] || { intl: 3, indian: 5 };

  // Filter brands for this category
  const intlBrands = brandPool.filter((b) => b.categories.includes(categoryId) && b.tier === "intl");
  const indianBrands = brandPool.filter((b) => b.categories.includes(categoryId) && b.tier !== "intl");

  // Priority brands always appear for their categories
  const priorityIntl = intlBrands.filter((b) => b.priority);
  const priorityIndian = indianBrands.filter((b) => b.priority);
  const nonPriorityIntl = intlBrands.filter((b) => !b.priority);
  const nonPriorityIndian = indianBrands.filter((b) => !b.priority);

  // Deterministically pick from non-priority pool to fill remaining slots
  const pickSubset = (pool: BrandInfo[], max: number): BrandInfo[] => {
    if (max <= 0 || pool.length === 0) return [];
    if (pool.length <= max) return pool;
    const selected: BrandInfo[] = [];
    const used = new Set<number>();
    for (let i = 0; i < max; i++) {
      let idx = (catSeed * 3 + productIndex * 7 + i * 11) % pool.length;
      while (used.has(idx)) idx = (idx + 1) % pool.length;
      used.add(idx);
      selected.push(pool[idx]);
    }
    return selected;
  };

  // Include all priority brands, then fill remaining slots from non-priority
  const remainingIntl = Math.max(0, limits.intl - priorityIntl.length);
  const remainingIndian = Math.max(0, limits.indian - priorityIndian.length);

  const selectedBrands = [
    ...priorityIntl,
    ...pickSubset(nonPriorityIntl, remainingIntl),
    ...priorityIndian,
    ...pickSubset(nonPriorityIndian, remainingIndian),
  ];

  // Sort by rating descending
  selectedBrands.sort((a, b) => b.rating - a.rating);

  return selectedBrands.map((brand, b) => {
    const { min, max } = vendorCountByTier[brand.tier];
    const vendorCount = min + ((catSeed + productIndex + b) % (max - min + 1));
    const vendors: Vendor[] = [];
    const usedIdx = new Set<number>();

    // First, add any known vendor pairings for this brand
    const knownVendorNames = knownBrandVendors[brand.name] || [];
    for (const kvName of knownVendorNames) {
      const kvIdx = cityVendors.findIndex((v) => v.name === kvName);
      if (kvIdx !== -1 && !usedIdx.has(kvIdx)) {
        usedIdx.add(kvIdx);
        vendors.push(cityVendors[kvIdx]);
      }
    }

    // Fill remaining vendor slots
    for (let v = vendors.length; v < vendorCount && v < cityVendors.length; v++) {
      let idx = (catSeed * 3 + b * 7 + v * 13 + productIndex * 5) % cityVendors.length;
      while (usedIdx.has(idx)) {
        idx = (idx + 1) % cityVendors.length;
      }
      usedIdx.add(idx);
      vendors.push(cityVendors[idx]);
    }

    return {
      name: brand.name,
      rating: brand.rating,
      reviews: brand.reviews,
      vendors,
      ...(brand.technicianSupport ? { technicianSupport: brand.technicianSupport } : {}),
    };
  });
}

// ── Product images ──────────────────────────────────────────────

// Maps product slug → proxied GPC Medical manufacturer photo
const productImageBySlug: Record<string, string> = {
  // === BONE PLATES ===
  "dynamic-compression-plate-dcp": "/img/gpc/Dynamic-Self-Compression-Plate-Broad-619-gpcmedical.jpg",
  "limited-contact-dynamic-compression-plate-lc-dcp": "/img/gpc/Limited-Contact-Dynamic-Compression-Plate-LC-DCP-Small-628-gpcmedical.jpg",
  "locking-compression-plate-lcp": "/img/gpc/4-5mm-narrow-locking-plates-848.jpg",
  "buttress-plate": "/img/gpc/Condylar-Buttress-Plate-Left-Right-606-gpcmedical.jpg",
  "neutralization-plate": "/img/gpc/Dynamic-Self-Compression-Plate-for-2.7mm-Screws-616-gpcmedical.jpg",
  "bridging-plate": "/img/gpc/Dynamic-Self-Compression-Plate-Narrow-618-gpcmedical.jpg",
  "tension-band-plate": "/img/gpc/Dynamic-Self-Compression-Plate-for-Small-Fragment-for-Ulna-and-Radius-617-gpcmedical.jpg",
  "reconstruction-plate": "/img/gpc/Reconstruction-Plate-3-5mm-Screws-633-gpcmedical.jpg",
  "t-plate": "/img/gpc/T-Plate-for-4.5mm-Screws-644-gpcmedical.jpg",
  "l-plate": "/img/gpc/L-Buttress-Plates-Right-624R-gpcmedical.jpg",
  "cloverleaf-plate": "/img/gpc/Cloverleaf-Plate-for-distal-intra-articular-tibial-fractures-608-gpcmedical.jpg",
  "distal-radius-plate": "/img/gpc/Locking-Distal-Radius-Buttress-Plate-924.jpg",
  "proximal-humerus-plate": "/img/gpc/Proximal-Humerus-Bone-Plate-656-gpcmedical.jpg",
  "distal-femur-plate": "/img/gpc/Distal-Femur-Bone-Plate-808-gpcmedical.jpg",
  "proximal-tibia-plate": "/img/gpc/Medial-Proximal-Tibia-Bone-Plate-655-gpcmedical.jpg",
  "calcaneal-plate": "/img/gpc/Calcaneal-Plate-for-3-5mm-812-gpcmedical.jpg",
  "pelvic-reconstruction-plate": "/img/gpc/Y-Reconstruction-Plate-636-gpcmedical.jpg",
  "metaphyseal-plate": "/img/gpc-sm/metaphyseal-locking-plate-sm-gpcmedical.jpg",
  "mini-fragment-plate": "/img/gpc/Straight-Plates-1-5-673-gpcmedical.jpg",
  "pediatric-plate": "/img/gpc-sm/paediatric-dhs-plate-sm-gpcmedical.jpg",
  // === BONE SCREWS ===
  "cortical-screw": "/img/gpc/Cortex-Screw-4-5mm-712-gpcmedical.jpg",
  "cancellous-screw": "/img/gpc/Cancellous-Screw-6-5mm-720-gpcmedical.jpg",
  "locking-screw": "/img/gpc-sm/self-tapping-locking-screws-diameter-5mm-700-sm.jpg",
  "cannulated-screw": "/img/gpc/Large-Cannulated-Cancellous-Screw-7.0mm-727-gpcmedical.jpg",
  "headless-compression-screw": "/img/gpc-sm/Herbert-cannulaed-bone-screw-755-sm.jpg",
  "herbert-screw": "/img/gpc-sm/Herbert-cannulaed-bone-screw-756-sm.jpg",
  "lag-screw": "/img/gpc-sm/d-h-s-lag-screw-S-603-sm.jpg",
  "interference-screw": "/img/gpc/Cancellous-Screw-4mm-723-gpcmedical.jpg",
  "pedicle-screw": "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
  "self-tapping-screw": "/img/gpc-sm/self-taping-cortex-screw-3-5mm-hexagonal-socket-735-sm.jpg",
  "self-drilling-screw": "/img/gpc-sm/Self-taping-cortex-screw-736-sm.jpg",
  "polyaxial-screw": "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
  "monoaxial-screw": "/img/gpc/Single-Lock-Monoaxial-Screw-MAS42T-gpcmedical.jpg",
  "variable-angle-locking-screw": "/img/gpc-sm/3-5mm-locking-compression-screw-self-tapping-765-sm.jpg",
  "fully-threaded-screw": "/img/gpc/Cancellous-Screw-4mm-Fully-Threaded-724-gpcmedical.jpg",
  "malleolar-screw": "/img/gpc-sm/Malleolar-screw-733-sm.jpg",
  // === INTRAMEDULLARY NAILS ===
  "kuntscher-nail": "/img/gpc-sm/intraHEAL-kuntschers-cloverleaf-nail-K-nail-KCN06-sm.jpg",
  "interlocking-nail": "/img/gpc-sm/intraHEAL-reamed-tibial-nail-ITL09-14-sm.jpg",
  "femoral-nail": "/img/gpc-sm/intraHEAL-reamed-femoral-nail-ILF09-14-sm.jpg",
  "tibial-nail": "/img/gpc-sm/intraHEAL-reamed-tibial-nail-ITL09-14-sm.jpg",
  "humeral-nail": "/img/gpc-sm/intraHEAL-reamed-humerus-nail-HNC6-8-sm.jpg",
  "gamma-nail": "/img/gpc-sm/intraHEAL-proximal-hip-stabilizing-nail-ILBS59-sm.jpg",
  "pfn-proximal-femoral-nail": "/img/gpc-sm/intraHEAL-proximal-femoral-nail-PFN10-12-sm.jpg",
  "pfna-nail": "/img/gpc-sm/intraHEAL-proximal-femoral-nail-long-PFNL10-12-sm.jpg",
  "ender-nail": "/img/gpc-sm/intraHEAL-enders-nail-ENI35-sm.jpg",
  "rush-nail": "/img/gpc-sm/Rush-nail-RNI02-sm.jpg",
  "talwalkar-nail": "/img/gpc-sm/Sq-nail-for-radius-KSNR15-40-sm.jpg",
  "seidel-nail": "/img/gpc-sm/intraHEAL-unreamed-humerus-nail-UHN6-8-sm.jpg",
  "grosse-kempf-nail": "/img/gpc-sm/intraHEAL-unreamed-femoral-nail-UFN09-14-sm.jpg",
  "elastic-stable-intramedullary-nail-esin": "/img/gpc-sm/intraHEAL-titanium-elastic-nailing-system-TNI02-sm.jpg",
  "titanium-elastic-nail": "/img/gpc-sm/intraHEAL-titanium-elastic-nailing-system-TNI02-sm.jpg",
  "supracondylar-nail": "/img/gpc-sm/intraHEAL-supra-condylar-nail-IMN10-13-sm.jpg",
  // === WIRES, PINS, STAPLES ===
  "kirschner-wire-k-wire": "/img/gpc-sm/Kirschner-Wire-Single-Ended-PS911S-sm.jpg",
  "steinmann-pin": "/img/gpc/Pin-Steinmann-PS901-gpcmedical.jpg",
  "schanz-screw": "/img/gpc/Self-drilling-Schanz-Pin-TEF1292P-gpcmedical.jpg",
  "cerclage-wire": "/img/gpc/Cerclage-Wire-Loop-PS924-gpcmedical.jpg",
  "tension-band-wire": "/img/gpc-sm/Wire-Roll–3-meter-PS912-sm.jpg",
  "orthopedic-staples": "/img/gpc/Blount-staples-SSI1110-gpcmedical.jpg",
  "rush-pins": "/img/gpc-sm/Knowles-Pin-PS920-sm-gpcmedical.jpg",
  "guide-wire": "/img/gpc/Threaded-Guide-Wire-PS918-gpcmedical.jpg",
  "ilizarov-wire": "/img/gpc-sm/Olive-Wire-Bayonet-Point-IRF1296A-sm-gpcmedical.jpg",
  "bone-pins": "/img/gpc-sm/Austin-Moore-Pin-with-Two-Nuts-PS919-sm-gpcmedical.jpg",
  // === HIP REPLACEMENT ===
  "total-hip-prosthesis": "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
  "bipolar-hip-prosthesis": "/img/gpc/Bipolar-Hip-Prosthesis-Non-Fenestrated-Sterile-BHPN37-gpcmedical.jpg",
  "austin-moore-prosthesis": "/img/gpc/Austin-Moore-Hip-Prostheses-Sterile-Non-Sterile-AMS37-gpcmedical.jpg",
  "thompson-prosthesis": "/img/gpc/Thompson-Hip-Prosthesis-Sterile-Non-Sterile-THP37-gpcmedical.jpg",
  "femoral-stem": "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
  "acetabular-cup": "/img/gpc/Acetabular-Cup-THR38-gpcmedical.jpg",
  "femoral-head-implant": "/img/gpc/Femoral-Neck-Ball-THR37-gpcmedical.jpg",
  "hip-resurfacing-implant": "/img/gpc/Modular-Bipolar-cup-HTC39-gpcmedical.jpg",
  // === SPINE IMPLANTS ===
  "harrington-rod": "/img/gpc-sm/HH43-sm.jpg",
  "luque-rod": "/img/gpc-sm/Drumond-wire-PS925-sm.jpg",
  "spinal-pedicle-screw-system": "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
  "interbody-fusion-cage": "/img/gpc/Lumbar-Cage-PEEK-SH100P-gpcmedical.jpg",
  "cervical-plate": "/img/gpc/Anterior-Cervical-Plates-SH116-gpcmedical.jpg",
  "lumbar-fusion-cage": "/img/gpc/Lumbar-Cage-Titanium-SH100T-gpcmedical.jpg",
  "titanium-mesh-cage": "/img/gpc/Titanium-Mesh-Cages-SH102T-gpcmedical.jpg",
  "interspinous-process-device": "/img/gpc-sm/Hartshill-Frame-PS925H-sm.jpg",
  "spinal-fixation-rod": "/img/gpc/Titanium-Rods-MAS27T-gpcmedical.jpg",
  "cross-link-connector": "/img/gpc/Cross-Connectors-MAS26T-gpcmedical.jpg",
  // === EXTERNAL FIXATION ===
  "external-fixator-frame": "/img/gpc-sm/Dynamic-External-Fixator-Straight-EFS2009-sm-gpcmedical.jpg",
  "ilizarov-external-fixator": "/img/gpc-sm/Ilizarov-Ring-Fixator-Various-Types-EFS6005-sm-gpcmedical.jpg",
  "hybrid-external-fixator": "/img/gpc-sm/Hybrid-Kit-External-Fixator-in-PEEK-EFS2026-sm-gpcmedical.jpg",
  "unilateral-external-fixator": "/img/gpc-sm/Dynamic-External-Fixator-L-Type-EFS2015-sm.jpg",
  "ring-fixator": "/img/gpc-sm/Ilizarov-Ring-Fixator-Various-Types-EFS6006-sm-gpcmedical.jpg",
  // === SPECIALIZED ===
  "bone-anchor": "/img/gpc-sm/Herbert-cannulaed-bone-screw-758-sm.jpg",
  "ligament-reconstruction-screw": "/img/gpc/Cancellous-Screw-4mm-723-gpcmedical.jpg",
  "orbital-reconstruction-plate": "/img/gpc-sm/Orbital-plate-682-sm-gpcmedical.jpg",
  "craniomaxillofacial-plate": "/img/gpc-sm/Mini-plate-833-sm-gpcmedical.jpg",
};

// Category SVG fallbacks (for products without a GPC image match)
const categoryFallback: Record<string, string> = {
  "bone-plates": "/products/bone-plate.svg",
  "bone-screws": "/products/bone-screw.svg",
  "intramedullary-nails": "/products/im-nail.svg",
  "wires-pins-staples": "/products/k-wire.svg",
  "hip-replacement": "/products/hip-implant.svg",
  "knee-replacement": "/products/knee-implant.svg",
  "shoulder-upper-limb": "/products/shoulder-implant.svg",
  "spine-implants": "/products/spine-implant.svg",
  "external-fixation": "/products/external-fixator.svg",
  "specialized-implants": "/products/cmf-plate.svg",
};

const categoryGradients: Record<string, string> = {
  "bone-plates": "from-blue-50 to-indigo-100",
  "bone-screws": "from-slate-50 to-gray-200",
  "intramedullary-nails": "from-violet-50 to-purple-100",
  "wires-pins-staples": "from-emerald-50 to-teal-100",
  "hip-replacement": "from-rose-50 to-pink-100",
  "knee-replacement": "from-amber-50 to-orange-100",
  "shoulder-upper-limb": "from-cyan-50 to-sky-100",
  "spine-implants": "from-red-50 to-rose-100",
  "external-fixation": "from-lime-50 to-green-100",
  "specialized-implants": "from-fuchsia-50 to-pink-100",
};

function getProductImage(name: string, categoryId: string): string {
  const s = slug(name);
  if (productImageBySlug[s]) return productImageBySlug[s];
  return categoryFallback[categoryId] || "/products/bone-plate.svg";
}

export function getCategoryGradient(categoryId: string): string {
  return categoryGradients[categoryId] || "from-gray-50 to-gray-100";
}

// ── Categories & Products ──────────────────────────────────────

export const categories: Category[] = [
  { id: "bone-plates", name: "Bone Plates (Fracture Fixation)", number: 1, image: "/categories/bone-plates.svg", description: "Fracture fixation plates including DCP, LCP, buttress, and reconstruction plates for various anatomical locations." },
  { id: "bone-screws", name: "Bone Screws", number: 2, image: "/categories/bone-screws.svg", description: "Cortical, cancellous, locking, and specialty screws for fracture fixation and orthopaedic reconstruction." },
  { id: "intramedullary-nails", name: "Intramedullary Nails / Rods", number: 3, image: "/categories/im-nails.svg", description: "Intramedullary nailing systems for femoral, tibial, humeral, and proximal femoral fractures." },
  { id: "wires-pins-staples", name: "Wires, Pins, and Staples", number: 4, image: "/categories/wires-pins.svg", description: "K-wires, Steinmann pins, cerclage wires, tension band wires, and orthopaedic staples." },
  { id: "hip-replacement", name: "Hip Replacement Implants", number: 5, image: "/categories/hip-replacement.svg", description: "Total hip, bipolar, hemiarthroplasty prostheses, femoral stems, and acetabular cups." },
  { id: "knee-replacement", name: "Knee Replacement Implants", number: 6, image: "/categories/knee-replacement.svg", description: "Total and partial knee replacement systems including femoral, tibial, and patellar components." },
  { id: "shoulder-upper-limb", name: "Shoulder and Upper Limb Implants", number: 7, image: "/categories/shoulder.svg", description: "Shoulder, elbow, radial head, and wrist joint prostheses for upper extremity reconstruction." },
  { id: "spine-implants", name: "Spine Implants", number: 8, image: "/categories/spine.svg", description: "Spinal fixation systems, pedicle screws, interbody cages, cervical plates, and fusion devices." },
  { id: "external-fixation", name: "External Fixation Systems", number: 9, image: "/categories/external-fixation.svg", description: "Ilizarov, hybrid, unilateral, and ring external fixator systems for complex fracture management." },
  { id: "specialized-implants", name: "Specialized Orthopaedic Implants", number: 10, image: "/categories/specialized.svg", description: "Finger prostheses, artificial discs, bone anchors, and craniomaxillofacial implants." },
];

const productData: Record<string, string[]> = {
  "bone-plates": ["Dynamic Compression Plate (DCP)","Limited Contact Dynamic Compression Plate (LC-DCP)","Locking Compression Plate (LCP)","Buttress Plate","Neutralization Plate","Bridging Plate","Tension Band Plate","Reconstruction Plate","T-Plate","L-Plate","Cloverleaf Plate","Distal Radius Plate","Proximal Humerus Plate","Distal Femur Plate","Proximal Tibia Plate","Calcaneal Plate","Pelvic Reconstruction Plate","Metaphyseal Plate","Mini Fragment Plate","Pediatric Plate"],
  "bone-screws": ["Cortical Screw","Cancellous Screw","Locking Screw","Cannulated Screw","Headless Compression Screw","Herbert Screw","Lag Screw","Interference Screw","Pedicle Screw","Self-tapping Screw","Self-drilling Screw","Polyaxial Screw","Monoaxial Screw","Variable Angle Locking Screw","Fully Threaded Screw"],
  "intramedullary-nails": ["Kuntscher Nail","Interlocking Nail","Femoral Nail","Tibial Nail","Humeral Nail","Gamma Nail","PFN (Proximal Femoral Nail)","PFNA Nail","Ender Nail","Rush Nail","Talwalkar Nail","Seidel Nail","Grosse-Kempf Nail","Elastic Stable Intramedullary Nail (ESIN)","Titanium Elastic Nail"],
  "wires-pins-staples": ["Kirschner Wire (K-wire)","Steinmann Pin","Schanz Screw","Cerclage Wire","Tension Band Wire","Orthopedic Staples","Rush Pins","Guide Wire","Ilizarov Wire","Bone Pins"],
  "hip-replacement": ["Total Hip Prosthesis","Bipolar Hip Prosthesis","Austin Moore Prosthesis","Thompson Prosthesis","Femoral Stem","Acetabular Cup","Femoral Head Implant","Hip Resurfacing Implant"],
  "knee-replacement": ["Total Knee Replacement Prosthesis","Partial Knee Implant","Femoral Component (Knee)","Tibial Base Plate","Tibial Insert (Polyethylene)","Patellar Implant"],
  "shoulder-upper-limb": ["Total Shoulder Prosthesis","Reverse Shoulder Prosthesis","Radial Head Prosthesis","Elbow Joint Prosthesis","Wrist Joint Prosthesis"],
  "spine-implants": ["Harrington Rod","Luque Rod","Spinal Pedicle Screw System","Interbody Fusion Cage","Cervical Plate","Lumbar Fusion Cage","Titanium Mesh Cage","Interspinous Process Device","Spinal Fixation Rod","Cross-link Connector"],
  "external-fixation": ["External Fixator Frame","Ilizarov External Fixator","Hybrid External Fixator","Unilateral External Fixator","Ring Fixator"],
  "specialized-implants": ["Swanson Finger Prosthesis","Artificial Disc Implant","Bone Anchor","Ligament Reconstruction Screw","Orbital Reconstruction Plate","Craniomaxillofacial Plate"],
};

// ── Detailed product info (medical descriptions, images, indications) ──

const productDetails: Record<string, ProductDetail> = {
  // === BONE PLATES ===
  "dynamic-compression-plate-dcp": {
    description: "The Dynamic Compression Plate (DCP) is the gold standard in fracture fixation. It features oval holes that allow eccentric screw placement, generating axial compression at the fracture site. When screws are inserted eccentrically, the inclined screw hole geometry causes the plate to slide, compressing bone fragments together. This promotes primary bone healing without callus formation.",
    indications: ["Diaphyseal fractures of long bones", "Forearm fractures (radius/ulna)", "Clavicle fractures", "Non-unions requiring compression", "Corrective osteotomies"],
    surgicalTechnique: "After fracture reduction, the plate is positioned on the tension side of the bone. The first screw is placed in neutral position closest to the fracture. Subsequent screws are placed eccentrically (away from the fracture line) in the oblong holes, generating 0.8-1.0mm compression per screw. Minimum 3 cortices engagement on each side of the fracture is recommended.",
    material: "316L Stainless Steel or Titanium alloy (Ti-6Al-4V)",
    sizes: "2.7mm, 3.5mm narrow, 3.5mm broad, 4.5mm narrow, 4.5mm broad. Lengths: 3-16 holes",
    image: "/img/gpc/Dynamic-Self-Compression-Plate-Broad-619-gpcmedical.jpg",
    steps: [
      { title: "Fracture Exposure & Reduction", description: "Make an appropriate surgical approach to expose the fracture site. Achieve anatomical reduction of the fracture fragments using reduction clamps, bone holding forceps, or pointed reduction forceps. Clear the fracture site of hematoma and soft tissue." },
      { title: "Plate Positioning", description: "Select the appropriate plate size (3.5mm or 4.5mm). Position the plate on the tension side of the bone, spanning the fracture. The plate should have at least 3 screw holes on each side of the fracture. Temporarily hold with a bone holding clamp." },
      { title: "Neutral Screw Placement", description: "Drill the first screw hole closest to the fracture in neutral (centered) position. Measure depth with depth gauge. Tap if needed (cortical bone). Insert the first screw to secure the plate to the bone without generating compression." },
      { title: "Eccentric Screw Insertion for Compression", description: "Using the eccentric drill guide (yellow/gold), drill subsequent holes directed AWAY from the fracture line. As each screw is tightened, the bone fragment slides toward the fracture, generating 0.8-1.0mm axial compression per screw. Repeat on the opposite side." },
      { title: "Final Fixation & Closure", description: "Fill remaining plate holes with screws in neutral position for added stability. Confirm reduction and fixation under fluoroscopy. Irrigate the wound thoroughly. Close in layers with drain if needed. Apply sterile dressing." },
    ],
  },
  "limited-contact-dynamic-compression-plate-lc-dcp": {
    description: "The LC-DCP is an evolution of the standard DCP with an undercut design that reduces plate-bone contact by 50%. This preserves periosteal blood supply, reducing cortical porosis and promoting faster healing. The plate's trapezoidal cross-section provides uniform stiffness and the DCU (Dynamic Compression Unit) holes allow angular screw placement up to 40 degrees in the longitudinal axis.",
    indications: ["Diaphyseal fractures requiring biological fixation", "Fractures where periosteal preservation is critical", "Refractures after plate removal", "Osteoporotic bone fixation", "Periprosthetic fractures"],
    surgicalTechnique: "Similar to DCP but with emphasis on minimally invasive plate osteosynthesis (MIPO) when possible. The reduced contact area allows the plate to be slid submuscularly. Screws can be tilted up to 25 degrees transversely and 7 degrees axially within the DCU hole.",
    material: "316L Stainless Steel or Commercially Pure Titanium",
    sizes: "3.5mm (small fragment), 4.5mm narrow, 4.5mm broad. Lengths: 4-18 holes",
    image: "/img/gpc/Limited-Contact-Dynamic-Compression-Plate-LC-DCP-Small-628-gpcmedical.jpg",
    steps: [
      { title: "Approach & Fracture Reduction", description: "Expose the fracture through a minimally invasive approach when possible. The LC-DCP's reduced contact design supports MIPO (Minimally Invasive Plate Osteosynthesis). Achieve acceptable reduction — anatomical for simple fractures, length/alignment/rotation for comminuted." },
      { title: "Submuscular Plate Insertion", description: "For MIPO technique: make small incisions proximally and distally. Slide the LC-DCP submuscularly along the bone using the plate's smooth undersurface. The undercut design preserves periosteal blood supply during sliding." },
      { title: "Screw Fixation Using DCU Holes", description: "Insert screws through the DCU (Dynamic Compression Unit) holes. Screws can be tilted up to 25° transversely and 7° axially. Use eccentric placement for compression or neutral for bridging. Place minimum 3 bicortical screws per main fragment." },
      { title: "Verification & Closure", description: "Check fracture reduction, plate position, and screw placement with fluoroscopy in two planes. Irrigate wounds. Close in layers. The reduced plate-bone contact minimizes cortical porosis and promotes faster healing." },
    ],
  },
  "locking-compression-plate-lcp": {
    description: "The LCP combines conventional compression plating with angular-stable locking screw technology in a single implant. Its combination holes accept both standard cortical screws (for compression) and locking head screws (for angular stability). This creates a fixed-angle construct that functions as an internal fixator, independent of plate-bone friction.",
    indications: ["Periarticular fractures", "Osteoporotic fractures", "Comminuted fractures", "Periprosthetic fractures", "Bridging fixation of multifragmentary fractures", "Minimally invasive plate osteosynthesis (MIPO)"],
    surgicalTechnique: "Can be used in compression mode (cortex screws in the DCU portion), locking mode (locking screws in threaded portion), or combined mode. For bridge plating, place locking screws at each end of the plate without touching bone in the comminuted zone. Do not mix locking and cortex screws in the same fragment.",
    material: "316L Stainless Steel or Titanium alloy (Ti-6Al-4V)",
    sizes: "2.4mm, 2.7mm, 3.5mm, 4.5mm/5.0mm. Anatomically pre-contoured variants for distal radius, proximal humerus, distal femur, proximal tibia",
    image: "/img/gpc/4-5mm-narrow-locking-plates-848.jpg",
    steps: [
      { title: "Fracture Assessment & Approach", description: "Evaluate the fracture pattern to determine if compression mode, locking mode, or combined mode is indicated. For periarticular fractures, plan a MIPO approach. For simple diaphyseal fractures, consider compression plating." },
      { title: "Plate Selection & Contouring", description: "Select the anatomically pre-contoured LCP variant if available (distal radius, proximal humerus, distal femur). For straight plates, contour to bone anatomy. The combination hole accepts both locking and cortex screws." },
      { title: "Compression Screws (if needed)", description: "Insert standard cortex screws in the DCU (oval) portion of combination holes for interfragmentary compression. Place near the fracture first. Do NOT mix locking and cortex screws in the same bone fragment." },
      { title: "Locking Screw Placement", description: "Insert self-drilling/self-tapping locking head screws into the threaded portion of the combination holes. These create angular-stable fixation independent of plate-bone contact. Ideal for osteoporotic bone and bridge plating." },
      { title: "Final Check & Wound Closure", description: "Verify alignment and screw placement on fluoroscopy. Ensure no locking screws are in the comminuted zone (for bridge plating). Irrigate and close in layers." },
    ],
  },
  "buttress-plate": {
    description: "Buttress plates are designed to prevent displacement of bone fragments subjected to axial loading, particularly in metaphyseal fractures. They function by buttressing (supporting) the fracture fragments against shear and compressive forces. The plate acts as a wall to prevent fragment displacement rather than generating interfragmentary compression.",
    indications: ["Tibial plateau fractures (Schatzker classification)", "Distal femoral condylar fractures", "Distal tibial pilon fractures", "Metaphyseal fractures with articular involvement"],
    surgicalTechnique: "Place the plate on the side of expected displacement. For lateral tibial plateau fractures, the plate is placed laterally. Articular fragments are first reduced and held with lag screws, then the buttress plate is applied to maintain reduction. Bone graft may be needed to support depressed articular fragments.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm and 4.5mm. T-shaped, L-shaped, and anatomically contoured variants",
    image: "/img/gpc/Condylar-Buttress-Plate-Left-Right-606-gpcmedical.jpg",
    steps: [
      { title: "Fracture Exposure & Articular Reduction", description: "Expose the fracture through an appropriate approach (e.g., anterolateral for tibial plateau). Reduce the articular surface anatomically using direct visualization or arthroscopic assistance. Elevate depressed articular fragments with a bone tamp." },
      { title: "Subchondral Support & Bone Grafting", description: "Pack bone graft (autograft or substitute) beneath elevated articular fragments to prevent re-depression. Temporarily fix articular fragments with K-wires." },
      { title: "Buttress Plate Positioning", description: "Contour the buttress plate to match the metaphyseal anatomy. Position the plate to resist the expected direction of fragment displacement. The plate acts as a wall preventing shear displacement." },
      { title: "Lag Screw & Plate Fixation", description: "Insert lag screws through the plate to compress articular fragments. Place remaining screws to secure the plate to the diaphysis. Ensure the plate buttresses against the direction of deforming forces." },
      { title: "Final Assessment & Closure", description: "Confirm articular reduction and hardware position on fluoroscopy. Check range of motion. Irrigate and close in layers with drain if needed." },
    ],
  },
  // === BONE SCREWS ===
  "cortical-screw": {
    description: "Cortical screws have a shallow thread depth and small pitch designed for purchase in the dense cortical bone of diaphyses. They feature a fully threaded shaft and require pre-drilling and tapping. The thread design provides maximum holding power in cortical bone, and they are the primary fixation screws used with conventional (non-locking) bone plates.",
    indications: ["Plate fixation in diaphyseal fractures", "Lag screw fixation of oblique fractures", "Interfragmentary compression", "General cortical bone fixation"],
    surgicalTechnique: "Drill with appropriate drill bit (2.5mm for 3.5mm screw, 3.2mm for 4.5mm screw). Measure depth with depth gauge. Tap the hole (self-tapping variants skip this step). Insert screw. For lag technique: overdrill near cortex with gliding hole, drill far cortex with thread hole only.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.0mm, 2.7mm, 3.5mm, 4.5mm diameter. Lengths: 10-90mm in 2mm increments",
    image: "/img/gpc/Cortex-Screw-4-5mm-712-gpcmedical.jpg",
    steps: [
      { title: "Drill Pilot Hole", description: "Select the appropriate drill bit (2.5mm for 3.5mm screw, 3.2mm for 4.5mm screw). Drill through both cortices using a drill guide on the plate or freehand. Use the depth gauge to measure screw length." },
      { title: "Tap the Hole", description: "For non-self-tapping screws, use the appropriate tap to cut threads in the cortical bone. Skip this step for self-tapping screw variants." },
      { title: "Insert Screw", description: "Insert the cortical screw with a screwdriver, ensuring bicortical purchase. Tighten until the screw head is flush with the plate or bone surface. Do not over-tighten to avoid stripping." },
      { title: "Verify Fixation", description: "Confirm screw length and position on fluoroscopy. Ensure the screw does not protrude excessively past the far cortex. Check that the plate is stable and the fracture reduction is maintained." },
    ],
  },
  "cancellous-screw": {
    description: "Cancellous screws have a deeper thread depth, wider pitch, and thinner core diameter compared to cortical screws. This design provides excellent purchase in the softer cancellous (spongy) bone found in metaphyseal and epiphyseal regions. They are available in partially threaded and fully threaded variants.",
    indications: ["Metaphyseal fractures", "Epiphyseal fractures", "Medial malleolar fractures", "Femoral neck fractures (cannulated type)", "Cancellous bone graft fixation"],
    surgicalTechnique: "Pre-drill with 2.5mm or 3.2mm drill bit depending on screw size. For lag screw effect with partially threaded screws, ensure only the threaded portion engages the far fragment. 6.5mm screws with 16mm or 32mm thread lengths for periarticular fixation.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "4.0mm (16mm/full thread), 6.5mm (16mm/32mm/full thread). Lengths: 15-130mm",
    image: "/img/gpc/Cancellous-Screw-6-5mm-720-gpcmedical.jpg",
    steps: [
      { title: "Identify Entry Point", description: "Determine the optimal screw trajectory perpendicular to the fracture line or along the desired fixation axis. Mark the entry point on the metaphyseal bone surface." },
      { title: "Drill Pilot Hole", description: "Pre-drill with 2.5mm drill bit (for 4.0mm screw) or 3.2mm drill bit (for 6.5mm screw). For lag screw effect with partially threaded screws, overdrill the near cortex with the appropriate gliding hole drill." },
      { title: "Measure & Insert Screw", description: "Measure with depth gauge. Select partially threaded (16mm or 32mm thread) or fully threaded variant based on fracture pattern. Insert screw ensuring threads engage only the far fragment for lag effect." },
      { title: "Confirm Compression", description: "Verify interfragmentary compression by checking fracture line closure. Confirm screw position on fluoroscopy in two planes. Avoid excessive penetration into the joint." },
    ],
  },
  "cannulated-screw": {
    description: "Cannulated screws are hollow-core screws designed for placement over a guide wire. This allows precise placement under fluoroscopic guidance without the need for direct fracture visualization. The cannulation runs the full length of the screw, and the guide wire ensures accurate trajectory into the desired bone fragment.",
    indications: ["Femoral neck fractures (Garden classification)", "Scaphoid fractures", "Medial malleolus fractures", "Olecranon fractures", "Small fragment periarticular fractures", "Percutaneous fixation"],
    surgicalTechnique: "Insert guide wire under fluoroscopy to desired position. Confirm position on AP and lateral views. Overdrill or cannulated drill over the wire. Insert the cannulated screw over the guide wire. Typically 3 parallel cannulated screws for femoral neck fixation in an inverted triangle configuration.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.0mm, 4.0mm, 4.5mm, 6.5mm, 7.0mm, 7.3mm diameter. Partially and fully threaded",
    image: "/img/gpc/Large-Cannulated-Cancellous-Screw-7.0mm-727-gpcmedical.jpg",
    steps: [
      { title: "Insert Guide Wire", description: "Under fluoroscopic guidance, insert a guide wire percutaneously into the target bone fragment. Confirm position on AP and lateral views. For femoral neck: use an inverted triangle configuration with 3 wires." },
      { title: "Measure & Overdrill", description: "Measure the guide wire depth. Use the cannulated drill over the guide wire to create the screw path. Maintain wire position throughout drilling." },
      { title: "Insert Cannulated Screw", description: "Thread the cannulated screw over the guide wire and advance to the desired depth. The hollow core allows precise placement along the pre-determined trajectory." },
      { title: "Remove Wire & Verify", description: "Remove the guide wire after screw placement. Confirm final screw position on fluoroscopy in two planes. For femoral neck fixation, ensure screws are parallel and spread across the femoral head." },
    ],
  },
  // === INTRAMEDULLARY NAILS ===
  "interlocking-nail": {
    description: "The interlocking intramedullary nail is the workhorse of modern long bone fracture fixation. It acts as a load-sharing internal splint within the medullary canal. Proximal and distal locking screws prevent rotation and shortening, while the nail provides axial and bending stability. This allows early weight bearing and maintains limb length and alignment.",
    indications: ["Femoral shaft fractures", "Tibial shaft fractures", "Humeral shaft fractures", "Pathological fractures", "Non-unions of long bones", "Impending pathological fractures"],
    surgicalTechnique: "Patient on fracture table (femur) or supine (tibia). Entry point: piriformis fossa or greater trochanter tip (femur), medial to tibial tuberosity (tibia). Ream the canal sequentially (1.5-2mm over nail diameter). Insert nail, confirm alignment on fluoroscopy. Lock proximally, then distally through the targeting jig. Static locking for comminuted fractures; dynamic locking for simple fractures.",
    material: "316L Stainless Steel or Titanium alloy (Ti-6Al-7Nb)",
    sizes: "Femoral: 9-14mm diameter, 300-460mm length. Tibial: 8-12mm diameter, 255-390mm length. Humeral: 7-9mm diameter, 200-300mm length",
    image: "/img/gpc-sm/intraHEAL-reamed-tibial-nail-ITL09-14-sm.jpg",
    steps: [
      { title: "Patient Positioning & Entry Point", description: "Position on fracture table (femur) or supine with knee flexed (tibia). Identify entry point: piriformis fossa or greater trochanter tip for femur, medial to tibial tuberosity for tibia. Open with awl." },
      { title: "Guide Wire & Reaming", description: "Insert ball-tipped guide wire across the fracture into the distal fragment. Ream sequentially, increasing by 0.5mm increments, to 1.5-2.0mm over the planned nail diameter." },
      { title: "Nail Insertion", description: "Attach the nail to the insertion handle/targeting jig. Insert the nail over the guide wire, advancing under fluoroscopic guidance until the proximal end is flush with the entry point." },
      { title: "Proximal & Distal Locking", description: "Insert proximal locking screws through the targeting jig. For distal locking, use freehand technique with perfect circle fluoroscopic guidance. Static locking for comminuted fractures; dynamic for simple patterns." },
      { title: "Final Check", description: "Verify fracture alignment, nail position, and all locking screws on AP and lateral fluoroscopy. Confirm rotation clinically. Close entry site wound." },
    ],
  },
  "femoral-nail": {
    description: "Femoral nails are specifically designed for fractures of the femoral shaft. Modern antegrade femoral nails feature a proximal bend matching femoral anatomy, and are available in trochanteric and piriformis entry point variants. The nail provides immediate rotational and axial stability when combined with proximal and distal locking screws.",
    indications: ["Femoral shaft fractures (AO/OTA 32)", "Subtrochanteric fractures", "Ipsilateral femoral shaft + neck fractures", "Pathological femoral fractures", "Malunion correction"],
    surgicalTechnique: "Fracture table positioning with traction. Antegrade entry through greater trochanter tip or piriformis fossa. Sequential reaming with flexible reamers. Nail insertion with proximal targeting jig. Distal locking through freehand technique with perfect circles on fluoroscopy.",
    material: "Titanium alloy (Ti-6Al-7Nb) or 316L Stainless Steel",
    sizes: "9-16mm diameter, 300-480mm length, 10-degree proximal bend. Cannulated for guide wire insertion",
    image: "/img/gpc-sm/intraHEAL-reamed-femoral-nail-ILF09-14-sm.jpg",
    steps: [
      { title: "Fracture Table Setup", description: "Position patient supine on fracture table with the affected limb in traction. Achieve closed reduction under fluoroscopy. Confirm alignment on AP and lateral views." },
      { title: "Entry Point & Guide Wire", description: "Make a proximal incision. Identify entry point at greater trochanter tip or piriformis fossa depending on nail design. Insert guide wire into the medullary canal." },
      { title: "Sequential Reaming", description: "Ream the femoral canal with flexible reamers, increasing diameter by 0.5mm increments. Ream to 1.5-2.0mm larger than the selected nail diameter for adequate fit." },
      { title: "Nail Insertion & Locking", description: "Insert the femoral nail with the proximal targeting jig attached. Lock proximally through the jig. Lock distally using the freehand perfect-circle technique under fluoroscopy." },
      { title: "Closure & Assessment", description: "Verify length, rotation, and alignment on fluoroscopy. Release traction and check limb length clinically. Close wounds in layers." },
    ],
  },
  "pfn-proximal-femoral-nail": {
    description: "The Proximal Femoral Nail (PFN) is designed for intertrochanteric and subtrochanteric hip fractures. It features a lag screw for the femoral head and an anti-rotation screw to prevent rotation of the proximal fragment. The intramedullary design provides a shorter lever arm compared to extramedullary devices like the DHS, reducing the risk of implant failure.",
    indications: ["Stable intertrochanteric fractures (AO 31-A1)", "Unstable intertrochanteric fractures (AO 31-A2, A3)", "Subtrochanteric fractures", "Reverse obliquity fractures", "Pathological peritrochanteric fractures"],
    surgicalTechnique: "Patient on fracture table with traction. Entry point at the tip of the greater trochanter. Insert guide wire, open entry with awl. Insert nail without reaming (for short nails). Place guide wire for lag screw into inferior-center of femoral head (tip-apex distance < 25mm). Insert lag screw and anti-rotation screw. Distal locking as needed.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "Short: 200-240mm, Long: 300-460mm. Lag screw 80-120mm. Neck-shaft angle 130-135 degrees",
    image: "/img/gpc-sm/intraHEAL-proximal-femoral-nail-PFN10-12-sm.jpg",
    steps: [
      { title: "Fracture Reduction on Table", description: "Position on fracture table with traction. Achieve closed reduction of the intertrochanteric fracture under fluoroscopy. Confirm alignment on AP and lateral views." },
      { title: "Entry Point & Nail Insertion", description: "Incise over greater trochanter tip. Open entry with awl. Insert guide wire, then the PFN without reaming (short nails). Advance to correct depth." },
      { title: "Lag Screw Placement", description: "Using the targeting jig, insert guide wire for the lag screw aiming for the inferior-center of the femoral head. Measure to achieve tip-apex distance less than 25mm. Drill and insert lag screw." },
      { title: "Anti-rotation Screw", description: "Insert the anti-rotation hip pin (smaller diameter) through the jig, superior and anterior to the lag screw, to prevent rotation of the proximal fragment." },
      { title: "Distal Locking & Closure", description: "Insert distal locking screw if needed (static locking for unstable patterns). Verify all hardware positions on final fluoroscopy. Close wound." },
    ],
  },
  // === WIRES PINS STAPLES ===
  "kirschner-wire-k-wire": {
    description: "Kirschner wires (K-wires) are smooth or threaded stainless steel pins used for temporary or definitive fixation of bone fragments. They are versatile, minimally invasive, and can be inserted percutaneously. K-wires provide rotational control when used in crossed configuration and are essential tools in hand, wrist, and pediatric fracture surgery.",
    indications: ["Distal radius fractures (supplementary fixation)", "Metacarpal and phalangeal fractures", "Supracondylar humerus fractures in children", "Temporary joint transfixation", "Guide wires for cannulated screw insertion", "Tension band wiring (with cerclage wire)"],
    surgicalTechnique: "Insert with powered drill or manual hand chuck. Use oscillating mode to prevent thermal necrosis. For crossed K-wire fixation, insert wires from opposite sides crossing at the fracture. Leave ends outside skin (bent) for later removal. Typically removed at 3-6 weeks when fracture shows healing.",
    material: "316L Stainless Steel, smooth or threaded tip",
    sizes: "0.6mm, 0.8mm, 1.0mm, 1.2mm, 1.5mm, 1.8mm, 2.0mm, 2.5mm, 3.0mm diameter. Lengths: 70-310mm. Single or double trocar points",
    image: "/img/gpc-sm/Kirschner-Wire-Single-Ended-PS911S-sm.jpg",
    steps: [
      { title: "Select Wire Size & Entry Point", description: "Choose appropriate K-wire diameter based on bone size (0.8-1.0mm for phalanges, 1.5-2.0mm for distal radius, 2.0-2.5mm for supracondylar humerus). Identify percutaneous entry point." },
      { title: "Wire Insertion", description: "Insert K-wire with powered drill using oscillating mode to prevent thermal necrosis. Advance through the fracture under fluoroscopic guidance. For crossed pinning, insert from opposite sides." },
      { title: "Confirm Position", description: "Verify wire position and fracture reduction on AP and lateral fluoroscopy. Adjust as needed. For crossed configuration, ensure wires cross at or above the fracture level." },
      { title: "Secure & Protect", description: "Bend wire ends outside the skin at 90 degrees to prevent migration. Cut leaving 1-2cm exposed for later removal. Apply sterile pin-site dressing. Splint or cast as needed." },
    ],
  },
  // === HIP REPLACEMENT ===
  "total-hip-prosthesis": {
    description: "Total Hip Replacement (THR) involves replacing both the femoral head and acetabulum with prosthetic components. The acetabular component (cup) is fixed into the pelvis, and the femoral component (stem with head) is fixed into the femoral canal. Modern bearing couples include ceramic-on-ceramic, ceramic-on-polyethylene, and metal-on-polyethylene, each with distinct wear characteristics.",
    indications: ["Osteoarthritis of the hip", "Rheumatoid arthritis", "Avascular necrosis of the femoral head", "Displaced femoral neck fractures in active elderly", "Failed internal fixation of hip fractures", "Ankylosing spondylitis"],
    surgicalTechnique: "Approach: posterior (Moore), lateral (Hardinge), anterior (Smith-Petersen), or anterolateral. Femoral neck osteotomy, femoral head removal. Acetabular preparation with sequential reamers. Press-fit or cemented cup insertion at 40-45 degree abduction, 15-20 degree anteversion. Femoral canal broaching, trial reduction, definitive stem insertion. Cup orientation is critical to prevent dislocation.",
    material: "Femoral stem: Titanium alloy or CoCrMo. Acetabular cup: Titanium with UHMWPE/ceramic liner. Head: CoCrMo or Alumina ceramic (28mm, 32mm, 36mm)",
    sizes: "Stems: sizes 1-18 (cemented and cementless). Cups: 44-68mm diameter. Heads: 28, 32, 36, 40mm",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Approach & Dislocation", description: "Select surgical approach (posterior, lateral, or anterior). Perform capsulotomy and dislocate the hip. Perform femoral neck osteotomy and remove the femoral head." },
      { title: "Acetabular Preparation", description: "Remove labrum and remaining cartilage. Ream acetabulum sequentially to bleeding subchondral bone. Insert acetabular cup at 40-45 degree abduction and 15-20 degree anteversion. Secure liner." },
      { title: "Femoral Preparation", description: "Open the femoral canal with a box osteotome. Broach sequentially to the planned size. Perform trial reduction to assess leg length, offset, and stability." },
      { title: "Component Implantation", description: "Insert the definitive femoral stem (cemented or press-fit). Attach the femoral head (ceramic or metal). Reduce the hip. Test stability in flexion/adduction/internal rotation and extension/external rotation." },
      { title: "Closure & Precautions", description: "Repair the capsule and soft tissues. Close in layers with drain. Postoperative hip precautions based on approach used." },
    ],
  },
  "bipolar-hip-prosthesis": {
    description: "The bipolar hip prosthesis is a type of hemiarthroplasty with a dual-bearing system. The inner bearing allows the femoral head to articulate within a polyethylene liner, while the outer bearing (metal shell) articulates with the native acetabulum. This dual articulation reduces acetabular cartilage erosion compared to unipolar (Austin Moore/Thompson) prostheses.",
    indications: ["Displaced femoral neck fractures in elderly", "Pathological fractures of the femoral neck", "Failed fixation of femoral neck fractures", "Low-demand elderly patients (>65 years)"],
    surgicalTechnique: "Posterior or lateral approach. Femoral neck osteotomy, head extraction (measure with sizing template). Femoral canal preparation with sequential broaching. Trial reduction. Cement insertion (if cemented) with cement restrictor and pressurization. Insert definitive stem. Assemble bipolar head (snap-fit inner head into outer shell). Reduce hip and test stability in flexion/adduction/internal rotation.",
    material: "Stem: CoCrMo or Titanium (cemented/cementless). Outer shell: CoCrMo. Inner liner: UHMWPE. Inner head: CoCrMo or Ceramic",
    sizes: "Outer head: 38-62mm (2mm increments). Inner head: 22.2mm or 28mm. Stems: various sizes per manufacturer",
    image: "/img/gpc/Bipolar-Hip-Prosthesis-Non-Fenestrated-Sterile-BHPN37-gpcmedical.jpg",
    steps: [
      { title: "Approach & Head Extraction", description: "Posterior or lateral approach. Perform femoral neck osteotomy. Extract the femoral head and measure with sizing template to select matching bipolar head size." },
      { title: "Femoral Canal Preparation", description: "Open femoral canal and broach sequentially to the planned stem size. Perform trial reduction to check leg length and stability." },
      { title: "Cement & Stem Insertion", description: "For cemented fixation: insert cement restrictor, irrigate and dry canal, pressurize cement, insert stem in correct version. For cementless: press-fit the stem." },
      { title: "Bipolar Head Assembly & Reduction", description: "Assemble the bipolar head by snapping the inner head (22.2mm or 28mm) into the outer shell. Reduce the hip. Test stability through full range of motion including flexion, adduction, and internal rotation." },
      { title: "Closure", description: "Repair posterior capsule and short external rotators (if posterior approach). Close in layers. Apply hip precautions." },
    ],
  },
  // === KNEE REPLACEMENT ===
  "total-knee-replacement-prosthesis": {
    description: "Total Knee Replacement (TKR) replaces the damaged articular surfaces of the distal femur, proximal tibia, and optionally the patella. The femoral component is a metal shield that covers the condyles, the tibial component is a metal baseplate with a polyethylene insert, and the patellar component (if used) is a polyethylene button. Modern designs restore near-normal knee kinematics.",
    indications: ["Severe osteoarthritis of the knee", "Rheumatoid arthritis affecting the knee", "Post-traumatic arthritis", "Failed osteotomy", "Failed unicompartmental knee replacement", "Severe valgus/varus deformity with arthritis"],
    surgicalTechnique: "Midline or medial parapatellar approach. Distal femoral cut at 5-7 degrees valgus using intramedullary or extramedullary guides. Proximal tibial cut perpendicular to mechanical axis with 3-degree posterior slope. Size femoral component, make anterior/posterior and chamfer cuts. Trial components, check alignment, ligament balance, range of motion. Cement components. Patellar resurfacing if indicated.",
    material: "Femoral: CoCrMo alloy. Tibial baseplate: Titanium alloy. Insert: UHMWPE (cross-linked). Patellar button: UHMWPE",
    sizes: "Femoral: 5-8 sizes per manufacturer. Tibial: matching sizes. Insert thickness: 9-20mm. Cemented fixation standard",
    image: "/products/knee-implant.svg",
    steps: [
      { title: "Approach & Exposure", description: "Midline incision, medial parapatellar arthrotomy. Evert or sublux the patella. Excise osteophytes, remove menisci, and release tight structures for balanced flexion/extension gaps." },
      { title: "Bone Cuts", description: "Make distal femoral cut at 5-7 degrees valgus using intramedullary guide. Make proximal tibial cut perpendicular to the mechanical axis with 3-degree posterior slope using extramedullary or intramedullary guide." },
      { title: "Femoral Sizing & Chamfer Cuts", description: "Size the femoral component. Make anterior, posterior, and chamfer cuts with the cutting block. Ensure proper femoral rotation (3 degrees external rotation from posterior condylar axis)." },
      { title: "Trial & Balancing", description: "Insert trial components. Check alignment with alignment rod. Assess ligament balance in flexion and extension. Adjust with additional releases if needed. Test range of motion (goal: 0-120 degrees)." },
      { title: "Cementation & Closure", description: "Cement definitive components in sequence (tibia first, then femur). Insert polyethylene trial, then definitive insert. Resurface patella if indicated. Close in layers over drain." },
    ],
  },
  // === SHOULDER ===
  "total-shoulder-prosthesis": {
    description: "Total Shoulder Arthroplasty (TSA) replaces the humeral head with a metal component and the glenoid with a polyethylene component. Anatomic TSA preserves normal shoulder biomechanics and relies on an intact rotator cuff. It provides excellent pain relief and restoration of range of motion in shoulders with intact rotator cuff tendons.",
    indications: ["Primary glenohumeral osteoarthritis", "Rheumatoid arthritis with intact rotator cuff", "Post-traumatic arthritis", "Avascular necrosis of the humeral head", "Selected fractures in young patients"],
    surgicalTechnique: "Deltopectoral approach. Subscapularis takedown or lesser tuberosity osteotomy. Humeral head resection at anatomic neck cut angle (typically 130-degree inclination, 20-30 degree retroversion). Glenoid preparation with reaming and pegging/keeling. Cement glenoid component. Humeral canal broaching and press-fit or cemented stem. Subscapularis repair. Postop: sling 4-6 weeks, pendulum exercises from day 1.",
    material: "Humeral stem: Titanium or CoCrMo. Humeral head: CoCrMo. Glenoid: UHMWPE (keeled or pegged, cemented)",
    sizes: "Stems: sizes vary by manufacturer. Heads: 38-54mm diameter, various offsets",
    image: "/products/shoulder-implant.svg",
    steps: [
      { title: "Deltopectoral Approach", description: "Make deltopectoral incision. Identify and protect the cephalic vein. Develop the deltopectoral interval. Perform subscapularis takedown or lesser tuberosity osteotomy for exposure." },
      { title: "Humeral Head Resection", description: "Dislocate the shoulder. Resect the humeral head at the anatomic neck with the appropriate cutting guide (130-degree inclination, 20-30 degree retroversion). Preserve rotator cuff insertions." },
      { title: "Glenoid Preparation", description: "Expose the glenoid. Remove remaining cartilage and labrum. Ream to concentric subchondral bone. Drill peg holes or keel slot. Cement the polyethylene glenoid component." },
      { title: "Humeral Component Insertion", description: "Broach the humeral canal sequentially. Perform trial reduction checking ROM, stability, and soft tissue tension. Insert definitive stem (cemented or press-fit) with proper version." },
      { title: "Closure & Rehab Plan", description: "Repair subscapularis securely. Close in layers. Sling immobilization for 4-6 weeks. Begin pendulum exercises on postoperative day 1." },
    ],
  },
  "reverse-shoulder-prosthesis": {
    description: "Reverse Total Shoulder Arthroplasty (RTSA) reverses the normal ball-and-socket anatomy by placing the ball (glenosphere) on the glenoid and the socket on the humerus. This medializes the center of rotation and tensions the deltoid, allowing it to compensate for a deficient rotator cuff. It is the treatment of choice for cuff tear arthropathy.",
    indications: ["Cuff tear arthropathy", "Massive irreparable rotator cuff tears with arthritis", "Complex proximal humerus fractures in elderly", "Failed anatomic TSA", "Revision arthroplasty", "Tumor reconstruction of proximal humerus"],
    surgicalTechnique: "Deltopectoral or superolateral approach. Humeral head resection at 155 degrees. Glenoid preparation: remove remaining cartilage, ream to subchondral bone. Place baseplate with central screw and peripheral locking screws. Attach glenosphere. Humeral side: broach canal, cement or press-fit stem. Place polyethylene humeral insert. Trial reduction, check tension and stability. Final component implantation.",
    material: "Glenoid baseplate: Titanium. Glenosphere: CoCrMo (36mm or 42mm). Humeral stem: Titanium. Humeral insert: UHMWPE",
    sizes: "Glenospheres: 36mm, 38mm, 42mm. Baseplates: 25-29mm. Stems: various lengths and offsets",
    image: "/products/shoulder-implant.svg",
    steps: [
      { title: "Approach & Exposure", description: "Deltopectoral or superolateral approach. Identify and protect the axillary nerve. Perform subscapularis takedown. Dislocate the shoulder and resect the humeral head." },
      { title: "Glenoid Baseplate Placement", description: "Expose the glenoid. Remove remaining cartilage. Ream to flat subchondral surface. Place the central post of the baseplate with slight inferior tilt. Secure with peripheral locking screws." },
      { title: "Glenosphere Attachment", description: "Attach the glenosphere (36mm or 42mm) to the baseplate via Morse taper. The glenosphere medializes and distals the center of rotation, tensioning the deltoid." },
      { title: "Humeral Preparation & Trial", description: "Broach the humeral canal. Insert trial stem and polyethylene humeral insert. Reduce and assess deltoid tension, stability, and range of motion. Adjust polyethylene thickness as needed." },
      { title: "Final Implantation & Closure", description: "Insert definitive humeral stem and polyethylene insert. Final reduction. Repair subscapularis if possible. Close in layers. Sling immobilization." },
    ],
  },
  // === SPINE ===
  "spinal-pedicle-screw-system": {
    description: "Pedicle screws are the foundation of posterior spinal instrumentation. They are inserted through the vertebral pedicle into the vertebral body, providing three-column fixation. Connected by rods, they form a rigid construct that maintains spinal alignment during fusion. Modern polyaxial heads allow rod insertion at variable angles, simplifying construct assembly.",
    indications: ["Degenerative disc disease with instability", "Spondylolisthesis", "Spinal fractures (burst, flexion-distraction)", "Scoliosis correction", "Spinal tumor resection and stabilization", "Revision decompression with instability"],
    surgicalTechnique: "Identify pedicle entry point using anatomical landmarks (junction of transverse process and superior articular process). Create pilot hole with awl or burr. Use pedicle probe to create tract, confirm all walls intact with ball-tip probe. Tap if needed. Insert pedicle screw under fluoroscopic guidance. Place rods, use reduction towers if needed for deformity correction. Tighten set screws. Decorticate and place bone graft.",
    material: "Titanium alloy (Ti-6Al-4V) or CoCrMo. Rods: Titanium (5.5mm/6.0mm) or CoCrMo",
    sizes: "Screw diameter: 4.5-8.5mm. Length: 25-60mm. Polyaxial, monoaxial, and uniplanar heads available",
    image: "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
    steps: [
      { title: "Posterior Exposure", description: "Posterior midline incision. Subperiosteal dissection to expose the posterior elements. Identify the correct vertebral levels with fluoroscopy." },
      { title: "Pedicle Entry Point Identification", description: "Identify the pedicle entry point at the junction of the transverse process and superior articular process. Create a pilot hole with an awl or high-speed burr." },
      { title: "Pedicle Tract Preparation", description: "Advance a pedicle probe through the pedicle into the vertebral body. Confirm all five walls of the pedicle are intact using a ball-tip feeler. Tap if needed." },
      { title: "Screw Insertion", description: "Insert pedicle screws under fluoroscopic guidance. Use polyaxial heads for ease of rod placement. Verify screw position on AP and lateral fluoroscopy." },
      { title: "Rod Placement & Final Tightening", description: "Contour rods to match sagittal alignment. Insert rods into screw heads using reduction towers if needed. Apply compression or distraction as required. Tighten all set screws. Decorticate transverse processes and place bone graft for fusion." },
    ],
  },
  "interbody-fusion-cage": {
    description: "Interbody fusion cages are implanted into the disc space after discectomy to restore disc height, provide structural support, and promote bony fusion between vertebral bodies. They are filled with bone graft or bone graft substitute. Various approaches include ALIF (anterior), PLIF (posterior), TLIF (transforaminal), and XLIF (lateral).",
    indications: ["Degenerative disc disease", "Spondylolisthesis (Grade I-II)", "Recurrent disc herniation with instability", "Adjacent segment disease", "Post-laminectomy instability", "Spinal stenosis requiring indirect decompression"],
    surgicalTechnique: "TLIF approach: posterior midline incision, unilateral facetectomy, disc removal with curettes and rongeurs. Prepare endplates to bleeding bone. Pack cage with bone graft (local autograft + substitute). Insert cage obliquely, then rotate to final position. Confirm position on fluoroscopy. Supplement with bilateral pedicle screw fixation.",
    material: "PEEK (Polyetheretherketone), Titanium, or 3D-printed Titanium with porous surface. Some designs include tantalum markers",
    sizes: "Heights: 8-16mm. Footprints: various (22x8mm to 32x12mm). Lordotic angles: 0-15 degrees",
    image: "/img/gpc/Lumbar-Cage-PEEK-SH100P-gpcmedical.jpg",
    steps: [
      { title: "Approach & Discectomy", description: "For TLIF: posterior midline exposure, unilateral facetectomy for access to the disc space. Perform complete discectomy using curettes, rongeurs, and shavers. Remove cartilaginous endplates to bleeding bone." },
      { title: "Endplate Preparation", description: "Use endplate rasps and curettes to prepare the bony endplates. Preserve the subchondral bone plate to prevent cage subsidence. Create a vascular bed for fusion." },
      { title: "Cage Packing & Insertion", description: "Pack the interbody cage with bone graft (local autograft, allograft, or bone substitute). Insert the cage obliquely through the foramen, then rotate to the final midline or anterolateral position." },
      { title: "Confirm Position & Supplemental Fixation", description: "Check cage position on AP and lateral fluoroscopy. The cage should restore disc height and lordosis. Supplement with bilateral pedicle screw fixation for stability." },
      { title: "Compression & Closure", description: "Apply compression across the pedicle screw construct to load the cage. Place posterolateral bone graft. Close in layers over drain." },
    ],
  },
  // === EXTERNAL FIXATION ===
  "ilizarov-external-fixator": {
    description: "The Ilizarov apparatus is a circular external fixator consisting of rings connected by threaded rods, with tensioned wires passing through the bone. Based on the principles discovered by Professor Gavriil Ilizarov, it allows distraction osteogenesis (bone lengthening), gradual deformity correction, and treatment of complex fractures. The tensioned wire construct provides multiplanar stability.",
    indications: ["Limb lengthening", "Complex open fractures (Gustilo Grade IIIB/C)", "Bone transport for segmental defects", "Deformity correction (angular, rotational)", "Non-unions and infected non-unions", "Arthrodesis", "Foot and ankle reconstruction"],
    surgicalTechnique: "Apply proximal and distal reference rings perpendicular to the anatomical axis. Insert 1.5-1.8mm Ilizarov wires through safe corridors, tension to 110-130kg with wire tensioner. Add olive wires for fragment control. Connect rings with threaded rods. For lengthening: perform corticotomy, wait 5-7 days latency, then distract at 1mm/day (0.25mm x 4 times). For deformity correction: use hinges at the CORA (Center of Rotation of Angulation).",
    material: "Rings: Stainless Steel or Carbon Fiber. Wires: 1.5/1.8mm Stainless Steel. Rods: Stainless Steel threaded rods. Half-pins: 5.0/6.0mm Hydroxyapatite-coated",
    sizes: "Ring diameters: 80-240mm. Full rings, 5/8 rings, half rings. Wire lengths: 200-400mm",
    image: "/img/gpc-sm/Ilizarov-Ring-Fixator-Various-Types-EFS6005-sm-gpcmedical.jpg",
    steps: [
      { title: "Reference Ring Application", description: "Apply the proximal and distal reference rings perpendicular to the anatomical axis of the bone segment. Rings should be 2 finger-breadths from the skin surface." },
      { title: "Wire Insertion & Tensioning", description: "Insert 1.5-1.8mm Ilizarov wires through safe corridors (avoiding neurovascular structures). Pass wires through both cortices and fix to the ring. Tension each wire to 110-130kg using a wire tensioner." },
      { title: "Ring Assembly & Connection", description: "Connect rings with threaded rods. Add olive wires where specific fragment control is needed. Ensure the frame construct is stable and the bone segment is centered within the rings." },
      { title: "Corticotomy (if lengthening)", description: "For limb lengthening: perform a low-energy corticotomy preserving the periosteum and medullary blood supply. Wait 5-7 days latency period before beginning distraction." },
      { title: "Distraction Protocol", description: "Begin distraction at 1mm/day (0.25mm x 4 times daily). Monitor regenerate formation with serial X-rays. Adjust rate based on regenerate quality. Consolidation phase follows until cortex formation is adequate." },
    ],
  },
  "external-fixator-frame": {
    description: "External fixator frames provide temporary or definitive stabilization of fractures using pins inserted into bone that are connected to an external frame. They are essential in damage control orthopaedics, allowing rapid stabilization of fractures in polytrauma patients. The frame can be later converted to definitive internal fixation or maintained as definitive treatment.",
    indications: ["Open fractures (Gustilo Grade II/III)", "Damage control orthopaedics in polytrauma", "Fractures with severe soft tissue injury", "Pelvic ring injuries (anterior frame)", "Temporary stabilization before definitive fixation", "Infected fractures and non-unions"],
    surgicalTechnique: "Insert Schanz screws (5.0 or 6.0mm) through stab incisions into safe corridors (avoiding neurovascular structures). Place at least 2 pins per main fragment, separated by maximum distance. Connect to rod or bar clamp system. Reduce fracture and tighten all clamps. For pelvic fractures: supra-acetabular pin placement using iliac crest entry point.",
    material: "Pins: 316L Stainless Steel or Titanium, Hydroxyapatite-coated. Clamps and rods: Stainless Steel or Carbon Fiber",
    sizes: "Schanz screws: 4.0-6.0mm diameter, 150-250mm length. Carbon fiber or steel rods: 8-11mm diameter",
    image: "/img/gpc-sm/Dynamic-External-Fixator-Straight-EFS2009-sm-gpcmedical.jpg",
    steps: [
      { title: "Identify Pin Sites", description: "Plan pin placement in safe corridors avoiding neurovascular structures. Mark entry sites: minimum 2 pins per main fragment, maximally separated for mechanical advantage." },
      { title: "Pin Insertion", description: "Make stab incisions at pin sites. Pre-drill with appropriate drill bit. Insert Schanz screws (5.0-6.0mm) through both cortices using a T-handle. Avoid thermal necrosis by using intermittent drilling." },
      { title: "Frame Assembly", description: "Connect pins to the rod or bar-clamp system. Loosely assemble all clamps before final tightening to allow fracture reduction adjustments." },
      { title: "Fracture Reduction & Fixation", description: "Reduce the fracture by manipulating the limb and adjusting pin positions relative to the frame. Tighten all clamps once satisfactory alignment is achieved on fluoroscopy." },
      { title: "Pin Site Care Protocol", description: "Dress pin sites with sterile gauze. Instruct patient on daily pin site cleaning. Schedule follow-up for frame adjustments and conversion planning if temporary fixation." },
    ],
  },
  // === SPECIALIZED ===
  "craniomaxillofacial-plate": {
    description: "Craniomaxillofacial (CMF) plates are low-profile titanium plates designed for fixation of facial skeleton fractures and reconstruction after tumor resection. They are available in various configurations (straight, L-shaped, Y-shaped, orbital, mandibular reconstruction) with thicknesses ranging from ultra-thin (0.4mm) to reconstruction grade (2.5mm).",
    indications: ["Mandibular fractures", "Maxillary (Le Fort) fractures", "Zygomatic complex fractures", "Orbital floor/wall fractures", "Frontal bone fractures", "Cranioplasty", "Orthognathic surgery fixation", "Tumor reconstruction"],
    surgicalTechnique: "Expose fracture through appropriate approach (intraoral, subciliary, coronal). Reduce fracture anatomically. Contour plate to bone surface. Fix with self-tapping or self-drilling screws (monocortical in mandible body, bicortical in mandible angle/ramus). For mandibular reconstruction: prebend reconstruction plate on stereolithographic model if available. Minimum 3 screws per fragment.",
    material: "Commercially Pure Titanium (Grade 2/4) or Titanium alloy. Some resorbable options (PLLA/PGA) for pediatric use",
    sizes: "Micro: 1.0mm (midface). Mini: 1.5mm, 2.0mm (mandible/midface). Reconstruction: 2.4mm, 2.7mm (mandible). Screw lengths: 4-14mm",
    image: "/img/gpc-sm/Mini-plate-833-sm-gpcmedical.jpg",
    steps: [
      { title: "Approach & Fracture Exposure", description: "Select the appropriate approach based on fracture location: intraoral for mandible/maxilla, subciliary for orbital floor, coronal for frontal bone/upper midface. Expose the fracture with minimal soft tissue stripping." },
      { title: "Fracture Reduction", description: "Achieve anatomical reduction of the facial skeleton fractures. Restore occlusion using maxillomandibular fixation (MMF) if mandibular fractures are involved. Reduce and align bony fragments." },
      { title: "Plate Contouring & Application", description: "Select the appropriate plate profile (micro for midface, mini for mandible body, reconstruction for comminuted mandible). Contour plate to bone surface. Apply with self-drilling or self-tapping monocortical screws." },
      { title: "Hardware Verification", description: "Check occlusion and facial symmetry. Verify plate and screw positions. Ensure no screws violate tooth roots (PA radiograph or fluoroscopy). Release MMF if applied." },
      { title: "Closure", description: "Irrigate thoroughly. Close in layers appropriate to the approach (intraoral: absorbable sutures; skin: subcuticular). Apply soft dressing or facial compression wrap." },
    ],
  },

  // === ADDITIONAL BONE PLATES (image-only entries) ===
  "neutralization-plate": {
    description: "A neutralization plate protects a lag screw from bending, shear, and torsional forces. The plate itself does not generate compression at the fracture site; instead, interfragmentary compression is achieved by the lag screw inserted through or outside the plate.",
    indications: ["Oblique or spiral diaphyseal fractures", "Fractures fixed with lag screws requiring protection", "Butterfly fragment fixation"],
    surgicalTechnique: "First achieve interfragmentary compression with a lag screw. Then apply the plate to neutralize deforming forces. Screws in the plate are placed in neutral mode.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm and 4.5mm, matching DCP/LCP dimensions",
    image: "/img/gpc/Dynamic-Self-Compression-Plate-for-2.7mm-Screws-616-gpcmedical.jpg",
    steps: [
      { title: "Lag Screw Fixation First", description: "Achieve anatomical reduction of the oblique or spiral fracture. Insert a lag screw through or outside the planned plate position to generate interfragmentary compression." },
      { title: "Plate Application", description: "Apply the neutralization plate over the lag screw construct. The plate protects the lag screw from bending, shear, and torsional forces." },
      { title: "Screw Insertion in Neutral Mode", description: "Insert all plate screws in neutral (centered) position. The plate does not generate compression itself; it only protects the lag screw fixation." },
      { title: "Verify Construct", description: "Confirm fracture reduction, lag screw position, and plate alignment on fluoroscopy. Ensure adequate screw purchase in both cortices." },
    ],
  },
  "bridging-plate": {
    description: "Bridging plates span a comminuted fracture zone without direct reduction of every fragment. They function as internal splints, maintaining length, alignment, and rotation while preserving the biology of the fracture zone for secondary bone healing with callus formation.",
    indications: ["Comminuted diaphyseal fractures", "Multifragmentary fractures", "Periprosthetic fractures", "MIPO technique indications"],
    surgicalTechnique: "Plate is applied with screws only in the main proximal and distal fragments. The comminuted zone is bridged without screw fixation. Locking plates are preferred for bridging fixation.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm and 4.5mm, long plate variants preferred",
    image: "/img/gpc/Dynamic-Self-Compression-Plate-Narrow-618-gpcmedical.jpg",
    steps: [
      { title: "Indirect Reduction", description: "Achieve reduction by restoring length, alignment, and rotation of the main proximal and distal fragments. Do not attempt to reduce individual comminuted fragments." },
      { title: "MIPO Plate Insertion", description: "Insert a long plate submuscularly through small proximal and distal incisions. Slide the plate along the bone surface without disturbing the fracture zone biology." },
      { title: "End-segment Fixation", description: "Place locking screws in the main proximal and distal fragments only. Leave the comminuted zone bridged without any screw fixation to preserve blood supply." },
      { title: "Fluoroscopic Confirmation", description: "Verify alignment, plate position, and screw placement on AP and lateral fluoroscopy. Confirm appropriate working length of the plate construct." },
    ],
  },
  "tension-band-plate": {
    description: "Tension band plates are applied to the tension side of a bone to convert tensile forces into compressive forces at the fracture site. This principle is most commonly used in the lateral clavicle and olecranon.",
    indications: ["Clavicle fractures", "Olecranon fractures", "Fractures where one cortex is under tension"],
    surgicalTechnique: "Apply plate on the tension side of the bone. Eccentric screw placement generates compression across the fracture.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm plates commonly used",
    image: "/img/gpc/Dynamic-Self-Compression-Plate-for-Small-Fragment-for-Ulna-and-Radius-617-gpcmedical.jpg",
    steps: [
      { title: "Identify Tension Side", description: "Determine the tension side of the bone at the fracture site (e.g., superior surface of the clavicle, posterior olecranon). The plate must be applied to this surface." },
      { title: "Plate Application", description: "Position the plate on the tension side. The plate converts tensile forces into compressive forces at the opposite cortex during functional loading." },
      { title: "Eccentric Screw Placement", description: "Insert screws eccentrically to generate compression at the fracture site. The tension band principle requires the opposite cortex to be intact or reduced." },
      { title: "Verify Compression", description: "Confirm fracture compression and plate position on fluoroscopy. The construct relies on the intact opposite cortex as a fulcrum for the tension band effect." },
    ],
  },
  "reconstruction-plate": {
    description: "Reconstruction plates feature deep notches between screw holes that allow three-dimensional contouring. This makes them ideal for fractures involving complex anatomy such as the pelvis, distal humerus, and acetabulum.",
    indications: ["Pelvic fractures", "Acetabular fractures", "Distal humerus fractures", "Clavicle fractures", "Any fracture requiring 3D plate contouring"],
    surgicalTechnique: "Contour plate to match the complex bone surface using bending pliers at each notch. Apply with standard screw fixation technique.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.7mm, 3.5mm, 4.5mm. Lengths: 3-16 holes",
    image: "/img/gpc/Reconstruction-Plate-3-5mm-Screws-633-gpcmedical.jpg",
    steps: [
      { title: "Expose Complex Anatomy", description: "Make the appropriate surgical approach to expose the fracture involving complex bony anatomy (pelvis, acetabulum, distal humerus). Identify all fracture fragments." },
      { title: "Three-Dimensional Contouring", description: "Contour the reconstruction plate using bending pliers at the notches between screw holes. The deep notches allow precise 3D bending to match the complex bone surface." },
      { title: "Plate Application & Fixation", description: "Apply the contoured plate to the bone. Secure with screws on each side of the fracture. Use lag screws through the plate where needed for interfragmentary compression." },
      { title: "Assessment", description: "Verify anatomical reduction and hardware position on fluoroscopy or direct visualization. Ensure the plate conforms to the bone surface without gaps." },
    ],
  },
  "t-plate": {
    description: "T-shaped plates are designed for periarticular fractures where the plate head provides buttress support at the metaphysis and the shaft portion provides diaphyseal fixation.",
    indications: ["Proximal tibial plateau fractures", "Distal radius fractures", "Proximal humerus fractures"],
    surgicalTechnique: "Position T-head at the metaphyseal flare and shaft along the diaphysis. Secure with appropriate screws.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm for small fragment, 4.5mm for large fragment",
    image: "/img/gpc/T-Plate-for-4.5mm-Screws-644-gpcmedical.jpg",
    steps: [
      { title: "Articular Reduction", description: "Reduce the articular surface anatomically. Temporarily fix articular fragments with K-wires. Elevate depressed fragments and bone graft if needed." },
      { title: "T-Plate Positioning", description: "Position the T-head of the plate over the metaphyseal flare to provide broad support to the articular fragments. Align the shaft portion along the diaphysis." },
      { title: "Metaphyseal Fixation", description: "Secure the T-head with screws supporting the subchondral articular surface. These screws prevent re-displacement of the reduced articular fragments." },
      { title: "Diaphyseal Fixation & Verification", description: "Fix the shaft portion with cortical screws. Confirm articular reduction and hardware position on fluoroscopy in two planes." },
    ],
  },
  "l-plate": {
    description: "L-shaped buttress plates provide support at periarticular fractures, particularly at the tibial plateau and distal radius. The angled design conforms to the metaphyseal flare and prevents fragment displacement.",
    indications: ["Lateral tibial plateau fractures", "Distal radius fractures", "Periarticular buttress fixation"],
    surgicalTechnique: "Position the L-head to buttress the displaced articular fragment. Fix with screws in both the metaphyseal and diaphyseal portions.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm and 4.5mm variants, left and right",
    image: "/img/gpc/L-Buttress-Plates-Right-624R-gpcmedical.jpg",
    steps: [
      { title: "Fracture Reduction", description: "Reduce the periarticular fracture. Restore the articular surface and elevate depressed fragments with bone tamp. Temporarily fix with K-wires." },
      { title: "L-Plate Positioning", description: "Position the L-head to buttress the displaced articular fragment, preventing shear displacement. Align the shaft portion along the bone diaphysis." },
      { title: "Screw Fixation", description: "Secure the L-head with subchondral screws to support the articular surface. Fix the shaft with cortical screws for diaphyseal stability." },
      { title: "Final Check", description: "Confirm articular reduction, plate position, and screw lengths on fluoroscopy. Ensure no hardware violates the joint surface." },
    ],
  },
  "one-third-tubular-plate": {
    description: "The one-third tubular plate is a low-profile, semicircular cross-section plate used primarily for small bone fixation. It represents approximately one-third of a tube in cross-section, providing adequate stability with minimal bulk.",
    indications: ["Fibular fractures", "Distal ulna fractures", "Lateral malleolus fixation", "Olecranon tension band plating"],
    surgicalTechnique: "Can be easily contoured. Apply with 3.5mm cortex screws. Often used as a tension band plate on the lateral malleolus or fibula.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm screws, 2-12 holes. Low profile design",
    image: "/products/bone-plate.svg",
    steps: [
      { title: "Fracture Exposure", description: "Expose the fracture through an appropriate approach (e.g., lateral for fibula, direct for lateral malleolus). Reduce fracture fragments." },
      { title: "Plate Contouring", description: "Contour the one-third tubular plate to the bone surface. The semicircular cross-section conforms well to small bone anatomy with minimal bulk." },
      { title: "Screw Fixation", description: "Apply with 3.5mm cortex screws. Can be used as a buttress, neutralization, or tension band plate depending on fracture pattern and location." },
      { title: "Verification", description: "Check reduction and plate position on fluoroscopy. Ensure the low-profile plate does not cause soft tissue irritation, especially over the lateral malleolus." },
    ],
  },
  "cloverleaf-plate": {
    description: "Cloverleaf plates have a distinctive three-lobed head designed for periarticular fractures, providing broad metaphyseal support with multiple fixation points in the articular region.",
    indications: ["Tibial plateau fractures", "Distal tibial fractures", "Periarticular fractures requiring broad support"],
    surgicalTechnique: "Position the cloverleaf head over the metaphyseal flare. Secure articular fragments with the head screws and diaphysis with shaft screws.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "4.5mm, various hole configurations",
    image: "/img/gpc/Cloverleaf-Plate-for-distal-intra-articular-tibial-fractures-608-gpcmedical.jpg",
    steps: [
      { title: "Articular Fragment Reduction", description: "Expose the periarticular fracture. Reduce and elevate articular fragments. The cloverleaf head provides broad support across the metaphyseal flare." },
      { title: "Cloverleaf Head Positioning", description: "Position the three-lobed head over the metaphysis to capture and support multiple articular fragments with the multiple fixation points in each lobe." },
      { title: "Fixation", description: "Insert screws through the cloverleaf head to support the articular surface. Secure the shaft portion to the diaphysis with cortical screws." },
      { title: "Confirm Reduction", description: "Verify articular congruity and plate position on fluoroscopy. Check joint range of motion and stability." },
    ],
  },
  "distal-radius-plate": {
    description: "Anatomically pre-contoured locking plates designed specifically for distal radius fractures. Volar plates are the most common, with fixed-angle locking screws supporting the subchondral bone of the articular surface.",
    indications: ["Distal radius fractures (Colles, Smith, Barton)", "Intra-articular distal radius fractures", "Distal radius malunion correction"],
    surgicalTechnique: "Volar (Henry) approach. Plate placed on the volar surface of the distal radius. Distal locking screws placed subchondrally to support the articular surface. Confirm screw length on fluoroscopy to avoid dorsal penetration.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "2.4mm and 2.7mm locking screws. Standard and long plate variants",
    image: "/img/gpc/Locking-Distal-Radius-Buttress-Plate-924.jpg",
    steps: [
      { title: "Volar Approach (Henry)", description: "Make a volar longitudinal incision. Develop the interval between FCR and radial artery. Incise pronator quadratus and reflect it ulnarly to expose the distal radius." },
      { title: "Fracture Reduction", description: "Reduce the distal radius fracture restoring radial height, radial inclination, and volar tilt. Use K-wires for temporary fixation. Reduce articular fragments anatomically." },
      { title: "Plate Application", description: "Apply the pre-contoured volar locking plate to the volar surface of the distal radius. Position the distal edge at the watershed line (volar rim). Secure with a screw in the elongated hole first." },
      { title: "Distal Locking Screws", description: "Insert distal locking screws subchondrally to support the articular surface. Use fluoroscopy to confirm screws do not penetrate dorsally or into the joint." },
      { title: "Final Fixation & Closure", description: "Complete proximal screw fixation. Confirm reduction, screw lengths, and plate position on final fluoroscopy (PA, lateral, oblique views). Repair pronator quadratus. Close in layers." },
    ],
  },
  "proximal-humerus-plate": {
    description: "Anatomically pre-contoured locking plate for proximal humerus fractures. The plate design accommodates the complex anatomy of the proximal humerus with multiple locking screw trajectories targeting the humeral head.",
    indications: ["Proximal humerus fractures (Neer 2/3/4 part)", "Surgical neck fractures", "Greater tuberosity fractures", "Proximal humerus non-unions"],
    surgicalTechnique: "Deltopectoral approach. Plate positioned lateral to the bicipital groove. Proximal locking screws target the humeral head subchondrally. Suture holes allow rotator cuff tendon reattachment.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "3.5mm locking screws. Standard and long plate variants",
    image: "/img/gpc/Proximal-Humerus-Bone-Plate-656-gpcmedical.jpg",
    steps: [
      { title: "Deltopectoral Approach", description: "Make a deltopectoral incision. Identify the cephalic vein. Develop the interval. Retract the deltoid laterally. Identify the bicipital groove as a landmark for plate placement." },
      { title: "Fracture Reduction", description: "Reduce the proximal humerus fracture fragments. Reattach tuberosity fragments with heavy sutures passed through rotator cuff tendons. Temporarily fix with K-wires." },
      { title: "Plate Positioning", description: "Position the pre-contoured plate lateral to the bicipital groove, 5-8mm distal to the top of the greater tuberosity. Fix provisionally with a K-wire through the plate." },
      { title: "Locking Screw Insertion", description: "Insert proximal locking screws targeting the humeral head subchondrally in divergent directions. Use suture holes in the plate to reattach rotator cuff tendons. Insert diaphyseal screws." },
      { title: "Verification & Closure", description: "Confirm screw positions on fluoroscopy — ensure no joint penetration. Verify tuberosity reduction. Close in layers. Sling immobilization postoperatively." },
    ],
  },
  "distal-femur-plate": {
    description: "Anatomically pre-contoured locking plate for distal femoral fractures. Designed to provide fixed-angle stability in the osteoporotic metaphyseal bone of the distal femur, functioning as an internal fixator.",
    indications: ["Distal femoral fractures (AO 33)", "Supracondylar femoral fractures", "Periprosthetic distal femoral fractures", "Distal femoral non-unions"],
    surgicalTechnique: "Lateral approach or MIPO technique. Plate applied to the lateral aspect of the distal femur. Distal locking screws provide fixed-angle support. Can be inserted submuscularly for biological fixation.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "4.5/5.0mm locking screws. Standard and long plate variants",
    image: "/img/gpc/Distal-Femur-Bone-Plate-808-gpcmedical.jpg",
    steps: [
      { title: "Lateral Approach or MIPO", description: "Make a lateral incision or use minimally invasive technique with proximal and distal incisions. For MIPO, slide the plate submuscularly along the lateral femur." },
      { title: "Fracture Reduction", description: "Restore length, alignment, and rotation. For articular fractures, reduce the condylar fragments first with lag screws. Use indirect reduction techniques for MIPO." },
      { title: "Plate Application", description: "Apply the pre-contoured distal femoral locking plate to the lateral aspect. Position the distal portion over the lateral condyle. Secure temporarily with K-wires." },
      { title: "Distal Locking Screws", description: "Insert distal locking screws into the condylar block for fixed-angle support. These screws provide stability in osteoporotic bone without requiring plate-bone compression." },
      { title: "Proximal Fixation & Confirmation", description: "Insert proximal screws (locking or cortical). Verify alignment on full-length fluoroscopy. Check knee range of motion." },
    ],
  },
  "proximal-tibia-plate": {
    description: "Anatomically contoured locking plate for proximal tibial fractures including tibial plateau fractures. The plate design conforms to the medial or lateral proximal tibia and provides stable fixation in the subcondral bone.",
    indications: ["Tibial plateau fractures (Schatzker I-VI)", "Proximal tibial metaphyseal fractures", "Tibial plateau non-unions", "High tibial osteotomy fixation"],
    surgicalTechnique: "Lateral or medial approach depending on fracture pattern. Articular surface reduced first under direct or arthroscopic visualization. Plate applied with subchondral locking screws for articular support. Bone graft for depressed fragments.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "3.5mm and 4.5mm locking screws",
    image: "/img/gpc/Medial-Proximal-Tibia-Bone-Plate-655-gpcmedical.jpg",
    steps: [
      { title: "Approach Selection", description: "Choose lateral or medial approach based on fracture pattern (lateral for Schatzker I-III, medial for Schatzker IV, dual for V-VI). Consider arthroscopic assistance for articular reduction." },
      { title: "Articular Reduction", description: "Reduce the tibial plateau articular surface. Elevate depressed fragments using a bone tamp from a subarticular window. Confirm joint congruity under direct visualization or arthroscopy." },
      { title: "Subchondral Bone Grafting", description: "Pack bone graft (autograft or substitute) beneath elevated articular fragments to prevent re-depression and support the articular surface." },
      { title: "Plate Fixation", description: "Apply the pre-contoured proximal tibial locking plate. Insert subchondral locking screws to provide a raft supporting the articular surface. Secure the shaft with additional screws." },
      { title: "Assessment & Closure", description: "Confirm articular reduction and hardware position on fluoroscopy. Check knee stability and range of motion. Close in layers over drain." },
    ],
  },
  "calcaneal-plate": {
    description: "Anatomically contoured locking plate for calcaneal fractures. The low-profile design minimizes soft tissue irritation in this area prone to wound complications.",
    indications: ["Displaced intra-articular calcaneal fractures (Sanders type II-IV)", "Calcaneal body fractures", "Calcaneal malunion correction"],
    surgicalTechnique: "Extended lateral approach (L-shaped incision). Restore calcaneal height, width, and articular congruity. Apply pre-contoured plate. Bone graft void if needed.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "2.7mm and 3.5mm locking screws. Left and right variants",
    image: "/img/gpc/Calcaneal-Plate-for-3-5mm-812-gpcmedical.jpg",
    steps: [
      { title: "Lateral Approach (L-incision)", description: "Make an extended lateral L-shaped incision. Elevate a full-thickness flap. Expose the lateral wall of the calcaneus. Avoid excessive retraction to protect wound healing." },
      { title: "Fracture Reduction", description: "Restore calcaneal height by disimpacting the depressed posterior facet. Restore width by squeezing the calcaneus with a clamp. Reduce the posterior facet articular surface under direct visualization." },
      { title: "Temporary Fixation", description: "Hold the reduction with K-wires. Confirm Bohler angle restoration and articular congruity on lateral fluoroscopy and direct visualization." },
      { title: "Plate Application", description: "Apply the pre-contoured calcaneal locking plate. Insert locking screws to maintain the reduction. Fill any remaining void with bone graft substitute." },
      { title: "Closure & Wound Management", description: "Close in layers without tension. Use a drain. This area is prone to wound complications — handle tissues gently. Elevate and avoid early weight bearing." },
    ],
  },

  // === ADDITIONAL BONE SCREWS ===
  "locking-screw": {
    description: "Locking screws have a threaded head that engages the threaded hole of a locking plate, creating an angular-stable fixed-angle construct. Unlike conventional screws, locking screws do not require plate-bone friction for stability.",
    indications: ["Locking plate fixation", "Osteoporotic bone fixation", "Periarticular fractures", "Bridge plating"],
    surgicalTechnique: "Insert into the threaded portion of the combination hole in a locking plate. The screw locks at a fixed angle to the plate. Do not over-tighten.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.4mm, 2.7mm, 3.5mm, 4.5mm, 5.0mm diameter",
    image: "/img/gpc-sm/self-tapping-locking-screws-diameter-5mm-700-sm.jpg",
    steps: [
      { title: "Plate Positioning", description: "Ensure the locking plate is properly positioned on the bone surface. The threaded screw hole must be aligned for the desired trajectory." },
      { title: "Drill Through Locking Guide", description: "Attach the locking drill guide to the plate. Drill through the guide at the fixed angle — the guide ensures the correct trajectory for the threaded head." },
      { title: "Insert Locking Screw", description: "Insert the locking screw using the locking screwdriver. The threaded head engages the threaded plate hole, creating a fixed-angle construct. Advance until the head is fully seated." },
      { title: "Verify Angular Stability", description: "Confirm the screw is fully locked in the plate. The angular-stable construct functions independently of plate-bone friction. Check on fluoroscopy." },
    ],
  },
  "headless-compression-screw": {
    description: "Headless compression screws have differential thread pitch (larger pitch at trailing end, finer pitch at leading end) that generates interfragmentary compression when fully inserted. The headless design allows the screw to be buried beneath the articular cartilage.",
    indications: ["Scaphoid fractures", "Medial malleolus fractures", "Intra-articular fractures", "Osteochondral fragment fixation"],
    surgicalTechnique: "Insert guide wire percutaneously under fluoroscopy. Measure length. Drill and insert headless screw until completely buried below cartilage surface.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "2.5mm, 3.0mm, 4.5mm diameter. Cannulated design",
    image: "/img/gpc-sm/Herbert-cannulaed-bone-screw-755-sm.jpg",
    steps: [
      { title: "Guide Wire Placement", description: "Insert a guide wire percutaneously under fluoroscopy into the center of the fractured bone (e.g., scaphoid). Confirm central position on AP and lateral views." },
      { title: "Measure & Drill", description: "Measure the required screw length over the guide wire. Drill the screw path using the cannulated drill, maintaining wire position." },
      { title: "Screw Insertion", description: "Insert the headless compression screw over the guide wire. Advance until completely buried beneath the articular cartilage surface." },
      { title: "Verify Compression", description: "Confirm the differential thread pitch has generated interfragmentary compression. Check screw position on fluoroscopy — the screw must be entirely subchondral with no cartilage protrusion." },
    ],
  },
  "herbert-screw": {
    description: "The Herbert screw is a headless, cannulated, variable-pitch bone screw designed for fixation of small bone fractures while allowing burial beneath the articular surface. The differential thread pitch generates compression across the fracture.",
    indications: ["Scaphoid fractures (acute and non-union)", "Capitellum fractures", "Osteochondritis dissecans fixation", "Small bone fractures requiring headless fixation"],
    surgicalTechnique: "Insert guide wire centrally in the scaphoid under fluoroscopy. Drill over wire. Insert Herbert screw until fully buried below cartilage.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "3.0mm (mini), 4.5mm (standard), 6.5mm (large). Various lengths",
    image: "/img/gpc-sm/Herbert-cannulaed-bone-screw-756-sm.jpg",
    steps: [
      { title: "Guide Wire Insertion", description: "Insert guide wire centrally in the scaphoid under fluoroscopy (volar percutaneous or dorsal approach depending on fracture pattern). Confirm position on multiple views." },
      { title: "Measure & Drill", description: "Measure screw length. Drill over the guide wire with the cannulated drill. Maintain wire position throughout." },
      { title: "Herbert Screw Insertion", description: "Insert the Herbert screw over the guide wire until fully buried below the articular cartilage. The differential thread pitch generates compression as the screw advances." },
      { title: "Final Assessment", description: "Remove guide wire. Confirm screw is below the articular surface on fluoroscopy. Check wrist range of motion." },
    ],
  },
  "malleolar-screw": {
    description: "Malleolar screws are partially threaded cancellous screws designed specifically for malleolar fracture fixation. They provide interfragmentary compression across the fracture through the lag screw principle.",
    indications: ["Medial malleolus fractures", "Lateral malleolus tip fractures", "Bimalleolar fractures (supplementary fixation)"],
    surgicalTechnique: "Insert perpendicular to the fracture line. The smooth shaft glides through the near cortex while the threaded portion engages the far fragment, generating compression.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "3.5mm and 4.5mm diameter. Partially threaded",
    image: "/img/gpc-sm/Malleolar-screw-733-sm.jpg",
    steps: [
      { title: "Fracture Reduction", description: "Reduce the malleolar fracture anatomically. For medial malleolus, use pointed reduction forceps to hold the fragment." },
      { title: "Drill & Measure", description: "Drill perpendicular to the fracture line through the malleolar fragment. The smooth shaft creates a gliding hole in the near cortex. Measure with depth gauge." },
      { title: "Screw Insertion", description: "Insert the partially threaded malleolar screw. The threads engage only the far fragment, generating lag compression as the screw tightens against the near cortex." },
      { title: "Verify Fixation", description: "Confirm fracture compression and screw position on fluoroscopy. Check ankle mortise alignment on mortise view. Supplement with plate if needed for rotational control." },
    ],
  },

  // === ADDITIONAL INTRAMEDULLARY NAILS ===
  "tibial-nail": {
    description: "Tibial interlocking nails are designed specifically for tibial shaft fractures. The nail is inserted through a suprapatellar or infrapatellar approach and locked with proximal and distal screws to control rotation and length.",
    indications: ["Tibial shaft fractures", "Open tibial fractures", "Tibial non-unions", "Pathological tibial fractures"],
    surgicalTechnique: "Semi-extended or flexed position. Entry point just medial to the lateral tibial spine. Guide wire, sequential reaming, nail insertion. Proximal and distal locking with targeting guide and freehand technique.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "8-12mm diameter, 255-390mm length",
    image: "/img/gpc-sm/intraHEAL-reamed-tibial-nail-ITL09-14-sm.jpg",
    steps: [
      { title: "Positioning & Entry", description: "Position patient supine with knee flexed or semi-extended. Identify entry point just medial to the lateral tibial spine. Make a patellar tendon-splitting or parapatellar approach." },
      { title: "Guide Wire & Reaming", description: "Insert ball-tipped guide wire across the fracture into the distal fragment. Ream sequentially with flexible reamers. Select nail diameter 1.5-2.0mm less than the smallest reaming diameter." },
      { title: "Nail Insertion", description: "Attach nail to the insertion handle and targeting jig. Insert over the guide wire under fluoroscopic guidance. Seat the nail with the proximal end flush with the tibial entry point." },
      { title: "Locking & Verification", description: "Lock proximally through the targeting jig. Lock distally using freehand technique. Verify alignment and all screw positions on final fluoroscopy. Close the entry wound." },
    ],
  },
  "humeral-nail": {
    description: "Humeral nails are designed for fractures of the humeral shaft. They can be inserted in antegrade (through the rotator cuff) or retrograde (through the olecranon fossa) fashion.",
    indications: ["Humeral shaft fractures", "Pathological humeral fractures", "Humeral non-unions", "Impending pathological fractures"],
    surgicalTechnique: "Antegrade: entry through the rotator cuff at the tip of the greater tuberosity. Retrograde: entry through the olecranon fossa. Minimal reaming. Lock proximally and distally.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "6-9mm diameter, 200-300mm length",
    image: "/img/gpc-sm/intraHEAL-reamed-humerus-nail-HNC6-8-sm.jpg",
    steps: [
      { title: "Entry Point Selection", description: "Choose antegrade (through rotator cuff at greater tuberosity tip) or retrograde (through olecranon fossa) approach based on fracture location and patient factors." },
      { title: "Canal Preparation", description: "Insert guide wire across the fracture. Minimal reaming (if any) to preserve endosteal blood supply in the relatively narrow humeral canal." },
      { title: "Nail Insertion", description: "Insert the humeral nail over the guide wire. For antegrade nails, bury the proximal end below the rotator cuff insertion to prevent impingement." },
      { title: "Locking & Closure", description: "Lock proximally through the targeting jig. Lock distally using freehand or jig-assisted technique. Verify alignment and hardware on fluoroscopy. Repair rotator cuff entry (antegrade). Close wounds." },
    ],
  },
  "gamma-nail": {
    description: "The Gamma nail is a cephalomedullary nail designed for intertrochanteric and subtrochanteric hip fractures. It features a single large lag screw into the femoral head with a set screw to control rotation, providing a more biomechanically favorable construct than extramedullary devices.",
    indications: ["Intertrochanteric fractures", "Subtrochanteric fractures", "Reverse obliquity fractures", "Basicervical fractures"],
    surgicalTechnique: "Fracture table positioning. Entry at greater trochanter tip. Insert nail, then guide wire for lag screw aiming for center-center position in the femoral head. Distal locking screw.",
    material: "Titanium alloy",
    sizes: "Short: 180-200mm. Long: 280-460mm. Lag screw: 70-120mm. Neck-shaft angle 125-130 degrees",
    image: "/img/gpc-sm/intraHEAL-proximal-hip-stabilizing-nail-ILBS59-sm.jpg",
    steps: [
      { title: "Fracture Table Setup", description: "Position on fracture table with traction. Achieve closed reduction. Entry point at the tip of the greater trochanter." },
      { title: "Nail Insertion", description: "Open entry with awl. Insert Gamma nail into the proximal femur. Advance to correct depth." },
      { title: "Lag Screw Placement", description: "Using the targeting jig, insert guide wire for the lag screw aiming center-center in the femoral head on both AP and lateral views. Ream and insert lag screw. Tip-apex distance must be less than 25mm." },
      { title: "Set Screw & Distal Locking", description: "Insert the set screw to control lag screw rotation. Place distal locking screw. Verify all hardware on final fluoroscopy." },
    ],
  },
  "supracondylar-nail": {
    description: "Supracondylar nails are retrograde intramedullary nails inserted through the intercondylar notch of the distal femur. They are designed for distal femoral fractures and provide load-sharing fixation with multiple distal locking options.",
    indications: ["Distal femoral fractures", "Supracondylar femoral fractures", "Periprosthetic distal femoral fractures (above TKR)", "Distal femoral non-unions"],
    surgicalTechnique: "Knee flexed 30-40 degrees. Entry point in the center of the intercondylar notch, 1cm anterior to the PCL origin. Retrograde reaming and nail insertion. Multiple distal locking screws in different planes.",
    material: "Titanium alloy or 316L Stainless Steel",
    sizes: "10-13mm diameter, 150-250mm length",
    image: "/img/gpc-sm/intraHEAL-supra-condylar-nail-IMN10-13-sm.jpg",
    steps: [
      { title: "Patient Positioning", description: "Position supine with knee flexed 30-40 degrees over a bolster. Identify the intercondylar notch entry point on fluoroscopy." },
      { title: "Entry Point & Guide Wire", description: "Make a midline incision below the patella. Enter the intercondylar notch 1cm anterior to the PCL origin. Insert guide wire retrograde into the femoral canal." },
      { title: "Retrograde Reaming & Nail Insertion", description: "Ream the femoral canal in retrograde fashion. Insert the supracondylar nail over the guide wire. Seat until the distal end is flush with the intercondylar articular surface." },
      { title: "Locking & Verification", description: "Insert multiple distal locking screws in different planes through the targeting jig for condylar fixation. Lock proximally. Verify alignment and hardware on fluoroscopy." },
    ],
  },

  // === ADDITIONAL WIRES & PINS ===
  "steinmann-pin": {
    description: "Steinmann pins are large-diameter smooth or threaded pins used for skeletal traction and temporary fracture fixation. They are thicker than K-wires and provide greater rigidity for traction applications.",
    indications: ["Skeletal traction (tibial, calcaneal, olecranon)", "Temporary fracture stabilization", "Joystick manipulation during fracture reduction", "External fixator pin"],
    surgicalTechnique: "Insert through bone perpendicular to the limb axis at the traction site. For tibial traction: insert 2cm posterior to the tibial tuberosity. Apply traction bow and weights.",
    material: "316L Stainless Steel, smooth or trocar point",
    sizes: "3.0mm, 4.0mm, 4.5mm, 5.0mm, 6.0mm diameter. Lengths: 150-250mm",
    image: "/img/gpc/Pin-Steinmann-PS901-gpcmedical.jpg",
    steps: [
      { title: "Identify Insertion Site", description: "Determine the appropriate traction site: 2cm posterior to tibial tuberosity for tibial traction, through the calcaneus for calcaneal traction, or through the olecranon for upper limb traction." },
      { title: "Pin Insertion", description: "Make a small stab incision. Insert the Steinmann pin with a hand drill or power drill, perpendicular to the limb axis, passing through both cortices." },
      { title: "Traction Setup", description: "Attach a traction bow to the pin. Apply the prescribed weight (typically 10% of body weight for femoral traction). Ensure the limb is properly aligned in the traction apparatus." },
      { title: "Pin Site Care", description: "Dress pin sites with sterile gauze. Monitor for pin tract infection. Clean pin sites daily. Adjust traction weight as needed based on alignment radiographs." },
    ],
  },
  "cerclage-wire": {
    description: "Cerclage wires are malleable stainless steel wires used to encircle bone for fixation. They are used as primary fixation (tension band wiring) or as supplementary fixation to hold fragments reduced around intramedullary nails or stems.",
    indications: ["Tension band wiring of patella and olecranon", "Periprosthetic fracture fixation", "Greater trochanter reattachment", "Cable cerclage in long bone fractures"],
    surgicalTechnique: "Pass wire around bone using a cerclage passer. Twist or crimp ends to tighten. For tension band: figure-of-eight configuration with two K-wires.",
    material: "316L Stainless Steel wire",
    sizes: "0.8mm, 1.0mm, 1.2mm, 1.25mm diameter. Pre-formed loops available",
    image: "/img/gpc/Cerclage-Wire-Loop-PS924-gpcmedical.jpg",
    steps: [
      { title: "Wire Selection", description: "Select appropriate wire gauge (0.8-1.25mm) based on application. For tension band wiring, also prepare two parallel K-wires." },
      { title: "Pass Wire Around Bone", description: "Using a cerclage wire passer or angled forceps, pass the wire around the bone circumferentially. For periprosthetic fractures, pass around the bone and implant." },
      { title: "Tighten Wire", description: "Twist the wire ends together using a wire tightener or pliers until snug against the bone. For crimped systems, use the crimping tool. Avoid over-tightening which can cut through bone." },
      { title: "Secure & Trim", description: "Bend the twisted wire end flat against the bone to prevent soft tissue irritation. Trim excess wire. Confirm bone fragment reduction and wire position." },
    ],
  },
  "tension-band-wire": {
    description: "Tension band wiring is a technique using K-wires and cerclage wire in a figure-of-eight configuration. It converts tensile forces on one side of the bone into compressive forces at the fracture site during functional loading.",
    indications: ["Olecranon fractures", "Patella fractures", "Greater tuberosity fractures", "Medial malleolus fractures (selected)"],
    surgicalTechnique: "Insert two parallel K-wires across the fracture. Pass a figure-of-eight cerclage wire around the K-wire ends and through a transverse bone tunnel or around the insertion tendon. Tighten the wire to achieve compression.",
    material: "316L Stainless Steel K-wires and cerclage wire",
    sizes: "K-wires: 1.6-2.0mm. Cerclage wire: 1.0-1.25mm",
    image: "/img/gpc-sm/Wire-Roll–3-meter-PS912-sm.jpg",
    steps: [
      { title: "K-Wire Insertion", description: "Insert two parallel K-wires across the fracture (e.g., olecranon or patella). The wires should cross both cortices and provide rotational stability." },
      { title: "Figure-of-Eight Wire Passage", description: "Pass a cerclage wire in a figure-of-eight configuration around the protruding K-wire ends and through a transverse drill hole in the bone or around the tendon insertion." },
      { title: "Wire Tensioning", description: "Tighten the cerclage wire equally on both sides of the figure-of-eight. This converts tensile forces from the attached tendon into compressive forces at the fracture during active motion." },
      { title: "Bend K-wires & Confirm", description: "Bend the K-wire ends 180 degrees and impact into bone to prevent migration. Confirm compression at the fracture site. Check construct on fluoroscopy." },
    ],
  },
  "schanz-screw": {
    description: "Schanz screws (pins) are self-tapping half-pins used in external fixation systems. One end is threaded for bone engagement and the other has a smooth shank that connects to the external fixator frame.",
    indications: ["External fixation of fractures", "Limb lengthening", "Deformity correction", "Temporary joint-spanning fixation"],
    surgicalTechnique: "Stab incision through safe corridors. Pre-drill with appropriate drill bit. Insert Schanz screw with T-handle, engaging both cortices. Connect to external fixator clamp system.",
    material: "316L Stainless Steel, often Hydroxyapatite-coated",
    sizes: "4.0mm, 5.0mm, 6.0mm diameter. Lengths: 150-250mm",
    image: "/img/gpc/Self-drilling-Schanz-Pin-TEF1292P-gpcmedical.jpg",
    steps: [
      { title: "Plan Pin Placement", description: "Identify safe corridors for pin insertion avoiding neurovascular structures. Mark entry sites on the skin." },
      { title: "Stab Incision & Pre-drill", description: "Make a small stab incision. Blunt dissect to bone. Pre-drill with the appropriate drill bit through both cortices." },
      { title: "Schanz Screw Insertion", description: "Insert the Schanz screw using a T-handle, engaging both cortices. Ensure the threaded portion is fully within bone and the smooth shank exits the skin." },
      { title: "Connect to External Fixator", description: "Attach the Schanz screw to the external fixator clamp system. Adjust fracture reduction before final tightening of all clamps." },
    ],
  },

  // === ADDITIONAL HIP REPLACEMENT ===
  "austin-moore-prosthesis": {
    description: "The Austin Moore prosthesis is a unipolar hemiarthroplasty implant with a fenestrated stem design. It replaces only the femoral head, articulating directly with the native acetabular cartilage. The fenestrations allow bone ingrowth for biological fixation.",
    indications: ["Displaced femoral neck fractures in elderly", "Low-demand patients", "Limited life expectancy patients"],
    surgicalTechnique: "Posterior approach. Femoral neck osteotomy. Remove femoral head (measure size). Prepare femoral canal. Insert Austin Moore prosthesis (usually cementless). Reduce hip.",
    material: "Vitallium (CoCrMo alloy)",
    sizes: "37-55mm head diameter (2mm increments). Standard and long stem variants",
    image: "/img/gpc/Austin-Moore-Hip-Prostheses-Sterile-Non-Sterile-AMS37-gpcmedical.jpg",
    steps: [
      { title: "Approach & Neck Osteotomy", description: "Posterior approach. Perform femoral neck osteotomy. Remove the femoral head and measure with sizing template to select the correct prosthesis size." },
      { title: "Femoral Canal Preparation", description: "Open the femoral canal with a box osteotome. Prepare with sequential broaches to the planned size. The fenestrated stem design allows bone ingrowth." },
      { title: "Prosthesis Insertion", description: "Insert the Austin Moore prosthesis (usually cementless). The fenestrations allow bone to grow into the stem for biological fixation. Seat the prosthesis fully." },
      { title: "Reduction & Stability Testing", description: "Reduce the hip. Test stability in flexion, adduction, and internal rotation. Check limb length. Close posterior capsule and short external rotators for stability." },
    ],
  },
  "thompson-prosthesis": {
    description: "The Thompson prosthesis is a cemented unipolar hemiarthroplasty with a non-fenestrated, collar-bearing stem design. It provides immediate stable fixation through bone cement.",
    indications: ["Displaced femoral neck fractures in elderly", "Patients requiring cemented fixation"],
    surgicalTechnique: "Posterior or lateral approach. Femoral neck osteotomy. Canal preparation. Cement insertion with restrictor. Press-fit cemented stem.",
    material: "CoCrMo alloy",
    sizes: "37-55mm head diameter",
    image: "/img/gpc/Thompson-Hip-Prosthesis-Sterile-Non-Sterile-THP37-gpcmedical.jpg",
    steps: [
      { title: "Approach & Head Extraction", description: "Posterior or lateral approach. Perform femoral neck osteotomy. Remove femoral head and measure with sizing template." },
      { title: "Femoral Canal Preparation", description: "Prepare the femoral canal with sequential broaches. Insert a cement restrictor at the appropriate depth." },
      { title: "Cemented Stem Insertion", description: "Irrigate and dry the canal. Pressurize bone cement. Insert the Thompson prosthesis with correct anteversion. Maintain position until cement fully polymerizes." },
      { title: "Reduction & Closure", description: "Reduce the hip. Test stability through range of motion. Repair the posterior capsule. Close in layers." },
    ],
  },

  // === ADDITIONAL KNEE REPLACEMENT ===
  "partial-knee-implant": {
    description: "Unicondylar (partial) knee replacement replaces only the damaged compartment of the knee, preserving the healthy compartment, cruciate ligaments, and more normal knee kinematics than total knee replacement.",
    indications: ["Isolated medial or lateral compartment osteoarthritis", "Intact ACL and PCL", "Correctable deformity less than 15 degrees", "Non-inflammatory arthritis"],
    surgicalTechnique: "Minimally invasive approach. Resect only the affected compartment. Size and implant femoral and tibial components. Preserve cruciate ligaments.",
    material: "Femoral: CoCrMo. Tibial: Titanium with UHMWPE insert",
    sizes: "Multiple sizes per manufacturer",
    image: "/products/knee-implant.svg",
    steps: [
      { title: "Minimally Invasive Approach", description: "Make a smaller incision than for TKR. Perform a limited arthrotomy to access the affected compartment only. Preserve the cruciate ligaments and opposite compartment." },
      { title: "Bone Resection", description: "Resect only the damaged compartment surfaces. Use intramedullary or extramedullary guides for accurate cuts. Preserve the tibial spine and intercondylar region." },
      { title: "Trial & Balancing", description: "Insert trial components. Check ligament tension and alignment. The preserved cruciate ligaments should provide inherent stability." },
      { title: "Cementation & Closure", description: "Cement the femoral and tibial components. Insert the polyethylene bearing. Confirm smooth tracking and full range of motion. Close in layers." },
    ],
  },

  // === ADDITIONAL SPINE ===
  "cervical-plate": {
    description: "Anterior cervical plates are used to stabilize the cervical spine after anterior cervical discectomy and fusion (ACDF) or corpectomy. They provide immediate stability while fusion occurs.",
    indications: ["Anterior cervical discectomy and fusion (ACDF)", "Cervical corpectomy", "Cervical fractures", "Cervical spondylotic myelopathy"],
    surgicalTechnique: "After discectomy and cage/graft placement, apply pre-contoured plate to anterior cervical spine. Fixed or variable angle screws into vertebral bodies above and below. Confirm position on fluoroscopy.",
    material: "Titanium alloy",
    sizes: "Various lengths for 1-4 level constructs. Variable and fixed angle screw options",
    image: "/img/gpc/Anterior-Cervical-Plates-SH116-gpcmedical.jpg",
    steps: [
      { title: "Anterior Cervical Approach", description: "Left-sided transverse skin incision. Develop the plane between the carotid sheath laterally and trachea/esophagus medially. Identify the correct level with fluoroscopy." },
      { title: "Discectomy & Graft/Cage Placement", description: "Perform complete discectomy. Prepare endplates. Insert interbody cage or structural bone graft to restore disc height and lordosis." },
      { title: "Plate Positioning", description: "Apply the pre-contoured cervical plate spanning the levels fused. Center the plate on the midline of the vertebral bodies." },
      { title: "Screw Fixation", description: "Insert screws into the vertebral bodies above and below through the plate. Use variable-angle or fixed-angle screws depending on plate design. Confirm position on fluoroscopy." },
      { title: "Locking & Closure", description: "Engage the anti-backout locking mechanism on all screws. Verify final plate and screw positions. Close in layers. Monitor for airway swelling postoperatively." },
    ],
  },

  // === ADDITIONAL EXTERNAL FIXATION ===
  "hybrid-external-fixator": {
    description: "Hybrid external fixators combine the principles of ring fixators (tensioned wires) and monolateral fixators (half-pins) in a single construct. This provides the advantages of both systems for complex periarticular fractures.",
    indications: ["Tibial plateau fractures with metaphyseal extension", "Pilon fractures", "Periarticular fractures with soft tissue compromise", "Staged fixation protocols"],
    surgicalTechnique: "Apply ring(s) near the joint with tensioned wires. Connect to monolateral half-pin frame in the diaphysis. Provides stable fixation while allowing soft tissue access.",
    material: "Stainless Steel or Carbon Fiber rings. Stainless Steel or Titanium pins",
    sizes: "Ring sizes: 120-200mm. Half-pins: 5.0-6.0mm",
    image: "/img/gpc-sm/Hybrid-Kit-External-Fixator-in-PEEK-EFS2026-sm-gpcmedical.jpg",
    steps: [
      { title: "Ring Application Near Joint", description: "Apply ring(s) near the periarticular region. Insert tensioned wires (1.5-1.8mm) through safe corridors in the epiphyseal/metaphyseal bone. Tension wires to 110-130kg." },
      { title: "Half-Pin Application in Diaphysis", description: "Insert Schanz screws (half-pins) into the diaphyseal bone through stab incisions in safe corridors. These connect to the monolateral portion of the frame." },
      { title: "Frame Assembly", description: "Connect the ring and half-pin components with rods and clamps. The hybrid construct combines the multiplanar stability of rings near the joint with the simplicity of half-pins in the shaft." },
      { title: "Fracture Reduction & Final Tightening", description: "Achieve and maintain fracture reduction. Tighten all connections. Verify alignment on fluoroscopy. The hybrid frame allows soft tissue access for wound care in open fractures." },
    ],
  },

  // === ADDITIONAL SPECIALIZED / CMF ===
  "orbital-reconstruction-plate": {
    description: "Orbital mesh and plates are used for reconstruction of orbital floor and wall fractures. The mesh design allows customization to the complex orbital anatomy.",
    indications: ["Orbital floor blowout fractures", "Orbital wall fractures", "Post-tumor resection orbital reconstruction"],
    surgicalTechnique: "Subciliary or transconjunctival approach. Expose orbital floor defect. Trim and contour mesh/plate. Place over defect, secure with screws to orbital rim.",
    material: "Titanium mesh or PEEK",
    sizes: "Various pre-formed and trimmable configurations",
    image: "/img/gpc-sm/Orbital-plate-682-sm-gpcmedical.jpg",
    steps: [
      { title: "Approach & Exposure", description: "Select the appropriate approach: subciliary, transconjunctival, or endoscopic for orbital floor access. Expose the orbital floor or wall defect." },
      { title: "Defect Assessment", description: "Identify the extent of the bony defect. Release any herniated orbital soft tissue from the fracture. Gently reposition prolapsed orbital fat and muscle." },
      { title: "Mesh/Plate Trimming & Contouring", description: "Trim the orbital mesh or plate to the appropriate size. Contour to match the orbital floor anatomy. Ensure adequate coverage of the defect with overlap onto intact bony margins." },
      { title: "Implant Placement & Fixation", description: "Place the mesh or plate over the defect, resting on intact bony ledges. Secure with micro-screws to the orbital rim if needed. Verify position and forced duction test to ensure no muscle entrapment." },
    ],
  },
  "bone-anchor": {
    description: "Suture anchors are implanted into bone to provide a fixation point for sutures that reattach soft tissue to bone. Used extensively in sports medicine for ligament and tendon repair.",
    indications: ["Rotator cuff repair", "Bankart repair (shoulder instability)", "ACL reconstruction", "Lateral epicondylitis repair", "Ankle ligament repair"],
    surgicalTechnique: "Drill pilot hole at footprint of detached tissue. Insert anchor until flush with bone. Pass sutures through tissue and tie. Bioabsorbable or metallic options.",
    material: "Titanium, PEEK, or bioabsorbable polymers (PLLA, PLGA)",
    sizes: "2.0mm-6.5mm diameter. Various suture configurations",
    image: "/img/gpc-sm/Herbert-cannulaed-bone-screw-758-sm.jpg",
    steps: [
      { title: "Identify Footprint", description: "Identify the anatomical footprint where the tendon or ligament should be reattached to bone. Prepare the bone surface by decorticating lightly for healing." },
      { title: "Drill Pilot Hole", description: "Drill the pilot hole at the correct angle and depth for the selected anchor size. Maintain the desired trajectory to maximize pull-out strength." },
      { title: "Anchor Insertion", description: "Insert the suture anchor into the pilot hole until flush with the bone surface. Confirm secure seating by tugging on the sutures. The anchor should not rotate or pull out." },
      { title: "Suture Passage & Tying", description: "Pass the anchor sutures through the detached tendon or ligament tissue using appropriate suture-passing instruments. Tie knots to secure the tissue back to the bone at the footprint." },
    ],
  },
  "ligament-reconstruction-screw": {
    description: "Interference screws are used in ACL and PCL reconstruction to fix tendon grafts within bone tunnels. They provide immediate graft fixation by compressing the graft against the tunnel wall.",
    indications: ["ACL reconstruction (BTB and hamstring grafts)", "PCL reconstruction", "Other ligament reconstructions"],
    surgicalTechnique: "After graft passage through bone tunnels, insert interference screw alongside the graft in the tunnel. The screw compresses the graft against the tunnel wall for fixation.",
    material: "Titanium, PEEK, or bioabsorbable polymers",
    sizes: "7-10mm diameter, 20-35mm length. Cannulated design",
    image: "/img/gpc/Cancellous-Screw-4mm-723-gpcmedical.jpg",
    steps: [
      { title: "Tunnel Preparation", description: "Drill the femoral and tibial bone tunnels at the anatomical ligament attachment sites using appropriate guides and reamers." },
      { title: "Graft Passage", description: "Pass the tendon graft (BTB, hamstring, or allograft) through the tibial tunnel, across the joint, and into the femoral tunnel." },
      { title: "Femoral Fixation", description: "Fix the graft in the femoral tunnel with an interference screw inserted alongside the graft. The screw compresses the graft against the tunnel wall for secure fixation." },
      { title: "Tibial Fixation", description: "Tension the graft with the knee in the appropriate flexion angle. Insert the tibial interference screw to fix the graft in the tibial tunnel. Confirm graft tension and knee stability." },
    ],
  },
  // === INTRAMEDULLARY NAILS ===
  "kuntscher-nail": {
    description: "The Kuntscher nail (K-nail) is the original intramedullary nail, featuring a distinctive cloverleaf (trefoil) cross-section that provides elastic contact with the endosteal surface of the medullary canal. It is an unlocked, non-reamed nail that relies on three-point cortical contact for rotational and axial stability. Designed primarily for mid-shaft femoral fractures with minimal comminution, it achieves fixation through elastic impingement within the isthmus of the medullary canal. The cloverleaf profile allows longitudinal slotting, which provides radial elasticity during insertion while maintaining torsional rigidity once seated.",
    indications: ["Simple transverse mid-shaft femoral fractures", "Isthmal femoral diaphyseal fractures", "Closed femoral shaft fractures with minimal comminution", "Pathological fractures requiring rapid stabilisation"],
    surgicalTechnique: "The patient is positioned on a fracture table with the affected limb in traction. A proximal entry point is established at the piriformis fossa or greater trochanter tip. The medullary canal is opened with an awl and prepared with flexible reamers only if necessary (original technique is unreamed). The appropriately sized Kuntscher nail is inserted by hand pressure and gentle mallet blows, relying on the cloverleaf cross-section to engage the endosteal cortex at the isthmus for three-point fixation.",
    material: "316L Stainless Steel",
    sizes: "9-16mm diameter, 320-420mm length. Cloverleaf cross-section",
    image: "/img/gpc-sm/intraHEAL-kuntschers-cloverleaf-nail-K-nail-KCN06-sm.jpg",
    steps: [
      { title: "Patient Positioning & Entry Point", description: "Position the patient supine on a fracture table with the affected limb in traction. Achieve closed reduction under fluoroscopy. Identify the entry point at the piriformis fossa (or greater trochanter tip) and open the medullary canal with a curved bone awl." },
      { title: "Canal Preparation", description: "Pass a ball-tipped guide wire across the fracture site and into the distal fragment under fluoroscopic guidance. If needed, ream the canal sequentially in 0.5mm increments to achieve a snug fit. The original Kuntscher technique uses minimal or no reaming." },
      { title: "Nail Insertion", description: "Select a nail diameter that matches the narrowest isthmal canal width. Insert the Kuntscher nail over the guide wire by hand pressure, advancing it with gentle mallet blows. The cloverleaf cross-section engages the endosteal cortex, providing elastic three-point fixation." },
      { title: "Verify Position & Final Seating", description: "Confirm nail position, fracture reduction, and nail depth on anteroposterior and lateral fluoroscopic views. Ensure the proximal end is flush with or slightly recessed below the entry point. Verify rotational alignment of the limb clinically." },
    ],
  },
  "pfna-nail": {
    description: "The Proximal Femoral Nail Antirotation (PFNA) is a cephalomedullary nail featuring a single helical blade instead of a traditional lag screw for proximal fixation. The helical blade is inserted by impaction rather than rotation, compacting cancellous bone around it and providing superior purchase in osteoporotic bone. This design resists femoral head rotation (Z-effect) and cut-out significantly better than dual-screw constructs. The nail has a 6-degree mediolateral valgus bend and an anatomical anterior bow matching the proximal femoral anatomy.",
    indications: ["Intertrochanteric fractures (stable and unstable)", "Basicervical femoral neck fractures", "Subtrochanteric fractures", "Peritrochanteric fractures in osteoporotic bone", "Pathological proximal femoral fractures"],
    surgicalTechnique: "With the patient on a fracture table, closed reduction is achieved under fluoroscopy. The entry point is at the tip of the greater trochanter. After opening the canal and inserting the nail, the helical blade is positioned centre-centre in the femoral head on AP and lateral views, with a tip-apex distance less than 25mm. The blade is impacted into the femoral head, compacting surrounding cancellous bone. Distal locking completes the construct.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "Nail diameter 9-13mm, lengths 170-420mm. Helical blade with 8mm core diameter. Neck-shaft angles 125° and 130°",
    image: "/img/gpc-sm/intraHEAL-proximal-femoral-nail-long-PFNL10-12-sm.jpg",
    steps: [
      { title: "Fracture Table Setup & Reduction", description: "Position the patient supine on a fracture table with the affected limb in traction boot. Achieve closed reduction under fluoroscopic guidance in both AP and lateral planes. Acceptable reduction includes restoration of neck-shaft angle and correction of rotational deformity." },
      { title: "Entry Point & Nail Insertion", description: "Make a 3-4cm incision proximal to the tip of the greater trochanter. Open the canal with a curved awl at the trochanter tip. Insert the ball-tipped guide wire, ream the canal, and insert the appropriately sized PFNA nail to the correct depth." },
      { title: "Helical Blade Insertion", description: "Attach the aiming arm. Insert the guide wire for the helical blade, targeting centre-centre position in the femoral head on both AP and lateral views. Measure to ensure a tip-apex distance (TAD) of less than 25mm. Ream for the blade, then impact the helical blade under fluoroscopic guidance — the blade compacts cancellous bone for superior hold." },
      { title: "Distal Locking", description: "Perform distal interlocking using the aiming arm for static locking or freehand technique for dynamic locking. Insert one or two distal locking screws depending on fracture stability requirements." },
      { title: "Final Verification & Closure", description: "Confirm implant position, fracture reduction, and helical blade placement on final AP and lateral fluoroscopic images. Remove the aiming arm. Irrigate and close the wounds in layers. Apply sterile dressing." },
    ],
  },
  "ender-nail": {
    description: "Ender nails are flexible, pre-curved stainless steel intramedullary nails designed for retrograde insertion through the distal femoral condyle. Multiple nails (typically 2-3) are stacked within the medullary canal to achieve fixation through elastic three-point contact. Originally developed for intertrochanteric hip fractures in elderly patients, they offer a minimally invasive closed nailing technique with short operative time and reduced blood loss. The pre-curved design allows the nails to fan out proximally into the femoral head and neck.",
    indications: ["Intertrochanteric fractures in elderly patients", "Subtrochanteric fractures (selected cases)", "Pathological femoral fractures requiring rapid fixation", "High-risk surgical patients requiring minimal operative time"],
    surgicalTechnique: "The patient is positioned supine on a fracture table. A small medial parapatellar incision exposes the medial femoral condyle. An entry hole is made above the adductor tubercle. Two to three pre-curved Ender nails are sequentially inserted retrograde, navigating through the medullary canal and across the fracture site. The nails fan out in the proximal femur, engaging the femoral head and neck for rotational control.",
    material: "316L Stainless Steel",
    sizes: "4.0-4.5mm diameter, 320-420mm length. Pre-curved with varying radii",
    image: "/img/gpc-sm/intraHEAL-enders-nail-ENI35-sm.jpg",
    steps: [
      { title: "Patient Positioning & Condylar Entry", description: "Position the patient supine on a fracture table with the limb in traction. Make a small incision over the medial femoral condyle. Create an entry portal just above the adductor tubercle using an awl or drill, angled to access the medullary canal." },
      { title: "Sequential Nail Insertion", description: "Insert the first pre-curved Ender nail retrograde through the entry hole into the femoral medullary canal. Use gentle mallet taps to advance the nail across the fracture site. Repeat with a second and third nail, rotating each to fan out within the canal." },
      { title: "Advance to Proximal Femur", description: "Advance each nail proximally so that the tips spread into the femoral head and neck region. The pre-curved nails diverge proximally, providing rotational control and resistance to varus collapse. Aim for the nails to engage subchondral bone of the femoral head." },
      { title: "Check Position & Final Adjustment", description: "Confirm nail positions on AP and lateral fluoroscopic views. Ensure nail tips are in the femoral head/neck without joint penetration. Trim or bend the distal nail ends at the condylar entry site to prevent migration. Close the entry wound in layers." },
    ],
  },
  "rush-nail": {
    description: "The Rush nail (Rush pin) is a pre-bent, semi-flexible intramedullary fixation device with a characteristic hooked or sledge-runner tip at one end and a bevelled point at the other. The hooked end engages the near cortex at the entry site, preventing migration and providing a fixed point for the three-point fixation principle. Rush nails are used primarily in pediatric diaphyseal fractures, supracondylar fractures, and select adult fractures where flexible fixation is preferred. They rely on elastic deformation and intramedullary three-point contact for fracture stability.",
    indications: ["Pediatric diaphyseal fractures (femur, tibia, humerus)", "Supracondylar humerus fractures", "Metacarpal and metatarsal shaft fractures", "Pathological fractures in long bones", "Prophylactic fixation of impending pathological fractures"],
    surgicalTechnique: "An entry point is selected at the metaphysis near the fracture. The canal is opened with an awl. The pre-bent Rush nail is inserted with the hooked end engaging the cortex at the entry point to prevent backing out. The nail is advanced across the fracture site with the curved tip navigating the canal contour. The elastic pre-bend provides three-point fixation within the medullary cavity.",
    material: "316L Stainless Steel",
    sizes: "3.0-6.0mm diameter, 150-350mm length. Pre-bent with hooked end",
    image: "/img/gpc-sm/Rush-nail-RNI02-sm.jpg",
    steps: [
      { title: "Entry Point Selection", description: "Identify the appropriate metaphyseal entry point based on fracture location. For femoral shaft fractures, use the greater trochanter or distal femoral condyle. Open the cortex with an awl or drill, creating a hole large enough for the selected nail diameter." },
      { title: "Canal Preparation", description: "Gently prepare the medullary canal with a small-diameter reamer or hand awl if needed. In pediatric bone, the canal is often soft enough for direct nail passage. Ensure the canal path is clear across the fracture site." },
      { title: "Nail Insertion with Hook Engagement", description: "Insert the Rush nail with the hooked (sledge-runner) end entering the cortical entry hole. The hook engages the near cortex, anchoring the nail and preventing proximal migration. Advance the nail with gentle mallet blows, using the pre-bent curve to navigate the medullary canal." },
      { title: "Verify Position & Stability", description: "Confirm nail position across the fracture site on AP and lateral fluoroscopy. The nail tip should engage the far cortex or metaphysis for three-point fixation. Check rotational and axial stability clinically. Trim any protruding nail end if necessary." },
    ],
  },
  "talwalkar-nail": {
    description: "The Talwalkar nail (square nail) is an intramedullary nail with a distinctive square cross-section designed specifically for forearm (radius and ulna) fractures. The square profile provides inherent rotational stability within the circular medullary canal, preventing the nail from spinning — a common problem with round-section nails in forearm bones. This design eliminates the need for interlocking screws while maintaining excellent rotational control, making it ideal for diaphyseal forearm fractures where pronation-supination must be preserved.",
    indications: ["Diaphyseal radius fractures", "Diaphyseal ulna fractures", "Both-bone forearm fractures", "Refractures of the forearm after plate removal", "Pediatric and adolescent forearm shaft fractures"],
    surgicalTechnique: "For radius fractures, the entry point is at the radial styloid or Lister's tubercle; for ulna fractures, the olecranon tip is used. The canal is prepared with hand reamers sized to the square nail. The nail is inserted and advanced across the fracture under fluoroscopic guidance. The square cross-section locks rotationally in the round canal, and the nail is seated to the appropriate depth.",
    material: "316L Stainless Steel",
    sizes: "2.0-4.5mm (side dimension), 180-280mm length. Square cross-section",
    image: "/img/gpc-sm/Sq-nail-for-radius-KSNR15-40-sm.jpg",
    steps: [
      { title: "Entry Point Preparation", description: "For radius: make a small incision at the distal radius near Lister's tubercle or radial styloid. For ulna: incise over the olecranon tip. Open the canal with a small awl or drill, creating an entry hole matching the nail's square profile." },
      { title: "Canal Preparation", description: "Pass a hand reamer or small-gauge canal finder through the medullary canal and across the fracture site. Ream sequentially if needed to accommodate the selected nail size. Clear any canal obstruction at the fracture site." },
      { title: "Nail Insertion", description: "Insert the Talwalkar square nail through the entry point. Advance it across the fracture site using gentle hand pressure and light mallet taps. The square cross-section engages the circular canal, providing immediate rotational stability without interlocking screws." },
      { title: "Verify Rotation, Length & Final Position", description: "Confirm nail position on AP and lateral fluoroscopy. Verify that the fracture is reduced with correct length, alignment, and rotation. Check forearm pronation and supination intraoperatively. Ensure the nail end is flush or slightly recessed at the entry point." },
    ],
  },
  "seidel-nail": {
    description: "The Seidel nail is a locked intramedullary nail designed specifically for humeral shaft fractures. Its distinguishing feature is a proximal fan-out (expansion) locking mechanism — interlocking fins that spread within the humeral head to provide angular and rotational stability without the need for proximal transverse locking screws. Distally, conventional interlocking screws are used. This design addresses the challenge of proximal locking in the humerus, where the narrow proximal metaphysis and adjacent neurovascular structures make transverse screw placement difficult.",
    indications: ["Humeral diaphyseal fractures", "Pathological humeral fractures", "Humeral non-unions", "Segmental humeral fractures", "Impending pathological fractures of the humerus"],
    surgicalTechnique: "The nail is inserted antegrade through the rotator cuff via the greater tuberosity or humeral head apex. After sequential reaming, the nail is inserted to the appropriate depth. The proximal expanding mechanism is deployed by turning the activation screw, causing fins to fan out within the cancellous bone of the humeral head. Distal locking is performed with transverse screws using a freehand or aiming-arm technique.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "7-10mm diameter, 190-300mm length. Proximal expansion mechanism with distal locking holes",
    image: "/img/gpc-sm/intraHEAL-unreamed-humerus-nail-UHN6-8-sm.jpg",
    steps: [
      { title: "Antegrade Entry Through Rotator Cuff", description: "Position the patient in beach-chair or lateral decubitus position. Make a small longitudinal incision over the anterolateral shoulder. Split the rotator cuff (supraspinatus) in line with its fibres. Identify the entry point at the apex of the greater tuberosity or humeral head and open the canal with an awl." },
      { title: "Reaming & Nail Insertion", description: "Insert a ball-tipped guide wire across the fracture site into the distal fragment. Ream the canal sequentially in 0.5mm increments. Select a nail 1-1.5mm smaller than the last reamer used. Insert the Seidel nail over the guide wire to the appropriate depth, confirming position on fluoroscopy." },
      { title: "Proximal Expanding Mechanism Deployment", description: "Activate the proximal fan-out locking mechanism by turning the proximal activation screw. The interlocking fins expand within the cancellous bone of the humeral head, providing angular and rotational stability without transverse screws. Confirm expansion on fluoroscopy." },
      { title: "Distal Interlocking", description: "Perform distal locking using the aiming arm attached to the nail or freehand (perfect circle) technique under fluoroscopy. Insert one or two distal locking screws, taking care to protect the radial nerve which spirals around the humeral shaft distally." },
      { title: "Final Verification & Closure", description: "Confirm fracture reduction, nail position, proximal expansion, and distal screw placement on final AP and lateral fluoroscopic images. Repair the rotator cuff split with absorbable sutures. Close the wound in layers and apply a shoulder immobiliser." },
    ],
  },
  "grosse-kempf-nail": {
    description: "The Grosse-Kempf (GK) nail is a classic reamed interlocking intramedullary nail developed for femoral and tibial shaft fractures. It features both proximal and distal transverse interlocking screw holes, allowing static (both ends locked) or dynamic (one end locked) fixation modes. This was one of the first widely adopted interlocking nail systems, expanding IM nailing indications beyond isthmal fractures to include comminuted, segmental, and fractures proximal or distal to the isthmus where unlocked nails would fail due to loss of three-point fixation.",
    indications: ["Femoral shaft fractures (simple to comminuted)", "Tibial shaft fractures", "Segmental long bone fractures", "Non-isthmal diaphyseal fractures", "Non-unions and malunions requiring nailing", "Pathological fractures of femur or tibia"],
    surgicalTechnique: "The patient is positioned on a fracture table. The entry point for the femur is the piriformis fossa; for the tibia, the anterior tibial cortex just medial to the tibial tuberosity. Sequential reaming is performed in 0.5mm increments. The nail is inserted and proximal locking is performed via the targeting jig attached to the nail. Distal locking is performed using freehand fluoroscopic technique (perfect circle method).",
    material: "316L Stainless Steel",
    sizes: "Femoral: 10-16mm diameter, 320-440mm length. Tibial: 8-13mm diameter, 280-400mm length. Multiple proximal and distal locking hole configurations",
    image: "/img/gpc-sm/intraHEAL-unreamed-femoral-nail-UFN09-14-sm.jpg",
    steps: [
      { title: "Piriformis Fossa Entry & Guide Wire", description: "Position the patient supine on a fracture table. Make a 3-5cm incision proximal to the greater trochanter. Palpate the piriformis fossa and open the canal with a curved bone awl. Insert a ball-tipped guide wire and advance it across the reduced fracture into the distal fragment under fluoroscopic guidance." },
      { title: "Sequential Reaming", description: "Ream the medullary canal sequentially in 0.5mm increments, starting from 8-9mm and progressing until cortical chatter is felt (typically 1-1.5mm beyond the isthmal diameter). Maintain fracture reduction during reaming. Irrigate to manage heat generation." },
      { title: "Nail Insertion", description: "Select a nail 1-1.5mm smaller than the last reamer used. Insert the Grosse-Kempf nail over the guide wire by hand and gentle mallet blows. Advance to the appropriate depth — the proximal end should be flush with or slightly recessed below the entry point." },
      { title: "Proximal Locking via Targeting Jig", description: "Attach the proximal targeting jig to the nail's proximal end. Using the jig's drill sleeves, drill bicortical holes through the proximal locking screw holes. Measure, tap if needed, and insert proximal interlocking screws. Confirm position on fluoroscopy." },
      { title: "Distal Freehand Locking", description: "Perform distal interlocking using the freehand (perfect circle) technique under fluoroscopy. Align the C-arm beam precisely with the distal locking hole until a perfect circle is seen. Drill through both cortices, measure, and insert the distal locking screw. Confirm all implant positions on final images." },
    ],
  },
  "elastic-stable-intramedullary-nail-esin": {
    description: "The Elastic Stable Intramedullary Nail (ESIN), also known as the Nancy nail or titanium elastic nail, is a flexible intramedullary fixation system designed for pediatric diaphyseal fractures. Two pre-contoured titanium nails are inserted from opposite sides of the metaphysis, crossing at the fracture level to create a balanced, symmetric construct with three-point fixation in each plane. The elastic properties of titanium allow controlled micromotion at the fracture site, promoting secondary bone healing with robust callus formation while maintaining alignment.",
    indications: ["Pediatric femoral shaft fractures (ages 4-14)", "Pediatric tibial shaft fractures", "Pediatric forearm shaft fractures", "Pediatric humeral shaft fractures", "Pathological fractures in pediatric patients", "Select adult forearm fractures"],
    surgicalTechnique: "Two titanium nails are selected with a diameter approximately 40% of the narrowest canal width. Entry points are created at the metaphysis on opposite sides (medial and lateral). Each nail is pre-contoured with an apex at the fracture level. The nails are inserted from their respective entry points, advanced past the fracture, and seated in the opposite metaphysis. The crossing point of the two nails at the fracture level creates balanced three-point fixation.",
    material: "Commercially Pure Titanium or Titanium alloy (Ti-6Al-4V)",
    sizes: "1.5-4.0mm diameter, 300-440mm length. Pre-contoured with gentle apex bend",
    image: "/img/gpc-sm/intraHEAL-titanium-elastic-nailing-system-TNI02-sm.jpg",
    steps: [
      { title: "Nail Selection & Metaphyseal Entry Points", description: "Determine nail diameter as approximately 40% of the narrowest medullary canal width on preoperative X-rays. Both nails should be equal diameter. Create two entry points at the metaphysis on opposite sides (e.g., medial and lateral distal femur) using an awl or drill." },
      { title: "Nail Contouring & Sequential Insertion", description: "Pre-contour each nail with a gentle bend, placing the apex at the expected fracture level. Insert the first nail through its entry point with the convexity facing the fracture. Use gentle rotating and tapping motions to advance it past the fracture site. Repeat with the second nail from the opposite entry point." },
      { title: "Advance to Opposite Metaphysis", description: "Advance both nails into the opposite metaphysis, ensuring the nail tips engage the cancellous bone without penetrating the physis or articular surface. The two nails should cross at the fracture level, creating symmetric three-point fixation in the coronal and sagittal planes." },
      { title: "Bend, Cut & Final Verification", description: "Leave approximately 1-2cm of nail protruding at each entry site. Bend the protruding ends 180 degrees against the cortex to prevent soft tissue irritation and facilitate later removal. Cut the excess. Confirm fracture reduction and nail positions on AP and lateral fluoroscopy." },
    ],
  },
  "titanium-elastic-nail": {
    description: "The Titanium Elastic Nail (TEN) is a flexible intramedullary fixation device identical in principle to the ESIN system. Pre-contoured titanium nails are inserted in pairs from opposite cortical entry points, crossing at the fracture level to provide balanced elastic fixation through three-point contact in both coronal and sagittal planes. The titanium construction provides the ideal combination of flexibility for insertion and stiffness for fracture stabilisation, with excellent biocompatibility and MRI compatibility. It is the standard of care for pediatric diaphyseal long bone fractures.",
    indications: ["Pediatric femoral shaft fractures", "Pediatric tibial shaft fractures", "Pediatric humeral shaft fractures", "Both-bone forearm fractures in children", "Length-stable transverse and short oblique diaphyseal fractures", "Pathological fractures in pediatric long bones"],
    surgicalTechnique: "Determine nail diameter as 40% of the narrowest canal width. Two nails of equal diameter are inserted from opposite sides of the metaphysis. Each is pre-bent with a gentle apex curve positioned at the fracture level. The nails are advanced from opposite cortices, crossing at the fracture site, and seated in the far metaphysis. This creates a balanced construct resisting angular, rotational, and axial forces through elastic three-point fixation.",
    material: "Commercially Pure Titanium or Titanium alloy (Ti-6Al-4V)",
    sizes: "1.5-4.0mm diameter, 300-440mm length. Smooth or fluted tip designs",
    image: "/img/gpc-sm/intraHEAL-titanium-elastic-nailing-system-TNI02-sm.jpg",
    steps: [
      { title: "Determine Nail Diameter & Prepare Entry", description: "Calculate nail diameter as canal width at the isthmus multiplied by 0.4. Both nails must be equal in diameter. Make small incisions at the metaphysis on opposite sides (e.g., medial and lateral for distal femoral entry). Create cortical entry holes with an awl, angled toward the medullary canal." },
      { title: "Insert Nails from Opposite Sides", description: "Pre-bend each nail with the apex at the fracture level. Insert the first nail through the lateral entry point with the convexity directed medially. Advance it with oscillating hand movements past the fracture. Insert the second nail from the medial entry point with the convexity directed laterally." },
      { title: "Cross at Fracture Level & Advance", description: "Under fluoroscopic guidance, advance both nails so they cross at the fracture level. This crossing creates the balanced three-point fixation construct. Continue advancing each nail into the opposite metaphysis until the tips are well-seated in cancellous bone, avoiding physeal or articular penetration." },
      { title: "Trim, Bend Ends & Confirm", description: "Leave 1-2cm of nail protruding at the entry sites. Bend the ends against the bone cortex to prevent migration and soft tissue irritation. Cut excess length with a nail cutter. Confirm final fracture reduction, nail position, and crossing pattern on AP and lateral fluoroscopic images. Close entry wounds." },
    ],
  },

  // === BONE PLATES (Additional) ===
  "pelvic-reconstruction-plate": {
    description: "Pelvic reconstruction plates are pre-contoured, heavy-duty implants designed for fixation of acetabular and pelvic ring fractures. Y-shaped and curved variants conform to the complex three-dimensional anatomy of the innominate bone. Their malleable yet strong profile allows intraoperative bending to match the pelvic brim, quadrilateral surface, and posterior column.",
    indications: ["Acetabular fractures (both-column, transverse, T-type)", "Pelvic ring disruptions", "Symphysis pubis diastasis", "Iliac wing fractures", "Peri-acetabular osteotomies"],
    surgicalTechnique: "Approach selection depends on fracture pattern: ilioinguinal for anterior column/wall, Kocher-Langenbeck for posterior column/wall, or combined approaches for complex patterns. The plate is contoured to the pelvic brim or posterior column using bending irons and templates. Lag screws may supplement plate fixation for interfragmentary compression.",
    material: "316L Stainless Steel or Titanium alloy (Ti-6Al-4V)",
    sizes: "3.5mm reconstruction plates, 6-16 holes. Y-shaped, curved, and straight variants",
    image: "/img/gpc/Y-Reconstruction-Plate-636-gpcmedical.jpg",
    steps: [
      { title: "Surgical Approach", description: "Select the appropriate approach based on fracture pattern: ilioinguinal approach for anterior column/wall fractures, Kocher-Langenbeck approach for posterior column/wall fractures, or a combined/extended approach for complex acetabular fractures. Identify and protect neurovascular structures (external iliac vessels, femoral nerve anteriorly; sciatic nerve posteriorly)." },
      { title: "Fracture Reduction", description: "Achieve anatomical reduction of the fracture fragments using pointed reduction forceps, Farabeuf clamps, Jungbluth clamps, and ball-spike pushers. Reduce the articular surface to within 2mm step-off. Temporarily hold reduction with K-wires." },
      { title: "Plate Contouring", description: "Select the appropriate reconstruction plate (Y-shaped or curved). Contour the plate to precisely match the pelvic brim, posterior column, or quadrilateral surface anatomy using bending irons and pliers. The plate must sit flush against the bone surface to avoid soft tissue irritation." },
      { title: "Plate Fixation", description: "Secure the plate with 3.5mm cortical screws. Drill with 2.5mm drill bit, measure with depth gauge, and insert screws bicortically where safe. Avoid screw penetration into the hip joint — use fluoroscopy or direct visualization to confirm. Place a minimum of 3 screws per major fragment." },
      { title: "Verification & Closure", description: "Confirm reduction and hardware position under fluoroscopy (AP pelvis, Judet oblique views). Assess hip joint congruency. Check screw lengths to ensure no intra-articular penetration. Irrigate thoroughly, place drains, and close in layers." },
    ],
  },
  "metaphyseal-plate": {
    description: "Metaphyseal locking plates are anatomically pre-contoured periarticular plates designed for fractures in the metaphyseal region of long bones. They feature a combination of locking and compression holes with a low-profile design that conforms to the flared metaphyseal bone geometry. The angular-stable locking mechanism creates a fixed-angle construct ideal for osteoporotic and comminuted periarticular fractures.",
    indications: ["Distal femoral metaphyseal fractures", "Proximal tibial metaphyseal fractures", "Distal tibial metaphyseal fractures", "Periarticular fractures with metaphyseal comminution", "Osteoporotic periarticular fractures"],
    surgicalTechnique: "Minimally invasive plate osteosynthesis (MIPO) is preferred. The plate is slid submuscularly from a small incision near the joint to bridge the metaphyseal fracture zone. Locking screws provide angular stability in the weak metaphyseal bone without requiring plate-bone compression.",
    material: "316L Stainless Steel or Titanium alloy (Ti-6Al-4V)",
    sizes: "3.5mm and 4.5mm/5.0mm locking systems. Anatomically pre-contoured for specific periarticular regions",
    image: "/img/gpc-sm/metaphyseal-locking-plate-sm-gpcmedical.jpg",
    steps: [
      { title: "Approach & Articular Reduction", description: "Make a small incision near the joint to expose the articular surface. Reduce any intra-articular fracture components anatomically using direct visualization, K-wires, and pointed reduction forceps. Provisionally fix articular fragments with K-wires or lag screws." },
      { title: "Plate Insertion via MIPO", description: "Create a submuscular tunnel from the articular incision along the bone shaft using a periosteal elevator. Slide the pre-contoured metaphyseal locking plate along the bone surface through the tunnel. Position the plate centrally on the bone with the distal cluster of holes at the periarticular fragment." },
      { title: "Plate Application & Provisional Fixation", description: "Align the plate on the bone using fluoroscopy in two planes. Insert one K-wire through the plate to provisionally hold position. Confirm correct plate height and rotation. Make a small proximal incision over the plate end for diaphyseal screw placement." },
      { title: "Locking Screw Insertion", description: "Insert locking screws into the periarticular fragment through the threaded plate holes using the locking drill guide. In the diaphysis, place bicortical locking screws. The angular-stable construct does not require plate-bone compression, preserving periosteal blood supply." },
      { title: "Final Verification", description: "Confirm overall limb alignment (length, rotation, angulation) on fluoroscopy. Check articular reduction. Verify all screw lengths — no intra-articular penetration. Irrigate wounds and close in layers." },
    ],
  },
  "mini-fragment-plate": {
    description: "Mini-fragment plates (1.5mm and 2.0mm systems) are low-profile implants specifically designed for fixation of small bone fractures in the hand, wrist, foot, and other locations with thin soft tissue coverage. The plates feature small screw holes and thin profiles to minimize soft tissue irritation and tendon impingement.",
    indications: ["Metacarpal and phalangeal fractures", "Metatarsal fractures", "Distal ulna fractures", "Small avulsion fractures", "Corrective osteotomies of small bones"],
    surgicalTechnique: "Precise atraumatic technique is essential given the small bone size and proximity to tendons and neurovascular structures. Plates are applied dorsally on metacarpals, laterally on phalanges. Screw purchase in thin cortices requires careful drilling to avoid thermal necrosis.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "1.5mm and 2.0mm screw systems. Straight plates (2-12 holes), L-plates, T-plates, condylar plates",
    image: "/img/gpc/Straight-Plates-1-5-673-gpcmedical.jpg",
    steps: [
      { title: "Exposure & Fracture Reduction", description: "Make a dorsal or lateral incision depending on the bone and fracture location. Retract extensor tendons carefully. Expose the fracture site with minimal periosteal stripping. Achieve anatomical reduction of fracture fragments using small pointed reduction forceps and dental picks." },
      { title: "Plate Selection & Positioning", description: "Select the appropriate mini-fragment plate configuration (straight, L, T, or condylar) based on fracture pattern and location. Position the plate on the bone surface ensuring it does not impinge on adjacent tendons or joints. The plate should span the fracture with at least 2 screw holes on each side." },
      { title: "Drilling & Screw Measurement", description: "Drill screw holes using the 1.1mm drill bit (for 1.5mm screws) or 1.5mm drill bit (for 2.0mm screws) with a drill guide. Use low-speed drilling to prevent thermal necrosis in thin cortices. Measure screw length with the mini depth gauge." },
      { title: "Mini Screw Fixation", description: "Insert self-tapping mini screws (1.5mm or 2.0mm) through the plate. Ensure bicortical purchase without excessive penetration of the far cortex. Tighten screws carefully — overtightening in small bones can strip the threads. Place a minimum of 2 screws per fragment." },
      { title: "Soft Tissue Closure", description: "Confirm fracture reduction and hardware position under fluoroscopy. Check adjacent joint range of motion to ensure no impingement. Reposition extensor tendons over the plate. Close in layers. Early mobilization is encouraged to prevent tendon adhesions." },
    ],
  },
  "pediatric-plate": {
    description: "Pediatric orthopaedic plates are smaller, lower-profile implants specifically designed for the unique properties of growing bone. They accommodate the thinner cortices, greater elasticity, and active growth plates (physes) of children. The plate designs minimize the risk of growth disturbance while providing adequate fracture fixation.",
    indications: ["Pediatric diaphyseal fractures failing conservative management", "Pediatric forearm fractures (both-bone)", "Pediatric supracondylar humerus fractures (select cases)", "Pediatric femoral shaft fractures (older children)", "Corrective osteotomies in children"],
    surgicalTechnique: "Plate fixation in children requires careful attention to the physis. Screws must not cross open growth plates. Smaller plates (2.0mm, 2.7mm systems) are typically used. Implant removal is often planned after fracture union to avoid growth disturbance from retained hardware.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.0mm, 2.7mm, and 3.5mm systems in pediatric-specific lengths. DHS plates in pediatric sizes (90°-150° angles)",
    image: "/img/gpc-sm/paediatric-dhs-plate-sm-gpcmedical.jpg",
    steps: [
      { title: "Approach Respecting the Physis", description: "Plan the surgical approach to minimize soft tissue disruption in the child's smaller limb. Identify the location of the physis (growth plate) using fluoroscopy before incision. The approach must allow visualization of the fracture without violating the growth plate." },
      { title: "Gentle Fracture Reduction", description: "Reduce the fracture using gentle manipulation. Pediatric bone remodels well, so perfect anatomical reduction is less critical in younger children — accept up to 10° angulation in the plane of joint motion. Use small reduction clamps appropriate for pediatric bone." },
      { title: "Plate Positioning", description: "Select a pediatric-sized plate (2.0mm or 2.7mm system). Position the plate on the tension side of the bone. Confirm the plate does not extend across the physis. The plate should be long enough to achieve adequate fixation but should not approach the growth plate." },
      { title: "Screw Fixation Avoiding Growth Plate", description: "Drill and insert screws of the appropriate pediatric size. Screws must NOT cross the physis — confirm on fluoroscopy before drilling near the growth plate. Place a minimum of 3 cortices of fixation on each side of the fracture. Use unicortical screws if bicortical screws risk physis penetration." },
      { title: "Closure & Implant Removal Planning", description: "Confirm reduction and hardware position on fluoroscopy. Verify no hardware crosses the physis. Close in layers. Plan for implant removal after fracture union (typically 6-12 months) to prevent growth disturbance, stress shielding, or difficulty of later removal as the child grows." },
    ],
  },

  // === BONE SCREWS (Additional) ===
  "lag-screw": {
    description: "The lag screw technique achieves interfragmentary compression by creating a gliding hole in the near cortex and a thread hole in the far cortex. As the screw is tightened, the screw head compresses the near fragment against the far fragment, generating powerful interfragmentary compression. This technique can be performed with cortical screws (using the lag principle) or dedicated lag screws such as the DHS lag screw.",
    indications: ["Oblique and spiral fractures (fracture line > 2x bone diameter)", "Butterfly fragment fixation", "Malleolar fractures", "Interfragmentary compression supplementing plate fixation", "Condylar and intercondylar fractures"],
    surgicalTechnique: "The gliding hole is drilled in the near cortex using a drill bit equal to the outer thread diameter. The thread hole is drilled in the far cortex using a drill bit equal to the core diameter. The screw threads engage only the far cortex, generating compression as the head pulls the near fragment toward the far fragment.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.7mm, 3.5mm, 4.5mm cortical screws used in lag technique. DHS lag screws: 60-120mm",
    image: "/img/gpc-sm/d-h-s-lag-screw-S-603-sm.jpg",
    steps: [
      { title: "Determine Screw Direction", description: "Plan the lag screw trajectory perpendicular to the fracture line for optimal compression. The screw should bisect the angle between the perpendicular to the fracture line and the perpendicular to the bone axis. Mark the entry point on the near cortex." },
      { title: "Drill Gliding Hole (Near Cortex)", description: "Drill the gliding hole through the near cortex using a drill bit equal to the outer thread diameter of the screw (e.g., 3.5mm drill for a 3.5mm cortical screw). Use a drill sleeve to protect soft tissues. The gliding hole allows the screw shaft to slide freely without engaging bone." },
      { title: "Drill Thread Hole (Far Cortex)", description: "Insert the smaller centering drill guide into the gliding hole. Drill the thread hole through the far cortex using the core-diameter drill bit (e.g., 2.5mm for a 3.5mm screw). This hole is sized so the screw threads will engage the far cortex only. Countersink the near cortex if needed." },
      { title: "Measure & Insert Lag Screw", description: "Measure the screw length with a depth gauge through the gliding hole. Select the appropriate screw length. Insert the screw and tighten — as the threads engage only the far cortex, the screw head compresses the near fragment against the far fragment, achieving interfragmentary compression." },
      { title: "Verify Compression & Supplement Fixation", description: "Confirm fracture compression visually and on fluoroscopy. Check that the fracture line is obliterated. If needed, supplement with a neutralization plate to protect the lag screw from shear and bending forces. Irrigate and close." },
    ],
  },
  "interference-screw": {
    description: "Interference screws are specialized implants used in ligament reconstruction surgery to secure tendon grafts within bone tunnels. The screw is inserted alongside the graft in the tunnel, compressing the graft against the tunnel wall to achieve immediate secure fixation. Available in metallic and bioabsorbable variants.",
    indications: ["ACL reconstruction (bone-patellar tendon-bone and soft tissue grafts)", "PCL reconstruction", "MPFL reconstruction", "Other ligament reconstructions requiring tunnel fixation", "Tenodesis procedures"],
    surgicalTechnique: "After graft passage through the bone tunnel, the interference screw is inserted alongside the graft using a cannulated screwdriver over a guide wire. The screw diameter is typically selected to be 1mm smaller than the tunnel diameter for soft tissue grafts. The screw compresses the graft against the tunnel wall.",
    material: "Titanium, PEEK, or bioabsorbable polymers (PLLA, beta-TCP, hydroxyapatite composites)",
    sizes: "7mm, 8mm, 9mm, 10mm diameter. Lengths: 20mm, 25mm, 30mm, 35mm. Cannulated design",
    image: "/img/gpc/Cancellous-Screw-4mm-723-gpcmedical.jpg",
    steps: [
      { title: "Bone Tunnel Preparation", description: "Drill the femoral and tibial bone tunnels at the anatomical ligament footprints using cannulated reamers over guide wires. The tunnel diameter should match the graft diameter. Chamfer the tunnel edges to prevent graft abrasion." },
      { title: "Graft Placement in Tunnel", description: "Pass the prepared tendon graft (bone-patellar tendon-bone, hamstring, or allograft) through the tibial tunnel, across the joint, and into the femoral tunnel. Ensure the graft is seated fully in the tunnel with adequate length for fixation." },
      { title: "Interference Screw Insertion", description: "Insert the guide wire alongside the graft in the tunnel. Advance the interference screw over the guide wire using a cannulated screwdriver. The screw is inserted between the graft and the tunnel wall, compressing the graft peripherally for secure fixation." },
      { title: "Verify Fixation & Graft Tension", description: "Confirm the screw is fully seated within the tunnel on fluoroscopy. Test graft fixation by pulling on the graft — there should be no slippage. Cycle the knee through full range of motion. Assess anterior/posterior stability with Lachman and drawer tests to confirm successful reconstruction." },
    ],
  },
  "pedicle-screw": {
    description: "Pedicle screws are specialized spinal implants inserted through the vertebral pedicle into the vertebral body. They provide three-column fixation and are the strongest form of posterior spinal instrumentation. The screw head accepts connecting rods for segmental spinal stabilization and correction of deformity.",
    indications: ["Spinal fusion (degenerative, traumatic, tumor)", "Spinal fracture stabilization (burst, flexion-distraction)", "Scoliosis and kyphosis correction", "Spondylolisthesis reduction and fusion", "Spinal tumor reconstruction"],
    surgicalTechnique: "The pedicle entry point is identified using anatomical landmarks and fluoroscopy. A pedicle probe or awl creates the tract through the pedicle into the vertebral body. The tract is palpated with a ball-tipped probe to confirm intact pedicle walls. The screw is then inserted and connected to longitudinal rods.",
    material: "Titanium alloy (Ti-6Al-4V) or Cobalt-Chrome alloy",
    sizes: "Diameter: 4.5mm-8.5mm. Length: 25mm-55mm. Polyaxial or monoaxial heads",
    image: "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
    steps: [
      { title: "Identify Pedicle Entry Point", description: "Expose the posterior spine through a midline approach. Identify the pedicle entry point using anatomical landmarks: intersection of the transverse process and the lateral border of the superior articular facet. Confirm with AP fluoroscopy — the entry point should be at the lateral edge of the pedicle shadow." },
      { title: "Probe the Pedicle", description: "Create the pedicle tract using a pedicle awl or curved curette. Advance the probe through the pedicle into the vertebral body with a gentle controlled technique. The tract should pass through cancellous bone with consistent resistance — a sudden change suggests cortical breach." },
      { title: "Palpate & Tap the Tract", description: "Insert a ball-tipped pedicle probe to palpate all five walls of the pedicle tract (medial, lateral, superior, inferior, floor). All walls should be intact bony. Tap the tract if needed (especially in dense bone). Confirm trajectory on lateral fluoroscopy." },
      { title: "Insert Pedicle Screw", description: "Select the appropriate screw diameter (typically 70-80% of pedicle width) and length. Insert the pedicle screw along the prepared tract. Confirm screw position on AP and lateral fluoroscopy — the screw should not breach the medial pedicle wall or the anterior vertebral body cortex." },
      { title: "Rod Connection & Final Tightening", description: "Contour the longitudinal rod to match the desired spinal alignment (lordosis/kyphosis). Place the rod into the screw heads. Use reduction towers or persuaders if correction is needed. Tighten the set screws to lock the rod in the screw heads. Apply cross-links for rotational stability if indicated." },
    ],
  },
  "self-tapping-screw": {
    description: "Self-tapping cortical screws feature a fluted cutting tip that cuts its own thread path as the screw is advanced into pre-drilled bone. This eliminates the separate tapping step required by standard cortical screws, reducing operative time. The cutting flutes at the screw tip create a channel for bone debris to escape during insertion.",
    indications: ["Cortical bone fixation where tapping is not desired", "Plate fixation in diaphyseal fractures", "Locking plate fixation (most locking screws are self-tapping)", "Fracture fixation in moderately dense bone", "Revision cases where tap may enlarge existing holes"],
    surgicalTechnique: "Drill a pilot hole with the appropriate core-diameter drill bit. Measure depth. Insert the self-tapping screw directly without pre-tapping. The fluted tip cuts threads in the bone as the screw advances. Adequate irrigation during insertion is recommended to minimize thermal damage.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.0mm, 2.7mm, 3.5mm, 4.5mm diameter. Various lengths. Hexagonal or star-drive recess",
    image: "/img/gpc-sm/self-taping-cortex-screw-3-5mm-hexagonal-socket-735-sm.jpg",
    steps: [
      { title: "Drill Pilot Hole", description: "Using the appropriate drill bit (core diameter of the screw), drill a pilot hole through both cortices under irrigation. For a 3.5mm self-tapping screw, use a 2.5mm drill bit. Use a drill guide to protect soft tissues and ensure perpendicular drilling." },
      { title: "Measure Screw Length", description: "Insert the depth gauge through the drilled hole and read the screw length required for bicortical purchase. Select a screw length that provides 1-2mm protrusion beyond the far cortex for optimal thread engagement." },
      { title: "Insert Self-Tapping Screw", description: "Insert the self-tapping screw using the appropriate screwdriver (hexagonal or star-drive). Advance the screw slowly — the fluted cutting tip will create threads in the bone without the need for a separate tap. Apply gentle axial pressure during initial engagement." },
      { title: "Verify Purchase & Final Tightening", description: "Confirm bicortical purchase by feeling increased resistance as the screw tip engages the far cortex. Tighten until the screw head is flush with the plate or bone surface. Do not overtighten — this can strip the threads, especially in osteoporotic bone. Confirm position on fluoroscopy." },
    ],
  },
  "self-drilling-screw": {
    description: "Self-drilling screws feature a specialized drill-point tip that eliminates the need for a separate pilot hole. The screw simultaneously drills, taps, and advances through bone in a single step. This significantly reduces operative time and is particularly useful in emergency fixation, thin cortical bone, and applications where precise drill positioning is difficult.",
    indications: ["Emergency fracture fixation requiring speed", "External fixator pin placement", "Thin cortical bone fixation", "Craniomaxillofacial plating", "Situations where separate drilling is impractical"],
    surgicalTechnique: "Mark the desired entry point. Insert the self-drilling screw directly into bone using a power driver or manual screwdriver. The drill-point tip penetrates the near cortex, crosses the medullary canal, and engages the far cortex. No pilot hole or tapping is required.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "2.0mm, 2.7mm, 3.5mm diameter. Hexagonal or star-drive recess. Various lengths",
    image: "/img/gpc-sm/Self-taping-cortex-screw-736-sm.jpg",
    steps: [
      { title: "Mark Entry Point", description: "Identify and mark the optimal entry point on the bone surface. Ensure the trajectory avoids neurovascular structures and will achieve the desired fixation. Protect soft tissues with a drill sleeve or tissue protector." },
      { title: "Insert Using Power or Manual Driver", description: "Place the self-drilling screw tip at the marked entry point. Using a calibrated power driver (low speed, high torque) or manual screwdriver, advance the screw. The drill-point tip will penetrate the near cortex and advance through bone without a pre-drilled hole." },
      { title: "Verify Bicortical Purchase", description: "Continue advancing the screw until the drill tip penetrates the far cortex. Increased resistance followed by a slight decrease indicates far cortex penetration. Ensure the screw head is seated flush against the plate or bone surface." },
      { title: "Confirm Position", description: "Check screw position and length on fluoroscopy. Verify that the screw is not excessively long (risking soft tissue damage beyond the far cortex). Test fixation stability. In plate applications, ensure the plate is well-seated before final screw tightening." },
    ],
  },
  "polyaxial-screw": {
    description: "Polyaxial pedicle screws feature a multi-directional tulip head that allows angulation of the rod relative to the screw axis. This freedom of motion (typically 25-30 degrees in all directions) greatly facilitates rod insertion, especially when screws at adjacent vertebral levels are not perfectly aligned. The polyaxial mechanism is locked once the rod is seated and the set screw is tightened.",
    indications: ["Posterior spinal fusion (lumbar, thoracic)", "Degenerative disc disease with instability", "Spondylolisthesis stabilization", "Spinal trauma fixation", "Multi-level spinal deformity correction"],
    surgicalTechnique: "Identical pedicle preparation as standard pedicle screws. The polyaxial head allows the surgeon to accommodate anatomical variations in pedicle trajectory while still connecting to a smooth rod contour. After rod placement, the inner mechanism is locked by tightening the set screw to a specified torque.",
    material: "Titanium alloy (Ti-6Al-4V) or Cobalt-Chrome alloy",
    sizes: "Diameter: 4.5mm-8.5mm. Length: 25mm-55mm. Polyaxial angulation: 25-30°",
    image: "/img/gpc/Single-Lock-Polyaxial-Screw-MAS44T-gpcmedical.jpg",
    steps: [
      { title: "Pedicle Entry & Tract Preparation", description: "Identify the pedicle entry point at the intersection of the transverse process and lateral superior articular facet. Create the pedicle tract using an awl and pedicle probe. Palpate all five walls with a ball-tipped probe to confirm intact cortical walls." },
      { title: "Polyaxial Screw Insertion", description: "Select the appropriate screw diameter and length. Insert the polyaxial pedicle screw along the prepared tract. The tulip head will remain freely mobile until locked. Confirm screw position on AP and lateral fluoroscopy." },
      { title: "Rod Placement with Polyaxial Adjustment", description: "Contour the longitudinal rod to the desired spinal curvature. Place the rod into the polyaxial tulip heads. The multi-directional heads accommodate minor misalignment between screw trajectories, greatly facilitating rod engagement without the need for perfect screw parallelism." },
      { title: "Compression/Distraction & Correction", description: "Apply compression or distraction across segments as needed using inline instruments. The polyaxial mechanism allows controlled correction of sagittal and coronal alignment while maintaining rod-screw engagement." },
      { title: "Lock Set Screws", description: "Once the desired alignment is achieved, tighten the set screws in each polyaxial head to the manufacturer-specified torque using a calibrated torque wrench. This locks the polyaxial mechanism, converting the construct to a rigid fixation. Apply cross-links if rotational stability is needed." },
    ],
  },
  "monoaxial-screw": {
    description: "Monoaxial pedicle screws have a fixed-angle tulip head that accepts the rod in a single, rigid plane aligned with the screw axis. Unlike polyaxial screws, the head does not permit angulation. This provides a more rigid construct with direct load transfer and is preferred when maximum correction force is needed, such as in deformity surgery.",
    indications: ["Spinal deformity correction (scoliosis, kyphosis)", "Cases requiring maximum corrective force", "Sacral/pelvic fixation (S1, iliac)", "Short-segment rigid stabilization", "Osteotomy fixation in spine (PSO, SPO)"],
    surgicalTechnique: "Pedicle preparation is identical to polyaxial screws. However, the screw trajectory must be planned more precisely because the fixed head requires near-perfect alignment for rod engagement. Monoaxial screws transmit corrective forces more efficiently from the rod to the vertebral body.",
    material: "Titanium alloy (Ti-6Al-4V) or Cobalt-Chrome alloy",
    sizes: "Diameter: 4.5mm-8.5mm. Length: 25mm-55mm. Fixed-angle head",
    image: "/img/gpc/Single-Lock-Monoaxial-Screw-MAS42T-gpcmedical.jpg",
    steps: [
      { title: "Plan Precise Trajectory", description: "Plan the screw trajectory carefully — monoaxial screws require precise alignment for rod seating since the head does not angulate. Use preoperative imaging (CT with navigation if available) to determine optimal pedicle entry point, trajectory, and screw dimensions." },
      { title: "Pedicle Entry & Tract Preparation", description: "Create the pedicle entry point with an awl at the anatomical landmark. Probe the pedicle with a geared or curved probe, advancing into the vertebral body. Confirm intact pedicle walls with a ball-tipped probe. Tap the tract if bone is dense." },
      { title: "Insert Monoaxial Screw", description: "Insert the monoaxial pedicle screw along the prepared tract. Ensure the fixed tulip head is oriented to receive the rod in the correct plane (aligned with adjacent screw heads). Confirm position on fluoroscopy in two planes." },
      { title: "Rod Placement & Correction", description: "Contour the rod and seat it into the monoaxial tulip heads. Because the head is fixed, corrective forces applied to the rod are transmitted directly to the vertebral body — this is the key advantage for deformity correction. Apply compression, distraction, or rotation as needed." },
      { title: "Final Tightening & Verification", description: "Tighten set screws to the specified torque to lock the rod in the monoaxial heads. Confirm overall spinal alignment on fluoroscopy (AP and lateral). Apply cross-links for additional rotational stability. Irrigate and close over drains." },
    ],
  },
  "variable-angle-locking-screw": {
    description: "Variable-angle locking screws allow the surgeon to insert locking screws at angles deviating up to 15 degrees from the perpendicular axis of the plate hole. The screw head features a threaded design that locks into a smooth-walled plate hole at the chosen angle, creating an angular-stable construct while accommodating periarticular anatomy, avoiding articular surfaces, or targeting specific bone fragments.",
    indications: ["Periarticular fractures requiring off-axis screw placement", "Fractures near joint surfaces where perpendicular screws risk joint penetration", "Periprosthetic fractures around existing hardware", "Comminuted fractures requiring screws directed at specific fragments", "Osteoporotic fractures requiring optimal bone purchase trajectory"],
    surgicalTechnique: "Position the plate on the bone. Using a variable-angle drill guide, select the desired screw trajectory (up to 15° from perpendicular). Drill through the guide at the chosen angle. Insert the variable-angle locking screw — its threaded head expands and locks into the plate hole at the chosen angle.",
    material: "Titanium alloy (Ti-6Al-4V)",
    sizes: "2.4mm, 2.7mm, 3.5mm, 5.0mm diameter. Compatible with specific variable-angle plate systems",
    image: "/img/gpc-sm/3-5mm-locking-compression-screw-self-tapping-765-sm.jpg",
    steps: [
      { title: "Position Plate on Bone", description: "Apply the locking plate to the bone surface in the optimal position. Secure with one or two standard screws to stabilize the plate. Identify which holes require variable-angle screw placement based on fracture pattern and proximity to the articular surface." },
      { title: "Determine Optimal Screw Angle", description: "Attach the variable-angle drill guide to the plate hole. Adjust the guide to the desired screw trajectory (up to 15° off-axis). Aim screws toward specific fracture fragments, away from joint surfaces, or around existing hardware as needed. Confirm angle on fluoroscopy." },
      { title: "Drill Through Variable-Angle Guide", description: "Drill through the bone at the selected angle using the variable-angle drill guide. The guide ensures the drill hole matches the intended screw trajectory. Measure the screw length with a depth gauge inserted through the angled hole." },
      { title: "Insert Variable-Angle Locking Screw", description: "Insert the variable-angle locking screw through the plate hole at the predetermined angle. As the screw is tightened, the threaded head engages and locks into the smooth-walled plate hole, creating a fixed-angle construct at the chosen trajectory. Torque to the specified level." },
      { title: "Verify Fixation & Screw Positions", description: "Confirm all screw positions on fluoroscopy in multiple planes. Verify no articular penetration, especially for periarticular screws. Check that all locking screws are fully seated and locked in the plate. Test construct stability. Irrigate and close." },
    ],
  },
  "fully-threaded-screw": {
    description: "Fully threaded screws have threads extending the entire length of the screw shaft. Unlike partially threaded (lag) screws, they provide positional fixation without generating interfragmentary compression. The uniform thread engagement along the entire screw length distributes the load evenly and resists screw migration, making them ideal for maintaining fracture position without compressing fragments.",
    indications: ["Positional fixation of fracture fragments", "Femoral neck fractures (parallel screw fixation)", "Syndesmotic fixation", "Fractures where compression is contraindicated", "Fixation in osteoporotic bone (maximized thread purchase)"],
    surgicalTechnique: "Drill a pilot hole equal to the screw core diameter through both cortices. Measure the length. Insert the fully threaded screw. Because threads engage both the near and far fragments equally, there is no relative motion between fragments — the screw holds position without compression.",
    material: "316L Stainless Steel or Titanium alloy",
    sizes: "4.0mm cancellous fully threaded, 4.5mm cortical, 6.5mm cancellous fully threaded, 7.0mm cannulated fully threaded",
    image: "/img/gpc/Cancellous-Screw-4mm-Fully-Threaded-724-gpcmedical.jpg",
    steps: [
      { title: "Drill Pilot Hole Full Length", description: "Drill a pilot hole using the core-diameter drill bit through the near cortex, across the fracture, and into the far fragment. For a 4.0mm cancellous screw, use a 2.5mm drill bit. Ensure the drill trajectory maintains the desired fracture reduction. Use a drill guide to protect soft tissues." },
      { title: "Measure Screw Length", description: "Insert the depth gauge through the pilot hole and measure the required screw length. Select a screw that provides full-length thread purchase in both fragments. The screw should be long enough for complete bicortical engagement or to reach the subchondral bone in cancellous applications." },
      { title: "Insert Fully Threaded Screw", description: "Insert the fully threaded screw using the appropriate screwdriver. Advance until the screw head is flush with the near cortex or plate surface. The threads engage bone along the entire screw length, providing positional (non-compression) fixation. The fragments are held in their reduced position." },
      { title: "Verify Position — No Compression", description: "Confirm screw position on fluoroscopy in two planes. Verify the fracture reduction is maintained — there should be no gap widening or displacement (which would indicate unintended compression). For parallel screw constructs (e.g., femoral neck), confirm all screws are parallel and within the bone boundaries. Irrigate and close." },
    ],
  },

  // === SPINE IMPLANTS ===
  "harrington-rod": {
    description: "The Harrington rod is a historically significant spinal instrumentation system used primarily for scoliosis correction. It consists of a stainless steel distraction rod with ratcheted ends that engage hooks placed on the vertebral laminae. Introduced in the 1960s by Dr. Paul Harrington, this system revolutionized surgical scoliosis treatment by providing internal corrective forces. While largely superseded by modern pedicle screw-rod constructs, Harrington rods remain relevant for understanding the evolution of spinal instrumentation and are still encountered in revision surgeries.",
    indications: ["Adolescent idiopathic scoliosis (historical)", "Neuromuscular scoliosis", "Post-traumatic spinal deformity", "Revision of existing Harrington instrumentation"],
    surgicalTechnique: "A posterior midline approach exposes the spine from the upper to the lower instrumented vertebrae. Hooks are placed at the end vertebrae of the curve — a distraction hook at the cephalad end and a compression hook at the caudad end. The ratcheted rod is inserted and sequential distraction is applied to correct the curvature. Sublaminar wires or cross-links may be added for rotational stability. Decortication and bone grafting along the fusion bed complete the procedure.",
    material: "316L Stainless Steel",
    sizes: "3/16 inch and 1/4 inch diameter rods. Lengths: 7-16 inches. Various hook sizes for laminar and pedicle engagement",
    image: "/img/gpc-sm/HH43-sm.jpg",
    steps: [
      { title: "Posterior Exposure", description: "Perform a posterior midline incision and subperiosteal dissection to expose the spinous processes, laminae, and transverse processes from the upper to lower instrumented vertebrae of the scoliotic curve." },
      { title: "Hook Placement at End Vertebrae", description: "Place laminar hooks at the cephalad and caudad end vertebrae of the curve. The upper hook is positioned under the lamina in a claw configuration, and the lower hook engages the lamina or pedicle for secure anchorage." },
      { title: "Rod Insertion", description: "Insert the ratcheted Harrington distraction rod through the hooks, ensuring proper seating of the rod within the hook channels. Confirm alignment and rod trajectory before applying corrective forces." },
      { title: "Sequential Distraction and Compression", description: "Apply sequential distraction using the rod ratchet mechanism to gradually correct the scoliotic curve. On the convex side, compression forces may be applied to further balance the correction. Monitor spinal cord function throughout." },
      { title: "Wiring and Cross-Linking", description: "Pass sublaminar wires at intermediate levels for additional fixation points. Apply cross-links between bilateral rods (if used) to increase rotational stability. Decorticate the posterior elements and apply bone graft for fusion." },
    ],
  },
  "luque-rod": {
    description: "The Luque rod system consists of L-shaped pre-contoured stainless steel rods secured to the spine with sublaminar wires at each vertebral level. Developed by Dr. Eduardo Luque, this segmental fixation technique provides multi-point correction and stabilization without the need for postoperative bracing. The sublaminar wires at each level distribute corrective forces, providing more uniform curve correction compared to distraction-only systems. Luque rods are particularly useful in neuromuscular scoliosis where pelvic fixation is required.",
    indications: ["Neuromuscular scoliosis (cerebral palsy, muscular dystrophy)", "Paralytic spinal deformity", "Spinal stabilization requiring segmental fixation", "Cases where postoperative bracing is impractical"],
    surgicalTechnique: "Bilateral L-shaped rods are pre-contoured to the desired sagittal and coronal alignment. Sublaminar wires (typically 16- or 18-gauge) are carefully passed beneath the lamina at each level using a curved wire passer. The rods are placed against the laminae, and the wires are sequentially tightened around the rods from caudal to cephalad, translating the spine to the rods and correcting the deformity.",
    material: "316L Stainless Steel (L-shaped rods and stainless steel sublaminar wires)",
    sizes: "3/16 inch and 1/4 inch diameter rods. Custom lengths. Wire gauges: 16G and 18G sublaminar wires",
    image: "/img/gpc-sm/Drumond-wire-PS925-sm.jpg",
    steps: [
      { title: "Posterior Exposure", description: "Expose the posterior elements from the upper to lower instrumented vertebrae via a midline approach. Carefully strip the paraspinal muscles subperiosteally, preserving facet capsules outside the fusion zone." },
      { title: "Sublaminar Wire Passage at Each Level", description: "At each vertebral level, create a small opening at the ligamentum flavum and pass a doubled 16- or 18-gauge stainless steel wire beneath the lamina using a curved wire passer. Advance the wire carefully to avoid spinal cord injury. Bend wire ends for later tightening." },
      { title: "Rod Placement", description: "Position the pre-contoured L-shaped Luque rods bilaterally against the posterior laminae. Thread the sublaminar wires around the rods at each level, loosely securing the rods in place before final tightening." },
      { title: "Sequential Wire Tightening", description: "Beginning at the caudal end and working cephalad, sequentially tighten the sublaminar wires to translate the spine toward the pre-contoured rods. This segmental correction distributes forces across multiple levels for uniform curve correction." },
      { title: "Contour Rod to Lordosis/Kyphosis", description: "Verify that the final rod contour matches the desired sagittal alignment — restoring thoracic kyphosis and lumbar lordosis. Make final adjustments to wire tension. Decorticate the posterior elements and apply autologous bone graft for fusion." },
    ],
  },
  "lumbar-fusion-cage": {
    description: "The lumbar fusion cage is a standalone or supplemental interbody fusion device designed to restore disc height, provide immediate structural support, and promote bony fusion in the lumbar spine. Available in titanium or PEEK (polyetheretherketone) materials, these cages are packed with bone graft or bone graft substitutes to facilitate arthrodesis. The cage's open architecture allows bone ingrowth through and around the device, while its serrated or textured surfaces resist migration and provide initial stability.",
    indications: ["Degenerative disc disease with axial back pain", "Spondylolisthesis (Grade I-II)", "Recurrent disc herniation", "Post-discectomy collapse syndrome", "Adjacent segment disease", "Spinal stenosis requiring decompression and fusion"],
    surgicalTechnique: "The approach depends on the specific technique: PLIF (Posterior Lumbar Interbody Fusion), TLIF (Transforaminal), or ALIF (Anterior). After complete discectomy and endplate preparation down to bleeding subchondral bone, the cage is packed with bone graft (autograft, allograft, or BMP) and inserted into the disc space. Proper sizing is critical — the cage should restore disc height and lordosis without over-distraction. Supplemental posterior pedicle screw fixation is typically added for stability.",
    material: "Titanium alloy (Ti-6Al-4V) or PEEK (polyetheretherketone) with titanium-coated endplates",
    sizes: "Heights: 8-16mm. Widths: 22-32mm. Lengths: 20-32mm. Lordotic angles: 0-15 degrees",
    image: "/img/gpc/Lumbar-Cage-Titanium-SH100T-gpcmedical.jpg",
    steps: [
      { title: "Approach (PLIF/TLIF/ALIF)", description: "Select the surgical approach based on pathology and patient anatomy. For PLIF, perform bilateral laminotomy; for TLIF, perform unilateral facetectomy; for ALIF, use an anterior retroperitoneal or transperitoneal approach. Expose the disc space." },
      { title: "Discectomy", description: "Perform a thorough discectomy, removing the nucleus pulposus and as much disc material as possible. Use pituitary rongeurs, curettes, and Cobb elevators. Preserve the cartilaginous endplates initially for annular containment." },
      { title: "Endplate Preparation", description: "Prepare the vertebral endplates using curettes and rasps to remove the cartilaginous endplate down to bleeding subchondral bone. Preserve the bony endplate to prevent cage subsidence. Create a vascular bed for fusion." },
      { title: "Pack Cage with Bone Graft", description: "Select the appropriately sized cage based on trial sizers. Fill the cage with bone graft material — autologous iliac crest bone, local bone from decompression, allograft, or bone morphogenetic protein (BMP). Pack firmly to maximize fusion potential." },
      { title: "Insert Cage and Confirm Position", description: "Insert the packed cage into the prepared disc space using the insertion instrument. Ensure the cage is seated past the posterior vertebral body line to avoid canal compromise. Confirm position with lateral and AP fluoroscopy." },
      { title: "Supplemental Fixation", description: "Place posterior pedicle screws and rods to supplement the interbody cage and provide three-column stability. Apply compression across the construct to load the cage. Perform final fluoroscopic confirmation of hardware position." },
    ],
  },
  "titanium-mesh-cage": {
    description: "The titanium mesh cage is a cylindrical or rectangular mesh construct used for vertebral body reconstruction following corpectomy (vertebral body removal). Its open mesh design allows packing with bone graft while providing immediate structural support to the anterior column. The mesh cage is customizable — it can be cut to length intraoperatively to match the corpectomy defect. Used commonly in trauma (burst fractures), tumors, and infections requiring vertebral body resection.",
    indications: ["Vertebral body corpectomy defect reconstruction", "Burst fractures with anterior column deficiency", "Spinal tumors requiring vertebral body resection", "Vertebral osteomyelitis after debridement", "Multi-level cervical or thoracolumbar corpectomy"],
    surgicalTechnique: "After corpectomy of the diseased vertebral body, the mesh cage is cut to the appropriate length to span the defect between the adjacent intact endplates. The cage is packed with morselized bone graft (autograft or allograft) and inserted under gentle distraction. The mesh cage is then stabilized with an anterior plate or supplemental posterior pedicle screw fixation to prevent displacement and share the load during fusion.",
    material: "Commercially Pure Titanium mesh (Grade 2 or Grade 4)",
    sizes: "Diameters: 12-20mm (cylindrical). Heights: customizable (cut to length). Rectangular variants: various widths and depths available",
    image: "/img/gpc/Titanium-Mesh-Cages-SH102T-gpcmedical.jpg",
    steps: [
      { title: "Corpectomy of Diseased Vertebra", description: "Perform anterior or anterolateral approach to the affected spinal level. Remove the diseased vertebral body using rongeurs, curettes, and a high-speed burr. Preserve the posterior cortex initially, then carefully remove it to decompress the spinal canal. Ensure complete removal of pathological tissue." },
      { title: "Size Mesh Cage to Defect", description: "Measure the corpectomy defect height between the intact superior and inferior endplates using calipers. Cut the titanium mesh cage to the appropriate length, allowing 1-2mm for impaction. Ensure the diameter matches the vertebral body width." },
      { title: "Fill with Bone Graft", description: "Pack the mesh cage densely with morselized cancellous bone graft — autologous iliac crest, local bone from corpectomy, allograft, or a combination. Fill the cage completely to maximize surface area for fusion. Additional graft can be placed around the cage." },
      { title: "Insert Between Vertebral Endplates", description: "Apply gentle distraction to the adjacent vertebral bodies. Insert the packed mesh cage into the corpectomy defect, ensuring flush contact with both the superior and inferior endplates. Release distraction to load the cage." },
      { title: "Stabilize with Anterior Plate or Posterior Pedicle Screws", description: "Apply an anterior cervical or thoracolumbar plate spanning the cage to prevent displacement, or supplement with posterior pedicle screw-rod fixation for 360-degree stability. Confirm alignment and hardware position on fluoroscopy." },
    ],
  },
  "interspinous-process-device": {
    description: "The interspinous process device (IPD) is an implant placed between adjacent spinous processes to provide indirect decompression of the neural elements. By maintaining the interspinous space in a distracted position, the device opens the spinal canal and neural foramina, relieving symptoms of neurogenic claudication. The device limits extension at the treated segment while preserving flexion, providing dynamic stabilization without formal fusion.",
    indications: ["Lumbar spinal stenosis with neurogenic claudication", "Degenerative spondylolisthesis (Grade I)", "Foraminal stenosis", "Adjacent segment degeneration prophylaxis", "Patients who obtain relief with flexion (positive shopping cart sign)"],
    surgicalTechnique: "Through a midline posterior approach, the interspinous ligament is removed and the space between adjacent spinous processes is prepared. After sizing with trials, the device is inserted between the spinous processes and expanded or locked in position. The device limits extension while allowing flexion, effectively widening the spinal canal and foramina in the extended position.",
    material: "Titanium alloy, PEEK, or combination (titanium wings with PEEK spacer)",
    sizes: "Heights: 8-16mm. Various widths to match spinous process anatomy",
    image: "/img/gpc-sm/Hartshill-Frame-PS925H-sm.jpg",
    steps: [
      { title: "Midline Posterior Approach", description: "Make a small midline posterior incision centered over the affected interspinous space. Dissect through subcutaneous tissue and lumbodorsal fascia. Expose the spinous processes of the affected and adjacent levels." },
      { title: "Expose Interspinous Space", description: "Identify the target interspinous space using fluoroscopy. Retract the paraspinal muscles laterally to expose the supraspinous and interspinous ligaments between the two spinous processes." },
      { title: "Remove Interspinous Ligament", description: "Excise the interspinous ligament using a scalpel or rongeur to create space for the implant. Preserve the supraspinous ligament if possible for posterior tension band stability. Clear soft tissue from the interspinous space." },
      { title: "Size Device", description: "Insert trial spacers of increasing size between the spinous processes to determine the optimal implant height. The correct size should distract the interspinous space enough to relieve stenosis without over-distracting the segment." },
      { title: "Insert Between Spinous Processes", description: "Insert the appropriately sized interspinous process device between the spinous processes. Deploy the wings or locking mechanism to secure the implant around the spinous processes and prevent migration." },
      { title: "Verify Distraction", description: "Confirm proper device position and interspinous distraction on lateral fluoroscopy. Verify that the device is centered and the wings are properly engaged. Irrigate and close in layers." },
    ],
  },
  "spinal-fixation-rod": {
    description: "Spinal fixation rods are connecting elements used in pedicle screw-rod systems to provide rigid stabilization across spinal segments. Available in titanium or cobalt-chromium alloys, these rods are contoured intraoperatively to match the patient's desired sagittal alignment — restoring lumbar lordosis and thoracic kyphosis. The rods connect the pedicle screw tulip heads and serve as the load-sharing backbone of the posterior spinal fixation construct.",
    indications: ["Spinal fusion instrumentation (all levels)", "Degenerative disc disease with instability", "Spondylolisthesis correction", "Spinal fracture stabilization", "Deformity correction (scoliosis, kyphosis)", "Tumor or infection stabilization"],
    surgicalTechnique: "After pedicle screws are placed, the rod is contoured using French benders or in-situ benders to match the desired sagittal alignment. The rod is inserted into the screw tulip heads using rod holders and persuaders. Provisional tightening allows for compression, distraction, or reduction maneuvers before final set screw locking. Two rods (bilateral) are always used for stability.",
    material: "Titanium alloy (Ti-6Al-4V) or Cobalt-Chromium-Molybdenum (CoCrMo). CoCr rods offer higher stiffness for deformity correction",
    sizes: "Diameters: 3.5mm (cervical), 5.5mm (thoracolumbar), 6.0mm (adult deformity). Lengths: 30-500mm. Pre-bent lordotic or straight configurations",
    image: "/img/gpc/Titanium-Rods-MAS27T-gpcmedical.jpg",
    steps: [
      { title: "Contour Rod to Sagittal Alignment", description: "Using French benders, contour the rod to match the desired sagittal profile — lumbar lordosis (40-60 degrees), thoracic kyphosis (20-40 degrees), and any coronal correction needed. Use rod templates or navigation guidance for precision. Smooth all bends to prevent stress risers." },
      { title: "Insert into Screw Tulip Heads", description: "Using a rod holder, introduce the contoured rod into the open tulip heads of the pedicle screws. A rod persuader or pusher may be needed to seat the rod into all tulip heads. Work from one end to the other systematically." },
      { title: "Provisional Tightening", description: "Apply provisional (finger-tight) set screws at each screw tulip to hold the rod in position. This allows for correction maneuvers before final locking. Ensure the rod is fully seated in all tulip heads before proceeding." },
      { title: "Compression and Distraction", description: "Using compression and distraction instruments applied to the screw tulip heads, perform reduction maneuvers to correct spondylolisthesis, restore disc height, or achieve deformity correction. Apply forces sequentially across segments." },
      { title: "Lock Set Screws", description: "Using the torque-limiting set screw driver, apply final tightening to all set screws. The torque limiter ensures consistent locking force without screw head breakage. Verify final rod position and alignment on fluoroscopy." },
    ],
  },
  "cross-link-connector": {
    description: "The cross-link connector (transverse connector) is a device that bridges bilateral spinal fixation rods to increase the torsional and rotational rigidity of a pedicle screw-rod construct. By connecting the two parallel rods with a perpendicular cross-member, the device converts two independent rod constructs into a single unified frame, significantly enhancing resistance to axial rotation and lateral bending forces.",
    indications: ["Long-segment posterior spinal fusion (3+ levels)", "Spinal deformity correction constructs", "High-demand biomechanical situations", "Laminectomy defects requiring enhanced stability", "Pedicle subtraction osteotomy or vertebral column resection constructs"],
    surgicalTechnique: "After bilateral rod placement and provisional tightening, the cross-link connector is applied. The connector consists of two rod clamps connected by a threaded or telescoping crossbar. Each clamp is placed on the respective rod at the desired level (typically mid-construct), and the crossbar is adjusted to the appropriate length. Final tightening creates a rigid box-frame construct.",
    material: "Titanium alloy (Ti-6Al-4V) or Stainless Steel, compatible with the rod system",
    sizes: "Adjustable lengths: 25-60mm crossbar span. Clamp sizes matched to rod diameter (5.5mm or 6.0mm)",
    image: "/img/gpc/Cross-Connectors-MAS26T-gpcmedical.jpg",
    steps: [
      { title: "After Bilateral Rod Placement", description: "Ensure both bilateral rods are properly seated in all pedicle screw tulip heads and provisionally tightened. Select the level for cross-link placement — typically at the midpoint of the construct or at levels of greatest instability." },
      { title: "Select Connector Length", description: "Measure the distance between the two rods at the intended level. Select the appropriate cross-link connector length that spans the inter-rod distance. For adjustable connectors, set the telescoping crossbar to the measured length." },
      { title: "Attach Clamps to Rods", description: "Open the rod clamps and place one clamp on each rod at the selected level. Position the clamps so the crossbar runs perpendicular to both rods. Loosely tighten the clamps to allow for final positioning adjustments." },
      { title: "Tighten to Achieve Rigidity", description: "Using the appropriate driver, sequentially tighten the clamp bolts on both sides to firmly secure the cross-link to the rods. Apply the manufacturer-specified torque to ensure adequate clamping force without rod damage." },
      { title: "Verify Construct Stability", description: "Manually test the construct for rotational stability. Confirm that the cross-link is perpendicular to the rods and not impinging on neural structures or soft tissue. For long constructs, consider placing a second cross-link at another level." },
    ],
  },

  // === EXTERNAL FIXATION ===
  "unilateral-external-fixator": {
    description: "The unilateral external fixator is a single-plane external skeletal fixation device consisting of half-pins (Schanz screws) inserted into bone fragments and connected by a rigid external bar or frame. This versatile device provides temporary or definitive fracture stabilization while allowing soft tissue access for wound care. It is the workhorse of damage control orthopedics, commonly used in open fractures, polytrauma, and infected non-unions where internal fixation is contraindicated.",
    indications: ["Open fractures (Gustilo-Anderson Type II, III)", "Damage control orthopedics in polytrauma", "Fractures with severe soft tissue injury", "Infected non-unions", "Temporary spanning fixation before definitive surgery", "Periarticular fractures as a temporizing measure", "Pediatric fractures"],
    surgicalTechnique: "Pin placement follows strict safe-zone anatomy to avoid neurovascular structures and tendons. Schanz pins (half-pins) are inserted through stab incisions, pre-drilled, and advanced by hand or power into both cortices. Two pins are placed in each major fragment. The connecting bar and clamps are then assembled, and the fracture is reduced before final tightening of all clamp-to-bar and pin-to-clamp connections.",
    material: "Stainless Steel or Titanium half-pins (Schanz screws). Carbon fiber or Stainless Steel connecting bars",
    sizes: "Pin diameters: 4mm, 5mm, 6mm (adult). Bar diameters: 8mm, 11mm. Bar lengths: 150-400mm",
    image: "/img/gpc-sm/Dynamic-External-Fixator-L-Type-EFS2015-sm.jpg",
    steps: [
      { title: "Plan Pin Placement (Safe Zones)", description: "Review the anatomical safe zones for pin placement to avoid neurovascular structures and tendons. For the tibia, use the anteromedial subcutaneous surface. For the femur, use the lateral approach. Mark pin entry points with at least 2 pins per main fragment." },
      { title: "Stab Incision and Drill", description: "Make a small stab incision at each planned pin site. Bluntly dissect to bone, protecting soft tissues with a tissue protector sleeve. Pre-drill with the appropriate drill bit (3.2mm for 5mm pins), drilling both cortices under power." },
      { title: "Insert Schanz Pins (2 Per Fragment)", description: "Insert self-drilling or pre-drilled Schanz pins (half-pins) through both cortices by hand or low-speed power. Ensure pins engage both cortices for bicortical fixation. Place at least 2 pins in each major fragment, spread as far apart as practical." },
      { title: "Connect Clamps and Bar", description: "Attach pin-to-bar clamps to each Schanz pin. Slide the connecting bar through the clamps, aligning it parallel to the bone axis. Loosely tighten all connections to allow for fracture reduction." },
      { title: "Reduce Fracture", description: "Under fluoroscopic guidance, manipulate the fracture fragments to achieve acceptable reduction — restoring length, alignment, and rotation. Use the external fixator frame to apply traction, angulation correction, or translation as needed." },
      { title: "Lock Construct", description: "Once satisfactory reduction is confirmed on orthogonal fluoroscopy, sequentially tighten all pin-to-clamp and clamp-to-bar connections. Verify final reduction. Dress pin sites with sterile gauze and begin pin-site care protocol." },
    ],
  },
  "ring-fixator": {
    description: "The ring fixator (Ilizarov apparatus) is a circular external fixation system consisting of rings connected by threaded rods, with tensioned wires (Kirschner wires) and/or half-pins transfixing the bone. Developed by Dr. Gavriil Ilizarov, this system provides multiplanar stability and allows gradual correction of deformities through distraction osteogenesis. The ring construct distributes forces circumferentially, providing exceptional stability even in small or osteoporotic bone fragments.",
    indications: ["Complex periarticular fractures", "Tibial plateau fractures (Schatzker V-VI)", "Open fractures with bone loss", "Limb lengthening (distraction osteogenesis)", "Deformity correction (angular, rotational, translational)", "Infected non-unions", "Bone transport for segmental defects"],
    surgicalTechnique: "A reference ring is applied first at a defined anatomical level. Tensioned olive or smooth wires (1.5-1.8mm) are inserted through the bone and secured to the ring under tension (90-130 kg). Additional rings are built proximally and distally, connected by threaded rods and hinges as needed. The modular system allows infinite construct configurations for fracture reduction, deformity correction, and distraction osteogenesis.",
    material: "Stainless Steel or Aluminum rings. Stainless Steel Kirschner wires (1.5mm, 1.8mm). Stainless Steel threaded rods (6mm)",
    sizes: "Ring diameters: 80-240mm (full rings, 5/8 rings, half rings). Wire diameters: 1.5mm, 1.8mm. Threaded rod lengths: 50-400mm",
    image: "/img/gpc-sm/Ilizarov-Ring-Fixator-Various-Types-EFS6006-sm-gpcmedical.jpg",
    steps: [
      { title: "Apply Reference Ring", description: "Select the appropriately sized ring (should clear the limb by 2 fingers' breadth circumferentially). Position the reference ring perpendicular to the mechanical axis of the bone at a defined anatomical level (typically the most stable fragment)." },
      { title: "Insert Tensioned Wires Through Bone", description: "Using a power drill, insert 1.5 or 1.8mm Kirschner wires through safe corridors in the bone, passing through both cortices and the soft tissues on each side. Two divergent wires (crossing at 60-90 degrees) are placed per ring level for stability." },
      { title: "Attach Wires to Ring", description: "Secure each wire to the ring using wire fixation bolts. Apply tension (90-130 kg) to each wire using a wire tensioner device. Tensioned wires behave like a trampoline, providing elastic stability and load sharing across the ring." },
      { title: "Build Ring Construct with Threaded Rods", description: "Connect additional rings proximally and distally using threaded rods and nuts. Space rings to span the fracture or deformity. Add hinges for angular correction or translate plates for translational correction. Ensure the construct is mechanically sound." },
      { title: "Reduce Fracture and Begin Distraction Protocol if Needed", description: "Perform acute fracture reduction using the ring construct and olive wires for fragment manipulation. For limb lengthening or bone transport, perform a corticotomy and begin distraction after a latency period (5-7 days) at a rate of 1mm/day in 4 increments." },
    ],
  },

  // === SPECIALIZED IMPLANTS ===
  "swanson-finger-prosthesis": {
    description: "The Swanson flexible hinge implant is a one-piece silicone elastomer prosthesis designed for small joint arthroplasty, primarily the metacarpophalangeal (MCP) and proximal interphalangeal (PIP) joints. The implant functions as a dynamic spacer rather than a true joint replacement — it maintains joint space, provides stability, and allows a functional range of motion. The stems sit loosely within the medullary canals (no fixation), and a fibrous capsule (encapsulation) forms around the implant to provide additional stability.",
    indications: ["Rheumatoid arthritis with MCP joint destruction", "Post-traumatic MCP/PIP joint arthritis", "Osteoarthritis of small joints", "Swan neck or boutonniere deformity correction", "Failed previous joint surgery"],
    surgicalTechnique: "Through a dorsal approach to the MCP joint, the extensor mechanism is split or reflected. The proximal phalanx head and metacarpal head articular surfaces are resected to create space for the implant. The medullary canals of both the metacarpal and proximal phalanx are reamed with broaches. After trial fitting, the appropriately sized Swanson implant is inserted with the stems seated in the medullary canals. The capsule and extensor mechanism are carefully repaired, and early protected range of motion is initiated.",
    material: "Medical-grade Silicone Elastomer (Silastic) with optional titanium grommets to protect against bone erosion",
    sizes: "Sizes 0-7 (increasing stem diameter and hinge width). Specific sizes for MCP and PIP applications",
    image: "/products/cmf-plate.svg",
    steps: [
      { title: "Dorsal Approach to MCP Joint", description: "Make a transverse or longitudinal dorsal incision over the MCP joint. Incise the extensor hood longitudinally or reflect it radially. Open the joint capsule to expose the metacarpal head and proximal phalanx base." },
      { title: "Excise Proximal Phalanx Head", description: "Resect the proximal portion of the proximal phalanx base and the metacarpal head articular surface using an oscillating saw. Remove sufficient bone to accommodate the implant while maintaining soft tissue balance. Release any contracted collateral ligaments as needed." },
      { title: "Ream Medullary Canals", description: "Using the appropriately sized broaches, ream the medullary canals of both the metacarpal and the proximal phalanx. Start with smaller broaches and sequentially increase size. The canals should accept the implant stems without excessive force." },
      { title: "Insert Swanson Implant", description: "After trial sizing to confirm appropriate fit and range of motion, insert the definitive Swanson silicone implant. Seat the stems into the medullary canals. The hinge should sit at the joint level. If using titanium grommets, place them over the stems before insertion." },
      { title: "Close Capsule and Begin Early ROM", description: "Repair the joint capsule meticulously to provide stability. Rebalance the extensor mechanism and repair the extensor hood. Close skin. Apply a dynamic extension splint. Begin early protected range of motion exercises at 3-5 days to promote encapsulation and prevent stiffness." },
    ],
  },
  "artificial-disc-implant": {
    description: "The artificial disc (total disc replacement) is a motion-preserving implant designed to replace a degenerative intervertebral disc while maintaining physiological spinal motion at the treated segment. Unlike fusion, which eliminates motion, the artificial disc aims to replicate the biomechanics of the natural disc — allowing flexion, extension, lateral bending, and rotation. This may reduce the risk of adjacent segment degeneration that is commonly seen after spinal fusion. Available for both cervical and lumbar applications.",
    indications: ["Symptomatic single or two-level degenerative disc disease", "Cervical disc herniation with radiculopathy (after failed conservative treatment)", "Lumbar disc degeneration with predominant axial pain", "Patients who wish to preserve motion at the treated level"],
    surgicalTechnique: "Through an anterior approach (Smith-Robinson for cervical, retroperitoneal for lumbar), a complete discectomy is performed with careful endplate preparation. The bony endplates must be preserved (unlike fusion) to prevent subsidence. After precise trialing under fluoroscopy, the artificial disc is inserted. Proper positioning is critical — the device must be centered in both the AP and lateral planes and seated on the posterior third of the endplates for optimal biomechanics.",
    material: "Metal-on-polyethylene (CoCr on UHMWPE) or metal-on-metal (CoCr) articulation. Titanium or CoCr endplates with plasma-sprayed or hydroxyapatite-coated surfaces for bony ingrowth",
    sizes: "Cervical: heights 5-8mm, footprints 12x14mm to 16x18mm. Lumbar: heights 8-14mm, footprints 25x32mm to 32x40mm. Multiple lordotic angle options",
    image: "/products/spine-implant.svg",
    steps: [
      { title: "Anterior Approach", description: "For cervical disc replacement, use a standard Smith-Robinson anterior approach through a transverse skin incision. For lumbar disc replacement, use an anterior retroperitoneal approach with a vascular surgeon. Expose the anterior aspect of the disc and vertebral bodies." },
      { title: "Complete Discectomy", description: "Perform a thorough discectomy, removing the nucleus pulposus, annulus fibrosus, and cartilaginous endplates. Decompress any neural elements (uncovertebral osteophytes cervically, posterior annulus/PLL as needed). Ensure complete neural decompression." },
      { title: "Endplate Preparation (Preserve Endplate Cortex)", description: "Carefully prepare the vertebral endplates using curettes to remove the cartilaginous endplate while meticulously preserving the bony endplate cortex. Unlike fusion, the bony endplate must remain intact to support the artificial disc and prevent subsidence." },
      { title: "Trial Sizing", description: "Insert trial implants of varying sizes and heights under fluoroscopic guidance. The trial should restore normal disc height and lordosis without over-distraction. Confirm the footprint covers the endplate maximally for load distribution. Check range of motion with the trial in place." },
      { title: "Insert Artificial Disc Under Fluoroscopy", description: "Under continuous AP and lateral fluoroscopy, insert the definitive artificial disc implant using the manufacturer's instrumentation. Position the device in the center of the disc space (both AP and lateral planes), seated on the posterior third of the endplates." },
      { title: "Verify ROM and Positioning", description: "Confirm final implant position on AP and lateral fluoroscopy. Check that the device is centered and at the appropriate depth. Assess range of motion (flexion/extension, lateral bending) to confirm the device articulates properly. Close the anterior wound in layers." },
    ],
  },
  // === WIRES / PINS / STAPLES ===
  "orthopedic-staples": {
    description: "Orthopedic staples are U-shaped metallic implants used primarily for epiphysiodesis (growth modulation) in pediatric patients and small fragment fixation in adults. Blount staples span the physis to temporarily or permanently arrest growth on one side of a bone, correcting angular deformities. They are also used to fix small bone fragments, osteotomies, and arthrodeses where compression across a flat surface is needed.",
    indications: ["Epiphysiodesis for angular deformity correction (genu valgum/varum)", "Growth modulation in pediatric limb length discrepancy", "Small fragment fixation in hand and foot surgery", "Arthrodesis augmentation", "Osteotomy fixation"],
    surgicalTechnique: "Under fluoroscopic guidance, identify the physis or fixation site. A small incision is made and the staple is positioned to span the growth plate or fracture/osteotomy. The staple is impacted flush with the bone surface using a mallet and staple impactor. Correct placement is verified with intraoperative imaging.",
    material: "316L Stainless Steel",
    sizes: "Various widths and leg lengths; common sizes 10-25mm width, 15-30mm leg length",
    image: "/img/gpc/Blount-staples-SSI1110-gpcmedical.jpg",
    steps: [
      { title: "Identify Insertion Site", description: "Under fluoroscopic guidance, identify the insertion site over the physis or target bone. Mark the skin incision centered over the area where the staple will span the growth plate or fixation site." },
      { title: "Position Staple", description: "Make a small incision and dissect down to bone. Using the staple holder, position the staple so that its legs will span the growth plate symmetrically on both the epiphyseal and metaphyseal sides." },
      { title: "Impact with Mallet", description: "Using a staple impactor and mallet, drive the staple legs into the bone until the bridge of the staple sits flush with the cortical surface. Apply controlled, even blows to avoid bending the staple." },
      { title: "Verify Spanning Growth Plate", description: "Obtain anteroposterior and lateral fluoroscopic images to confirm the staple legs span the physis appropriately and are seated flush. Ensure no intra-articular penetration. Close the wound in layers." },
    ],
  },
  "rush-pins": {
    description: "Rush pins are smooth, pre-bent, clover-leaf tipped intramedullary pins designed for fracture stabilization. Their pre-bent configuration provides a three-point fixation within the medullary canal, resisting rotational and angular displacement. They are particularly useful in pediatric fractures and adult metaphyseal fractures where flexible intramedullary fixation is preferred over rigid nailing.",
    indications: ["Pediatric long bone fractures", "Supracondylar humeral fractures in children", "Metacarpal and metatarsal fractures", "Ulnar and radial shaft fractures", "Clavicle fractures"],
    surgicalTechnique: "A small entry point incision is made near the metaphysis. The pre-bent pin is introduced into the medullary canal and advanced across the fracture site using a T-handle or mallet. The natural curvature of the pin creates three-point contact within the canal for stable fixation. The hooked end is seated at the entry cortex to prevent migration.",
    material: "316L Stainless Steel",
    sizes: "2.0mm to 4.5mm diameter, various lengths from 150-350mm",
    image: "/img/gpc-sm/Knowles-Pin-PS920-sm-gpcmedical.jpg",
    steps: [
      { title: "Establish Entry Point", description: "Make a small incision near the metaphysis of the fractured bone. Use an awl or drill to create an entry point in the cortex at the appropriate location, angled to allow smooth pin passage into the medullary canal." },
      { title: "Advance Pin Across Fracture", description: "Insert the pre-bent Rush pin into the medullary canal with the concavity facing the appropriate direction. Using gentle rotational movements and a T-handle, advance the pin across the fracture site into the opposite fragment." },
      { title: "Seat Hook End", description: "Continue advancing the pin until the hooked end is seated flush against the entry cortex. The hook prevents proximal migration and provides rotational control. Ensure the pin tip is embedded in the opposite metaphyseal cancellous bone." },
      { title: "Verify Position", description: "Obtain fluoroscopic images in two planes to confirm the pin crosses the fracture site with adequate purchase in both fragments. Check that the three-point fixation within the canal provides angular stability. Close the wound." },
    ],
  },
  "guide-wire": {
    description: "Guide wires are thin, threaded or smooth wires used to establish a precise trajectory for cannulated instruments, screws, and implants. They serve as a railroad for accurate placement of cannulated drills, taps, and screws. Threaded guide wires resist advancement during over-drilling, while smooth wires allow easy repositioning. They are essential in percutaneous and minimally invasive orthopedic procedures.",
    indications: ["Cannulated screw insertion (hip, ankle, foot)", "Hip fracture fixation (femoral neck, intertrochanteric)", "Percutaneous pinning of fractures", "ACL reconstruction tunnel placement", "Spinal pedicle screw placement"],
    surgicalTechnique: "Under fluoroscopic guidance, the guide wire is inserted percutaneously or through a small incision along the planned trajectory for the definitive implant. Position is verified in at least two fluoroscopic planes before proceeding with cannulated instruments over the wire. Threaded wires are preferred when over-drilling to prevent advancement.",
    material: "316L Stainless Steel, smooth or partially/fully threaded",
    sizes: "1.0mm to 3.2mm diameter, lengths 150-400mm. Threaded and smooth tip variants",
    image: "/img/gpc/Threaded-Guide-Wire-PS918-gpcmedical.jpg",
    steps: [
      { title: "Identify Target Trajectory", description: "Plan the desired trajectory for the definitive implant using preoperative imaging. Position the limb appropriately and select the correct diameter guide wire (threaded for over-drilling resistance, smooth for easy repositioning)." },
      { title: "Insert Guide Wire Under Fluoroscopy", description: "Under continuous or intermittent fluoroscopic guidance, insert the guide wire through the skin or incision along the planned trajectory. Use a power drill for controlled advancement. Maintain constant awareness of wire depth to avoid plunging." },
      { title: "Verify Position in Two Planes", description: "Obtain anteroposterior and lateral fluoroscopic images to confirm the guide wire is in the correct position. Verify trajectory, depth, and relationship to articular surfaces and cortical boundaries. Reposition if necessary." },
      { title: "Proceed with Cannulated Procedure", description: "Once satisfactory position is confirmed, advance the cannulated drill, tap, or screw over the guide wire. Maintain hold on the wire at all times to prevent advancement or withdrawal. Remove the wire after definitive implant placement." },
    ],
  },
  "ilizarov-wire": {
    description: "Ilizarov wires are thin (1.5mm or 1.8mm) stainless steel wires used in Ilizarov circular external fixation frames. They are passed transosseously and tensioned on ring fixators to provide stable fixation for complex fractures, limb lengthening, and deformity correction. Olive wires have a small bead (olive) that provides additional purchase against bone, and bayonet-point tips facilitate smooth bone penetration with minimal thermal necrosis.",
    indications: ["Complex tibial fractures", "Limb lengthening (distraction osteogenesis)", "Angular and rotational deformity correction", "Bone transport for segmental defects", "Non-union treatment", "Periarticular fractures"],
    surgicalTechnique: "Wires are passed through the bone perpendicular or oblique to the mechanical axis using a power drill at low speed. Each wire is attached to a ring of the circular fixator and tensioned to 110-130kg using a wire tensioner. Two to three wires per ring, placed at divergent angles (minimum 60 degrees apart), provide stable multiplanar fixation. Olive wires are placed with the olive against the bone surface that requires buttressing.",
    material: "316L Stainless Steel, 1.5mm or 1.8mm diameter",
    sizes: "1.5mm and 1.8mm diameter; lengths 200-400mm. Olive and plain variants; bayonet or trocar point",
    image: "/img/gpc-sm/Olive-Wire-Bayonet-Point-IRF1296A-sm-gpcmedical.jpg",
    steps: [
      { title: "Plan Wire Trajectory", description: "Using anatomical knowledge and reference texts (e.g., Catagni safe zones), plan the wire trajectory to avoid neurovascular structures. Mark entry and exit points on the skin. Position the ring at the correct level on the limb segment." },
      { title: "Drill Through Bone", description: "Using a low-speed power drill, pass the wire through the soft tissues and bone along the planned trajectory. Use a bayonet-point wire for smooth cortical penetration. Drill at low speed to minimize thermal necrosis. Protect soft tissues during exit." },
      { title: "Attach to Ring", description: "Secure one end of the wire to the ring fixator using a wire fixation bolt. For olive wires, ensure the olive is positioned against the bone surface requiring buttressing or compression. Pass the other end through the opposite side of the ring." },
      { title: "Tension to 110-130kg", description: "Using a calibrated wire tensioner attached to the ring, tension the wire to 110-130kg (or per surgeon preference). Lock the wire fixation bolt on the tensioned side. Verify wire tension is maintained. Repeat for additional wires at divergent angles (minimum 60 degrees apart)." },
    ],
  },
  "bone-pins": {
    description: "Bone pins are threaded or smooth metallic pins used for external fixation, skeletal traction, and temporary fracture stabilization. Threaded pins (e.g., Schanz screws, Steinmann pins with threaded tips) provide secure bone purchase for external fixator frames. Smooth pins (e.g., Steinmann pins, Austin Moore pins) are used for skeletal traction and temporary fixation. Self-drilling and self-tapping designs reduce surgical time.",
    indications: ["External fixation of open fractures", "Skeletal traction (calcaneal, tibial, femoral)", "Temporary fracture stabilization (damage control orthopedics)", "Pelvic external fixation", "Distraction and reduction aids"],
    surgicalTechnique: "A stab incision is made at the planned pin site. For threaded pins, pre-drilling with a smaller drill bit may be performed to reduce thermal necrosis, followed by hand or power insertion of the pin. For smooth traction pins, the pin is driven through both cortices. All pins are connected to the appropriate traction bow or external fixator frame.",
    material: "316L Stainless Steel, partially or fully threaded",
    sizes: "2.0mm to 6.0mm diameter; lengths 100-300mm. Self-drilling and pre-drill variants",
    image: "/img/gpc-sm/Austin-Moore-Pin-with-Two-Nuts-PS919-sm-gpcmedical.jpg",
    steps: [
      { title: "Stab Incision", description: "Make a small stab incision at the planned pin insertion site. Dissect bluntly through soft tissues down to bone to protect neurovascular structures. Use anatomical safe zones for pin placement." },
      { title: "Pre-drill if Needed", description: "For dense cortical bone or larger pins, pre-drill the near cortex with a drill bit 1mm smaller than the pin diameter. This reduces thermal necrosis and facilitates accurate pin placement. For self-drilling pins, this step may be omitted." },
      { title: "Insert Pin", description: "Insert the bone pin through the near cortex, across the medullary canal, and into (or through) the far cortex using a T-handle or power drill at low speed. For traction pins, ensure the pin exits through the opposite stab incision. Avoid eccentric or wobbling insertion." },
      { title: "Connect to Traction Bow or Fixator", description: "For traction pins, apply a traction bow and connect to the appropriate weight. For external fixation pins, connect to the fixator clamps and bars. Verify pin position with fluoroscopy. Dress pin sites with antiseptic-soaked gauze." },
    ],
  },
  // === HIP REPLACEMENT ===
  "femoral-stem": {
    description: "The femoral stem is the intramedullary component of a total hip arthroplasty (THA) system. It is inserted into the prepared femoral canal and serves as the foundation for the modular femoral head. Cemented stems use polymethylmethacrylate (PMMA) bone cement for fixation, while uncemented (press-fit) stems rely on porous or hydroxyapatite-coated surfaces for biological fixation through bone ongrowth/ingrowth. Tapered wedge designs are the most commonly used uncemented stems.",
    indications: ["Primary total hip arthroplasty for osteoarthritis", "Hip arthroplasty for femoral neck fracture", "Avascular necrosis of the femoral head", "Rheumatoid arthritis of the hip", "Revision hip arthroplasty"],
    surgicalTechnique: "After femoral neck osteotomy at the planned level, the femoral canal is opened with a box osteotome and sequentially broached with progressively larger broaches until cortical contact is achieved. A trial stem and trial head are inserted to assess leg length, offset, and stability. The final stem is then inserted with cement (retrograde technique) or press-fit into the prepared canal.",
    material: "Cobalt-Chrome (CoCr) or Titanium alloy (Ti-6Al-4V). Cemented: polished surface. Uncemented: porous/HA-coated proximal surface",
    sizes: "Standard offset and high offset variants. Sizes 1-18 (manufacturer dependent). Lengths 120-200mm",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Femoral Neck Osteotomy", description: "Using a pre-planned osteotomy level (based on templating), perform the femoral neck cut with an oscillating saw. Remove the femoral head. Clear the femoral canal of cancellous bone debris with a curette." },
      { title: "Sequential Broaching", description: "Open the femoral canal with a box osteotome. Insert progressively larger broaches until cortical chatter is felt (indicating endosteal contact). Ensure correct version by aligning the broach handle with the appropriate anatomical landmark." },
      { title: "Trial Stem and Head", description: "Insert the trial stem and attach the trial femoral head of the selected size and neck length. Reduce the hip and assess leg length (using a sterile ruler or Shuck test), offset (abductor tension), and stability (range of motion without impingement or dislocation)." },
      { title: "Final Stem Insertion", description: "For cemented stems: retrograde cement insertion with a cement gun after canal plugging, insert stem and hold in position until cement polymerizes. For uncemented stems: impact the final stem into the broached canal to achieve press-fit. Verify orientation and seating." },
      { title: "Verify Leg Length and Stability", description: "After final stem insertion, re-check leg length equality and hip stability through a full range of motion. Ensure no impingement in flexion/internal rotation (posterior dislocation) or extension/external rotation (anterior dislocation)." },
    ],
  },
  "acetabular-cup": {
    description: "The acetabular cup is the socket component of a total hip arthroplasty system. It replaces the arthritic native acetabulum and articulates with the femoral head. Modern acetabular cups are typically uncemented press-fit shells made of titanium with a porous surface for bone ingrowth, combined with a polyethylene or ceramic liner. Cemented all-polyethylene cups are used in low-demand elderly patients. Correct cup positioning at 40 degrees abduction and 15 degrees anteversion is critical for hip stability.",
    indications: ["Primary total hip arthroplasty", "Acetabular fractures with articular damage", "Revision hip arthroplasty", "Protrusio acetabuli", "Developmental dysplasia of the hip (DDH)"],
    surgicalTechnique: "The acetabulum is exposed and labrum excised. Sequential hemispherical reamers are used to prepare the acetabular bed until punctate bleeding is seen from subchondral bone. The press-fit cup is impacted 1-2mm larger than the last reamer for interference fit. Supplementary screws may be used. The polyethylene or ceramic liner is then snapped into the metal shell.",
    material: "Shell: Titanium alloy with porous/HA-coated surface. Liner: Ultra-high molecular weight polyethylene (UHMWPE), highly cross-linked polyethylene, or ceramic (alumina/delta ceramic)",
    sizes: "44-66mm outer diameter (in 2mm increments). Liner options: neutral, lipped (elevated rim), constrained",
    image: "/img/gpc/Acetabular-Cup-THR38-gpcmedical.jpg",
    steps: [
      { title: "Acetabular Exposure", description: "Expose the acetabulum through the chosen surgical approach. Excise the labrum and remove osteophytes to identify the true acetabular floor (cotyloid fossa). Place retractors for adequate visualization." },
      { title: "Sequential Reaming", description: "Begin with a small hemispherical reamer and progressively increase size until the subchondral bone is reached (punctate bleeding visible). Ream to the size 1-2mm smaller than the planned cup size for press-fit fixation. Maintain correct inclination and anteversion during reaming." },
      { title: "Trial Cup Assessment", description: "Insert the trial cup at the planned orientation (40 degrees abduction, 15 degrees anteversion). Assess coverage, stability of fit, and seating. Verify adequate bone contact around the rim. Adjust reaming if needed." },
      { title: "Cup Impaction", description: "Impact the definitive acetabular cup using a cup impactor and mallet. Orient at 40 degrees abduction and 15 degrees anteversion using anatomical landmarks or alignment guides. Ensure circumferential rim contact and stable press-fit. Place supplementary screws in the posterosuperior quadrant if needed." },
      { title: "Liner Insertion", description: "Clean the interior of the metal shell. Select the appropriate liner (neutral or lipped). Align the liner locking mechanism and impact securely into the shell until an audible click confirms full seating. Verify the liner is flush and fully engaged." },
    ],
  },
  "femoral-head-implant": {
    description: "The modular femoral head is a spherical component that articulates with the acetabular liner in a total hip arthroplasty. It attaches to the femoral stem via a morse taper junction. Modularity allows intraoperative adjustment of head size, neck length (offset), and bearing surface material. Larger head sizes (32-36mm) improve range of motion and reduce dislocation risk. Ceramic heads offer superior wear properties and scratch resistance compared to metallic heads.",
    indications: ["Total hip arthroplasty (primary and revision)", "Bipolar hemiarthroplasty", "Femoral head avascular necrosis", "Femoral neck fracture (displaced)"],
    surgicalTechnique: "After trial reduction to determine the optimal head size and neck length for leg length equality and hip stability, the final femoral head is selected. The morse taper of the stem is cleaned and dried thoroughly. The head is placed on the taper and impacted with a firm axial blow to achieve a secure taper lock.",
    material: "Cobalt-Chrome alloy (CoCr) or Ceramic (Alumina, Zirconia, Delta ceramic). Head sizes: 22mm, 28mm, 32mm, 36mm, 40mm",
    sizes: "22-40mm diameter. Neck lengths: -4mm, standard, +4mm, +8mm (short, medium, long, extra-long)",
    image: "/img/gpc/Femoral-Neck-Ball-THR37-gpcmedical.jpg",
    steps: [
      { title: "Select Head Size for Offset and Leg Length", description: "Based on trial reduction findings, select the appropriate femoral head diameter (typically 32 or 36mm) and neck length (short/medium/long) to achieve optimal leg length equality, offset restoration, and hip stability." },
      { title: "Clean Morse Taper", description: "Thoroughly clean and dry the morse taper of the femoral stem. Remove all blood, fluid, and debris from the taper surface. Contamination of the taper can lead to fretting corrosion and trunnionosis. Use a clean dry swab." },
      { title: "Impact Head onto Stem Taper", description: "Place the femoral head onto the morse taper with the correct orientation. Apply a single firm axial impaction blow using a head impactor. The morse taper creates a cold-weld that secures the head. Avoid repeated impacts which can damage the taper." },
      { title: "Trial Reduction and Final Impaction", description: "Reduce the hip and assess stability, leg length, and range of motion. If satisfactory, the head is securely locked. If adjustment is needed, use a head removal device, clean the taper, and repeat with a different head size or neck length." },
    ],
  },
  "hip-resurfacing-implant": {
    description: "Hip resurfacing is a bone-conserving alternative to total hip arthroplasty that preserves the majority of the proximal femoral bone stock. A metal cap is cemented onto the prepared femoral head, articulating with a press-fit acetabular component in a metal-on-metal bearing. The large head diameter (typically matching the native femoral head) provides excellent stability and range of motion with very low dislocation rates. It is primarily indicated in young, active male patients with good bone quality.",
    indications: ["Osteoarthritis in young active patients (typically males under 65)", "Avascular necrosis with preserved femoral head sphericity", "Post-traumatic arthritis in young patients", "Patients desiring high activity levels post-operatively"],
    surgicalTechnique: "Through a posterior approach, the femoral head is dislocated and prepared using a guide pin placed in the center of the femoral neck. Sequential cylindrical reamers shape the femoral head to accept the metal cap. The acetabulum is reamed and a press-fit metal cup is impacted. The femoral cap is cemented onto the prepared femoral head. Careful attention to femoral neck notching and component positioning is critical.",
    material: "Cobalt-Chrome alloy (CoCr) metal-on-metal articulation. Femoral cap: CoCr with PMMA cement fixation. Acetabular cup: CoCr press-fit with porous coating",
    sizes: "Femoral cap: 38-58mm. Acetabular cup: 44-64mm. Matched pairs for optimal bearing clearance",
    image: "/img/gpc/Modular-Bipolar-cup-HTC39-gpcmedical.jpg",
    steps: [
      { title: "Posterior Approach and Dislocation", description: "Perform a posterior approach to the hip. Release the short external rotators and capsule. Dislocate the femoral head posteriorly. Inspect the femoral head for cysts or defects that may contraindicate resurfacing." },
      { title: "Femoral Head Preparation", description: "Place a guide pin in the center of the femoral neck along its axis. Using the centering guide, sequentially ream the femoral head with cylindrical reamers to create a uniform peg hole and convex articular surface. Avoid notching the femoral neck." },
      { title: "Sequential Reaming and Cement Femoral Cap", description: "After final femoral head preparation, perform a trial reduction with trial components. Prepare PMMA bone cement and apply to the undersurface of the femoral cap. Impact the cemented cap onto the femoral head. Remove excess cement. Hold in position until cement cures." },
      { title: "Acetabular Cup Press-fit", description: "Ream the acetabulum sequentially. Impact the press-fit metal acetabular cup at the correct inclination (40 degrees) and anteversion (15 degrees). Ensure stable initial fixation with circumferential rim contact." },
      { title: "Reduction and Assessment", description: "Reduce the resurfaced hip. Assess range of motion, stability, and impingement-free motion. Repair the posterior capsule and short external rotators for enhanced stability. Close in layers." },
    ],
  },
  // === KNEE REPLACEMENT ===
  "femoral-component-knee": {
    description: "The femoral component is the metal portion of a total knee arthroplasty (TKA) that resurfaces the distal femoral condyles. Made of cobalt-chrome alloy, it features an anterior flange that resurfaces the trochlear groove and posterior condyles that restore the femoral articular surface. The component is designed to replicate normal knee kinematics with appropriate femoral rollback. Cruciate-retaining (CR) and posterior-stabilized (PS) designs accommodate different surgical philosophies regarding the posterior cruciate ligament.",
    indications: ["Primary total knee arthroplasty for osteoarthritis", "Rheumatoid arthritis of the knee", "Post-traumatic knee arthritis", "Revision total knee arthroplasty"],
    surgicalTechnique: "After a midline incision and medial parapatellar approach, the distal femur is resected perpendicular to the mechanical axis using an intramedullary or extramedullary guide. Anterior, posterior, and chamfer cuts are made using a sizing guide and cutting blocks. A trial component is placed to assess fit, alignment, and ligament balance before the final component is cemented.",
    material: "Cobalt-Chrome alloy (CoCrMo)",
    sizes: "Sizes 1-8 (manufacturer dependent). Standard and narrow/gender-specific options. CR and PS variants",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Distal Femoral Resection", description: "Insert the intramedullary alignment guide into the femoral canal. Set the valgus correction angle (typically 5-7 degrees). Attach the distal femoral cutting block and make the distal femoral cut perpendicular to the mechanical axis, removing approximately 9mm of bone (to be replaced by the implant)." },
      { title: "Sizing and Rotation", description: "Place the anteroposterior sizing guide on the resected distal femur. Size the femoral component to avoid overhang or underhang. Set rotational alignment using Whiteside's line, transepicondylar axis, or posterior condylar reference (3 degrees external rotation)." },
      { title: "Anterior, Posterior, and Chamfer Cuts", description: "Attach the appropriately sized 4-in-1 cutting block to the distal femur. Make the anterior cut, posterior cut, and anterior and posterior chamfer cuts. Verify that the anterior cut does not notch the anterior femoral cortex." },
      { title: "Trial Component", description: "Place the trial femoral component on the prepared distal femur. Assess mediolateral fit, rotational alignment, and patellofemoral tracking. Check for anterior femoral cortex notching. Adjust sizing or rotation if needed." },
      { title: "Final Cemented Implantation", description: "Mix PMMA bone cement and apply to the prepared bone surfaces and undersurface of the femoral component. Impact the component onto the distal femur. Remove excess cement before it hardens. Hold in position until cement polymerizes fully." },
    ],
  },
  "tibial-base-plate": {
    description: "The tibial base plate (tibial tray) is the metallic platform component of a total knee arthroplasty that sits on the resected proximal tibia. Made of titanium alloy for biocompatibility and corrosion resistance, it features a polished superior surface for the polyethylene insert to articulate on, and a keel or stem that provides rotational stability and load distribution in the proximal tibia. The modular design accepts various thicknesses of polyethylene inserts for gap balancing.",
    indications: ["Primary total knee arthroplasty", "Revision total knee arthroplasty (with stem extensions)", "Unicompartmental knee arthroplasty (partial designs)"],
    surgicalTechnique: "The proximal tibia is resected perpendicular to the tibial mechanical axis using an extramedullary alignment guide, typically removing 8-10mm of bone from the less affected compartment. The tibial keel hole is prepared with a punch or drill. A trial baseplate is placed to assess coverage and rotational alignment (aligned with the medial third of the tibial tubercle). The final baseplate is cemented onto the resected tibial surface.",
    material: "Titanium alloy (Ti-6Al-4V) with polished superior surface",
    sizes: "Sizes 1-8 (manufacturer dependent). Standard and stemmed options for revision. Symmetric and asymmetric designs",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Proximal Tibial Cut", description: "Attach the extramedullary tibial alignment guide, aligning it with the center of the ankle distally and the tibial plateau proximally. Set the posterior slope (0-7 degrees depending on implant design). Make the proximal tibial resection perpendicular to the mechanical axis, removing approximately 8-10mm from the less affected side." },
      { title: "Sizing", description: "Place tibial sizing templates on the resected tibial surface. Select the size that provides maximum cortical rim coverage without overhang (which can cause soft tissue irritation). The baseplate should cover the cortical rim, especially posterolaterally." },
      { title: "Punch Tibial Keel Hole", description: "Using the appropriately sized tibial punch or keel cutter, create the central keel hole in the resected tibial surface. Ensure the punch is aligned with the medial third of the tibial tubercle for correct rotational alignment." },
      { title: "Trial", description: "Insert the trial tibial baseplate and trial polyethylene insert. Assess coverage, rotational alignment, and stability. Check ligament balance in both flexion and extension. Make adjustments to bone cuts or soft tissue releases if needed." },
      { title: "Cement Final Baseplate", description: "Mix PMMA bone cement and apply to the undersurface of the tibial baseplate and the resected tibial surface. Impact the final baseplate into position with the keel fully seated. Remove all excess cement meticulously, especially posteriorly. Hold under pressure until cement cures." },
    ],
  },
  "tibial-insert-polyethylene": {
    description: "The tibial polyethylene insert is the bearing surface component of a total knee arthroplasty that snaps into the tibial base plate. Made of ultra-high molecular weight polyethylene (UHMWPE), typically highly cross-linked for improved wear resistance, it provides a low-friction articulating surface for the femoral component. Insert thickness is selected intraoperatively to achieve balanced flexion and extension gaps. Cruciate-retaining (CR) inserts have a flat or dished surface, while posterior-stabilized (PS) inserts have a central post that substitutes for the PCL.",
    indications: ["Primary total knee arthroplasty", "Polyethylene exchange in revision TKA", "Bearing exchange for wear or instability"],
    surgicalTechnique: "After cementation of the tibial baseplate and femoral component, the appropriate thickness polyethylene insert is selected based on gap balancing. The insert is aligned with the locking mechanism of the tibial tray and snapped into place with firm downward pressure until fully seated. Full seating is verified visually and by attempting to displace the insert.",
    material: "Ultra-high molecular weight polyethylene (UHMWPE), typically highly cross-linked. Vitamin E-infused options available",
    sizes: "Thickness: 9mm to 24mm (in 2mm increments). CR and PS designs. Sizes match tibial baseplate",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Select Insert Thickness", description: "With trial components in place, assess the flexion and extension gaps using spacer blocks or manual tension. Select the polyethylene insert thickness that provides balanced gaps: the knee should be stable in extension with 1-2mm of laxity in flexion. Avoid overstuffing the joint." },
      { title: "Snap-Lock into Tibial Baseplate", description: "Align the locking mechanism of the polyethylene insert with the tibial baseplate. Orient the insert correctly (anterior/posterior markings). Apply firm downward pressure to engage the snap-lock mechanism. An audible click confirms engagement." },
      { title: "Verify Full Seating", description: "Visually inspect the insert-baseplate junction circumferentially to confirm the insert is fully seated and flush. Attempt to manually displace the insert to verify secure locking. Any gap or incomplete seating requires removal and reinsertion." },
      { title: "Check ROM and Stability", description: "Perform a full range of motion assessment. Check for stability in extension (varus/valgus stress), mid-flexion stability, and flexion gap balance. Verify patellar tracking without tilt or subluxation. Assess maximum flexion achievable. Adjust insert thickness if needed." },
    ],
  },
  "patellar-implant": {
    description: "The patellar implant (patellar button) is an all-polyethylene component used to resurface the articular surface of the patella during total knee arthroplasty. It features a dome-shaped articulating surface and typically three fixation pegs that are cemented into the patellar bone. Resurfacing the patella reduces anterior knee pain and improves patient satisfaction in TKA. The residual patellar bone thickness after resection must be at least 12-15mm to avoid patellar fracture.",
    indications: ["Total knee arthroplasty with patellar resurfacing", "Patellofemoral arthritis (isolated resurfacing)", "Revision patellar resurfacing"],
    surgicalTechnique: "The patella is everted or subluxed laterally. The articular surface is resected using a patellar cutting guide or freehand technique to create a flat bone surface. The residual bone thickness is measured (minimum 12mm). Peg holes are drilled in the resected surface. PMMA cement is applied and the patellar button is impacted flush with the bone surface. Tracking is assessed with the trial femoral and tibial components in place.",
    material: "All-polyethylene (UHMWPE), cemented fixation with 3 pegs",
    sizes: "26-41mm diameter (in 3mm increments). Dome or anatomic shapes",
    image: "/img/gpc/Femoral-Tapered-Stem-THR36-gpcmedical.jpg",
    steps: [
      { title: "Evert Patella", description: "Evert the patella laterally or sublux it to expose the articular surface. Remove peripheral osteophytes to restore native patellar size and shape. Assess the degree of articular cartilage damage." },
      { title: "Resect Articular Surface", description: "Using a patellar cutting guide or freehand saw technique, resect the articular surface of the patella to create a flat bone bed. Remove a thickness equal to the implant being inserted (typically 8-10mm) to restore native patellar thickness after implantation." },
      { title: "Measure Residual Thickness", description: "Using a caliper, measure the residual patellar bone thickness. This must be at least 12-15mm to avoid patellar fracture risk. If inadequate thickness remains, consider not resurfacing. Mark the peg hole positions centrally on the resected surface." },
      { title: "Drill Peg Holes and Cement", description: "Drill three peg holes in the resected patellar surface using the patellar drill guide. Clean and dry the bone surface. Apply PMMA bone cement to the implant undersurface and peg holes. Impact the patellar button flush with the bone surface. Remove excess cement. Hold until cement polymerizes. Verify patellar tracking (no-thumbs test)." },
    ],
  },
  // === SHOULDER / UPPER LIMB ===
  "radial-head-prosthesis": {
    description: "The radial head prosthesis is a modular metallic implant used to replace the radial head when it is fractured beyond reconstruction (Mason type III/IV). The radial head is a critical stabilizer of the elbow, providing valgus stability and longitudinal forearm stability (Essex-Lopresti lesion). Replacement maintains these biomechanical functions while allowing forearm rotation. Modular designs allow independent sizing of the stem and head components for optimal fit.",
    indications: ["Unreconstructable radial head fractures (Mason type III)", "Radial head fracture with associated elbow instability (terrible triad)", "Essex-Lopresti lesion with radial head fracture", "Failed radial head ORIF", "Chronic post-traumatic elbow instability"],
    surgicalTechnique: "Through a Kocher (lateral) approach to the elbow, the fractured radial head fragments are excised. The radial canal is sequentially reamed to accept the stem component. Trial stem and head components are inserted to assess tracking, stability, and radiocapitellar contact. The final implant is inserted (press-fit or cemented) and the lateral collateral ligament complex is repaired.",
    material: "Cobalt-Chrome (CoCr) or Titanium alloy. Modular stem and head. Smooth or porous-coated stem options",
    sizes: "Stem diameters: 6-12mm. Head diameters: 18-28mm. Head thickness: standard and tall options",
    image: "/products/shoulder-implant.svg",
    steps: [
      { title: "Kocher Approach to Elbow", description: "Make a lateral incision over the elbow. Develop the Kocher interval between anconeus and extensor carpi ulnaris. Incise the lateral collateral ligament complex and capsule to expose the radial head. Identify and protect the posterior interosseous nerve (PIN) by keeping the forearm pronated." },
      { title: "Excise Fractured Radial Head", description: "Carefully remove all fractured radial head fragments. Preserve them temporarily to reconstruct the native head size for comparison with trial implants. Clear the radial neck of soft tissue debris. Inspect for associated coronoid fractures and ligament injuries." },
      { title: "Ream Radial Canal", description: "Using the starting reamer, open the radial canal at the center of the radial neck. Sequentially ream the canal with progressively larger reamers until cortical contact is achieved. Maintain alignment with the radial shaft to avoid eccentric reaming." },
      { title: "Trial Stem and Head", description: "Insert the trial stem into the reamed canal. Attach the trial head of the appropriate diameter and thickness. Reduce the elbow and assess radiocapitellar tracking through full pronation-supination. Check valgus stability. The head should not overstuff the joint (avoid overlengthening)." },
      { title: "Final Implantation and Stability Check", description: "Insert the final stem (press-fit or cemented). Attach the definitive head component. Reduce the elbow and re-confirm tracking, stability, and smooth forearm rotation. Repair the lateral collateral ligament complex with suture anchors or transosseous sutures. Close in layers." },
    ],
  },
  "elbow-joint-prosthesis": {
    description: "Total elbow arthroplasty (TEA) replaces the ulnohumeral articulation with linked or unlinked prosthetic components. Linked (semi-constrained) designs have a hinge mechanism connecting the humeral and ulnar components, providing intrinsic stability even with deficient collateral ligaments. Unlinked designs rely on intact soft tissues for stability and offer more anatomical kinematics. TEA is primarily indicated for inflammatory arthritis and unreconstructable distal humerus fractures.",
    indications: ["Rheumatoid arthritis of the elbow", "Unreconstructable distal humerus fractures in elderly patients", "Post-traumatic elbow arthritis", "Elbow ankylosis", "Failed previous elbow surgery"],
    surgicalTechnique: "Through a posterior approach, the triceps is reflected (Bryan-Morrey or triceps-splitting technique). The distal humerus and proximal ulna are prepared with sequential rasps and reamers. Trial components are inserted and the linkage assembled to assess alignment, stability, and range of motion. Final components are cemented with antibiotic-loaded PMMA. The linkage is assembled and the triceps is repaired.",
    material: "Humeral component: Cobalt-Chrome or Titanium with PMMA cement fixation. Ulnar component: Cobalt-Chrome or Titanium with polyethylene bushing. Linked designs include a hinge pin mechanism",
    sizes: "Small, medium, and large. Standard and long stem options for revision. Various spool sizes for the hinge",
    image: "/products/shoulder-implant.svg",
    steps: [
      { title: "Posterior Approach and Triceps Reflection", description: "Make a posterior midline incision over the elbow. Identify and transpose the ulnar nerve anteriorly. Reflect the triceps using the Bryan-Morrey technique (subperiosteal elevation from medial to lateral) or triceps-splitting approach to expose the distal humerus and proximal ulna." },
      { title: "Humeral and Ulnar Canal Preparation", description: "Resect the distal humeral articular surface. Open the humeral and ulnar medullary canals with a starter awl. Sequentially rasp and ream both canals to accept the trial stems. Remove the trochlea to create space for the implant hinge mechanism." },
      { title: "Trial Components", description: "Insert humeral and ulnar trial stems. Assemble the linkage mechanism. Assess elbow flexion-extension arc (goal: 30-130 degrees), varus-valgus stability (linked designs provide intrinsic stability), and forearm rotation. Check that the hinge axis aligns with the anatomical flexion axis." },
      { title: "Cement Humeral and Ulnar Stems", description: "Prepare antibiotic-loaded PMMA bone cement. Use cement restrictors and retrograde cement delivery into both canals. Insert the humeral and ulnar components sequentially. Maintain correct rotation and alignment while cement polymerizes. Remove all excess cement." },
      { title: "Assemble Linkage and Closure", description: "Connect the humeral and ulnar components with the hinge pin and locking mechanism. Verify smooth articulation through full range of motion. Repair the triceps securely to the olecranon. Ensure the ulnar nerve is protected in its transposed position. Close in layers over a drain." },
    ],
  },
  "wrist-joint-prosthesis": {
    description: "Total wrist arthroplasty (TWA) replaces the radiocarpal joint with prosthetic components to relieve pain while preserving wrist motion. It consists of a distal radial component fixed into the radius and a carpal component fixed into the carpus or metacarpals. TWA is primarily indicated for rheumatoid arthritis and select cases of post-traumatic arthritis where wrist fusion would be functionally unacceptable. Preserving motion is particularly valuable for bilateral wrist disease to maintain activities of daily living.",
    indications: ["Rheumatoid arthritis of the wrist (primary indication)", "Post-traumatic wrist arthritis in low-demand patients", "Bilateral wrist arthritis (preserve motion in at least one wrist)", "Failed previous wrist surgery", "Kienbock disease with advanced arthritis"],
    surgicalTechnique: "Through a dorsal longitudinal approach, the extensor retinaculum is incised and the wrist capsule is opened. The distal radius articular surface is resected. The carpal bones are prepared to accept the carpal component (fixed into the capitate or third metacarpal). Trial components are inserted and wrist motion assessed. Final components are cemented or press-fit. Meticulous soft tissue balancing and capsular closure are critical for longevity.",
    material: "Radial component: Cobalt-Chrome or Titanium with PMMA cement fixation. Carpal component: Cobalt-Chrome or Titanium with polyethylene articulating surface. Various designs: ball-and-socket, ellipsoidal",
    sizes: "Small, medium, and large. Radial stem lengths and carpal peg sizes vary by manufacturer",
    image: "/products/shoulder-implant.svg",
    steps: [
      { title: "Dorsal Approach", description: "Make a dorsal longitudinal incision over the wrist. Incise the extensor retinaculum between the third and fourth dorsal compartments. Retract the extensor tendons. Open the wrist capsule with a capsular flap to preserve tissue for later repair." },
      { title: "Radius Preparation", description: "Resect the distal radial articular surface at the appropriate level using an oscillating saw and alignment guide. Open the radial medullary canal and sequentially ream or broach to accept the radial component stem. Ensure correct alignment with the radial shaft axis." },
      { title: "Carpal Component Preparation", description: "Prepare the carpal bones (capitate and adjacent carpals) to accept the carpal component. This may involve carpal bone resection, reaming, or creation of a fixation surface depending on the implant design. For designs fixed into the third metacarpal, prepare the metacarpal canal." },
      { title: "Trial Components and Cementation", description: "Insert trial radial and carpal components. Assess wrist flexion-extension, radial-ulnar deviation, and stability. Confirm appropriate soft tissue tension. Prepare PMMA bone cement and fix the definitive radial and carpal components. Remove excess cement. Hold until polymerization." },
      { title: "Closure", description: "Repair the dorsal capsule meticulously over the implants. Replace the extensor tendons in their anatomical compartments. Repair the extensor retinaculum. Close the skin. Apply a well-padded wrist splint in neutral position. Begin gentle motion at 2-4 weeks postoperatively." },
    ],
  },
};

// Build products for a specific city
export function getProductsForCity(city: CityId): Product[] {
  return Object.entries(productData).flatMap(
    ([categoryId, names]) =>
      names.map((name, i) => {
        const id = slug(name);
        const detail = productDetails[id];
        return {
          id,
          name,
          categoryId,
          image: detail?.image || getProductImage(name, categoryId),
          description: detail?.description || `High-quality ${name.toLowerCase()} manufactured from surgical-grade stainless steel or titanium alloy. Designed for optimal biomechanical performance and biocompatibility. Available in multiple sizes and configurations.`,
          detail,
          brands: assignBrands(categoryId, i, city),
        };
      })
  );
}

// Default products (used for static generation)
export const products: Product[] = getProductsForCity("pondicherry");

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function getCategoryProducts(categoryId: string, city: CityId = "pondicherry") {
  return getProductsForCity(city).filter((p) => p.categoryId === categoryId);
}

export function getProduct(id: string, city: CityId = "pondicherry") {
  return getProductsForCity(city).find((p) => p.id === id);
}

export function getAllProducts(city: CityId = "pondicherry") {
  return getProductsForCity(city);
}

export function searchProducts(query: string, city: CityId = "pondicherry") {
  const q = query.toLowerCase();
  return getProductsForCity(city).filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryId.includes(q) ||
      p.brands.some((b) => b.name.toLowerCase().includes(q))
  );
}

// ── Vendor lookup ──────────────────────────────────────────────

export function getVendorBySlug(vendorSlug: string, city: CityId = "pondicherry") {
  const vendors = vendorsByCity[city];
  return vendors.find((v) => slug(v.name) === vendorSlug);
}

export function getVendorProducts(vendorName: string, city: CityId = "pondicherry") {
  const allProducts = getProductsForCity(city);
  return allProducts.filter((p) =>
    p.brands.some((b) => b.vendors.some((v) => v.name === vendorName))
  );
}

export function getAllVendorSlugs(): string[] {
  const allSlugs = new Set<string>();
  for (const city of supportedCities) {
    for (const vendor of vendorsByCity[city.id]) {
      allSlugs.add(slug(vendor.name));
    }
  }
  return Array.from(allSlugs);
}

// ── Brand page helpers ──────────────────────────────────────────

export interface BrandDetail {
  name: string;
  rating: number;
  reviews: number;
  tier: string;
  categories: string[];
  technicianSupport?: { available: boolean; type: string; details: string };
}

export function getBrandBySlug(brandSlug: string): BrandDetail | undefined {
  const brand = brandPool.find((b) => slug(b.name) === brandSlug);
  if (!brand) return undefined;
  return {
    name: brand.name,
    rating: brand.rating,
    reviews: brand.reviews,
    tier: brand.tier,
    categories: brand.categories,
    ...(brand.technicianSupport ? { technicianSupport: brand.technicianSupport } : {}),
  };
}

export function getBrandProducts(brandName: string, city: CityId = "pondicherry") {
  const allProducts = getProductsForCity(city);
  return allProducts.filter((p) =>
    p.brands.some((b) => b.name === brandName)
  );
}

export function getAllBrandSlugs(): string[] {
  return brandPool.map((b) => slug(b.name));
}

export function getAllBrands(): BrandDetail[] {
  return brandPool.map((b) => ({
    name: b.name,
    rating: b.rating,
    reviews: b.reviews,
    tier: b.tier,
    categories: b.categories,
    ...(b.technicianSupport ? { technicianSupport: b.technicianSupport } : {}),
  }));
}
