"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, getCategory, slug as toSlug, getStepImage } from "@/lib/data";
import Stars from "@/components/Stars";
import ProductDetailCTA from "@/components/ProductDetailCTA";
import { useCity } from "@/context/CityContext";

// Extract instrument/tool keywords from step descriptions for tags
const instrumentKeywords = [
  "drill", "drill bit", "depth gauge", "tap", "screw", "screwdriver",
  "reamer", "guide wire", "K-wire", "fluoroscopy", "C-arm",
  "retractor", "clamp", "forceps", "plate holder", "reduction clamp",
  "bone holding", "awl", "curette", "rongeur", "osteotome",
  "cement", "broach", "rasp", "impactor", "inserter", "extractor",
  "targeting jig", "drill sleeve", "drill guide", "wire tensioner",
  "torque wrench", "hex driver", "periosteal elevator",
];

function extractInstruments(description: string): string[] {
  const lower = description.toLowerCase();
  return instrumentKeywords
    .filter((kw) => lower.includes(kw))
    .slice(0, 4); // max 4 tags
}

export default function ProductDetail({ slug }: { slug: string }) {
  const { city, cityName } = useCity();
  const product = getProduct(slug, city);
  if (!product) notFound();

  const category = getCategory(product.categoryId);
  const sortedBrands = [...product.brands].sort((a, b) => b.rating - a.rating);
  const totalVendors = product.brands.reduce((sum, b) => sum + b.vendors.length, 0);

  const topVendor = sortedBrands[0]?.vendors[0];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 pb-40 md:pb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        {category && (
          <>
            <Link href={`/category/${category.id}`} className="text-blue-500 hover:underline">
              {category.name}
            </Link>
            <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </>
        )}
        <span className="text-gray-700 dark:text-gray-300 font-medium">{product.name}</span>
      </nav>

      {/* Product Header — glass card */}
      <div className="glass-card p-5 md:p-8 mb-8 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Product image — larger */}
          <div className="relative overflow-hidden rounded-2xl shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-80 h-56 md:h-64 object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            {category && (
              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full px-3.5 py-1.5 mb-3 hover:from-blue-500/15 hover:to-cyan-500/10 transition-all border border-blue-500/10"
              >
                {category.name}
              </Link>
            )}
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{product.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-sm md:text-base">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="glass-card rounded-xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{product.brands.length}</p>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-1">Brands</p>
              </div>
              <div className="glass-card rounded-xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{totalVendors}</p>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-1">Vendors in {cityName}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] md:text-xs bg-green-500/10 text-green-600 dark:text-green-400 font-medium px-3 py-1.5 rounded-full border border-green-500/10">Surgical Grade</span>
              <span className="text-[10px] md:text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium px-3 py-1.5 rounded-full border border-blue-500/10">CE Certified</span>
              <span className="text-[10px] md:text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium px-3 py-1.5 rounded-full border border-purple-500/10">ISO 13485</span>
              <span className="text-[10px] md:text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium px-3 py-1.5 rounded-full border border-amber-500/10">Titanium / SS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand -> Vendor Comparison */}
      <div className="mb-8">
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-2 block">Comparison</span>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Brands &amp; {cityName} Vendors</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {sortedBrands.length} brands available - click a vendor to see all their products
          </p>
        </div>

        <div className="space-y-4">
          {sortedBrands.map((brand, i) => (
            <div key={brand.name} className="glass-card overflow-hidden group">
              {/* Brand header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 border-b border-gray-100 dark:border-white/[0.04]">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    i === 0 ? "bg-gradient-to-br from-green-500/20 to-emerald-500/10 text-green-500 border border-green-500/10" : "bg-white/[0.04] text-gray-500 dark:text-gray-400 border border-white/[0.06]"
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">{brand.name}</span>
                      {i === 0 && (
                        <span className="text-[10px] font-bold uppercase bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/10">
                          Top Rated
                        </span>
                      )}
                      {brand.technicianSupport?.available && (
                        <span className="text-[10px] font-bold uppercase bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full border border-blue-500/10 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                          {brand.technicianSupport.type}
                        </span>
                      )}
                      <span className="text-[10px] font-bold uppercase bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full">
                        Call for availability
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Stars rating={brand.rating} size="sm" />
                      <span className="text-xs text-gray-400">({brand.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technician support detail */}
              {brand.technicianSupport?.available && (
                <div className="px-5 py-2.5 bg-blue-50 dark:bg-blue-500/[0.04] border-b border-blue-100 dark:border-blue-500/10 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">Technician Support Available</p>
                    <p className="text-[11px] text-blue-600/70 dark:text-blue-400/60 mt-0.5 leading-relaxed">{brand.technicianSupport.details}</p>
                  </div>
                </div>
              )}

              {/* Vendors under this brand */}
              <div className="bg-gray-50/50 dark:bg-white/[0.01] divide-y divide-gray-100 dark:divide-white/[0.03]">
                <div className="px-5 py-2">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {cityName} Vendors supplying {brand.name}
                  </span>
                </div>
                {brand.vendors.map((vendor) => (
                    <div key={vendor.name} className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3 hover:bg-blue-500/[0.02] transition-colors">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/10">
                          <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Link
                              href={`/vendor/${toSlug(vendor.name)}`}
                              className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                            >
                              {vendor.name}
                            </Link>
                            {vendor.technicianSupport?.available && (
                              <span className="text-[9px] font-bold uppercase bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded border border-blue-500/10 flex items-center gap-0.5">
                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                {vendor.technicianSupport.type}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{cityName}</p>
                          <div className="flex items-center gap-3 mt-1">
                            {vendor.phone && (
                              <a href={`tel:${vendor.phone}`} className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                {vendor.phone}
                              </a>
                            )}
                            <a
                              href={vendor.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                              </svg>
                              View on Maps
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0 self-start sm:self-center">
                        {vendor.phone && (
                          <a
                            href={`tel:${vendor.phone}`}
                            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/20 transition-all active:scale-95"
                          >
                            Call Now
                          </a>
                        )}
                        <Link
                          href={`/vendor/${toSlug(vendor.name)}`}
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
                        >
                          All Products
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed About Section */}
      {product.detail && (
        <div className="glass-card p-5 md:p-8 mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-2 block">Details</span>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6">About {product.name}</h2>

          {/* Detail image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.detail.image}
            alt={product.name}
            className="w-full max-w-lg rounded-2xl mb-6 border border-gray-200 dark:border-white/[0.06]"
          />

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base">{product.detail.description}</p>

          {/* Indications */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Indications</h3>
            <ul className="space-y-2">
              {product.detail.indications.map((ind, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          {/* Surgical Technique */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Surgical Technique</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{product.detail.surgicalTechnique}</p>
          </div>
        </div>
      )}

      {/* Step-by-Step Surgical Technique */}
      {product.detail?.steps && product.detail.steps.length > 0 && (
        <div className="glass-card p-5 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500/15 to-red-400/5 rounded-xl flex items-center justify-center border border-red-500/10">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Surgical Technique</h2>
            </div>
            <span className="text-[10px] font-bold uppercase bg-red-500/10 text-red-500 px-2.5 py-1 rounded-full border border-red-500/10">{product.detail.steps.length} Steps</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-5 ml-11">Operative procedure for {product.name} — instruments, technique &amp; fixation protocol</p>

          {/* Horizontal scrolling step cards — glass */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory scrollbar-thin">
            {product.detail.steps.map((step, i) => (
              <div key={i} className="flex-shrink-0 w-[260px] md:w-[280px] snap-start">
                <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                  {/* Step image */}
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image || getStepImage(step.title, product.categoryId)}
                      alt={step.title}
                      className="w-full h-32 object-cover"
                    />
                    {/* Step number overlay */}
                    <div className={`absolute top-2 left-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm ${
                      i === 0 ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white" :
                      i === product.detail!.steps!.length - 1 ? "bg-gradient-to-br from-green-600 to-emerald-500 text-white" :
                      "bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 backdrop-blur-sm"
                    }`}>
                      {i + 1}
                    </div>
                    {/* Connector arrow (except last) */}
                    {i < product.detail!.steps!.length - 1 && (
                      <div className="absolute top-1/2 -right-3 w-6 h-6 flex items-center justify-center z-10">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {/* Step text */}
                  <div className="p-3.5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-xs mb-1.5 leading-tight">{step.title}</h3>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{step.description}</p>
                    {/* Instruments tag */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {extractInstruments(step.description).map((inst, j) => (
                        <span key={j} className="text-[9px] font-medium bg-blue-500/10 text-blue-500 dark:text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/5">
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical disclaimer */}
          <div className="mt-4 p-3.5 glass-card rounded-xl flex items-start gap-2.5">
            <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">For educational reference only. Follow institutional protocols and manufacturer&apos;s operative technique guide. Refer to the specific implant system&apos;s IFU (Instructions for Use) for instrument compatibility, torque specifications, and contraindications.</p>
          </div>
        </div>
      )}

      {/* Specifications — clean grid with subtle dividers */}
      <div className="glass-card p-5 md:p-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-2 block">Technical</span>
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-5">Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {[
            { label: "Material", value: product.detail?.material || "Surgical Grade SS 316L / Titanium" },
            { label: "Sizes Available", value: product.detail?.sizes || "Multiple (varies by vendor)" },
            { label: "Finish", value: "Electro-polished" },
            { label: "Certification", value: "CE, ISO 13485, FDA 510(k)" },
            { label: "Sterilization", value: "ETO / Gamma Ray" },
            { label: "Packaging", value: "Individual sterile pack" },
          ].map((spec) => (
            <div key={spec.label} className="flex justify-between py-3.5 border-b border-gray-100 dark:border-white/[0.04]">
              <span className="text-sm text-gray-500 dark:text-gray-400">{spec.label}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white text-right max-w-[60%]">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile sticky CTA */}
      {topVendor && (
        <ProductDetailCTA
          vendorName={topVendor.name}
          vendorUrl={topVendor.url}
          vendorPhone={topVendor.phone || undefined}
        />
      )}
    </div>
  );
}
