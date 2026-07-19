import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Reserved for API compatibility — hover lift is always subtle now. */
  glowOnHover?: boolean;
  /** Slightly darker / more defined surface. */
  strong?: boolean;
  /** Card theme: "dark" for dark backgrounds, "light" for light backgrounds */
  theme?: "dark" | "light";
  as?: keyof JSX.IntrinsicElements;
};

export function GlassCard({
  children,
  className,
  glowOnHover = true,
  strong = false,
  theme = "dark",
  as: Tag = "div",
}: GlassCardProps) {
  const isDark = theme === "dark";

  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-xl border transition-all duration-200",
        isDark
          ? cn(
              strong ? "bg-surface-2 border-line-strong" : "bg-surface border-line",
              glowOnHover && "hover:border-line-strong hover:-translate-y-1 hover:shadow-card-hover"
            )
          : cn(
              "bg-white border-light-line shadow-card-light",
              glowOnHover && "hover:border-brand/30 hover:-translate-y-1 hover:shadow-card-light-hover"
            ),
        className
      )}
    >
      {children}
    </Tag>
  );
}
