"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCity } from "@/context/CityContext";
import { useSearch, SearchResult } from "@/lib/useSearch";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSearchOverlay({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { city, cityName } = useCity();
  const suggestions = useSearch(query, city, cityName);

  // Lock body scroll and focus input when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = () => {
    onClose();
    setQuery("");
  };

  const typeColor = (type: string) => {
    switch (type) {
      case "category": return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400";
      case "vendor": return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
      case "brand": return "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
      default: return "bg-gray-100 dark:bg-[#1e293b] text-gray-600 dark:text-gray-400";
    }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case "category":
        return <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" />;
      case "vendor":
        return <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></>;
      case "brand":
        return <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />;
      default:
        return <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />;
    }
  };

  const renderResult = (s: SearchResult, i: number) => {
    const inner = (
      <div className="flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 dark:active:bg-[#1e293b] transition">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${typeColor(s.type)}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            {typeIcon(s.type)}
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{s.label}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{s.sublabel}</p>
        </div>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    );

    if (s.external) {
      return (
        <a key={`${s.type}-${i}`} href={s.href} target="_blank" rel="noopener noreferrer" onClick={handleSelect}>
          {inner}
        </a>
      );
    }
    return (
      <Link key={`${s.type}-${i}`} href={s.href} onClick={handleSelect}>
        {inner}
      </Link>
    );
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white dark:bg-[#030712] md:hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 border-b border-gray-100 dark:border-blue-900/30">
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1e293b] transition shrink-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1 relative">
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search implants, brands, vendors..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-blue-900/30 rounded-xl text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="overflow-y-auto h-[calc(100vh-72px)]">
        {query.trim().length < 2 && (
          <div className="px-4 py-12 text-center">
            <svg className="w-12 h-12 text-gray-200 dark:text-gray-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <p className="text-sm text-gray-400 dark:text-gray-500">Search for implants, brands, or vendors</p>
            <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">Showing results for {cityName}</p>
          </div>
        )}

        {query.trim().length >= 2 && suggestions.length === 0 && (
          <div className="px-4 py-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No results for &quot;{query.trim()}&quot;</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try a different search term</p>
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="divide-y divide-gray-50 dark:divide-blue-900/20">
            {suggestions.map((s, i) => renderResult(s, i))}
          </div>
        )}
      </div>
    </div>
  );
}
