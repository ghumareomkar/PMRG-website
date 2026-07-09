import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Primary: solid accent — the only strong colour on screen
  primary:
    "bg-accent text-ink hover:bg-accent-light hover:-translate-y-0.5",
  // Secondary: light fill for high-contrast actions
  secondary:
    "bg-fg text-ink hover:bg-white hover:-translate-y-0.5",
  // Outline: subtle border
  outline:
    "border border-line-strong text-fg hover:border-fg-muted hover:bg-white/[0.02] hover:-translate-y-0.5",
  ghost: "text-fg-muted hover:text-fg hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if ("href" in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (external) {
        return (
          <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
            {children}
          </a>
        );
      }
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
