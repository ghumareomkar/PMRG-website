import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CaseStudiesGrid from "./CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how PMRG Solution delivered measurable outcomes across telecom, finance, healthcare, e-commerce, and energy.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Real platforms. <span className="text-gradient">Measurable outcomes.</span>
          </>
        }
        description="A selection of engagements where we turned complex problems into production systems with quantifiable results."
      />
      <section data-section-theme="light" className="section-light pb-28">
        <div className="container-pmrg">
          <CaseStudiesGrid />
        </div>
      </section>
    </>
  );
}
