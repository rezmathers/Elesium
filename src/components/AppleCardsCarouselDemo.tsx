"use client";
// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import '../components/graphdata/graph1'
import Graph1 from "../components/graphdata/graph1";
import Graph2 from "./graphdata/graph2";
import Graph3 from "./graphdata/graph3";
import Graph4 from "./graphdata/graph4";
import Graph5 from "./graphdata/graph5";
import Graph6 from "./graphdata/graph6";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full" id="case-studies">
      <h2 className="pb-8 max-w-7xl mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 cinzel-decorative-regular mb-2 md:px-0 xs:px-4 text-center">
        Case Studies
      </h2>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <div className="h-96 w-full bg-red-500 flex items-center justify-center">
      yaoooooooo
    </div>
       
  );
};

const data = [
  {
    category: ["Paid ADS", "Email Marketing"],
    title: "$0 to $1m in 12 months",
    src: "/images/casestudy1.png",
    content: <Graph1/>,
  },
  {
    category: ["Paid ADS" , "Email Marketing"],
    title: "$9m In 9 Months",
    src:"/images/casestudy2.png",
    content: <Graph2/>,
  },
  {
    category: ["Paid ADS"],
    title: "We Spent $2.3m In 90 Days At 6.5x ROAS",
    src: "/images/casestudy3.png",
    content: <Graph3/>,
  },

  {
    category: ["Email Marketing" , "Paid Ads"],
    title: "Gained 15k Followers in 3 Weeks",
    src: "/images/casestudy4.png",
     content: <Graph4/>,
  },
  {
    category: ["Paid Ads"],
    title: "60% Leads To Customers",
    src:"/images/casestudy5.png",
    content: <Graph5/>,
  },
  {
    category: ["Email Marketing"],
    title: "Hired Easy Talents Made A Heavenly Fortune",
    src: "/images/casestudy6.png",
    content: <Graph6/>,
  },
];
