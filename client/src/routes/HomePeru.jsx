import React from 'react'
import Hero from '../components/Peru/Hero/Hero'
import HowItWorks from '../components/Peru/HowItWorks/HowItWorks'
import Steps from '../components/Peru/Steps/Steps'
import WhyWorldcoin from '../components/Peru/WhyWorldcoin/WhyWorldcoin';
import CEOProfile from '../components/Peru/CEOProfile/CEOProfile';

const HomePeru = () => {
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

export default HomePeru