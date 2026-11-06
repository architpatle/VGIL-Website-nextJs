import ResourceSingle from "@/pages/ResourceSingle";

export default async function ResourceSinglePage({ params }) {
  const { slug } = await params;

  return <ResourceSingle slug={slug} />;
}
