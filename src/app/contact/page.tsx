import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import ContactForm from "./ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PMRG Solution. Schedule a consultation, request a demo, or talk to our team about your next project.",
  alternates: { canonical: "/contact" },
};

const socials = [
  { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: COMPANY.social.twitter, label: "Twitter / X" },
  { icon: Github, href: COMPANY.social.github, label: "GitHub" },
  { icon: Youtube, href: COMPANY.social.youtube, label: "YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="text-gradient">remarkable</span>
          </>
        }
        description="Tell us about your project, your goals, or just say hello. We typically respond within one business day."
      />

      <section className="pb-28">
        <div className="container-pmrg grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <GlassCard strong className="relative overflow-hidden p-7 sm:p-9">
              <GradientOrb className="-right-20 -top-20" size={260} />
              <h2 className="relative text-xl font-semibold text-fg">Send us a message</h2>
              <p className="relative mt-1.5 text-sm text-fg-muted">
                Fill out the form and our team will get back to you shortly.
              </p>
              <div className="relative mt-7">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>

          {/* info */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              <GlassCard className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Reach us directly
                </h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-accent/soft text-accent">
                      <Mail className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </span>
                    <div>
                      <div className="text-xs text-fg-subtle">Email</div>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-fg hover:text-accent">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-accent/soft text-accent">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-subtle">Phone</div>
                      <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm text-fg hover:text-accent">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-accent/soft text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs text-fg-subtle">Headquarters</div>
                      <p className="text-sm leading-relaxed text-fg">{COMPANY.address}</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>

              {/* offices */}
              <GlassCard className="p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Global offices
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {COMPANY.offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl border border-line bg-white/[0.02] p-3"
                    >
                      <div className="text-sm font-semibold text-fg">{office.city}</div>
                      <div className="text-xs text-fg-subtle">
                        {office.country} · {office.tz}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* map placeholder + socials */}
              <GlassCard className="relative flex-1 overflow-hidden p-7">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                      Follow us
                    </h3>
                    <Badge variant="mint">Online</Badge>
                  </div>
                  <div className="mt-5 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-all hover:border-accent/40 hover:text-accent hover:shadow-glow"
                      >
                        <s.icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                      </a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
