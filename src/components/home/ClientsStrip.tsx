import { Reveal } from "@/components/animations/Reveal";
import ClientLogos from "@/components/shared/ClientLogos";

export default function ClientsStrip() {
  return (
    <section
      data-section-theme="light"
      className="section-light border-b border-light-line py-14"
    >
      <div className="container-pmrg">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-fg-dark-subtle">
            Trusted across telecom, education, enterprise transformation, innovation &amp; digital operations
          </p>
        </Reveal>
        <div className="mt-8">
          <ClientLogos theme="light" />
        </div>
      </div>
    </section>
  );
}
