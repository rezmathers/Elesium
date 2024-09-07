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
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/HeroVideoDialogDemoTopInBottomOut";

export default function Home() {
  return (
    <main className="dark">
      <AuroraBackgroundDemo />
      <NavbarDemo />
      <NewHero />
      <hr className="w-full border-slate-400/40 my-32" />
      <Stats />
      <hr className="w-full border-slate-400/40 my-32" />
      {/* <FeatureSectionDemo/> */}
      {/* <Clients/> */}
      <BentoGridDemo />
      <hr className="w-full border-slate-400/40 my-32" />
      <HeroVideoDialogDemoTopInBottomOut/>
      <hr className="w-full border-slate-400/40 my-32" />
      <AppleCardsCarouselDemo />
      <hr className="w-full border-slate-400/40 my-32" />
      <InfiniteMovingCardsDemo />
      <hr className="w-full border-slate-400/40 my-32" />
      <Faq />
      <Footer />
    </main>
  );
}
