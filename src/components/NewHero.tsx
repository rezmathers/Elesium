import React from 'react'
import { FlipWordsDemo } from './FlipWodsDemo'
import ContactPage from './ContactPage'

const NewHero = () => {
  return (
    <header>
      {/* Hero top */}
      <div className="bg-gray-300/10 border-b border-slate-200/30 xs:px-4">
        {/* Container */}
        <div className="mx-auto max-w-7xl py-8  md:py-14">
          {/* Title */}
          <FlipWordsDemo/>
          <span className="cinzel-decorative-regular mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-700 to-gray-300 bg-clip-text text-center text-7xl leading-none text-transparent dark:from-white dark:to-slate-900/10 xs:text-left xs:text-5xl font-bold sm:text-8xl">
        Elesium Online
      </span>
          {/* Buttons */}
          <div className="flex items-stretch pt-12">
            <a
              href="#about"
              className="mr-6 rounded-md bg-black/30 px-8 py-4 text-center font-semibold text-white lg:mr-8"
            >
              Get Started
            </a>
            <ContactPage/>
          </div>
        </div>
      </div>
      {/* Hero bottom */}
      <div className="mx-auto max-w-7xl px-5 py-12  md:py-16 lg:py-20">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
          {/* Arrow down */}
          <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
            {/* Title */}
            <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3>
            {/* Divider */}
            <div className="my-6 w-16 border-t border-white"></div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          {/* Image */}
          <div  className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px] rounded-md border border-white">

          </div>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px] rounded-md"
          /> */}
        </div>
      </div>
    </header>
  )
}

export default NewHero
