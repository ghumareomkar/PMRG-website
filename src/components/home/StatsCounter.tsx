import { STATS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function StatsCounter() {
  return (
    <section className="section">
      <div className="container-pmrg">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((stat) => (
            <RevealItem key={stat.label} as="div">
              <div className="h-full bg-ink p-8 sm:p-10">
                <div className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="mt-2 text-sm text-fg-muted">{stat.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
