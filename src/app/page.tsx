import "./globals.css";
import { NavbarDemo } from "../components/Navbar";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import NewHero from "@/components/NewHero";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";

export default function Home() {
  return (
    <main className="dark gap-14">
      <AuroraBackgroundDemo />
      <NavbarDemo />
      <NewHero />
      <Stats />
      {/* <FeatureSectionDemo/> */}
      {/* <Clients/> */}
      <BentoGridDemo />
      <AppleCardsCarouselDemo />
      <InfiniteMovingCardsDemo />
      <Faq />
      <Footer />
    </main>
  );
}
