import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <div className="cross-brace-divider" />
      <Stats />
      <Process />
      <div className="cross-brace-divider" />
      <Testimonials />
      <CTA />
    </>
  );
}
