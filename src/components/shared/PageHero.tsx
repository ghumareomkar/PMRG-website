import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-8 pt-16 sm:pt-20">
      {/* subtle static gradient — the only decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div className={cn("container-pmrg relative", align === "center" ? "text-center" : "text-left")}>
        <div className={cn("flex flex-col gap-5", align === "center" ? "items-center" : "items-start")}>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p
                className={cn(
                  "max-w-2xl text-lg leading-relaxed text-fg-muted",
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
