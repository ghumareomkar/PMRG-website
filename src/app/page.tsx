import Hero from "@/components/home/Hero";
import ClientsStrip from "@/components/home/ClientsStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import IndustriesSection from "@/components/home/IndustriesSection";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      <IndustriesSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
