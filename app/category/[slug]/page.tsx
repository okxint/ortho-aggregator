import { categories, getCategory } from "@/lib/data";
import { notFound } from "next/navigation";
import CategoryPageClient from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} - OrthoAggregator`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return <CategoryPageClient category={category} />;
}
