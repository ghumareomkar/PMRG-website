import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import { SERVICES } from "@/lib/constants";

// Static Params
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// ✅ Metadata – 'as any' से 'never' खत्म
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug) as any; // ✅ यहाँ as any डाला

  if (!service) {
    return { title: "Service Not Found" };
  }

  // अब आप चाहें तो description हटा सकते हैं या रख सकते हैं
  return {
    title: `${service.title} | PMRG Solution`,
    description: service.short || service.description, // ✅ description हटा दिया तो सिर्फ short use करें
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

// ✅ Main Component – यहाँ भी 'as any'
export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug) as any; // ✅ यहाँ as any

  if (!service) {
    notFound();
  }

  const { title, description, icon, features, stack, useCase } = service;

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={title}
        description={description}
      />

      <div className="section">
        <div className="container-pmrg">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/soft text-accent">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {description}
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((f: string) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-fg"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/soft text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((tech: string) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  href={`/contact?service=${service.slug}`}
                  variant="secondary"
                >
                  Discuss this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>

            {/* Right Column */}
            <Reveal delay={0.1}>
              <GlassCard strong className="relative overflow-hidden p-8">
                <GradientOrb className="-right-16 -top-16" size={220} />
                <div className="relative">
                  <Badge>Use Case</Badge>
                  <h3 className="mt-4 text-xl font-semibold text-fg">
                    {useCase?.title || "Real-world impact"}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {useCase?.body ||
                      "Discover how we deliver measurable outcomes for our clients."}
                  </p>
                </div>

                <div className="relative mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
                  {[
                    ["Delivery", "On time"],
                    ["Downtime", "Zero"],
                    ["Outcome", "Measured"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                        {k}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-fg">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}