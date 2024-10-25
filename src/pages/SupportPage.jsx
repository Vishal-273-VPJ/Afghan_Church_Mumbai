import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SupportContent from '../components/SupportContent/SupportContent'
import SupportVideo from '../components/SupportVideo/SupportVideo'

const SupportPage = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Services | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <SupportContent />
        <SupportVideo />
        <Footer />
    </div>
  )
}

export default SupportPage