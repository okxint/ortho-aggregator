"use client";

import Link from "next/link";
import { Category, getCategoryProducts } from "@/lib/data";
import CategoryProductGrid from "./CategoryProductGrid";
import { useCity } from "@/context/CityContext";

export default function CategoryPageClient({ category }: { category: Category }) {
  const { city, cityName } = useCity();
  const products = getCategoryProducts(category.id, city);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span>/</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-blue-900/30 p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full px-3 py-1">
            Category {category.number}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
        <p className="text-sm text-gray-400 mt-3">{products.length} products found &middot; showing vendors in {cityName}</p>
      </div>

      {/* Products Grid with Filter */}
      <CategoryProductGrid products={products} />
    </div>
  );
}
