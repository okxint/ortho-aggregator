"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrandBySlug, getBrandProducts, getCategory, slug as toSlug, categories } from "@/lib/data";
import { useCity } from "@/context/CityContext";
import Stars from "@/components/Stars";

const tierLabels: Record<string, string> = {
  intl: "International",
  tier1: "Indian Tier 1",
  tier2: "Indian Tier 2",
  tier3: "Regional / Niche",
};

const tierColors: Record<string, string> = {
  intl: "bg-purple-500/10 text-purple-500 border-purple-500/10",
  tier1: "bg-blue-500/10 text-blue-500 border-blue-500/10",
  tier2: "bg-cyan-500/10 text-cyan-500 border-cyan-500/10",
  tier3: "bg-gray-500/10 text-gray-400 border-gray-500/10",
};

export default function BrandPage() {
  const params = useParams();
  const brandSlug = params.slug as string;
  const { city, cityName } = useCity();

  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const products = getBrandProducts(brand.name, city);

  // Group products by category
  const grouped = new Map<string, typeof products>();
  for (const product of products) {
    const existing = grouped.get(product.categoryId) || [];
    existing.push(product);
    grouped.set(product.categoryId, existing);
  }

  // Get vendors carrying this brand (deduplicated)
  const vendorSet = new Map<string, { name: string; phone: string; url: string }>();
  for (const product of products) {
    for (const b of product.brands) {
      if (b.name === brand.name) {
        for (const v of b.vendors) {
          if (!vendorSet.has(v.name)) {
            vendorSet.set(v.name, v);
          }
        }
      }
    }
  }
  const vendors = Array.from(vendorSet.values());

  // Category names this brand covers
  const brandCategories = brand.categories
    .map((catId) => categories.find((c) => c.id === catId))
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 pb-24 md:pb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{brand.name}</span>
      </nav>

      {/* Brand Header */}
      <div className="glass-card p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />
        <div className="hero-orb w-[200px] h-[200px] bg-blue-500/10 top-[-40%] right-[-10%]" style={{ animationDelay: "0s" }} />
        <div className="relative flex flex-col sm:flex-row items-start gap-5">
          {/* Brand Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-3xl flex items-center justify-center shrink-0 border border-blue-500/10">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{brand.name}</h1>
              <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${tierColors[brand.tier]}`}>
                {tierLabels[brand.tier]}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Stars rating={brand.rating} />
              <span className="text-sm text-gray-500 dark:text-gray-400">({brand.reviews} reviews)</span>
            </div>

            {/* Technician Support */}
            {brand.technicianSupport?.available && (
              <div className="flex items-start gap-2.5 p-3 bg-blue-50 dark:bg-blue-500/[0.06] border border-blue-200 dark:border-blue-500/15 rounded-xl mb-5">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                    Technician Support Available
                    <span className="text-[10px] font-bold uppercase bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full">{brand.technicianSupport.type}</span>
                  </p>
                  <p className="text-xs text-blue-600/70 dark:text-blue-400/60 mt-1 leading-relaxed">{brand.technicianSupport.details}</p>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="glass-card rounded-xl p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-white">{products.length}</p>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5">Products</p>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-white">{grouped.size}</p>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5">Categories</p>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-white">{vendors.length}</p>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5">Vendors in {cityName}</p>
              </div>
            </div>

            {/* Category tags */}
            <div className="flex flex-wrap gap-2">
              {brandCategories.map((cat) => cat && (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="text-[10px] md:text-xs font-medium text-blue-500 bg-blue-500/8 dark:bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/10 hover:bg-blue-500/15 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vendors carrying this brand */}
      {vendors.length > 0 && (
        <div className="mb-8">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-2 block">Distribution</span>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{cityName} Vendors</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{vendors.length} authorized vendors carrying {brand.name}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vendors.map((v) => (
              <div key={v.name} className="glass-card p-4 flex items-center gap-3 group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/10">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/vendor/${toSlug(v.name)}`} className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors truncate block">
                    {v.name}
                  </Link>
                  {v.phone && (
                    <a href={`tel:${v.phone}`} className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                      {v.phone}
                    </a>
                  )}
                </div>
                <div className="flex gap-1.5 shrink-0">
                  {v.phone && (
                    <a href={`tel:${v.phone}`} className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </a>
                  )}
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-500/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section divider */}
      <div className="section-divider mb-8" />

      {/* Products by Category */}
      <div className="space-y-10">
        {Array.from(grouped.entries()).map(([categoryId, categoryProducts]) => {
          const category = getCategory(categoryId);
          return (
            <div key={categoryId}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category?.name || categoryId}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{categoryProducts.length} products by {brand.name}</p>
                </div>
                {category && (
                  <Link href={`/category/${category.id}`} className="text-sm text-blue-500 hover:underline font-medium">
                    View all
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {categoryProducts.map((product) => {
                  // Get this brand's entry for the product
                  const brandEntry = product.brands.find((b) => b.name === brand.name);
                  const vendorCount = brandEntry?.vendors.length || 0;
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="glass-card p-4 hover:border-blue-500/30 transition-all duration-300 group block"
                    >
                      {/* Product image */}
                      <div className="relative overflow-hidden rounded-xl mb-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/10">
                          {product.brands.length} brands
                        </div>
                      </div>

                      <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-500 transition mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {brandEntry && (
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <Stars rating={brandEntry.rating} size="sm" />
                            <span className="text-[10px] text-gray-400">({brandEntry.reviews})</span>
                          </div>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">{vendorCount} vendor{vendorCount !== 1 ? "s" : ""}</span>
                        </div>
                      )}

                      <div className="pt-2.5 border-t border-gray-100 dark:border-white/[0.04] flex items-center justify-between">
                        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Call for stock</span>
                        <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
