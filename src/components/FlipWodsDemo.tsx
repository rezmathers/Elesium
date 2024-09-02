import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Design", "Architecture", "HomeDesign", "InteriorDesign"];

  return (
    <div className="m-0">
      <div className="xs:text-3xl md:text-5xl text-slate-400 cinzel-decorative-regular mb-3">
        Elevate Your<br/>
        <FlipWords words={words} className="font-bold p-0 py-2"/><br />
        Business Effortlessly with
      </div>
    </div>
  );
}
