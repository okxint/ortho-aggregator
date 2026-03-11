import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategory, getCategoryProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} — OrthoAggregator`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getCategoryProducts(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-bold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
            Category {category.number}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
        <p className="text-gray-500">{category.description}</p>
        <p className="text-sm text-gray-400 mt-3">{products.length} products found</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
