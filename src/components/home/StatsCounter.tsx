import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function StatsCounter() {
  return (
    <section
      data-section-theme="light"
      className="section-light section"
    >
      <div className="container-pmrg">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-light-line bg-light-line shadow-card-light lg:grid-cols-4">
          {STATS.map((stat) => (
            <RevealItem key={stat.label} as="div" variant="scale">
              <div className="h-full bg-white p-8 sm:p-10">
                <div className="font-display text-4xl font-bold tracking-tight text-fg-dark sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="mt-2 text-sm text-fg-dark-muted">{stat.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
