"use client";

import { WHY_PMRG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function WhyChooseUs() {
  return (
    <section
      data-section-theme="light"
      className="section-light-grey section"
    >
      <div className="container-pmrg grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            theme="light"
            eyebrow="Why PMRG"
            title={
              <>
                Built for outcomes,{" "}
                <span className="text-gradient">governed by trust</span>
              </>
            }
            description="Technology creates capability. Governance converts capability into trust, accountability, and measurable outcomes. We help enterprises and institutions adopt technology with the right operating model, delivery discipline, and human capability to create sustainable impact."
          />

          <RevealGroup className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-light-line bg-light-line sm:grid-cols-2">
            {WHY_PMRG.map((item) => (
              <RevealItem key={item.title} as="div">
                <div className="h-full bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-line bg-blue-50 text-brand">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg-dark">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-dark-muted">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Right column: clean stat panel */}
        <Reveal delay={0.1} className="relative" variant="slide-up">
          <div className="sticky top-28 overflow-hidden rounded-xl border border-light-line bg-white shadow-card-light">
            <div className="border-b border-light-line p-8">
              <span className="eyebrow-light">At a glance</span>
              <h3 className="mt-4 text-xl font-semibold text-fg-dark">
                Trusted across domains &amp; institutions
              </h3>
            </div>
            <dl className="divide-y divide-light-line">
              {[
                { k: "10+ years", v: "Technology & consulting expertise" },
                { k: "8", v: "Platform products in portfolio" },
                { k: "6", v: "Industries served" },
                { k: "150+", v: "Projects delivered" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-6 p-6">
                  <dt className="text-sm text-fg-dark-muted">{row.v}</dt>
                  <dd className="font-display text-lg font-bold text-fg-dark">{row.k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
