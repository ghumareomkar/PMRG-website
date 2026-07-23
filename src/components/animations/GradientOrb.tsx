import { cn } from "@/lib/utils";

/**
 * Radial-gradient glow orb, optionally animated with a slow float.
 * Used for depth on hero/dark sections and CTA glow effects.
 */
export default function GradientOrb({
  className,
  size = 300,
  color = "indigo",
  animate = false,
}: {
  className?: string;
  size?: number;
  /** Color preset: "indigo" (default), "blue", "cyan", or a custom rgba string */
  color?: "indigo" | "blue" | "cyan" | string;
  /** Whether the orb gently floats */
  animate?: boolean;
}) {
  const colorMap: Record<string, string> = {
    indigo: "rgba(99,102,241,0.18)",
    blue: "rgba(37,99,235,0.22)",
    cyan: "rgba(6,182,212,0.30)",
  };

  const resolvedColor = colorMap[color] ?? color;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[80px]",
        animate && "animate-float-slow",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${resolvedColor} 0%, transparent 70%)`,
        opacity: 0.5,
      }}
    />
  );
}
