import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="PMRG Solution"
      width={76}
      height={32}
      className={cn("h-8 w-auto", className)}
      priority
    />
  );
}

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="PMRG Solution — home"
    >
      <span className="transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt="PMRG Solution"
          width={152}
          height={64}
          className={cn("h-9 w-auto", textClassName)}
          priority
        />
      </span>
    </Link>
  );
}
