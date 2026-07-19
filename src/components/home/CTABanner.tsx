import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export default function CTABanner() {
  return (
    <section
      data-section-theme="dark"
      className="section-gradient-cta relative overflow-hidden"
    >
      {/* Glowing orbs for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-20"
      />

      <div className="container-pmrg relative py-20 sm:py-24 lg:py-28">
        <Reveal variant="slide-up">
          <div className="relative text-center">
            {/* Radial glow behind text */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
              style={{
                background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
              }}
            />

            <h2 className="relative mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s turn your next challenge into a governed, scalable, and measurable solution.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              Whether you are modernizing customer operations, improving project predictability,
              governing AI adoption, transforming a campus, or preparing students for industry,
              PMRG Solution can help you define the right starting point and a practical path to scale.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-brand-deep hover:bg-white/90 hover:text-brand-deep"
              >
                Schedule a Discovery Workshop
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="/solutions"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white/70 hover:bg-white/10"
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
