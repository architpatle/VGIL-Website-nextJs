import InvestorSingle from "@/pages/InvestorSingle";

export default async function InvestorSinglePage({ params }) {
    const { slug } = await params;

    return <InvestorSingle slug={slug} />;
}