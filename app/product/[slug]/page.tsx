import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct, getCategory } from "@/lib/data";
import Stars from "@/components/Stars";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Compare Prices | OrthoAggregator`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categoryId);
  const sortedBrands = [...product.brands].sort((a, b) => a.price - b.price);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.id}`} className="text-blue-600 hover:underline">
              {category.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-700 font-medium">{product.name}</span>
      </nav>

      {/* Product Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image placeholder */}
          <div className="w-full md:w-72 h-56 shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>

          {/* Info */}
          <div>
            {category && (
              <Link
                href={`/category/${category.id}`}
                className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-3 hover:bg-blue-100 transition"
              >
                {category.name}
              </Link>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-gray-900">
                  ₹{sortedBrands[0].price.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-gray-500">Starting from</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-600">{product.brands.length}</p>
                <p className="text-xs text-gray-500">Brands available</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {product.brands.filter((b) => b.inStock).length}
                </p>
                <p className="text-xs text-gray-500">In stock</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-50 text-green-700 font-medium px-3 py-1.5 rounded-full">Surgical Grade</span>
              <span className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1.5 rounded-full">CE Certified</span>
              <span className="text-xs bg-purple-50 text-purple-700 font-medium px-3 py-1.5 rounded-full">ISO 13485</span>
              <span className="text-xs bg-amber-50 text-amber-700 font-medium px-3 py-1.5 rounded-full">Titanium / SS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Comparison */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Compare Brands &amp; Prices</h2>
        <p className="text-sm text-gray-500 mb-5">
          {sortedBrands.length} brands listed — sorted by price (lowest first)
        </p>

        <div className="space-y-3">
          {sortedBrands.map((brand, i) => {
            const discount = Math.round(((brand.mrp - brand.price) / brand.mrp) * 100);
            return (
              <div key={brand.name} className="brand-row flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Rank */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    i === 0 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {i + 1}
                  </div>

                  {/* Brand info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-gray-900">{brand.name}</span>
                      {i === 0 && (
                        <span className="text-[10px] font-bold uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Best Price
                        </span>
                      )}
                      {brand.inStock ? (
                        <span className="text-[10px] font-bold uppercase bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                          In Stock
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase bg-red-50 text-red-600 px-2 py-0.5 rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <Stars rating={brand.rating} size="sm" />
                    <span className="text-xs text-gray-400 ml-1">({brand.reviews} reviews)</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4 sm:text-right">
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      ₹{brand.price.toLocaleString("en-IN")}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 line-through">
                        MRP ₹{brand.mrp.toLocaleString("en-IN")}
                      </span>
                      {discount > 0 && (
                        <span className="text-xs font-semibold text-green-600">{discount}% off</span>
                      )}
                    </div>
                  </div>
                  <button
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition shrink-0 ${
                      brand.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!brand.inStock}
                  >
                    {brand.inStock ? "Get Quote" : "Unavailable"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Material", value: "Surgical Grade SS 316L / Titanium" },
            { label: "Finish", value: "Electro-polished" },
            { label: "Certification", value: "CE, ISO 13485, FDA 510(k)" },
            { label: "Sterilization", value: "ETO / Gamma Ray" },
            { label: "Sizes Available", value: "Multiple (varies by brand)" },
            { label: "Packaging", value: "Individual sterile pack" },
          ].map((spec) => (
            <div key={spec.label} className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">{spec.label}</span>
              <span className="text-sm font-medium text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
