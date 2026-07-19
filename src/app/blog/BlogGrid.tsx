"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogGrid() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.category === category),
    [category]
  );

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* category filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-all",
              category === c
                ? "border-brand/50 bg-blue-50 text-brand"
                : "border-light-line bg-white text-fg-dark-muted hover:border-light-line-strong hover:text-fg-dark"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* featured post */}
            {featured && (
              <article className="mb-8">
                <Link href={`/blog/${featured.slug}`}>
                  <GlassCard theme="light" strong className="group relative grid grid-cols-1 overflow-hidden lg:grid-cols-2">
                    <div className="relative min-h-[240px] overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/30 to-light-bg-grey">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-7xl font-extrabold text-brand/10">
                          {featured.category[0]}
                        </span>
                      </div>
                      <div className="absolute left-5 top-5">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line bg-light-bg-slate px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">Featured</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-10">
                      <div className="flex items-center gap-3 text-xs text-fg-dark-subtle">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">{featured.category}</span>
                        <span>{formatDate(featured.date)}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-tight text-fg-dark transition-colors group-hover:text-brand sm:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">
                        {featured.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                        Read article <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </article>
            )}

            {/* rest grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <GlassCard theme="light" className="group flex h-full flex-col overflow-hidden p-0">
                      <div className="relative h-36 overflow-hidden border-b border-light-line bg-gradient-to-br from-blue-50 to-light-bg-grey">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-5xl font-extrabold text-brand/10">
                            {post.category[0]}
                          </span>
                        </div>
                        <div className="absolute left-4 top-4">
                          <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">{post.category}</span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 text-[11px] text-fg-dark-subtle">
                          <span>{formatDate(post.date)}</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold leading-snug text-fg-dark transition-colors group-hover:text-brand">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                          Read more <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
