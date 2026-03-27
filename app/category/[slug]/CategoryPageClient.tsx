"use client";

import Link from "next/link";
import { Category, getCategoryProducts } from "@/lib/data";
import CategoryProductGrid from "./CategoryProductGrid";
import { useCity } from "@/context/CityContext";

export default function CategoryPageClient({ category }: { category: Category }) {
  const { city, cityName } = useCity();
  const products = getCategoryProducts(category.id, city);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{category.name}</span>
      </nav>

      {/* Header — glass card with dot grid pattern */}
      <div className="relative overflow-hidden glass-card p-6 md:p-8 mb-8">
        <div className="absolute inset-0 dot-grid opacity-[0.05]" />
        <div className="hero-orb w-[200px] h-[200px] bg-blue-500/10 top-[-30%] right-[-5%]" style={{ animationDelay: "0s" }} />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-extrabold gradient-text">
              {category.number}
            </span>
            <span className="text-[10px] font-bold uppercase text-blue-500 bg-blue-500/10 rounded-full px-2.5 py-0.5 border border-blue-500/10">
              Category
            </span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{category.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{category.description}</p>
          <p className="text-sm text-gray-400 mt-3">{products.length} products found &middot; showing vendors in {cityName}</p>
        </div>
      </div>

      {/* Products Grid with Filter */}
      <CategoryProductGrid products={products} />
    </div>
  );
}
