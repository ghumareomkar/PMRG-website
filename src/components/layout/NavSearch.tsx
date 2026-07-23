"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SERVICE_PILLARS, PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SearchItem = { label: string; href: string; category: string };

/** Build a flat list of all searchable pages from constants. */
function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Nav pages
  for (const nav of NAV_ITEMS) {
    items.push({ label: nav.label, href: nav.href, category: "Page" });
    if (nav.children) {
      for (const child of nav.children) {
        items.push({ label: child.label, href: child.href, category: "Page" });
      }
    }
  }

  // Services (pillars)
  for (const s of SERVICE_PILLARS) {
    items.push({ label: s.title, href: `/services/${s.id}`, category: "Service" });
  }

  // Products / Solutions
  for (const p of PRODUCTS) {
    items.push({ label: p.name, href: `/solutions/${p.slug}`, category: "Solution" });
  }

  // Deduplicate by href
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

export default function NavSearch({ isOverLight }: { isOverLight: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const index = useMemo(buildSearchIndex, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return index.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 6);
  }, [query, index]);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      // Small delay so the input is rendered
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div ref={containerRef} className="relative hidden sm:block">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="icon"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(true)}
            aria-label="Search"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
              isOverLight
                ? "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                : "border-line text-fg hover:border-line-strong hover:text-white"
            )}
          >
            <Search className="h-4 w-4" />
          </motion.button>
        ) : (
          <motion.div
            key="input"
            initial={{ width: 36, opacity: 0.8 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 36, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex items-center gap-2 overflow-hidden rounded-lg border px-3",
              isOverLight
                ? "border-gray-200 bg-white/80 backdrop-blur-sm"
                : "border-line bg-surface/80 backdrop-blur-sm"
            )}
            style={{ height: 36 }}
          >
            <Search className={cn("h-3.5 w-3.5 shrink-0", isOverLight ? "text-gray-400" : "text-fg-subtle")} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className={cn(
                "w-full bg-transparent text-sm outline-none placeholder:text-sm",
                isOverLight
                  ? "text-gray-900 placeholder:text-gray-400"
                  : "text-fg placeholder:text-fg-subtle"
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter" && results.length > 0) {
                  navigate(results[0].href);
                }
              }}
            />
            <button
              onClick={() => { setOpen(false); setQuery(""); }}
              aria-label="Close search"
              className={cn(
                "shrink-0 rounded p-0.5 transition-colors",
                isOverLight ? "text-gray-400 hover:text-gray-600" : "text-fg hover:text-white"
              )}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results dropdown */}
      <AnimatePresence>
        {open && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-light-line bg-white shadow-card-light"
          >
            {results.length > 0 ? (
              <ul className="divide-y divide-light-line">
                {results.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => navigate(item.href)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-light-bg-grey"
                    >
                      <span className="text-sm font-medium text-fg-dark">{item.label}</span>
                      <span className="shrink-0 rounded-md border border-light-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                        {item.category}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-center text-sm text-fg-dark-muted">
                No results for &ldquo;{query}&rdquo;
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
