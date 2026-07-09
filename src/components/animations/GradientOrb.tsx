import { cn } from "@/lib/utils";

/**
 * Subtle, STATIC radial-gradient glow (no animation).
 * Decorative indigo glow used for depth on key sections.
 */
export default function GradientOrb({
  className,
  size = 300,
}: {
  className?: string;
  from?: string;
  to?: string;
  size?: number;
  duration?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[80px]", className)}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        opacity: 0.5,
      }}
    />
  );
}
