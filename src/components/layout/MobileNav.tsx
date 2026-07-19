"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Search, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState, useRef } from "react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { Logo } from "./Logo";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchOpen && searchQuery.trim()) {
      // Navigate to blog page as a simple search destination
      onClose();
      router.push("/blog");
    } else {
      setSearchOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const iconClass =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-xl" onClick={onClose} />

          <motion.div
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-line bg-surface p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search bar (collapsible) */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2">
                    <Search className="h-4 w-4 shrink-0 text-fg-subtle" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search…"
                      className="w-full bg-transparent text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && searchQuery.trim()) {
                          onClose();
                          router.push("/blog");
                        }
                        if (e.key === "Escape") {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }
                      }}
                    />
                    <button
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="shrink-0 text-fg-subtle hover:text-fg"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.nav
              className="mt-8 flex flex-col gap-0.5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {NAV_ITEMS.map((nav) => (
                <motion.div key={nav.href} variants={item}>
                  <Link
                    href={nav.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                  >
                    {nav.label}
                    {nav.children && <span className="text-xs text-fg-subtle">▾</span>}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Social icons row — replaces "Get Started" button */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
            >
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleSearch}
                  aria-label="Search"
                  className={iconClass}
                >
                  <Search className="h-4.5 w-4.5" />
                </button>
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconClass}
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href={COMPANY.social.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={iconClass}
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={iconClass}
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a
                  href={COMPANY.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={iconClass}
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
