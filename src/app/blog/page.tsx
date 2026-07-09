import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights on AI/ML, telecom BSS/OSS, digital transformation, cloud, and industry trends from the PMRG team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking from the <span className="text-gradient">edge of enterprise tech</span>
          </>
        }
        description="Deep dives, playbooks, and field notes on AI, telecom, cloud, and digital transformation — written by the engineers doing the work."
      />
      <div className="pb-28">
        <div className="container-pmrg">
          <BlogGrid />
        </div>
      </div>
    </>
  );
}
