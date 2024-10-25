import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HosannaPage from '../components/HosannnaPage/HosannaPage'

const Hosanna = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Download | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <HosannaPage />
        <Footer />
    </div>
  )
}

export default Hosanna