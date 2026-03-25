"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";

export default function CategoryProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg font-medium">No products in this category</p>
        </div>
      )}
    </>
  );
}
