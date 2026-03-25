"use client";

import Link from "next/link";
import { categories, getProductsForCity, getCategoryProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { useCity } from "@/context/CityContext";

export default function Home() {
  const { city, cityName } = useCity();
  const products = getProductsForCity(city);
  const popular = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-blue-950 dark:to-[#030712] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            100+ Orthopaedic Implants &middot; Top Brands &middot; {cityName} Vendors
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Compare Orthopaedic Implants<br />
            <span className="text-blue-200 dark:text-blue-400">from Vendors in {cityName}</span>
          </h1>
          <p className="text-blue-100 dark:text-blue-300/70 text-lg max-w-2xl mx-auto mb-8">
            Bone plates, screws, nails, hip &amp; knee replacements, spine implants, and more.
            Compare brands and find verified vendors across {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#categories" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition shadow-lg">
              Browse Categories
            </a>
            <a href="#popular" className="border border-white/40 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition">
              View Popular Products
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Implant Types" },
              { value: "10", label: "Categories" },
              { value: "12+", label: "Top Brands" },
              { value: cityName, label: "Vendor Network" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Browse by Category</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">10 categories covering all major orthopaedic implant types</p>
        </div>
        {/* Mobile: horizontal scroll pills */}
        <div className="md:hidden flex overflow-x-auto gap-3 -mx-4 px-4 pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const count = getCategoryProducts(cat.id, city).length;
            return (
              <Link key={cat.id} href={`/category/${cat.id}`} className="flex items-center gap-2.5 bg-white dark:bg-[#111827] border border-gray-200 dark:border-blue-900/30 rounded-2xl px-4 py-3 shrink-0 active:scale-95 transition-transform">
                <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{cat.number}</span>
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{cat.name.split("(")[0].trim()}</p>
                  <p className="text-[10px] text-gray-400">{count} products</p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section id="popular" className="bg-white dark:bg-[#0f172a] border-t border-gray-100 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Most Popular Implants</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Top-selling orthopaedic implants &middot; showing vendors in {cityName}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#0c2340] dark:to-[#0f172a] rounded-2xl p-8 md:p-12 dark:border dark:border-blue-900/30">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Verified Brands", desc: "All listed brands are verified manufacturers with ISO and CE certifications.", icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
              { title: "Real Vendor Data", desc: "Every vendor is verified through Google Maps with real addresses and contact details.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" },
              { title: "Surgical Grade", desc: "All implants are manufactured from surgical-grade stainless steel or titanium alloy.", icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
