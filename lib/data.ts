export interface Brand {
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  description: string;
  brands: Brand[];
}

export interface Category {
  id: string;
  name: string;
  number: number;
  image: string;
  description: string;
}

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/[()\/]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function randomPrice(base: number) {
  return Math.round(base + Math.random() * base * 0.4);
}

function makeBrands(base: number, count = 4): Brand[] {
  const brandNames = [
    "Synthes", "Stryker", "Smith+Nephew", "Zimmer Biomet",
    "DePuy", "Medtronic", "Orthofix", "Biotek", "Sharma Surgicals",
    "Nebula Surgical", "GPC Medical", "Auxein Medical",
  ];
  const shuffled = [...brandNames].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((name, i) => {
    const price = randomPrice(base - i * 50);
    return {
      name,
      price,
      mrp: Math.round(price * 1.3),
      rating: +(3.8 + Math.random() * 1.2).toFixed(1),
      reviews: Math.floor(10 + Math.random() * 200),
      inStock: Math.random() > 0.15,
    };
  });
}

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
  "bone-plates": [
    "Dynamic Compression Plate (DCP)",
    "Limited Contact Dynamic Compression Plate (LC-DCP)",
    "Locking Compression Plate (LCP)",
    "Buttress Plate",
    "Neutralization Plate",
    "Bridging Plate",
    "Tension Band Plate",
    "Reconstruction Plate",
    "T-Plate",
    "L-Plate",
    "Cloverleaf Plate",
    "Distal Radius Plate",
    "Proximal Humerus Plate",
    "Distal Femur Plate",
    "Proximal Tibia Plate",
    "Calcaneal Plate",
    "Pelvic Reconstruction Plate",
    "Metaphyseal Plate",
    "Mini Fragment Plate",
    "Pediatric Plate",
  ],
  "bone-screws": [
    "Cortical Screw",
    "Cancellous Screw",
    "Locking Screw",
    "Cannulated Screw",
    "Headless Compression Screw",
    "Herbert Screw",
    "Lag Screw",
    "Interference Screw",
    "Pedicle Screw",
    "Self-tapping Screw",
    "Self-drilling Screw",
    "Polyaxial Screw",
    "Monoaxial Screw",
    "Variable Angle Locking Screw",
    "Fully Threaded Screw",
  ],
  "intramedullary-nails": [
    "Kuntscher Nail",
    "Interlocking Nail",
    "Femoral Nail",
    "Tibial Nail",
    "Humeral Nail",
    "Gamma Nail",
    "PFN (Proximal Femoral Nail)",
    "PFNA Nail",
    "Ender Nail",
    "Rush Nail",
    "Talwalkar Nail",
    "Seidel Nail",
    "Grosse-Kempf Nail",
    "Elastic Stable Intramedullary Nail (ESIN)",
    "Titanium Elastic Nail",
  ],
  "wires-pins-staples": [
    "Kirschner Wire (K-wire)",
    "Steinmann Pin",
    "Schanz Screw",
    "Cerclage Wire",
    "Tension Band Wire",
    "Orthopedic Staples",
    "Rush Pins",
    "Guide Wire",
    "Ilizarov Wire",
    "Bone Pins",
  ],
  "hip-replacement": [
    "Total Hip Prosthesis",
    "Bipolar Hip Prosthesis",
    "Austin Moore Prosthesis",
    "Thompson Prosthesis",
    "Femoral Stem",
    "Acetabular Cup",
    "Femoral Head Implant",
    "Hip Resurfacing Implant",
  ],
  "knee-replacement": [
    "Total Knee Replacement Prosthesis",
    "Partial Knee Implant",
    "Femoral Component (Knee)",
    "Tibial Base Plate",
    "Tibial Insert (Polyethylene)",
    "Patellar Implant",
  ],
  "shoulder-upper-limb": [
    "Total Shoulder Prosthesis",
    "Reverse Shoulder Prosthesis",
    "Radial Head Prosthesis",
    "Elbow Joint Prosthesis",
    "Wrist Joint Prosthesis",
  ],
  "spine-implants": [
    "Harrington Rod",
    "Luque Rod",
    "Spinal Pedicle Screw System",
    "Interbody Fusion Cage",
    "Cervical Plate",
    "Lumbar Fusion Cage",
    "Titanium Mesh Cage",
    "Interspinous Process Device",
    "Spinal Fixation Rod",
    "Cross-link Connector",
  ],
  "external-fixation": [
    "External Fixator Frame",
    "Ilizarov External Fixator",
    "Hybrid External Fixator",
    "Unilateral External Fixator",
    "Ring Fixator",
  ],
  "specialized-implants": [
    "Swanson Finger Prosthesis",
    "Artificial Disc Implant",
    "Bone Anchor",
    "Ligament Reconstruction Screw",
    "Orbital Reconstruction Plate",
    "Craniomaxillofacial Plate",
  ],
};

