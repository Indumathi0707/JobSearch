import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
        <Navbar/>
        <About/>
        <div className="my-0">
        <Footer/>
        </div>
    </>
  )
}

export default AboutPage
