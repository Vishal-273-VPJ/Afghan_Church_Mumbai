import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DonationDetails from '../components/Donation/DonationDetails'

const Donation = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Donation | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <DonationDetails />
        <Footer />
    </div>
  )
}

export default Donation