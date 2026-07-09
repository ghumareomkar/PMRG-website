import { CLIENTS } from "@/lib/constants";

/**
 * Auto-scrolling, pauseable client logo ticker.
 * Pure CSS marquee; duplicated list for a seamless loop.
 */
export default function ClientLogos() {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative w-full overflow-hidden mask-fade-x">
      <div className="marquee-track flex w-max items-center gap-14">
        {list.map((name, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-base font-bold uppercase tracking-wider text-fg-subtle transition-colors hover:text-fg sm:text-lg"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
