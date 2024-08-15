"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%)] mx-auto  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={350}
        particleCount={200}
        baseHue={190}
        className="flex items-center flex-row justify-center  w-full h-full"
      >
        <div className="h-full w-6/12 flex flex-col justify-center  items-start ml-40">
       
          <h2 className="text-white text-2xl md:text-6xl font-bold text-start">
          Elevate Your <br /> Brand  with
          </h2>
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Elesium
      </h1>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-start">
          Expert social media marketing tailored to amplify your online presence and drive results. Let’s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-20 py-6 hover:bg-slate-400 bg-slate-500/[0.07] transition duration-200 rounded-lg text-white hover:text-black backdrop-blur-xl border border-white">
              Order now
            </button>
            <button className="px-4 py-2  text-white ">Watch trailer</button>
          </div>
        </div>
        <div className="h-full w-6/12 flex flex-col justify-center  items-start mr-40">

        </div>
      </Vortex>
    </div>
  );
}
