import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";

export default function IndustriesSection() {
  return (
    <section
      data-section-theme="dark"
      className="section-navy section relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <GradientOrb
        color="blue"
        size={500}
        animate
        className="-right-20 top-20"
      />
      <GradientOrb
        color="indigo"
        size={400}
        className="-left-20 bottom-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-50 mask-fade-y"
      />

      <div className="container-pmrg relative">
        <SectionHeading
          theme="dark"
          eyebrow="Industries We Serve"
          title={
            <>
              Domain expertise across{" "}
              <span className="text-gradient">diverse sectors</span>
            </>
          }
          description="From telecom operators to educational institutions, enterprise platforms to startup incubators — we bring domain-specific fluency to every engagement."
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.name} as="div">
              <div className="group flex h-full flex-col items-center gap-3 bg-surface p-6 text-center transition-colors hover:bg-surface-2">
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
