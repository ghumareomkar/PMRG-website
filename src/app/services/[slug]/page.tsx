import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { SERVICE_PILLARS, PRODUCTS } from "@/lib/constants";

export async function generateStaticParams() {
  return SERVICE_PILLARS.map((pillar) => ({
    slug: pillar.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pillar = SERVICE_PILLARS.find((p) => p.id === params.slug);
  if (!pillar) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${pillar.title} | PMRG Solution`,
    description: pillar.description,
    alternates: {
      canonical: `/services/${pillar.id}`,
    },
  };
}

export default function ServicePillarPage({
  params,
}: {
  params: { slug: string };
}) {
  const pillar = SERVICE_PILLARS.find((p) => p.id === params.slug);

  if (!pillar) {
    notFound();
  }

  // Find related products based on pillar
  const relatedProducts = getRelatedProducts(pillar.id);

  return (
    <>
      <PageHero
        title={pillar.title}
        description={pillar.description}
      />

      {/* Service items */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <Reveal>
            <GlassCard theme="light" strong className="overflow-hidden p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand">
                  <Icon name={pillar.icon} className="h-7 w-7" />
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-fg-dark sm:text-3xl">
                What we deliver
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                {pillar.description}
              </p>

              <ul className="mt-8 space-y-3.5">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-base leading-relaxed text-fg-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Button href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section data-section-theme="light" className="section-light-grey section">
          <div className="container-pmrg">
            <Reveal>
              <span className="eyebrow-light">Related Products</span>
              <h2 className="mt-4 text-3xl font-bold text-fg-dark sm:text-4xl">
                Products in this practice area
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.06}>
              {relatedProducts.map((product) => (
                <RevealItem key={product.id}>
                  <a href={`/solutions/${product.slug}`} className="block h-full">
                    <GlassCard theme="light" className="h-full p-7 transition-shadow hover:shadow-lg">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-light-line bg-blue-50 text-brand">
                        <Icon name={product.icon} className="h-5 w-5" />
                      </span>
                      <span className="mt-1 inline-block rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-brand">
                        {product.tag}
                      </span>
                      <h3 className="mt-3 text-base font-semibold text-fg-dark">{product.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-dark-muted">
                        {product.description}
                      </p>
                    </GlassCard>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}
    </>
  );
}

/** Map pillar IDs to related product IDs. */
function getRelatedProducts(pillarId: string) {
  const mapping: Record<string, string[]> = {
    "ai-governance": ["governance-layer", "sprint-planning"],
    "enterprise-telecom": ["customer-lifecycle"],
    "infrastructure-ops": ["data-center"],
    "education-innovation": ["ai-for-schools", "smart-campus", "incubation-center", "industry-internship"],
  };
  const ids = mapping[pillarId] || [];
  return PRODUCTS.filter((p) => ids.includes(p.id));
}