const basePrices: Record<string, number> = {
  "bone-plates": 3500,
  "bone-screws": 800,
  "intramedullary-nails": 8000,
  "wires-pins-staples": 400,
  "hip-replacement": 25000,
  "knee-replacement": 35000,
  "shoulder-upper-limb": 30000,
  "spine-implants": 15000,
  "external-fixation": 20000,
  "specialized-implants": 12000,
};

// Hardcoded distinct brands for Bone Plates category
const bonePlateBrands: Record<string, Brand[]> = {
  "Dynamic Compression Plate (DCP)": [
    { name: "DePuy Synthes", price: 4200, mrp: 5500, rating: 4.8, reviews: 187, inStock: true },
    { name: "Sharma Surgicals", price: 2100, mrp: 3200, rating: 4.2, reviews: 94, inStock: true },
    { name: "GPC Medical", price: 2450, mrp: 3500, rating: 4.3, reviews: 122, inStock: true },
    { name: "Auxein Medical", price: 2800, mrp: 3800, rating: 4.4, reviews: 68, inStock: true },
    { name: "Nebula Surgical", price: 1950, mrp: 2900, rating: 4.0, reviews: 45, inStock: false },
  ],
  "Limited Contact Dynamic Compression Plate (LC-DCP)": [
    { name: "DePuy Synthes", price: 4800, mrp: 6200, rating: 4.9, reviews: 156, inStock: true },
    { name: "Stryker", price: 5200, mrp: 6800, rating: 4.8, reviews: 134, inStock: true },
    { name: "GPC Medical", price: 2700, mrp: 3900, rating: 4.2, reviews: 88, inStock: true },
    { name: "Genius Ortho", price: 2400, mrp: 3400, rating: 4.1, reviews: 52, inStock: true },
  ],
  "Locking Compression Plate (LCP)": [
    { name: "DePuy Synthes", price: 5500, mrp: 7200, rating: 4.9, reviews: 210, inStock: true },
    { name: "Zimmer Biomet", price: 5100, mrp: 6600, rating: 4.7, reviews: 178, inStock: true },
    { name: "Auxein Medical", price: 3200, mrp: 4500, rating: 4.3, reviews: 96, inStock: true },
    { name: "Narang Medical", price: 2800, mrp: 3900, rating: 4.1, reviews: 63, inStock: true },
    { name: "Hi-Tech Ortho", price: 2500, mrp: 3600, rating: 4.0, reviews: 37, inStock: false },
  ],
  "Buttress Plate": [
    { name: "Smith+Nephew", price: 4600, mrp: 5900, rating: 4.7, reviews: 143, inStock: true },
    { name: "Sharma Surgicals", price: 2300, mrp: 3300, rating: 4.2, reviews: 76, inStock: true },
    { name: "Biotek", price: 2650, mrp: 3700, rating: 4.3, reviews: 89, inStock: true },
    { name: "Ravine Group", price: 2100, mrp: 3000, rating: 4.0, reviews: 41, inStock: true },
  ],
  "Neutralization Plate": [
    { name: "Stryker", price: 4400, mrp: 5700, rating: 4.7, reviews: 128, inStock: true },
    { name: "GPC Medical", price: 2500, mrp: 3600, rating: 4.3, reviews: 95, inStock: true },
    { name: "Auxein Medical", price: 2750, mrp: 3800, rating: 4.4, reviews: 71, inStock: true },
    { name: "Digicare Biomedical", price: 2200, mrp: 3200, rating: 4.1, reviews: 33, inStock: true },
  ],
  "Bridging Plate": [
    { name: "DePuy Synthes", price: 4900, mrp: 6400, rating: 4.8, reviews: 167, inStock: true },
    { name: "Smith+Nephew", price: 4500, mrp: 5900, rating: 4.6, reviews: 112, inStock: true },
    { name: "Nebula Surgical", price: 2400, mrp: 3400, rating: 4.2, reviews: 58, inStock: true },
    { name: "Genius Ortho", price: 2200, mrp: 3100, rating: 4.0, reviews: 29, inStock: false },
  ],
  "Tension Band Plate": [
    { name: "Zimmer Biomet", price: 4300, mrp: 5600, rating: 4.6, reviews: 98, inStock: true },
    { name: "Biotek", price: 2800, mrp: 3900, rating: 4.3, reviews: 67, inStock: true },
    { name: "Sharma Surgicals", price: 2100, mrp: 3100, rating: 4.1, reviews: 82, inStock: true },
    { name: "Narang Medical", price: 2350, mrp: 3300, rating: 4.2, reviews: 44, inStock: true },
  ],
  "Reconstruction Plate": [
    { name: "DePuy Synthes", price: 5800, mrp: 7500, rating: 4.9, reviews: 192, inStock: true },
    { name: "Stryker", price: 5400, mrp: 7000, rating: 4.8, reviews: 164, inStock: true },
    { name: "Auxein Medical", price: 3400, mrp: 4700, rating: 4.4, reviews: 78, inStock: true },
    { name: "GPC Medical", price: 3100, mrp: 4300, rating: 4.3, reviews: 91, inStock: false },
    { name: "Ravine Group", price: 2700, mrp: 3800, rating: 4.1, reviews: 36, inStock: true },
  ],
  "T-Plate": [
    { name: "Smith+Nephew", price: 3800, mrp: 4900, rating: 4.6, reviews: 109, inStock: true },
    { name: "Sharma Surgicals", price: 1900, mrp: 2800, rating: 4.1, reviews: 87, inStock: true },
    { name: "Digicare Biomedical", price: 2100, mrp: 3000, rating: 4.2, reviews: 53, inStock: true },
    { name: "Hi-Tech Ortho", price: 2300, mrp: 3200, rating: 4.0, reviews: 28, inStock: true },
  ],
  "L-Plate": [
    { name: "Zimmer Biomet", price: 3700, mrp: 4800, rating: 4.5, reviews: 97, inStock: true },
    { name: "Biotek", price: 2200, mrp: 3200, rating: 4.3, reviews: 74, inStock: true },
    { name: "Nebula Surgical", price: 1850, mrp: 2700, rating: 4.0, reviews: 39, inStock: true },
    { name: "GPC Medical", price: 2050, mrp: 2900, rating: 4.2, reviews: 62, inStock: false },
  ],
  "Cloverleaf Plate": [
    { name: "DePuy Synthes", price: 4600, mrp: 6000, rating: 4.8, reviews: 145, inStock: true },
    { name: "Stryker", price: 4200, mrp: 5500, rating: 4.7, reviews: 118, inStock: true },
    { name: "Auxein Medical", price: 2600, mrp: 3600, rating: 4.2, reviews: 56, inStock: true },
    { name: "Genius Ortho", price: 2300, mrp: 3300, rating: 4.1, reviews: 34, inStock: true },
  ],
  "Distal Radius Plate": [
    { name: "Stryker", price: 5800, mrp: 7500, rating: 4.9, reviews: 203, inStock: true },
    { name: "Smith+Nephew", price: 5200, mrp: 6800, rating: 4.7, reviews: 156, inStock: true },
    { name: "Narang Medical", price: 3100, mrp: 4300, rating: 4.3, reviews: 82, inStock: true },
    { name: "Sharma Surgicals", price: 2700, mrp: 3800, rating: 4.1, reviews: 64, inStock: true },
    { name: "Ravine Group", price: 2400, mrp: 3400, rating: 4.0, reviews: 27, inStock: false },
  ],
  "Proximal Humerus Plate": [
    { name: "DePuy Synthes", price: 6200, mrp: 8000, rating: 4.9, reviews: 176, inStock: true },
    { name: "Zimmer Biomet", price: 5700, mrp: 7400, rating: 4.8, reviews: 149, inStock: true },
    { name: "GPC Medical", price: 3500, mrp: 4800, rating: 4.4, reviews: 93, inStock: true },
    { name: "Biotek", price: 3100, mrp: 4300, rating: 4.2, reviews: 57, inStock: true },
  ],
  "Distal Femur Plate": [
    { name: "DePuy Synthes", price: 6800, mrp: 8800, rating: 4.9, reviews: 189, inStock: true },
    { name: "Stryker", price: 6300, mrp: 8200, rating: 4.8, reviews: 162, inStock: true },
    { name: "Auxein Medical", price: 3800, mrp: 5200, rating: 4.4, reviews: 76, inStock: true },
    { name: "Hi-Tech Ortho", price: 3200, mrp: 4500, rating: 4.1, reviews: 42, inStock: false },
    { name: "Digicare Biomedical", price: 3500, mrp: 4800, rating: 4.3, reviews: 51, inStock: true },
  ],
  "Proximal Tibia Plate": [
    { name: "Smith+Nephew", price: 5900, mrp: 7600, rating: 4.8, reviews: 168, inStock: true },
    { name: "Zimmer Biomet", price: 5500, mrp: 7100, rating: 4.7, reviews: 141, inStock: true },
    { name: "Sharma Surgicals", price: 3000, mrp: 4200, rating: 4.2, reviews: 85, inStock: true },
    { name: "Nebula Surgical", price: 2700, mrp: 3800, rating: 4.0, reviews: 48, inStock: true },
  ],
  "Calcaneal Plate": [
    { name: "Stryker", price: 5400, mrp: 7000, rating: 4.8, reviews: 132, inStock: true },
    { name: "DePuy Synthes", price: 5100, mrp: 6600, rating: 4.7, reviews: 115, inStock: true },
    { name: "GPC Medical", price: 2900, mrp: 4100, rating: 4.3, reviews: 69, inStock: true },
    { name: "Genius Ortho", price: 2600, mrp: 3600, rating: 4.1, reviews: 38, inStock: false },
  ],
  "Pelvic Reconstruction Plate": [
    { name: "DePuy Synthes", price: 8500, mrp: 11000, rating: 4.9, reviews: 147, inStock: true },
    { name: "Stryker", price: 7800, mrp: 10100, rating: 4.8, reviews: 123, inStock: true },
    { name: "Zimmer Biomet", price: 7200, mrp: 9300, rating: 4.7, reviews: 98, inStock: true },
    { name: "Auxein Medical", price: 4500, mrp: 6200, rating: 4.3, reviews: 54, inStock: true },
    { name: "Narang Medical", price: 4100, mrp: 5700, rating: 4.1, reviews: 31, inStock: false },
  ],
  "Metaphyseal Plate": [
    { name: "Smith+Nephew", price: 5100, mrp: 6600, rating: 4.7, reviews: 119, inStock: true },
    { name: "Biotek", price: 3200, mrp: 4400, rating: 4.3, reviews: 73, inStock: true },
    { name: "Sharma Surgicals", price: 2500, mrp: 3500, rating: 4.1, reviews: 91, inStock: true },
    { name: "Ravine Group", price: 2300, mrp: 3200, rating: 4.0, reviews: 35, inStock: true },
  ],
  "Mini Fragment Plate": [
    { name: "DePuy Synthes", price: 3600, mrp: 4700, rating: 4.8, reviews: 158, inStock: true },
    { name: "Stryker", price: 3300, mrp: 4300, rating: 4.7, reviews: 127, inStock: true },
    { name: "GPC Medical", price: 1800, mrp: 2600, rating: 4.2, reviews: 84, inStock: true },
    { name: "Digicare Biomedical", price: 1600, mrp: 2300, rating: 4.0, reviews: 46, inStock: true },
    { name: "Nebula Surgical", price: 1500, mrp: 2200, rating: 3.9, reviews: 22, inStock: false },
  ],
  "Pediatric Plate": [
    { name: "DePuy Synthes", price: 4100, mrp: 5300, rating: 4.9, reviews: 136, inStock: true },
    { name: "Smith+Nephew", price: 3800, mrp: 4900, rating: 4.7, reviews: 108, inStock: true },
    { name: "Auxein Medical", price: 2400, mrp: 3400, rating: 4.3, reviews: 61, inStock: true },
    { name: "Hi-Tech Ortho", price: 2100, mrp: 3000, rating: 4.1, reviews: 43, inStock: true },
  ],
};

export const products: Product[] = Object.entries(productData).flatMap(
  ([categoryId, names]) =>
    names.map((name) => ({
      id: slug(name),
      name,
      categoryId,
      image: `/products/${slug(name)}.svg`,
      description: `High-quality ${name.toLowerCase()} manufactured from surgical-grade stainless steel or titanium alloy. Designed for optimal biomechanical performance and biocompatibility. Available in multiple sizes and configurations.`,
      brands: categoryId === "bone-plates" && bonePlateBrands[name]
        ? bonePlateBrands[name]
        : makeBrands(basePrices[categoryId] || 5000),
    }))
);

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function getCategoryProducts(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getAllProducts() {
  return products;
}

export function searchProducts(query: string) {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryId.includes(q) ||
      p.brands.some((b) => b.name.toLowerCase().includes(q))
  );
}
