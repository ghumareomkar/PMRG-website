import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function ServicesGrid() {
  return (
    <section id="services" className="section">
      <div className="container-pmrg">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Full-stack capability for the{" "}
              <span className="text-gradient">intelligent enterprise</span>
            </>
          }
          description="From convergent telecom billing to production AI/ML, we cover the entire spectrum of modern enterprise software — engineered to scale."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <RevealItem key={service.id} as="div">
              <Link href={`/services#${service.id}`} className="group block h-full">
                <GlassCard className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-2 text-fg transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-fg">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{service.short}</p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-fg-subtle transition-colors group-hover:text-accent">
                    Learn more
                    <span aria-hidden>→</span>
                  </span>
                </GlassCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
