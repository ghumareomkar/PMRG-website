import type { Metadata } from "next";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import JobsList from "./JobsList";
import { BENEFITS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PMRG Solution. Explore open roles across engineering, AI, cloud, and design — and the benefits of building with us.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the future of{" "}
            <span className="text-gradient">intelligent enterprise</span> — with us
          </>
        }
        description="We're a remote-first team of engineers, scientists, and designers shaping how telecom and enterprise companies use AI. Come build with us."
      >
        <Button href="#openings" size="lg">
          View Open Roles
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </PageHero>

      {/* Culture */}
      <section className="section">
        <div className="container-pmrg grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Culture</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              High talent density, <span className="text-gradient">low ego</span>, real ownership
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted">
              <p>
                We hire senior, curious people and trust them to do their best work. No
                micromanagement, no politics — just clear ownership, great teammates, and
                hard problems worth solving.
              </p>
              <p>
                Async by default, remote-first by design, and global by choice. You'll work
                with people across four continents on systems that matter.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Remote-first", v: "Work from anywhere" },
                { k: "300+", v: "Teammates globally" },
                { k: "4", v: "Delivery centers" },
                { k: "94%", v: "Would refer a friend" },
              ].map((stat, i) => (
                <GlassCard key={stat.k} className={i % 2 === 1 ? "mt-6 p-6" : "p-6"}>
                  <div className="font-display text-3xl font-extrabold text-gradient">
                    {stat.k}
                  </div>
                  <div className="mt-1 text-sm text-fg-muted">{stat.v}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="section scroll-mt-28">
        <div className="container-pmrg">
          <SectionHeading
            align="left"
            eyebrow="Open Positions"
            title={
              <>
                Find your <span className="text-gradient">next role</span>
              </>
            }
            description="Filter by team to find the right fit. Don't see your role? We're always open to exceptional people."
          />
          <div className="mt-10">
            <JobsList />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section relative">
        <div className="container-pmrg">
          <SectionHeading
            eyebrow="Benefits & Perks"
            title={
              <>
                We invest in <span className="text-gradient">our people</span>
              </>
            }
            description="Competitive compensation, meaningful equity, and the support you need to do the best work of your career."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {BENEFITS.map((benefit) => (
              <RevealItem key={benefit.title}>
                <GlassCard className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong bg-white/[0.02] text-accent">
                    <Icon name={benefit.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {benefit.description}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container-pmrg">
          <Reveal>
            <GlassCard strong className="relative overflow-hidden p-10 text-center sm:p-14">
              <GradientOrb className="-left-20 -top-20" size={300} />
              <h2 className="relative text-3xl font-bold sm:text-4xl">
                Don't see the right role?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-fg-muted">
                Send us your story. We hire for trajectory, not just job descriptions.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  Introduce Yourself
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
