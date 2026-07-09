import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/layout/Logo";
import GradientOrb from "@/components/animations/GradientOrb";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <GradientOrb className="-top-20 left-1/2 -translate-x-1/2" size={520} />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-y" />
      <div className="container-pmrg relative text-center">
        <LogoMark className="mx-auto h-14 w-14 opacity-80" />
        <h1 className="mt-8 font-display text-7xl font-extrabold text-gradient sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">
          This page drifted off the grid
        </h2>
        <p className="mx-auto mt-3 max-w-md text-fg-muted">
          The page you're looking for doesn't exist or has been moved. Let's get you back
          on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
