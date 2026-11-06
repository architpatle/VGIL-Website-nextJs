import ProductSingle from "@/pages/ProductSingle";

export default async function ProductSinglePage({ params }) {
  const { slug } = await params;

  return <ProductSingle slug={slug} />;
}