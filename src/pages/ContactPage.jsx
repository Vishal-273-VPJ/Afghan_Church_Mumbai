import React from 'react'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  return (
    <div>
        <Header />
        <div className='mx-5'>
            <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage