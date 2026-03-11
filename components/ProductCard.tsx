import Link from "next/link";
import { Product } from "@/lib/data";
import Stars from "./Stars";

export default function ProductCard({ product }: { product: Product }) {
  const cheapest = product.brands.reduce((min, b) => (b.price < min.price ? b : min), product.brands[0]);
  const discount = Math.round(((cheapest.mrp - cheapest.price) / cheapest.mrp) * 100);

  return (
    <Link href={`/product/${product.id}`} className="product-card block">
      {/* Placeholder image */}
      <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      </div>

      <h3 className="font-semibold text-sm text-gray-900 leading-snug mb-1 line-clamp-2">
        {product.name}
      </h3>

      <p className="text-xs text-gray-500 mb-2">{product.brands.length} brands available</p>

      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-lg font-bold text-gray-900">
          ₹{cheapest.price.toLocaleString("en-IN")}
        </span>
        <span className="text-xs text-gray-400 line-through">
          ₹{cheapest.mrp.toLocaleString("en-IN")}
        </span>
        {discount > 0 && (
          <span className="text-xs font-semibold text-green-600">{discount}% off</span>
        )}
      </div>

      <div className="flex items-center gap-1.5">
        <Stars rating={cheapest.rating} />
        <span className="text-xs text-gray-500">({cheapest.reviews})</span>
      </div>

      <p className="text-[11px] text-gray-400 mt-1.5">Starting price &middot; {cheapest.name}</p>
    </Link>
  );
}
