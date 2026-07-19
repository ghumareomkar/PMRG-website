import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";

export default function Hero() {
  return (
    <section
      data-section-theme="dark"
      className="section-dark relative overflow-hidden"
    >
      {/* Animated gradient orbs for depth */}
      <GradientOrb
        color="blue"
        size={800}
        animate
        className="-left-40 -top-40"
      />
      <GradientOrb
        color="cyan"
        size={600}
        animate
        className="-right-32 top-20"
      />
      <GradientOrb
        color="indigo"
        size={500}
        animate
        className="bottom-0 left-1/3"
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-100 mask-fade-y"
      />

      {/* Decorative glow ring behind hero text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(37,99,235,0.15) 25%, transparent 50%, rgba(99,102,241,0.12) 75%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-pmrg relative flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        <Reveal variant="fade-in">
          <span className="eyebrow">AI-led · Outcome-driven · Human-accountable</span>
        </Reveal>

        <Reveal delay={0.08} variant="slide-up">
          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Transforming Businesses.{" "}
            <span className="text-gradient">Empowering Institutions.</span>{" "}
            Governing Innovation.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            PMRG Solution combines artificial intelligence, enterprise platforms,
            telecom expertise, infrastructure operations, and education innovation
            to help organizations move from fragmented processes to intelligent,
            governed, and scalable ecosystems.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/solutions" size="lg">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Our Experts
            </Button>
          </div>
        </Reveal>

        {/* Trust row */}
        <Reveal delay={0.34}>
          <div className="mt-16 flex flex-col items-center gap-3 text-sm text-fg-subtle">
            <div className="h-px w-10 bg-line" />
            <span>
              Trusted across{" "}
              <span className="font-semibold text-fg">telecom, education, enterprise transformation</span>,{" "}
              innovation, and digital operations
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
