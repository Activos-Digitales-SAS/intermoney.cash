import React from 'react'
import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Steps from '../components/Steps/Steps'
import WhyWorldcoin from '../components/WhyWorldcoin/WhyWorldcoin';
import CEOProfile from '../components/CEOProfile/CEOProfile';

const Home = () => {
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

export default Home