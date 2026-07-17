import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/animations/Reveal";
import ContactForm from "./ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact PMRG Solution | Business Enquiries & Partnerships",
  description:
    "Tell us the challenge you want to solve. Business enquiries, product demonstrations, education partnerships, internship programs, and technology alliances.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s solve your next <span className="text-gradient">challenge together</span>
          </>
        }
        description="Tell us the challenge you want to solve, the outcome you want to improve, and the environment in which the solution must work. Our team will help you structure the opportunity, identify a practical starting point, and define the next steps."
      />

      <section data-section-theme="light" className="section-light pb-28">
        <div className="container-pmrg grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <GlassCard theme="light" strong className="relative overflow-hidden p-7 sm:p-9">
              <h2 className="relative text-xl font-semibold text-fg-dark">Send us a message</h2>
              <p className="relative mt-1.5 text-sm text-fg-dark-muted">
                Business Enquiries · Product Demonstrations · Education Partnerships · Internship Programs · Technology Alliances
              </p>
              <div className="relative mt-7">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>

          {/* info */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              <GlassCard theme="light" className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                  Reach us directly
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Mail className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Email</div>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-fg-dark hover:text-brand">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Phone</div>
                      <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm text-fg-dark hover:text-brand">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-dark-subtle">Headquarters</div>
                      <p className="text-sm leading-relaxed text-fg-dark">{COMPANY.address}</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              {/* offices */}
              <GlassCard theme="light" className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                  Global offices
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {COMPANY.offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl border border-light-line bg-light-bg-grey p-3"
                    >
                      <div className="text-sm font-semibold text-fg-dark">{office.city}</div>
                      <div className="text-xs text-fg-dark-subtle">
                        {office.country} · {office.tz}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
