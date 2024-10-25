import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Quote from '../components/Quote/Quote'

const Hosanna = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Nopage | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <Quote />
        <Footer />
    </div>
  )
}

export default Hosanna