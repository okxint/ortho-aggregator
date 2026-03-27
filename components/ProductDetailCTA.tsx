"use client";

import Link from "next/link";
import { slug as toSlug } from "@/lib/data";

interface Props {
  vendorName: string;
  vendorUrl: string;
  vendorPhone?: string;
}

export default function ProductDetailCTA({ vendorName, vendorUrl, vendorPhone }: Props) {
  return (
    <div className="fixed bottom-[72px] left-0 right-0 z-40 md:hidden gradient-border-top safe-area-bottom">
      <div className="absolute inset-0 bg-white/80 dark:bg-[#030712]/85 backdrop-blur-2xl" />
      <div className="relative flex items-center gap-3 px-5 py-3.5">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Top vendor</p>
          <Link href={`/vendor/${toSlug(vendorName)}`} className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline truncate block">
            {vendorName}
          </Link>
        </div>
        {vendorPhone ? (
          <a
            href={`tel:${vendorPhone}`}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-green-500/20 active:scale-95 transition-all shrink-0"
          >
            Call Now
          </a>
        ) : (
          <Link
            href={`/vendor/${toSlug(vendorName)}`}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all shrink-0"
          >
            View Products
          </Link>
        )}
      </div>
    </div>
  );
}
