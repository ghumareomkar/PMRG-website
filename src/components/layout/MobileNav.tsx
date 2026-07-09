"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
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

            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
            >
              <Button href="/contact" className="w-full" size="lg" onClick={onClose}>
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
