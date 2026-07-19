import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <section
      data-section-theme="light"
      className="section-light relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      <div className="container-pmrg relative text-center">
        <LogoMark className="mx-auto h-14 w-14 opacity-80" />
        <h1 className="mt-8 font-display text-7xl font-extrabold text-gradient sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-fg-dark sm:text-3xl">
          This page drifted off the grid
        </h2>
        <p className="mx-auto mt-3 max-w-md text-fg-dark-muted">
          The page you're looking for doesn't exist or has been moved. Let's get you back
          on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
