import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function IndustriesSection() {
  return (
    <section className="section">
      <div className="container-pmrg">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Deep expertise across{" "}
              <span className="text-gradient">regulated &amp; high-scale</span> sectors
            </>
          }
          description="We bring domain-specific fluency to every engagement — from telecom rating engines to healthcare analytics."
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.name} as="div">
              <div className="group flex h-full flex-col items-center gap-3 bg-ink p-6 text-center transition-colors hover:bg-surface">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-2 text-fg transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <Icon name={industry.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-fg">{industry.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-fg-subtle">{industry.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
