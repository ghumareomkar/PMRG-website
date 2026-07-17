import type { Metadata } from "next";
import JobsInternshipLayout from "./JobsInternshipLayout";

export const metadata: Metadata = {
  title: "Jobs & Internship",
  description:
    "Join PMRG Solution. Explore open jobs and internship opportunities across engineering, AI, cloud, and design.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <JobsInternshipLayout />;
}
