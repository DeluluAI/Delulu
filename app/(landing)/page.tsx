import { HeroSectionComponent } from "@/components/landing/hero-section";
import { HeroDemo } from "@/components/landing/hero-demo";
import { BentoBox } from "@/components/landing/bento-box";
import { Companies } from "@/components/landing/companies";
import { ContactFormComponent } from "@/components/landing/contact-form";
export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <HeroDemo />
      <Companies />
      <BentoBox />
      <ContactFormComponent />
    </div>
  );
}
