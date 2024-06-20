import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Contact from "@/components/Contact";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Services"
        title="Transform Your Digital Experience with SyncTech"
      >
        Unlock the potential of your business with our innovative and
        comprehensive digital solutions. Our expert team transforms your vision
        into reality, ensuring seamless integration and exceptional performance.
        Experience unparalleled growth and efficiency with our cutting-edge
        technologies and personalized support.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="About us" title="Welcome to SyncTech">
        At SyncTech, we specialize in delivering end-to-end web solutions
        tailored to meet the unique needs of your business. With a perfect
        balance of innovation and creativity, we conceive, craft, design, and
        develop digital solutions that perfectly fit your business requirements.
        We empower startups, SMBs, SMEs, and large enterprises to scale up their
        business faster.
      </SectionTitle>

      <About />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>

      <Testimonials />

      {/* <SectionTitle
        preTitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle> */}
      <Cta />
      <Contact />
    </Container>
  );
}
