import React from 'react'
import NumberTicker from './magicui/number-ticker'
import BlurFade from './magicui/blur-fade'

const Stats = () => {
  return (
    <section id='about'className='text-slate-300'>
      {/* Container */}
      <div className="lg:px-0 mx-auto w-full max-w-7xl xs:px-4 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
          {/* FactsCard */}
          <BlurFade delay={0.5} inView>
            <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-fit border border-white/40">
            <div className="text-xl font-semibold">
              $<NumberTicker value={54000000}/>+
              <p>ROAS Generated</p>
            </div>
          </div>
          </BlurFade>
          
          {/* FactsCard */}
          <BlurFade delay={0.75} inView>
             <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-fit border border-white/40">
            <div className="text-xl font-semibold">
            $<NumberTicker value={30000}/>+
              <p>Daily Ad Spend</p>
            </div>

          </div>
          </BlurFade>
         
          {/* FactsCard */}
          <BlurFade delay={1.0} inView>
            <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-fit border border-white/40">
            <div className="text-xl font-semibold">
              <h2><NumberTicker value={90}/>+</h2>
              <p>Clients Served</p>
            </div>

            
          </div></BlurFade>
          
          {/* FactsCard */}
          <BlurFade delay={1.25} inView>
            <div className="bg-slate-300/10 backdrop-blur-2xl rounded-lg py-10 px-5 flex flex-col justify-between h-fit border border-white/40">
            <div className="text-xl font-semibold">
              <h2><NumberTicker value={5}/>-Star</h2>
              <p>Client Reviews</p>
            </div>

           
          </div></BlurFade>
          
        </div>
      </div>
    </section>
  )
}

export default Stats
