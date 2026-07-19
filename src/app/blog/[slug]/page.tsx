import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/animations/Reveal";
import { BLOG_POSTS } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: `${post.title} | PMRG Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg max-w-4xl">
          {/* Back link */}
          <Reveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Link>
          </Reveal>

          {/* Article metadata */}
          <Reveal>
            <GlassCard theme="light" strong className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 border-b border-light-line pb-6">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-brand">
                  <Tag className="h-3.5 w-3.5" />
                  {post.category}
                </span>
                <span className="text-sm text-fg-dark-subtle">
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-fg-dark-subtle">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Article body */}
              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-fg-dark-muted">
                  {post.excerpt}
                </p>

                {post.content ? (
                  <div
                    className="prose prose-slate max-w-none text-fg-dark-muted prose-headings:text-fg-dark prose-a:text-brand"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <div className="rounded-xl border border-dashed border-light-line bg-light-bg-grey p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-fg-dark">
                      Full article coming soon
                    </h3>
                    <p className="mt-2 text-sm text-fg-dark-muted">
                      We&apos;re preparing the detailed content for this article. Check back soon for the complete read.
                    </p>
                  </div>
                )}
              </div>
            </GlassCard>
          </Reveal>

          {/* Related posts */}
          <Reveal>
            <div className="mt-12">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                More from the blog
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`}>
                      <GlassCard
                        theme="light"
                        className="group flex h-full flex-col p-6 transition-all hover:border-brand/30"
                      >
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">
                          {related.category}
                        </span>
                        <h4 className="mt-3 text-base font-semibold leading-snug text-fg-dark transition-colors group-hover:text-brand">
                          {related.title}
                        </h4>
                        <p className="mt-2 flex-1 text-sm text-fg-dark-muted line-clamp-2">
                          {related.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-[11px] text-fg-dark-subtle">
                          <span>{formatDate(related.date)}</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {related.readTime}
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
