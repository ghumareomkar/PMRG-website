import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
  /** "dark" for dark backgrounds, "light" for light/white backgrounds */
  theme?: "dark" | "light";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  theme = "light",
}: PageHeroProps) {
  const isLight = theme === "light";

  return (
    <section
      data-section-theme={theme}
      className={cn(
        "relative overflow-hidden pb-8 pt-16 sm:pt-20",
        isLight ? "section-light" : ""
      )}
    >
      {/* Subtle static gradient decoration */}
      {!isLight && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />
      )}

      <div className={cn("container-pmrg relative", align === "center" ? "text-center" : "text-left")}>
        <div className={cn("flex flex-col gap-5", align === "center" ? "items-center" : "items-start")}>
          {eyebrow && (
            <Reveal>
              <span className={isLight ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.06}>
            <h1
              className={cn(
                "max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
                isLight ? "text-fg-dark" : "text-fg"
              )}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p
                className={cn(
                  "max-w-2xl text-lg leading-relaxed",
                  isLight ? "text-fg-dark-muted" : "text-fg-muted",
                  align === "center" && "mx-auto"
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.18}>
              <div className="mt-2">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
