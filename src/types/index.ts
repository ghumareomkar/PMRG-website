/** Metadata for an icon resolved from the lucide icon name string. */
export type IconProps = {
  name: string;
  className?: string;
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

/** Generic page section wrapper metadata. */
export type PageMeta = {
  title: string;
  description: string;
  path: string;
};
