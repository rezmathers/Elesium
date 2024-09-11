// eslint-disable-next-line @next/next/no-img-element
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import BlurFade from "./magicui/blur-fade";

export function BentoGridDemo() {
  return (
    <section className=" items-center justify-center xs:mx-4 h-fit " id="services">
      <h2 className=" text-3xl max-w-7xl font-bold md:text-5xl  cinzel-decorative-regular mx-auto text-center text-white pb-8">
             Services
          </h2>
          <BlurFade>
        <BentoGrid className="max-w-7xl mx-auto pt-4">
        
      {items.map((item, i) => (
       
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
        
      ))}
      
    </BentoGrid>
    </BlurFade>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-800">
    
  </div>
);
const items = [
  {
    title: "Social Media Management",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <img src="./images/media-management.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Content Creation",
    description: "Dive into the transformative power of technology.",
    header: <img src="./images/content-creation.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community Management",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <img src="./images/community.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Analytics and Reporting",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src="./images/analytics.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Strategy and Consulting",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <img src="./images/strategy&consulting.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lead Generation",
    description: "Join the quest for understanding and enlightenment.",
    header: <img src="./images/leads.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Reputation Management",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <img src="./images/reputation.jpeg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
