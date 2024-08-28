import React from 'react'
import NumberTicker from './magicui/number-ticker'
import BlurFade from './magicui/blur-fade'

const Stats = () => {
  return (
    <section id='about'className='text-slate-300'>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl  py-16  md:py-20 xs:px-4">
        {/* Title */}
        <BlurFade delay={0.25} inView>
        <div className="mb-12 flex flex-col md:flex-row">
          <h2 className=" text-3xl max-w-lg font-bold  md:text-5xl cinzel-decorative-regular">
             About Elesium
          </h2>
          
        </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* FactsCard */}
          <BlurFade delay={0.5} inView>
            <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-80 border border-white/40">
            <div className="text-xl font-semibold">
              <NumberTicker value={10000}/>+
              <p>Users</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
          </BlurFade>
          
          {/* FactsCard */}
          <BlurFade delay={0.75} inView>
             <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-80 border border-white/40">
            <div className="text-xl font-semibold">
            <NumberTicker value={460}/>+
              <p>Components</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div>
          </BlurFade>
         
          {/* FactsCard */}
          <BlurFade delay={1.0} inView><div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-80 border border-white/40">
            <div className="text-xl font-semibold">
              <h2><NumberTicker value={50}/>%</h2>
              <p>Time Savings</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div></BlurFade>
          
          {/* FactsCard */}
          <BlurFade delay={0.25} inView><div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-80 border border-white/40">
            <div className="text-xl font-semibold">
              <h2><NumberTicker value={5}/>-Star</h2>
              <p>User Satisfaction</p>
            </div>

            <p className="mt-4 text-sm">
              Empower your decisions with our AI-driven predictive analytics,
              foreseeing market trends that keep you a step ahead.
            </p>
          </div></BlurFade>
          
        </div>
      </div>
    </section>
  )
}

export default Stats
