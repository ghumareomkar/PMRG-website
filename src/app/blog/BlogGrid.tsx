"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
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
                ? "border-accent/50 bg-accent/soft text-accent"
                : "border-line-strong bg-white/[0.02] text-fg-muted hover:border-white/20 hover:text-fg"
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
                <GlassCard strong className="group relative grid grid-cols-1 overflow-hidden lg:grid-cols-2">
                  <div className="relative min-h-[240px] overflow-hidden bg-gradient-to-br from-accent/30 via-accent/20 to-ink">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-7xl font-extrabold text-white/5">
                        {featured.category[0]}
                      </span>
                    </div>
                    <div className="absolute left-5 top-5">
                      <Badge variant="violet">Featured</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <div className="flex items-center gap-3 text-xs text-fg-subtle">
                      <Badge>{featured.category}</Badge>
                      <span>{formatDate(featured.date)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {featured.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight transition-colors group-hover:text-accent sm:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {featured.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Read article <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </GlassCard>
              </article>
            )}

            {/* rest grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article key={post.slug}>
                  <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
                    <div className="relative h-36 overflow-hidden border-b border-line bg-gradient-to-br from-surface/40 to-ink">
                      <div className="absolute inset-0 bg-grid opacity-40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-5xl font-extrabold text-white/5">
                          {post.category[0]}
                        </span>
                      </div>
                      <div className="absolute left-4 top-4">
                        <Badge>{post.category}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-[11px] text-fg-subtle">
                        <span>{formatDate(post.date)}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                        Read more <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </GlassCard>
                </article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
