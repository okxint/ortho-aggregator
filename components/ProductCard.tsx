import Link from "next/link";
import { Product } from "@/lib/data";
import Stars from "./Stars";

export default function ProductCard({ product }: { product: Product }) {
  const topBrand = product.brands.reduce((best, b) => (b.rating > best.rating ? b : best), product.brands[0]);

  return (
    <Link href={`/product/${product.id}`} className="product-card block">
      {/* Product image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
        loading="lazy"
      />

      <h3 className="font-semibold text-sm text-gray-900 dark:text-white leading-snug mb-1 line-clamp-2">
        {product.name}
      </h3>

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {product.brands.length} brands &middot; {product.brands.reduce((sum, b) => sum + b.vendors.length, 0)} vendors
      </p>

      <div className="flex items-center gap-1.5 mb-1.5">
        <Stars rating={topBrand.rating} />
        <span className="text-xs text-gray-500 dark:text-gray-400">({topBrand.reviews})</span>
      </div>

      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[11px] text-gray-400 dark:text-gray-500">Top: {topBrand.name}</span>
        <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
          Call for availability
        </span>
      </div>
    </Link>
  );
}
