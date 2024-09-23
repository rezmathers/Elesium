import React from 'react'

const Footer = () => {
  return (
    <footer className=' backdrop-blur-3xl  border-t border-slate-300/30 ' id='footer'>
    <div className="flex flex-col mx-auto w-full max-w-7xl  py-16 md:py-20 text-white xs:px-4">
      {/* LOGO */}
      <img src="./logo.svg" alt="" className='h-10 w-10'/>
      {/* MIDDLE CONTAINER */}
      <div className="mt-10 lg:flex w-full lg:flex-row lg:justify-between">
        {/* NEWSLETTER & EMAIL */}
        <div className="flex flex-col">
          <form action="" className="lg:mt-0 max-w-md">
            <div className="relative">
              <label
                htmlFor="email"
                className="font-inter font-medium text-slate-400"
              >
                SUBSCRIBE TO NEWSLETTER
              </label>
              <input
                type="email"
                className="font-inter relative mt-4 w-full rounded-md border border-black bg-white/10 px-6 py-4 text-base placeholder:text-slate-400 text-slate-300"
                placeholder="Enter your email"
                name="email"
              />
              <button
                type="submit"
                className="font-inter absolute right-0 bottom-0 lg:w-28 rounded-tr-md rounded-br-md bg-white/10 border border-black backdrop-blur-3xl px-6 py-4 text-base text-white"
              >
                Join
              </button>
            </div>
          </form>
          <div>
            <h3
            
              className="font-inter mb-4 mt-8 font-medium text-white"
            >
              EMAIL US
            </h3>
            <p className="font-inter text-base">shah@elesium.online</p>
          </div>
        </div>
       
        
      </div>
      {/* DIVIDER */}
      <div className="mx-auto my-12 w-full border border-gray-300 lg:my-20"></div>
      {/* COPYRIGHT TEXT */}
      <div className="lg:flex lg:flex-row lg:justify-between">
        {/* SOCIAL MEDIA ICONS */}
        <p className="font-inter lg:mt-0 text-sm text-gray-500">
          © Copyright 2021. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
