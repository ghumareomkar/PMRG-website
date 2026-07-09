"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github, Youtube, ArrowRight } from "lucide-react";
import { COMPANY, NAV_ITEMS, SERVICES } from "@/lib/constants";
import { Logo } from "./Logo";

const quickLinks = NAV_ITEMS.filter((n) => !n.children).slice(0, 7);
const serviceLinks = SERVICES.slice(0, 6);

const socials = [
  { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: COMPANY.social.twitter, label: "Twitter / X" },
  { icon: Github, href: COMPANY.social.github, label: "GitHub" },
  { icon: Youtube, href: COMPANY.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-onyx">
      <div className="container-pmrg py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">{COMPANY.description}</p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg-subtle transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">Company</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-fg-muted">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-fg">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-fg">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="leading-relaxed text-fg-subtle">{COMPANY.address}</li>
            </ul>

            <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="sr-only">
                Email for newsletter
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-line bg-surface p-1 pl-4 focus-within:border-accent/40">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Your work email"
                  className="w-full bg-transparent text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-ink transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-fg-subtle transition-colors hover:text-fg">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-fg-subtle transition-colors hover:text-fg">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
