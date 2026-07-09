import { Reveal } from "@/components/animations/Reveal";
import ClientLogos from "@/components/shared/ClientLogos";

export default function ClientsStrip() {
  return (
    <section className="border-y border-line py-14">
      <div className="container-pmrg">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">
            Trusted by leading telecom operators &amp; enterprises worldwide
          </p>
        </Reveal>
        <div className="mt-8">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
