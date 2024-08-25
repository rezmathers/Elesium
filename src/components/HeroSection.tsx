import React from "react";
import { FlipWordsDemo } from "./FlipWodsDemo";
import ContactPage from "./ContactPage";


const HeroSection = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-7xl sm:mx-auto xs:mx-4 sm:flex-row">
      <div className="flex flex-col flex-1 sm:w-1/2 items-center justify-center sm:items-start sm:justify-center xs:mt-32 sm:mt-0 xs:items-start xs:text-left xs:w-full xs:flex-none">
        <FlipWordsDemo />
        <span className="mt-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-700 to-gray-300 bg-clip-text text-center text-7xl leading-none text-transparent dark:from-white dark:to-slate-900/10 xs:text-left xs:text-4xl font-bold sm:text-7xl">
        Elesium Online
      </span>
        <div className="flex flex-row sm:flex-col items-center gap-4 mt-6 xs:justify-start">
         <ContactPage/>
        </div>
      </div>
      <div className="min-h-80 sm:w-1/2 flex flex-1 w-full rounded-xl  items-center justify-center overflow-hidden mb-12 object-fill">
     
      </div>
    </div>
  );
};

export default HeroSection;
