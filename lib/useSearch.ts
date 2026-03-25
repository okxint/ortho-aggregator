"use client";

import { useMemo } from "react";
import { categories, getProductsForCity, getVendorsForCity, slug as toSlug, CityId } from "@/lib/data";

export interface SearchResult {
  type: "product" | "category" | "brand" | "vendor";
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
}

export function useSearch(query: string, city: CityId, cityName: string): SearchResult[] {
  const allProducts = useMemo(() => getProductsForCity(city), [city]);
  const allVendors = useMemo(() => getVendorsForCity(city), [city]);

  return useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) return [];

    const results: SearchResult[] = [];

    // Categories
    categories.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q)) {
        results.push({ type: "category", label: cat.name, sublabel: `Category ${cat.number}`, href: `/category/${cat.id}` });
      }
    });

    // Vendors - link to vendor page
    allVendors.forEach((v) => {
      if (v.name.toLowerCase().includes(q)) {
        results.push({ type: "vendor", label: v.name, sublabel: cityName, href: `/vendor/${toSlug(v.name)}` });
      }
    });

    // Brands (deduplicated)
    const seenBrands = new Set<string>();
    allProducts.forEach((p) => {
      p.brands.forEach((b) => {
        if (!seenBrands.has(b.name) && b.name.toLowerCase().includes(q)) {
          seenBrands.add(b.name);
          results.push({ type: "brand", label: b.name, sublabel: `${b.rating} stars - ${b.reviews} reviews`, href: `/search?q=${encodeURIComponent(b.name)}` });
        }
      });
    });

    // Products (limit to first 8)
    let productCount = 0;
    for (const p of allProducts) {
      if (productCount >= 8) break;
      if (
        p.name.toLowerCase().includes(q) ||
        p.brands.some((b) => b.name.toLowerCase().includes(q))
      ) {
        const cat = categories.find((c) => c.id === p.categoryId);
        results.push({ type: "product", label: p.name, sublabel: cat?.name || "", href: `/product/${p.id}` });
        productCount++;
      }
    }

    return results.slice(0, 12);
  }, [query, allProducts, allVendors, cityName]);
}
