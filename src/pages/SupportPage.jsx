import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SupportContent from '../components/SupportContent/SupportContent'
import SupportVideo from '../components/SupportVideo/SupportVideo'

const SupportPage = () => {
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