"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import '../components/graphdata/graph1'
import Graph1 from "../components/graphdata/graph1";
import Graph2 from "./graphdata/graph2";
import Graph3 from "./graphdata/graph3";


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full pt-32" id="case-studies">
      <h2 className="max-w-7xl  mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 cinzel-decorative-regular mb-2 md:px-0 xs:px-4">
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
    title: "0 to 18 lakhs in 12 months",
    src: "https://live.staticflickr.com/65535/49389103952_ff4b2cf256.jpg",
    content: <Graph1/>,
  },
  {
    category: ["Paid ADS" , "Email Marketing"],
    title: "50 Lakhs In 6 Months",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Graph2/>,
  },
  {
    category: ["Paid ADS"],
    title: "We Spent 23Lakhs In 90 Days At 6.5x ROAS",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Graph3/>,
  },

  {
    category: ["Product"],
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: ["iOS"],
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: ["Hiring"],
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
