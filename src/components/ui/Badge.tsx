import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "mint" | "violet" | "outline";
};

const variants = {
  default: "border-accent/30 bg-accent-soft text-accent",
  mint: "border-accent/30 bg-accent-soft text-accent",
  violet: "border-line-strong bg-surface-2 text-fg-muted",
  outline: "border-line-strong text-fg-muted",
};

export function Badge({ children, className, variant = "outline" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
