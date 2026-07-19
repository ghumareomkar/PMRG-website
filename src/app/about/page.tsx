import type { Metadata } from "next";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import { COMPANY, CORE_VALUES, WHO_WE_ARE_ROLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About PMRG Solution | AI-Led Technology & Transformation",
  description:
    "Learn how PMRG Solution combines AI, governance, domain expertise, and implementation capability to create measurable business and institutional outcomes.",
  alternates: { canonical: "/about" },
};

/** What we believe — principles from the content strategy. */
const BELIEFS = [
  "Capability without governance is an expensive liability. AI delivers intelligence; governance delivers trust, accountability, and measurable business outcomes.",
  "Transformation must be usable. A solution creates value only when people can adopt it, operate it, and improve it.",
  "Technology should amplify human judgement. We use AI to support decisions, not remove responsibility.",
  "Every engagement must create capability. Clients should be stronger, more self-sufficient, and more confident after working with us.",
  "Outcomes matter more than activity. We define success through business impact, adoption, predictability, efficiency, experience, and growth.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — light theme */}
      <PageHero
        eyebrow="About PMRG Solution"
        title={
          <>
            AI-led transformation for{" "}
            <span className="text-gradient">businesses &amp; institutions</span>
          </>
        }
        description="PMRG Solution is where AI, governance, domain expertise, and human capability come together to convert complex challenges into scalable outcomes."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-600">Founded {COMPANY.foundedYear}</span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">8 Platform Products</span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line bg-light-bg-slate px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">150+ Projects Delivered</span>
        </div>
      </PageHero>

      {/* About Us — white */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow-light">About Us</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-fg-dark sm:text-4xl">
              Helping businesses and institutions become more intelligent, connected, and future-ready
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-dark-muted">
              <p>
                PMRG Solution is an AI-led technology, consulting, and transformation company focused on helping businesses and institutions become more intelligent, connected, accountable, and future-ready.
              </p>
              <p>
                We design and implement practical solutions across AI-assisted governance, agile planning, data center and IT operations, customer lifecycle management, telecom BSS/OSS, enterprise platforms, smart campuses, incubation ecosystems, and structured industry-readiness programs.
              </p>
              <p>
                Our approach goes beyond software deployment. We combine domain understanding, solution architecture, program governance, product thinking, implementation capability, and stakeholder enablement. This allows us to address the full transformation journey — from defining the problem and designing the operating model to delivering the solution, integrating it into the client environment, and helping teams adopt it successfully.
              </p>
              <p>
                At PMRG Solution, innovation is meaningful only when it improves decisions, simplifies work, strengthens accountability, creates measurable value, and enables people to perform better. That is why our solutions are designed around business outcomes rather than technology alone.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
              <GlassCard theme="light" className="p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">10+</div>
                <div className="mt-1 text-sm text-fg-dark-muted">Years of expertise</div>
              </GlassCard>
              <GlassCard theme="light" className="mt-8 p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">8</div>
                <div className="mt-1 text-sm text-fg-dark-muted">Platform products</div>
              </GlassCard>
              <GlassCard theme="light" className="p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">6</div>
                <div className="mt-1 text-sm text-fg-dark-muted">Industries served</div>
              </GlassCard>
              <GlassCard theme="light" className="mt-8 p-6">
                <div className="font-display text-4xl font-extrabold text-gradient">150+</div>
                <div className="mt-1 text-sm text-fg-dark-muted">Projects delivered</div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Are — light grey */}
      <section data-section-theme="light" className="section-light-grey section">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Who We Are"
            title={
              <>
                A multidisciplinary team built for{" "}
                <span className="text-gradient">end-to-end delivery</span>
              </>
            }
            description="We are solution architects, technology specialists, program leaders, designers, domain consultants, educators, mentors, and implementation professionals. Together, we bring strategic thinking and hands-on execution into one delivery model."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {WHO_WE_ARE_ROLES.map((role) => (
              <RevealItem key={role.title}>
                <GlassCard theme="light" className="h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-light-line bg-blue-50 text-brand">
                    <Icon name={role.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-fg-dark">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">{role.description}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Mission & Vision — white */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard theme="light" strong className="relative h-full overflow-hidden p-9">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-brand">
                Our Vision
              </h3>
              <p className="relative mt-3 text-xl font-semibold leading-snug text-fg-dark sm:text-2xl">
                To build a trusted ecosystem where artificial intelligence, governance, technology, and human capability work together to make businesses and institutions more intelligent, accountable, inclusive, and future-ready.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard theme="light" strong className="relative h-full overflow-hidden p-9">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-brand">
                Our Mission
              </h3>
              <p className="relative mt-3 text-xl font-semibold leading-snug text-fg-dark sm:text-2xl">
                To design, implement, and operationalize practical AI-led solutions that simplify complexity, improve decision-making, strengthen governance, enhance customer and stakeholder experience, and build sustainable capability within organizations and institutions.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* What We Believe — light grey */}
      <section data-section-theme="light" className="section-light-grey section">
        <div className="container-pmrg grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow-light">What We Believe</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-fg-dark sm:text-4xl">
              The principles behind our <span className="text-gradient">approach</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-dark-muted">
              These beliefs shape how we design solutions, engage with clients, and measure success.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {BELIEFS.map((belief, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-light-line bg-white p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Heart className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-fg-dark-muted">{belief}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values — white */}
      <section data-section-theme="light" className="section-light section relative">
        <div className="container-pmrg">
          <SectionHeading
            theme="light"
            eyebrow="Core Values"
            title={
              <>
                The principles that <span className="text-gradient">guide every decision</span>
              </>
            }
            description="These aren't posters on a wall — they're the operating system behind how we hire, build, and deliver."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {CORE_VALUES.map((value) => (
              <RevealItem key={value.title}>
                <GlassCard theme="light" className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fg-dark">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                    {value.description}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA — blue gradient */}
      <section data-section-theme="dark" className="section-gradient-cta relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-20"
        />
        <div className="container-pmrg relative text-center">
          <Reveal variant="slide-up">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">Ready to work with us?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Let&apos;s discuss how PMRG Solution can help you build intelligent, governed, and scalable ecosystems.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg" className="bg-white text-brand-deep hover:bg-white/90 hover:text-brand-deep">
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
