import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Design", "Architecture", "HomeDesign", "InteriorDesign"];

  return (
    <div className="m-0">
      <div className="xs:text-3xl sm:text-6xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent ">
        Elevate Your<br/>
        <FlipWords words={words} className="font-bold p-0 "/><br />
        Business Effortlessly with
      </div>
    </div>
  );
}
