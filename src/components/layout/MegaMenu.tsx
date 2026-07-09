"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavChild } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";

export function MegaMenu({ items, open }: { items: NavChild[]; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full z-50 mt-2 w-[560px] -translate-x-1/2"
        >
          <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-2 shadow-card-hover">
            <div className="grid grid-cols-2 gap-1 p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-3 text-fg transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-fg">{item.label}</span>
                    <span className="mt-0.5 text-xs leading-relaxed text-fg-subtle">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-fg-muted transition-colors hover:bg-surface-3 hover:text-fg"
            >
              <span className="font-mono uppercase tracking-wider">View all</span>
              <span className="text-accent">→</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
