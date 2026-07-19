"use client";

import {
  Network,
  Users,
  RefreshCw,
  BrainCircuit,
  Cloud,
  Code2,
  Receipt,
  Contact,
  Server,
  BarChart3,
  RadioTower,
  ShieldCheck,
  Headset,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Building2,
  Zap,
  Lightbulb,
  Gem,
  Handshake,
  Globe,
  GraduationCap,
  Laptop,
  Plane,
  TrendingUp,
  type LucideIcon as LucideIconType,
} from "lucide-react";

/**
 * Central icon registry. Constants reference icons by string name;
 * this maps those names to the actual lucide-react components.
 * Using dynamic lookup avoids a giant barrel import.
 */
const REGISTRY: Record<string, LucideIconType> = {
  Network,
  Users,
  RefreshCw,
  BrainCircuit,
  Cloud,
  Code2,
  Receipt,
  Contact,
  Server,
  BarChart3,
  RadioTower,
  ShieldCheck,
  Headset,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Building2,
  Zap,
  Lightbulb,
  Gem,
  Handshake,
  Globe,
  GraduationCap,
  Laptop,
  Plane,
  TrendingUp,
};

export type IconName = keyof typeof REGISTRY;

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = REGISTRY[name] ?? Network;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
