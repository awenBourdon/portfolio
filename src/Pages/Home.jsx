import React from 'react'
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import About from '../Components/About/About'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact/Contact'
import FixSocialIcon from '../Components/SocialIcon/FixSocialIcon'

const Home = () => {
  return (
    <>
    <Hero/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    <FixSocialIcon/>
    </>
  )
}

export default Home