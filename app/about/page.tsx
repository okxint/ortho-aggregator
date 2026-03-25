import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - OrthoAggregator",
  description: "Transforming orthopaedic implant procurement across India's tier-2 and tier-3 cities.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span>/</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">About</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-white mb-10">
        <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
          Our Mission
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Fixing the Broken Supply Chain<br />
          for Orthopaedic Implants in India
        </h1>
        <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
          We aggregate vendors, brands, and availability data to help hospitals and surgeons
          procure the right implants on time, at the right price, with zero ambiguity.
        </p>
      </div>

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            India&apos;s orthopaedic implant market is valued at <strong>$2.35 billion (2024)</strong> and
            projected to reach <strong>$4.95 billion by 2033</strong>, growing at a CAGR of 8.6%.
            Yet the procurement process remains stuck in the pre-digital era - fragmented,
            opaque, and riddled with inefficiencies that directly impact patient outcomes.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            <strong>70% of orthopaedic implants used in India are imported</strong>, passing through
            layers of distributors, sub-dealers, and local agents. In tier-2 and tier-3 cities like
            Pondicherry, hospitals face procurement lead times of <strong>7–14 days</strong> for
            routine implants. Emergency cases - trauma, fractures - cannot wait that long.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The result? Surgeons compromise on brand preference, hospitals pay <strong>20–30% markups</strong> through
            informal channels, and patients bear the cost of a supply chain that was never designed for
            India&apos;s rapidly expanding orthopaedic surgery volume (&gt;1 million joint replacements
            expected annually by 2030).
          </p>
        </div>
      </section>

      {/* Market stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "$2.35B", label: "India Ortho Market (2024)" },
          { value: "70%", label: "Imported Implants" },
          { value: "20-30%", label: "Markup via Informal Channels" },
          { value: "7-14 days", label: "Avg. Procurement Lead Time" },
        ].map((s) => (
          <div key={s.label} className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-blue-900/30 p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{s.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Our Solution */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          OrthoAggregator is building the transparency layer for orthopaedic implant procurement.
          We map every verified vendor and distributor in a city to the brands they carry -
          giving hospitals a single source of truth for availability, vendor reputation, and access.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Real-Time Vendor Mapping",
              desc: "We index verified orthopaedic suppliers city-by-city, mapping which brands each vendor carries. No more cold-calling five distributors to find a DePuy Synthes locking plate.",
              icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
            },
            {
              title: "Brand Comparison at a Glance",
              desc: "Compare DePuy Synthes, Stryker, Zimmer Biomet, and Indian brands like Meril, Siora, GPC side-by-side. Ratings, reviews, and local availability in one view.",
              icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
            },
            {
              title: "City-by-City Expansion",
              desc: "Starting with Pondicherry and Chennai, expanding to Bangalore, Hyderabad, and beyond. Hyperlocal data for hyperlocal procurement needs.",
              icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-blue-900/30 p-6">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Now */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Now</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#0c2340] dark:to-[#0f172a] rounded-2xl p-6 md:p-8">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">01.</span>
              <span><strong>Ayushman Bharat</strong> is driving orthopaedic surgery volumes in tier-2/3 cities, but the supply chain hasn&apos;t caught up.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">02.</span>
              <span><strong>Indian manufacturers</strong> (Meril, GPC, Siora) are closing the quality gap with MNCs at 40-60% lower price points - but discovery is still word-of-mouth.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">03.</span>
              <span><strong>Regulatory tightening</strong> (Medical Devices Rules 2017, CDSCO oversight) is pushing the market toward traceable, compliant procurement channels.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold shrink-0">04.</span>
              <span>India&apos;s ageing population (60+ cohort growing at 3.5% annually) will <strong>double orthopaedic procedure demand</strong> within the decade.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We envision a future where any hospital in any Indian city can source the right orthopaedic implant
          within hours, not days. Where procurement decisions are based on transparent data - not on
          which distributor&apos;s sales rep walked in last. Where patient outcomes improve because surgeons
          get the implant they trust, when they need it.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          OrthoAggregator is the first step: aggregate supply, bring transparency, and let the market
          work as it should. From aggregation, we expand into procurement workflows, inventory management,
          and compliance tracking - building the operating system for orthopaedic supply chains in India.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-blue-900/30 p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to explore?</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Browse our catalog of 100+ orthopaedic implants with real vendor data.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Implants
        </Link>
      </div>
    </div>
  );
}
