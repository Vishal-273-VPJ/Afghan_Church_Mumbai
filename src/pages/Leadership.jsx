import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import OurLeadership from '../components/OurLeadership/OurLeadership'
import Presbyter from '../components/Presbyter/Presbyter'
import PastorTeam from '../components/PastorTeam/PastorTeam'

const Donation = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Leadership | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <OurLeadership />
        <Presbyter />
        <PastorTeam />
        <Footer />
    </div>
  )
}

export default Donation