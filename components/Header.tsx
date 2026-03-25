"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useMemo } from "react";
import { categories, supportedCities, CityId, getProductsForCity, getVendorsForCity, slug as toSlug } from "@/lib/data";
import { useCity } from "@/context/CityContext";
import { useTheme } from "@/context/ThemeContext";

const comingSoonCities = ["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Kolkata"];

interface SearchResult {
  type: "product" | "category" | "brand" | "vendor";
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { city, setCity, cityName } = useCity();
  const { theme, toggleTheme } = useTheme();

  const allProducts = useMemo(() => getProductsForCity(city), [city]);
  const allVendors = useMemo(() => getVendorsForCity(city), [city]);

  // Close search dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Compute search suggestions
  const suggestions = useMemo((): SearchResult[] => {
    const q = search.toLowerCase().trim();
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
  }, [search, allProducts, allVendors, cityName]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setSearchFocused(false);
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case "category":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" />
          </svg>
        );
      case "vendor":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        );
      case "brand":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        );
    }
  };

  const typeLabel = (type: string) => {
    switch (type) {
      case "category": return "Category";
      case "vendor": return "Vendor";
      case "brand": return "Brand";
      default: return "Product";
    }
  };

  const typeColor = (type: string) => {
    switch (type) {
      case "category": return "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400";
      case "vendor": return "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400";
      case "brand": return "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400";
      default: return "bg-gray-50 dark:bg-[#0f172a] text-gray-600 dark:text-gray-400";
    }
  };

  const renderSearchBox = (isMobile: boolean) => (
    <div ref={isMobile ? undefined : searchRef} className={isMobile ? "relative mb-3" : "flex-1 max-w-xl hidden md:block relative"}>
      <form onSubmit={handleSearchSubmit}>
        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          className="search-input"
          placeholder="Search implants, brands, vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearchFocused(true)}
        />
      </form>

      {/* Live search dropdown */}
      {searchFocused && search.trim().length >= 2 && suggestions.length > 0 && !isMobile && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[420px] overflow-y-auto">
          {suggestions.map((s, i) => {
            const className = "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#1e293b] transition cursor-pointer border-b border-gray-100 dark:border-blue-900/20 last:border-0";
            const inner = (
              <>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${typeColor(s.type)}`}>
                  {typeIcon(s.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{s.label}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{s.sublabel}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${typeColor(s.type)}`}>
                  {typeLabel(s.type)}
                </span>
                {s.external && (
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                )}
              </>
            );
            const onClick = () => { setSearchFocused(false); setSearch(""); };

            return s.external ? (
              <a key={`${s.type}-${i}`} href={s.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
                {inner}
              </a>
            ) : (
              <Link key={`${s.type}-${i}`} href={s.href} onClick={onClick} className={className}>
                {inner}
              </Link>
            );
          })}
          <div
            className="px-4 py-2.5 text-center text-xs text-blue-600 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition"
            onClick={() => {
              setSearchFocused(false);
              router.push(`/search?q=${encodeURIComponent(search.trim())}`);
            }}
          >
            View all results for &quot;{search.trim()}&quot;
          </div>
        </div>
      )}

      {searchFocused && search.trim().length >= 2 && suggestions.length === 0 && !isMobile && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl shadow-2xl z-50 p-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">No results for &quot;{search.trim()}&quot;</p>
          <p className="text-xs text-gray-400 mt-1">Try searching for implants, brands, or vendors</p>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white dark:bg-[#0a1628] border-b border-gray-200 dark:border-blue-900/30 sticky top-0 z-50 transition-colors">
      {/* Top bar */}
      <div className="bg-blue-600 text-white text-center text-xs py-1.5 px-4">
        India&apos;s #1 Orthopaedic Implant Aggregator - Compare brands &amp; vendors across cities
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
            </svg>
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">Ortho<span className="text-blue-600">Aggregator</span></span>
          </div>
        </Link>

        {/* Location selector */}
        <div className="relative">
          <button
            onClick={() => setCityOpen(!cityOpen)}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#0f172a] hover:bg-gray-200 dark:hover:bg-[#1e293b] px-3 py-2 rounded-lg transition"
          >
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {cityName}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {cityOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setCityOpen(false)} />
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl shadow-xl py-2 z-50">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase text-gray-400 tracking-wider">Available</div>
                {supportedCities.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setCity(c.id as CityId); setCityOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition flex items-center gap-2 ${
                      city === c.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e293b]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {c.name}
                    {city === c.id && (
                      <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
                <div className="border-t border-gray-100 dark:border-blue-900/20 mt-1 pt-1">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase text-gray-400 tracking-wider">Coming Soon</div>
                  {comingSoonCities.map((name) => (
                    <div key={name} className="px-4 py-2 text-sm text-gray-400 flex items-center gap-2 cursor-not-allowed">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {name}
                      <span className="ml-auto text-[10px] bg-gray-100 dark:bg-[#1e293b] text-gray-400 px-1.5 py-0.5 rounded-full">Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Search with live suggestions */}
        {renderSearchBox(false)}

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#0f172a] transition"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          )}
        </button>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <div className="relative group">
            <button className="hover:text-blue-600 transition flex items-center gap-1">
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition"
                >
                  <span className="text-blue-500 font-semibold mr-2">{cat.number}.</span>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu toggle - hidden, bottom tabs used on mobile */}
      </div>

      {/* Mobile menu removed - bottom tab bar handles mobile navigation */}
    </header>
  );
}
