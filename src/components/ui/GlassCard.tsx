import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Reserved for API compatibility — hover lift is always subtle now. */
  glowOnHover?: boolean;
  /** Slightly darker / more defined surface. */
  strong?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

export function GlassCard({
  children,
  className,
  glowOnHover = true,
  strong = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-xl border transition-all duration-200",
        strong ? "bg-surface-2 border-line-strong" : "bg-surface border-line",
        glowOnHover && "hover:border-line-strong hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </Tag>
  );
}
