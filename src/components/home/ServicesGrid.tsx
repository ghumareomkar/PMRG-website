import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function ServicesGrid() {
  return (
    <section
      id="portfolio"
      data-section-theme="light"
      className="section-light section"
    >
      <div className="container-pmrg">
        <SectionHeading
          theme="light"
          eyebrow="Our Portfolio"
          title={
            <>
              An integrated ecosystem of{" "}
              <span className="text-gradient">AI-led platforms</span>
            </>
          }
          description="From governance and planning to customer lifecycle, infrastructure, education, and innovation — our platforms work together as one connected ecosystem."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <RevealItem key={product.id} as="div" variant="slide-up">
              <Link href={`/solutions/${product.slug}`} className="group block h-full">
                <GlassCard theme="light" className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-light-line bg-blue-50 text-brand transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-blue-100 group-hover:text-brand-deep">
                      <Icon name={product.icon} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand-soft px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand">
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-fg-dark leading-snug">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">{product.description}</p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
