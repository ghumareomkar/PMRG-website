import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export default function CTABanner() {
  return (
    <section className="section">
      <div className="container-pmrg">
        <Reveal>
          {/* Minimal CTA: clean surface card with a hairline accent */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 70%)",
              }}
            />
            <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-fg-muted sm:text-lg">
                Let's discuss how PMRG Solution can accelerate your digital journey —
                from first whiteboard to production scale.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact" size="lg">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button href="/case-studies" variant="outline" size="lg">
                  See Our Work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
