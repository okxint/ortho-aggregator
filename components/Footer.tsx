import Link from "next/link";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 dark:bg-[#030712] text-gray-300 mt-16 border-t border-gray-800 dark:border-white/[0.04]">
      {/* Gradient top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />

      {/* Dot grid pattern bg */}
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg">Ortho<span className="gradient-text">Aggregator</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              India&apos;s largest orthopaedic implant comparison platform.
              Compare brands, vendors, and specifications for 100+ implants.
            </p>
            {/* Social / badges */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5 font-medium">Built with Next.js</span>
              <span className="text-[10px] text-gray-500 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1.5 font-medium">Tailwind CSS</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">Categories</h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">More</h3>
            <ul className="space-y-2.5">
              {categories.slice(6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.15em]">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-blue-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Pondicherry, India
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0 text-blue-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@orthoaggregator.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} OrthoAggregator. All rights reserved. For informational purposes only.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-600">Made in India</span>
            <span className="text-gray-700">&middot;</span>
            <span className="text-[10px] text-gray-600">Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
