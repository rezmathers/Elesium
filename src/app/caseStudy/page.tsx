
import React from 'react'
import ShineBorder from '@/components/magicui/shine-border'

const caseStudy = () => {
  return (
    <div className='dark bg-black flex h-screen items-center justify-center'>
        <ShineBorder
      className="text-center text-2xl font-bold capitalize"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      Shine Border
    </ShineBorder>
    </div>
    
  );
}

export default caseStudy
