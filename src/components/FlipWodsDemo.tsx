import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Design", "Architecture", "HomeDesign", "InteriorDesign"];

  return (
    <div className=" ">
      <div className="xs:text-3xl sm:text-6xl  text-white">
        Build
        <FlipWords words={words} className="font-bold"/> <br />
        websites with 
      </div>
    </div>
  );
}
