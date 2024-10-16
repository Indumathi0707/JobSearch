import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
        <Navbar/>
        <Contact/>
        <div className="mt-0">
        <Footer/>
        </div>
    </>
  )
}

export default ContactPage
