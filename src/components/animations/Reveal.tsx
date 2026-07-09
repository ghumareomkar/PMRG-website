"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Lightweight scroll-triggered fade-up using IntersectionObserver + CSS.
 * No framer-motion dependency — keeps the site calm and fast.
 * Respects prefers-reduced-motion (jumps straight to visible).
 */
type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.15,
  as,
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
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
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
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  return (
    <Reveal as={as} delay={delay} className={className}>
      {children}
    </Reveal>
  );
}
