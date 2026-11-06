import ServiceSingle from "@/pages/ServiceSingle";

export default async function ServiceSinglePage({ params }) {
  const { slug } = await params;

  return <ServiceSingle slug={slug} />;
}