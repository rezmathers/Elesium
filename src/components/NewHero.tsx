import React from 'react'
import { FlipWordsDemo } from './FlipWodsDemo'
import ContactPage from './ContactPage'

const NewHero = () => {
  return (
    <header className='h-screen'>
      {/* Hero top */}
      <div className="bg-gray-300/10 border-b border-slate-200/30 xs:px-4 pb-8">
        {/* Container */}
        <div className="mx-auto max-w-7xl py-8  md:py-14">
          {/* Title */}
          <FlipWordsDemo/>
          <span className="cinzel-decorative-regular mt-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-700 to-gray-300 bg-clip-text text-center text-6xl leading-none text-transparent dark:from-white dark:to-slate-900/10 xs:text-left xs:text-5xl font-bold sm:text-7xl">
        Elesium Online
      </span>
          {/* Buttons */}
          <div className="flex items-stretch  pt-12 ">
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
      <div className="mx-auto max-w-7xl px-5 py-6">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
          {/* Arrow down */}
          <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
            {/* Title */}
            <h3 className="text-3xl font-bold md:text-4xl text-slate-600 font-Cinzel">We are</h3>
            {/* Divider */}
            <div className="my-4 w-28 border-t border-white"></div>
            <p className="text-lg text-gray-500 ">
            The Social Media Agency For Architects And Interior Designers. We Craft Strategies That Showcase Your Work, Build Your Brand, And Connect You With Clients Who Value Design</p>
          </div>
          
          <img
            src="./img.png"
            alt=""
            className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px] rounded-md"
          />
        </div>
      </div>
    </header>
  )
}

export default NewHero
