"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { getProductsForCity, categories, getVendorsForCity, slug as toSlug } from "@/lib/data";
import { useCity } from "@/context/CityContext";
import Stars from "@/components/Stars";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const { city, cityName } = useCity();

  if (!query) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-blue-500/10 dark:bg-blue-500/5 rounded-3xl flex items-center justify-center mx-auto mb-5 border border-blue-500/10">
          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Search OrthoAggregator</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Search for implants, brands, vendors, or categories</p>
      </div>
    );
  }

  const allProducts = getProductsForCity(city);
  const allVendors = getVendorsForCity(city);

  // Search products
  const matchedProducts = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.brands.some((b) => b.name.toLowerCase().includes(query))
  );

  // Search categories
  const matchedCategories = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query)
  );

  // Search vendors
  const matchedVendors = allVendors.filter(
    (v) => v.name.toLowerCase().includes(query)
  );

  // Search brands (unique brand names from products)
  const brandSet = new Map<string, { name: string; rating: number; reviews: number; productCount: number }>();
  allProducts.forEach((p) => {
    p.brands.forEach((b) => {
      if (b.name.toLowerCase().includes(query)) {
        const existing = brandSet.get(b.name);
        if (existing) {
          existing.productCount++;
        } else {
          brandSet.set(b.name, { name: b.name, rating: b.rating, reviews: b.reviews, productCount: 1 });
        }
      }
    });
  });
  const matchedBrands = Array.from(brandSet.values());

  const totalResults = matchedProducts.length + matchedCategories.length + matchedVendors.length + matchedBrands.length;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Search results for &quot;{searchParams.get("q")}&quot;
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {totalResults} results found in {cityName}
        </p>
      </div>

      {totalResults === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 dark:bg-white/[0.04] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No results found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">Try a different search term or browse our categories</p>
          <Link href="/" className="text-blue-500 hover:underline font-medium text-sm">Browse all categories</Link>
        </div>
      )}

      {/* Categories */}
      {matchedCategories.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80 mb-4">Categories ({matchedCategories.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {matchedCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="glass-card p-4 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-blue-500/10">
                  <span className="text-sm font-bold gradient-text">{cat.number}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{cat.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Brands */}
      {matchedBrands.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80 mb-4">Brands ({matchedBrands.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {matchedBrands.map((brand) => (
              <div
                key={brand.name}
                className="glass-card p-4"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{brand.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Stars rating={brand.rating} size="sm" />
                  <span className="text-xs text-gray-400">({brand.reviews})</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Available in {brand.productCount} products</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Vendors */}
      {matchedVendors.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80 mb-4">Vendors in {cityName} ({matchedVendors.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedVendors.map((vendor) => (
              <Link
                key={vendor.name}
                href={`/vendor/${toSlug(vendor.name)}`}
                className="glass-card p-4 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/15 to-blue-400/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-blue-500/10">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-400 text-sm">{vendor.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cityName} {vendor.phone && `- ${vendor.phone}`}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 ml-auto shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      {matchedProducts.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80 mb-4">Products ({matchedProducts.length})</h2>
          <div className="space-y-3">
            {matchedProducts.map((product) => {
              const topBrand = product.brands.reduce((best, b) => (b.rating > best.rating ? b : best), product.brands[0]);
              const cat = categories.find((c) => c.id === product.categoryId);

              return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="glass-card p-4 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4 group block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      {cat && (
                        <span className="text-[10px] font-semibold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{cat.name}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-500 transition">{product.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{product.brands.length} brands</span>
                      <span className="text-xs text-gray-400">-</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Top: {topBrand.name}</span>
                      <span className="text-xs text-gray-400">-</span>
                      <Stars rating={topBrand.rating} size="sm" />
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-full shrink-0 hidden sm:block">
                    Call for availability
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-6 py-8">
      <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
