import Link from "next/link";
import { Product } from "@/lib/data";
import Stars from "./Stars";

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const topBrand = product.brands.reduce((best, b) => (b.rating > best.rating ? b : best), product.brands[0]);

  return (
    <Link href={`/product/${product.id}`} className={`product-card block group ${featured ? "h-full" : ""}`}>
      {/* Image with gradient overlay — edge to edge */}
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
            featured ? "h-48 md:h-72 lg:h-80" : "h-48 md:h-44"
          }`}
          loading="lazy"
        />
        {/* Hover overlay with "View Details" */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
          <span className="text-white text-sm font-semibold flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
        {/* Brand count badge floating on image */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
          {product.brands.length} brands
        </div>
      </div>

      {/* Content — glass body */}
      <div className={`p-4 ${featured ? "md:p-5" : ""}`}>
        <h3 className={`font-semibold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors duration-300 ${
          featured ? "text-sm md:text-base" : "text-[13px]"
        }`}>
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <Stars rating={topBrand.rating} />
          <span className="text-[11px] text-gray-400">({topBrand.reviews})</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/[0.04]">
          <span className="text-[11px] text-gray-400 truncate mr-2">{topBrand.name}</span>
          <span className="text-[10px] font-bold text-blue-500 bg-blue-500/8 dark:bg-blue-500/10 px-2.5 py-1 rounded-full shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
