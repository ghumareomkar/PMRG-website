import type { Metadata } from "next";
import BlogTestimonialsLayout from "./BlogTestimonialsLayout";

export const metadata: Metadata = {
  title: "Blogs & Testimonials",
  description:
    "Insights on AI/ML, telecom BSS/OSS, digital transformation, cloud, and industry trends from the PMRG team. Read testimonials from our valued clients.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogTestimonialsLayout />;
}
