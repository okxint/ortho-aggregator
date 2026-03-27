import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - OrthoAggregator",
  description: "Transforming orthopaedic implant procurement across India's tier-2 and tier-3 cities.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-gray-700 dark:text-gray-300 font-medium">About</span>
      </nav>

      {/* Hero — gradient mesh background */}
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white mb-10 border border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-[#0a1628] dark:via-[#0d1b2a] dark:to-[#0a1628]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="hero-orb w-[300px] h-[300px] bg-cyan-400/15 top-[-20%] right-[-10%]" style={{ animationDelay: "0s" }} />
        <div className="hero-orb w-[200px] h-[200px] bg-blue-500/10 bottom-[-15%] left-[-5%]" style={{ animationDelay: "-10s" }} />
        <div className="relative">
          <span className="inline-flex items-center gap-2 bg-white/[0.1] dark:bg-white/[0.04] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/[0.08]">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Our Mission
          </span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 tracking-tight">
            Fixing the Broken Supply Chain<br />
            <span className="dark:text-blue-300">for Orthopaedic Implants in India</span>
          </h1>
          <p className="text-blue-100 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            We aggregate vendors, brands, and availability data to help hospitals and surgeons
            procure the right implants on time, at the right price, with zero ambiguity.
          </p>
        </div>
      </div>

      {/* The Problem */}
      <section className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-3 block">The Problem</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">A $2.35B market stuck in the pre-digital era</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            India&apos;s orthopaedic implant market is valued at <strong>$2.35 billion (2024)</strong> and
            projected to reach <strong>$4.95 billion by 2033</strong>, growing at a CAGR of 8.6%.
            Yet the procurement process remains fragmented, opaque, and riddled with inefficiencies
            that directly impact patient outcomes.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            <strong>70% of orthopaedic implants used in India are imported</strong>, passing through
            layers of distributors, sub-dealers, and local agents. In tier-2 and tier-3 cities like
            Pondicherry, hospitals face procurement lead times of <strong>7-14 days</strong> for
            routine implants. Emergency cases cannot wait that long.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The result? Surgeons compromise on brand preference, hospitals pay <strong>20-30% markups</strong> through
            informal channels, and patients bear the cost of a supply chain that was never designed for
            India&apos;s rapidly expanding orthopaedic surgery volume (&gt;1 million joint replacements
            expected annually by 2030).
          </p>
        </div>
      </section>

      {/* Market stats — glass cards with gradient numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
        {[
          { value: "$2.35B", label: "India Ortho Market (2024)" },
          { value: "70%", label: "Imported Implants" },
          { value: "20-30%", label: "Markup via Informal Channels" },
          { value: "7-14 days", label: "Avg. Procurement Lead Time" },
        ].map((s) => (
          <div key={s.label} className="glass-card text-center p-5 md:p-6 group">
            <p className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">{s.value}</p>
            <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Our Solution */}
      <section className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-3 block">Our Solution</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">The transparency layer for procurement</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          OrthoAggregator is building the transparency layer for orthopaedic implant procurement.
          We map every verified vendor and distributor in a city to the brands they carry -
          giving hospitals a single source of truth for availability, vendor reputation, and access.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              title: "Real-Time Vendor Mapping",
              desc: "We index verified orthopaedic suppliers city-by-city, mapping which brands each vendor carries. No more cold-calling five distributors.",
              icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
              gradient: "from-blue-500/15 to-cyan-500/10",
            },
            {
              title: "Brand Comparison",
              desc: "Compare DePuy Synthes, Stryker, Zimmer Biomet, and Indian brands like Meril, Siora, GPC side-by-side.",
              icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
              gradient: "from-blue-500/10 to-blue-400/5",
            },
            {
              title: "City-by-City Expansion",
              desc: "Starting with Pondicherry and Chennai, expanding to Bangalore, Hyderabad, and beyond. Hyperlocal data for hyperlocal needs.",
              icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
              gradient: "from-blue-500/10 to-blue-400/5",
            },
          ].map((item) => (
            <div key={item.title} className="rotating-border glass-card p-6 group">
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/[0.06]`}>
                  <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Now */}
      <section className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-3 block">Timing</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Why Now</h2>
        <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 glass-card">
          <div className="absolute inset-0 dot-grid opacity-[0.05]" />
          <div className="relative">
            <ul className="space-y-6 text-gray-700 dark:text-gray-300">
              {[
                { num: "01", text: <><strong>Ayushman Bharat</strong> is driving orthopaedic surgery volumes in tier-2/3 cities, but the supply chain hasn&apos;t caught up.</> },
                { num: "02", text: <><strong>Indian manufacturers</strong> (Meril, GPC, Siora) are closing the quality gap with MNCs at 40-60% lower price points - but discovery is still word-of-mouth.</> },
                { num: "03", text: <><strong>Regulatory tightening</strong> (Medical Devices Rules 2017, CDSCO oversight) is pushing the market toward traceable, compliant procurement channels.</> },
                { num: "04", text: <>India&apos;s ageing population (60+ cohort growing at 3.5% annually) will <strong>double orthopaedic procedure demand</strong> within the decade.</> },
              ].map((item) => (
                <li key={item.num} className="flex gap-5 items-start">
                  <span className="text-2xl font-extrabold gradient-text shrink-0 leading-tight w-10">{item.num}</span>
                  <span className="leading-relaxed text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500 mb-3 block">Vision</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Where we&apos;re headed</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We envision a future where any hospital in any Indian city can source the right orthopaedic implant
          within hours, not days. Where procurement decisions are based on transparent data - not on
          which distributor&apos;s sales rep walked in last.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          OrthoAggregator is the first step: aggregate supply, bring transparency, and let the market
          work as it should. From aggregation, we expand into procurement workflows, inventory management,
          and compliance tracking.
        </p>
      </section>

      {/* Premium CTA */}
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 text-center glass-card">
        <div className="absolute inset-0 dot-grid opacity-[0.05]" />
        <div className="hero-orb w-[200px] h-[200px] bg-blue-500/10 top-[-30%] right-[-10%]" style={{ animationDelay: "0s" }} />
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">Ready to explore?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-7 max-w-md mx-auto">Browse our catalog of 100+ orthopaedic implants with real vendor data from across India.</p>
          <Link href="/" className="btn-premium inline-flex">
            <span>Browse Implants</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
