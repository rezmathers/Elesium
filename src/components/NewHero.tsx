import React from 'react'
import { FlipWordsDemo } from './FlipWodsDemo'
import ContactPage from './ContactPage'



const NewHero = () => {
  return (
    <header className='h-fit z-10'>
      {/* Hero top */}
      <div className="z-30 border-b border-slate-200/30 xs:px-4 ">
        {/* Container */}
        <div className="mx-auto max-w-7xl py-8  md:py-14">
          {/* Title */}
          <FlipWordsDemo/>
          <span className="cinzel-decorative-regular bg-gradient-to-b bg-clip-text text-transparent from-white to-slate-900/10 xs:text-4xl font-bold md:text-7xl">
        Elesium Online
      </span>
          {/* Buttons */}
          <div className="flex items-stretch pt-4 ">
            <a
              href="#about"
              className="mr-6 rounded-md bg-white/10 xs:px-4 md:px-8 py-4 text-center font-semibold text-white lg:mr-8 "
            >
              Get Started
            </a>
            <ContactPage className='rounded-md xs:px-4 md:px-8 py-4 bg-slate-700/30 border border-slate-50/30' buttonText='Contact Now'/>
          </div>
        </div>
      </div>
      {/* Hero bottom */}
      <div className="mx-auto max-w-7xl xs:px-4 md:px-0 py-6">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
          {/* Arrow down */}
          <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
            {/* Title */}
            <h3 className="text-3xl font-bold md:text-4xl text-slate-300 font-Cinzel italic">We are</h3>
            {/* Divider */}
            <div className="my-4 w-28 border-t border-white"></div>
            <p className="text-lg text-gray-500 ">
            The Social Media Agency For Architects And Interior Designers. We Craft Strategies That Showcase Your Work, Build Your Brand, And Connect You With Clients Who Value Design</p>
          </div>
          
          
      <img
            src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="."
            className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px] rounded-md border border-slate-300/50"
          />



        </div>
      </div>
    </header>
  )
}

export default NewHero
