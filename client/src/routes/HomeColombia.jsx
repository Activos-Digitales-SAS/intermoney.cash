import React from 'react'
import Hero from '../components/Colombia/Hero/Hero'
import HowItWorks from '../components/Colombia/HowItWorks/HowItWorks'
import Steps from '../components/Colombia/Steps/Steps'
import WhyWorldcoin from '../components/Colombia/WhyWorldcoin/WhyWorldcoin';
import CEOProfile from '../components/Colombia/CEOProfile/CEOProfile';

const HomeColombia = () => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <Steps />
      <WhyWorldcoin />
      <CEOProfile />
    </div>
  )
}

export default HomeColombia