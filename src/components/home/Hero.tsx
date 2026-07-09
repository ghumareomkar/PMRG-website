import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Single subtle static gradient — the only background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-100 mask-fade-y" />

      <div className="container-pmrg relative flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        <Reveal>
          <span className="eyebrow">AI-Driven Enterprise Software</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Transforming Telecom &amp; Enterprise with{" "}
            <span className="text-gradient">AI-Powered Solutions</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            We architect intelligent BSS/OSS platforms, CRM systems, and digital
            transformation strategies that future-proof your business.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/services" size="lg">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </Reveal>

        {/* Trust row */}
        <Reveal delay={0.34}>
          <div className="mt-16 flex flex-col items-center gap-3 text-sm text-fg-subtle">
            <div className="h-px w-10 bg-line" />
            <span>
              <span className="font-semibold text-fg">50+</span> enterprise clients across{" "}
              <span className="font-semibold text-fg">15+</span> countries
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
