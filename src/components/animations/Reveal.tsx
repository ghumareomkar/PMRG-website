"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Lightweight scroll-triggered reveal using IntersectionObserver + CSS.
 * No framer-motion dependency — keeps the site calm and fast.
 * Respects prefers-reduced-motion (jumps straight to visible).
 *
 * Variants:
 * - "fade-up" (default): opacity 0→1 + translateY(14px→0)
 * - "slide-up": opacity 0→1 + translateY(30px→0) — more dramatic
 * - "scale": opacity 0→1 + scale(0.95→1)
 * - "fade-in": opacity only, no transform
 */
type RevealVariant = "fade-up" | "slide-up" | "scale" | "fade-in";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: ElementType;
  variant?: RevealVariant;
};

const INITIAL_STYLES: Record<RevealVariant, { opacity: number; transform: string }> = {
  "fade-up": { opacity: 0, transform: "translateY(14px)" },
  "slide-up": { opacity: 0, transform: "translateY(30px)" },
  "scale": { opacity: 0, transform: "scale(0.95)" },
  "fade-in": { opacity: 0, transform: "none" },
};

const VISIBLE_STYLES: Record<RevealVariant, { opacity: number; transform: string }> = {
  "fade-up": { opacity: 1, transform: "translateY(0)" },
  "slide-up": { opacity: 1, transform: "translateY(0)" },
  "scale": { opacity: 1, transform: "scale(1)" },
  "fade-in": { opacity: 1, transform: "none" },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.15,
  as,
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: amount }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, amount]);

  const Tag: ElementType = as ?? "div";
  const initial = INITIAL_STYLES[variant];
  const final = VISIBLE_STYLES[variant];

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? final.opacity : initial.opacity,
        transform: visible ? final.transform : initial.transform,
        transition: `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Container that wraps a list. Each <RevealItem> child reveals when it
 * enters the viewport — producing a natural staggered feel across a grid
 * without breaking layout (each item IS the grid cell).
 */
export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: RevealVariant;
}) {
  return (
    <Reveal as={as} delay={delay} className={className} variant={variant}>
      {children}
    </Reveal>
  );
}
