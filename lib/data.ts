export interface Vendor {
  name: string;
  phone: string;
  url: string; // Google Maps link
}

export interface BrandEntry {
  name: string;
  rating: number;
  reviews: number;
  vendors: Vendor[];
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
    { name: "Dynamed Equipments Pvt. Ltd.", phone: "044-2650 2264", url: "https://www.google.com/maps/search/Dynamed+Equipments+Chennai" },
    { name: "Jayon Implants Pvt. Ltd.", phone: "080457 29507", url: "https://www.google.com/maps/search/Jayon+Implants+Chennai" },
    { name: "Tetramed Surgicals", phone: "080438 68802", url: "https://www.google.com/maps/search/Tetramed+Surgicals+Chennai" },
    { name: "V. S. Surgicals Co.", phone: "080410 14324", url: "https://www.google.com/maps/search/VS+Surgicals+Chennai" },
    { name: "Medifield Equipments Corp", phone: "080444 64610", url: "https://www.google.com/maps/search/Medifield+Equipments+Chennai" },
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
}

// Known brand → vendor pairings (brand name → vendor name)
// These ensure specific dealers always appear for their known brands
const knownBrandVendors: Record<string, string[]> = {
  "Hardik International": ["Suryaa Medicals"],
};

const brandPool: BrandInfo[] = [
  // ── International / Multinational brands (2-4 authorized distributors per city) ──
  { name: "DePuy Synthes (J&J)", rating: 4.9, reviews: 210, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"] },
  { name: "Stryker", rating: 4.8, reviews: 198, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"] },
  { name: "Zimmer Biomet", rating: 4.7, reviews: 189, tier: "intl", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation","specialized-implants"] },
  { name: "Smith+Nephew", rating: 4.7, reviews: 176, tier: "intl", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","external-fixation"] },
  { name: "Medtronic", rating: 4.8, reviews: 165, tier: "intl", categories: ["spine-implants"] },
  { name: "B. Braun", rating: 4.6, reviews: 142, tier: "intl", categories: ["hip-replacement","knee-replacement","spine-implants"] },
  { name: "Arthrex", rating: 4.7, reviews: 138, tier: "intl", categories: ["bone-plates","bone-screws","shoulder-upper-limb","spine-implants","specialized-implants"] },
  { name: "Orthofix", rating: 4.3, reviews: 71, tier: "intl", categories: ["spine-implants","external-fixation","specialized-implants"] },
  { name: "NuVasive", rating: 4.5, reviews: 96, tier: "intl", categories: ["spine-implants","specialized-implants"] },
  { name: "Globus Medical", rating: 4.5, reviews: 88, tier: "intl", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","specialized-implants"] },
  { name: "Exactech", rating: 4.4, reviews: 72, tier: "intl", categories: ["hip-replacement","knee-replacement","shoulder-upper-limb","specialized-implants"] },
  { name: "CONMED", rating: 4.3, reviews: 68, tier: "intl", categories: ["shoulder-upper-limb","specialized-implants"] },
  { name: "Integra LifeSciences", rating: 4.4, reviews: 74, tier: "intl", categories: ["shoulder-upper-limb","specialized-implants"] },
  // ── Indian brands - Tier 1 (5-8 dealers per city, wide distribution) ──
  { name: "GPC Medical", rating: 4.5, reviews: 187, tier: "tier1", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Siora Surgicals", rating: 4.4, reviews: 156, tier: "tier1", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation"] },
  { name: "Narang Medical", rating: 4.3, reviews: 134, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","shoulder-upper-limb","spine-implants","external-fixation"] },
  { name: "Meril Life Sciences", rating: 4.4, reviews: 94, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","knee-replacement","spine-implants"] },
  { name: "Auxein Medical", rating: 4.4, reviews: 112, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "S.H. Pitkar Orthotools", rating: 4.5, reviews: 128, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Sharma Ortho", rating: 4.2, reviews: 98, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","knee-replacement","spine-implants","external-fixation","specialized-implants"] },
  { name: "Atlas Surgical", rating: 4.3, reviews: 91, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation"] },
  { name: "Uteshiya Medicare", rating: 4.2, reviews: 86, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","hip-replacement","spine-implants","specialized-implants"] },
  { name: "Plus Orthopedics", rating: 4.3, reviews: 92, tier: "tier1", categories: ["hip-replacement","knee-replacement"] },
  { name: "Greens Surgicals", rating: 4.1, reviews: 54, tier: "tier1", categories: ["bone-plates","bone-screws","intramedullary-nails","wires-pins-staples","spine-implants","external-fixation","specialized-implants"] },
  // ── Indian brands - Tier 2 (3-6 dealers per city) ──
  { name: "Hardik International", rating: 4.3, reviews: 105, tier: "tier2", priority: true, categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","external-fixation","specialized-implants"] },
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
  { name: "Biotek India", rating: 4.3, reviews: 89, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","shoulder-upper-limb","spine-implants","specialized-implants"] },
  { name: "Nebula Surgical", rating: 4.0, reviews: 67, tier: "tier3", categories: ["bone-plates","bone-screws","intramedullary-nails","hip-replacement","spine-implants","external-fixation"] },
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
