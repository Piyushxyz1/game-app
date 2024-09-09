import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'

import SignUp from '../../components/SignUp'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Home
