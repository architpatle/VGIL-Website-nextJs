import jobs from "@/data/jobsData";
import CareerDetails from "@/pages/CareerDetails";
import JobSingle from "@/pages/JobSingle";
import { notFound } from "next/navigation";

export default async function CareerDynamicPage({ params }) {
  const { param } = await params;

  const isJobId = Object.prototype.hasOwnProperty.call(jobs, param);

  if (isJobId) {
    return <CareerDetails jobId={param} />;
  }

  return <JobSingle slug={param} />;
}