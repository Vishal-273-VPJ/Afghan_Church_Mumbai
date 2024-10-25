import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Contact | Afghan Church';
  }, []);
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