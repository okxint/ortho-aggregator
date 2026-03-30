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
      {/* =================== HERO =================== */}
      <section className="relative min-h-[92vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Animated orbs */}
        <div className="hero-orb w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/20 top-[-10%] left-[-5%]" style={{ animationDelay: "0s" }} />
        <div className="hero-orb w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-cyan-500/15 bottom-[-5%] right-[-5%]" style={{ animationDelay: "-7s" }} />
        <div className="hero-orb w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-emerald-500/10 top-[40%] right-[25%]" style={{ animationDelay: "-14s" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Subtle gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in-up mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2.5 bg-white/[0.04] text-blue-300/90 text-[12px] md:text-[13px] font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                100+ Implants &middot; {cityName} Vendors &middot; Live Data
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold leading-[1] md:leading-[0.95] tracking-[-0.04em] mb-6 md:mb-8" style={{ animationDelay: "0.1s" }}>
              <span className="text-white">Compare</span><br />
              <span className="text-white">Orthopaedic</span><br />
              <span className="text-white">Implants </span>
              <span className="gradient-text">from<br className="md:hidden" /> {cityName}</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-in-up text-gray-400 text-base md:text-xl leading-relaxed max-w-xl mb-8 md:mb-10" style={{ animationDelay: "0.2s" }}>
              Bone plates, screws, nails, hip & knee replacements, spine implants.
              Compare brands. Find verified vendors.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row items-start gap-3 md:gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#categories" className="btn-premium w-full sm:w-auto justify-center">
                Browse Categories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
              </a>
              <a href="#popular" className="text-gray-300 font-medium px-8 py-3.5 rounded-2xl border border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 w-full sm:w-auto text-center">
                Popular Products
              </a>
            </div>
          </div>

          {/* Floating stat cards on right side - desktop only */}
          <div className="hidden lg:flex flex-col gap-5 absolute right-12 top-1/2 -translate-y-1/2">
            {[
              { value: "100+", label: "Implant Types", delay: "0.4s" },
              { value: "12+", label: "Top Brands", delay: "0.5s" },
              { value: "40+", label: "Verified Vendors", delay: "0.6s" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="glass-card px-7 py-6 w-56"
                style={{ opacity: 0, animation: `fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${s.delay} forwards, float 6s ease-in-out ${i * 2}s infinite` }}
              >
                <p className="text-[2rem] font-bold text-white tracking-tight mb-0.5">{s.value}</p>
                <p className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== MOBILE STATS =================== */}
      <section className="lg:hidden bg-[#030712] border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "100+", label: "Implants" },
              { value: "12+", label: "Brands" },
              { value: "40+", label: "Vendors" },
            ].map((s) => (
              <div key={s.label} className="glass-card text-center px-3 py-4">
                <p className="text-xl md:text-2xl font-bold text-white tracking-tight mb-0.5">{s.value}</p>
                <p className="text-[10px] md:text-xs text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== DESKTOP STATS BAR =================== */}
      <section className="hidden lg:block bg-white dark:bg-transparent border-b border-gray-100 dark:border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-gray-100 dark:divide-white/[0.04]">
            {[
              { value: "100+", label: "Implant Types", icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" },
              { value: "12+", label: "Verified Brands", icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
              { value: "40+", label: "Local Vendors", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
              { value: "10", label: "Categories", icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" },
            ].map((s) => (
              <div key={s.label} className="text-center py-8 group cursor-default">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-blue-500 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white group-hover:scale-105 transition-transform duration-300 tracking-tight">{s.value}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== MARQUEE =================== */}
      <div className="shimmer-bar py-3 border-b border-gray-100 dark:border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between text-[12px] md:text-[13px] text-gray-500 dark:text-gray-400 font-medium">
          <span>DePuy Synthes</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span>Stryker</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span>Zimmer Biomet</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span className="hidden md:inline">Smith+Nephew</span>
          <span className="hidden md:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span>Meril</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span>GPC Medical</span>
          <span className="hidden lg:inline text-gray-300 dark:text-gray-600">&middot;</span>
          <span className="hidden lg:inline">Siora</span>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* =================== CATEGORIES =================== */}
      <section id="categories" className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-3 block">Categories</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">Browse by Category</h2>
          </div>
          <span className="text-sm text-gray-400 hidden md:block">10 categories &middot; 100+ products</span>
        </div>

        {/* Mobile: horizontal scroll pills */}
        <div className="md:hidden flex overflow-x-auto gap-3 -mx-5 px-5 pb-3 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat) => {
            const count = getCategoryProducts(cat.id, city).length;
            return (
              <Link key={cat.id} href={`/category/${cat.id}`} className="flex items-center gap-3 glass-card px-4 py-3.5 shrink-0 active:scale-95 transition-all snap-start min-w-[200px]">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/10">
                  <span className="text-xs font-bold gradient-text">{cat.number}</span>
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{cat.name.split("(")[0].trim()}</p>
                  <p className="text-[11px] text-gray-400">{count} products</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop: featured layout - first takes 2 cols */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div key={cat.id} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <CategoryCard category={cat} featured={i === 0} />
            </div>
          ))}
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* =================== POPULAR PRODUCTS =================== */}
      <section id="popular" className="relative bg-gray-50 dark:bg-transparent">
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#030712] dark:via-[#050d1a] dark:to-[#030712]" />
        <div className="absolute inset-0 dot-grid opacity-20 dark:opacity-[0.07]" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-3 block">Popular</span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">Most Popular Implants</h2>
            </div>
            <span className="text-sm text-gray-400 hidden md:block">Showing vendors in {cityName}</span>
          </div>

          {/* Staggered grid: first item spans 2 cols on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {popular.map((p, i) => (
              <div key={p.id} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <ProductCard product={p} featured={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* =================== TRUST / WHY US =================== */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-3 block">Trust</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[-0.02em]">Why OrthoAggregator</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto text-sm md:text-base">The transparency layer for orthopaedic implant procurement in India</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              step: "01",
              title: "Verified Brands",
              desc: "All listed brands are verified manufacturers with ISO and CE certifications. From DePuy Synthes to Meril Life Sciences.",
              icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
              gradient: "from-blue-500/15 to-cyan-500/10",
            },
            {
              step: "02",
              title: "Real Vendor Data",
              desc: "Every vendor is verified through Google Maps with real addresses, phone numbers, and brand inventory mapping.",
              icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
              gradient: "from-blue-500/10 to-blue-400/5",
            },
            {
              step: "03",
              title: "Surgical Grade",
              desc: "All implants are manufactured from surgical-grade stainless steel or titanium alloy with CE and FDA certifications.",
              icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
              gradient: "from-blue-500/10 to-blue-400/5",
            },
          ].map((item) => (
            <div key={item.title} className="rotating-border glass-card p-7 md:p-8 text-center group">
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-blue-500/40 tracking-[0.2em] block mb-4">{item.step}</span>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/[0.06]`}>
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
