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
    <div className="fixed bottom-16 left-0 right-0 z-40 md:hidden bg-white dark:bg-[#0a1628] border-t border-gray-200 dark:border-blue-900/30 px-4 py-3 safe-area-bottom">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">Top vendor</p>
          <Link href={`/vendor/${toSlug(vendorName)}`} className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline truncate block">
            {vendorName}
          </Link>
        </div>
        {vendorPhone ? (
          <a
            href={`tel:${vendorPhone}`}
            className="bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-700 active:scale-95 transition-all shrink-0"
          >
            Call Now
          </a>
        ) : (
          <Link
            href={`/vendor/${toSlug(vendorName)}`}
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shrink-0"
          >
            View Products
          </Link>
        )}
      </div>
    </div>
  );
}
