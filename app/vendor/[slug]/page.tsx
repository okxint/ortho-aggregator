"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getVendorBySlug, getVendorProducts, getCategory, slug as toSlug } from "@/lib/data";
import { useCity } from "@/context/CityContext";
import Stars from "@/components/Stars";

export default function VendorPage() {
  const params = useParams();
  const vendorSlug = params.slug as string;
  const { city, cityName } = useCity();

  const vendor = getVendorBySlug(vendorSlug, city);
  if (!vendor) notFound();

  const products = getVendorProducts(vendor.name, city);

  // Group products by category
  const grouped = new Map<string, typeof products>();
  for (const product of products) {
    const existing = grouped.get(product.categoryId) || [];
    existing.push(product);
    grouped.set(product.categoryId, existing);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span>/</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{vendor.name}</span>
      </nav>

      {/* Vendor Header */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-blue-900/30 p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{vendor.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Orthopaedic implant vendor in {cityName}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-600">{products.length}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Products</p>
              </div>
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-green-600">{grouped.size}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Categories</p>
              </div>
              <div className="bg-gray-50 dark:bg-[#1e293b] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {new Set(products.flatMap((p) => p.brands.filter((b) => b.vendors.some((v) => v.name === vendor.name)).map((b) => b.name))).size}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Brands Supplied</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {vendor.phone && (
                <a
                  href={`tel:${vendor.phone}`}
                  className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-700 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call for Stock Availability
                </a>
              )}
              <a
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="space-y-8">
        {Array.from(grouped.entries()).map(([categoryId, categoryProducts]) => {
          const category = getCategory(categoryId);
          return (
            <div key={categoryId}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category?.name || categoryId}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{categoryProducts.length} products</p>
                </div>
                {category && (
                  <Link href={`/category/${category.id}`} className="text-sm text-blue-600 hover:underline">
                    View all
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryProducts.map((product) => {
                  const relevantBrands = product.brands.filter((b) =>
                    b.vendors.some((v) => v.name === vendor.name)
                  );
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl p-4 hover:border-blue-500 transition group"
                    >
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 transition mb-2">
                        {product.name}
                      </h3>
                      <div className="space-y-1.5">
                        {relevantBrands.map((brand) => (
                          <div key={brand.name} className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 dark:text-gray-300">{brand.name}</span>
                            <div className="flex items-center gap-1">
                              <Stars rating={brand.rating} size="sm" />
                              <span className="text-[10px] text-gray-400">({brand.reviews})</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-100 dark:border-blue-900/30">
                        <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Call for stock availability</span>
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
