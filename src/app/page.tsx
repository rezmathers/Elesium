import "./globals.css";
import { NavbarDemo } from "../components/Navbar";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import NewHero from "@/components/NewHero"
import FeatureSectionDemo from "@/components/blocks/features-section-demo-2"


export default function Home() {
  return (
    <main className="dark">
      <AuroraBackgroundDemo/>
        <NavbarDemo/>
        <NewHero/>
        <Stats/>
        <Clients/>
        <FeatureSectionDemo/>
        <BentoGridDemo/>
        <InfiniteMovingCardsDemo/>
        <Faq/>
        <Footer/>
    </main>
  );
}
