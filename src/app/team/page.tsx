import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { Reveal } from "@/components/animations/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Our Team | PMRG Solution",
  description:
    "Meet the people behind PMRG Solution — engineers, designers, and strategists building the future of intelligent enterprise.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            The people behind{" "}
            <span className="text-gradient">PMRG Solution</span>
          </>
        }
        description="Engineers, designers, and strategists committed to building technology that makes enterprises smarter."
      />

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <Reveal>
            <GlassCard theme="light" strong className="mx-auto max-w-2xl p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-fg-dark">
                Coming Soon
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                We&apos;re putting together the profiles of our talented team.
                Check back soon to meet the people driving innovation at PMRG.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
