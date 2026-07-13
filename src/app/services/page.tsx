import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Services",
  description: "Explore our full range of services.",
  alternates: { canonical: "/services" },
};

export default function ServicesListingPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            End-to-end capability for{" "}
            <span className="text-gradient">every layer</span> of your stack
          </>
        }
        description="Six practice areas, one accountable partner. From the charging core of a telecom to the ML layer of a marketplace — we build it, run it, and improve it."
      />

      <div className="section">
        <div className="container-pmrg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              // Safe destructuring ताकि TypeScript ना रुके
              const { slug, title, description, icon, stack } = service;
              return (
                <Reveal key={service.id}>
                  <Link href={`/services/${slug}`} className="block h-full">
                    <GlassCard strong className="h-full transition-all hover:scale-[1.02] hover:border-accent/40">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/soft text-accent">
                          <Icon name={icon} className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-semibold">{title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-fg-muted line-clamp-2">
                        {description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {stack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                        {stack.length > 3 && (
                          <Badge variant="outline">+{stack.length - 3}</Badge>
                        )}
                      </div>
                      <div className="mt-5 flex items-center text-sm font-medium text-accent">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </GlassCard>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}