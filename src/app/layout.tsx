
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "../components/Navbar";
import HeroSection from "@/components/HeroSection";


import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import MansoryGrid from "@/components/MansoryGrid";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import ContactPage from "@/components/ContactPage";
import FeatureSectionDemo from "@/components/blocks/features-section-demo-2"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elesium Online",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* <TracingBeam className="max-w-7xl"> */}
        <AuroraBackgroundDemo/>
        <NavbarDemo/>
        <HeroSection/>
        <Stats/>
        <FeatureSectionDemo/>
        <Clients/>
        <BentoGridDemo/>
        
        <MansoryGrid/>
        <InfiniteMovingCardsDemo/>
        <Faq/>
        <Footer/>
       
        {/* </TracingBeam> */}
      </body>
    </html>
  );
}
