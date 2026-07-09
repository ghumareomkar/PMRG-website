import type { Metadata } from "next";
import { ArrowRight, Target, Eye } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import { COMPANY, CORE_VALUES, LEADERSHIP, TIMELINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PMRG Solution empowers enterprises with intelligent, scalable, and future-ready technology. Learn our story, mission, values, and team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Building the future of{" "}
            <span className="text-gradient">intelligent enterprise</span> software
          </>
        }
        description="Since 2014, we've helped telecom operators and enterprises turn ambitious technology goals into production reality — one platform at a time."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Badge variant="mint">Founded {COMPANY.foundedYear}</Badge>
          <Badge>15+ Countries</Badge>
          <Badge variant="violet">150+ Projects Delivered</Badge>
        </div>
      </PageHero>

      {/* Company story */}
      <section className="section">
        <div className="container-pmrg grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              From a 4-person BSS consultancy to a global AI-driven software company
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted">
              <p>
                PMRG Solution began in {COMPANY.foundedYear} in Gurugram as a small team
                obsessed with telecom billing systems. What started as a niche BSS
                consultancy quickly grew as operators asked us to solve harder problems —
                modernization, CRM, and eventually AI.
              </p>
              <p>
                Today we're a cross-disciplinary team of engineers, data scientists, and
                designers spanning four global delivery centers, building platforms that
                power millions of subscribers and billions of transactions.
              </p>
              <p>
                But our founding principle hasn't changed: build durable, intelligent
                software that delivers measurable business outcomes — and treat every
                client as a long-term partner.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
              <GlassCard className="p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">10+</div>
                <div className="mt-1 text-sm text-fg-muted">Years of telecom expertise</div>
              </GlassCard>
              <GlassCard className="mt-8 p-6">
                <div className="font-display text-4xl font-extrabold text-gradient-mint">4</div>
                <div className="mt-1 text-sm text-fg-muted">Global delivery centers</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">300+</div>
                <div className="mt-1 text-sm text-fg-muted">Engineers & specialists</div>
              </GlassCard>
              <GlassCard className="mt-8 p-6">
                <div className="font-display text-4xl font-extrabold text-gradient-mint">∞</div>
                <div className="mt-1 text-sm text-fg-muted">Commitment to outcomes</div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-pmrg grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard strong className="relative h-full overflow-hidden p-9">
              <GradientOrb className="-right-16 -top-16" size={240} />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/soft text-accent">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Our Mission
              </h3>
              <p className="relative mt-3 text-2xl font-semibold leading-snug text-fg">
                To empower enterprises with intelligent, scalable, and future-ready
                technology solutions.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard strong className="relative h-full overflow-hidden p-9">
              <GradientOrb className="-right-16 -top-16" from="#7B2FFF" to="#00F5A0" size={240} />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/soft text-accent">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Our Vision
              </h3>
              <p className="relative mt-3 text-2xl font-semibold leading-snug text-fg">
                To be the global leader in AI-driven telecom and enterprise digital
                transformation.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section relative">
        <div className="container-pmrg">
          <SectionHeading
            eyebrow="Core Values"
            title={
              <>
                The principles that <span className="text-gradient">guide every decision</span>
              </>
            }
            description="These aren't posters on a wall — they're the operating system behind how we hire, build, and deliver."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {CORE_VALUES.map((value) => (
              <RevealItem key={value.title}>
                <GlassCard className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong bg-white/[0.02] text-accent">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {value.description}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="container-pmrg">
          <SectionHeading
            eyebrow="Our Journey"
            title={
              <>
                Milestones along the <span className="text-gradient">way</span>
              </>
            }
          />
          <div className="mx-auto mt-16 max-w-3xl">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className={`relative flex gap-8 pb-12 last:pb-0 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"}`}>
                  {/* node */}
                  <div className="absolute left-1/2 top-1.5 z-10 h-4 w-4 -translate-x-1/2">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/soft" />
                  </div>
                  {/* card */}
                  <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <GlassCard className="p-6">
                      <span className="font-display text-2xl font-extrabold text-gradient">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-fg">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                  <div className="w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container-pmrg">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The people <span className="text-gradient">steering the ship</span>
              </>
            }
            description="A leadership team with decades of combined experience across telecom, cloud, and AI."
          />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
            {LEADERSHIP.map((person) => (
              <RevealItem key={person.name}>
                <GlassCard className="group h-full overflow-hidden p-6 text-center">
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/20 font-display text-2xl font-bold text-gradient">
                    {person.initials}
                    <span className="absolute inset-0 rounded-full ring-1 ring-line-strong transition-all group-hover:ring-accent/40" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{person.name}</h3>
                  <p className="mt-0.5 text-xs text-fg-muted">{person.role}</p>
                  <div className="mt-3 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-2.5 py-1 text-[10px] text-fg-subtle transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      in / LinkedIn
                    </span>
                  </div>
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
              <GradientOrb className="-bottom-20 -right-20" from="#7B2FFF" to="#00F5A0" size={300} />
              <h2 className="relative text-3xl font-bold sm:text-4xl">Want to build something that lasts?</h2>
              <p className="relative mx-auto mt-3 max-w-xl text-fg-muted">
                Let's talk about how PMRG can help you architect your next decade of growth.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  Get in Touch
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
