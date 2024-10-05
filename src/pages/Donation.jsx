import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DonationDetails from '../components/Donation/DonationDetails'
import Support from '../components/Support/Support'

const Donation = () => {
  return (
    <div>
        <Header />
        <DonationDetails />
        <Support />
        <Footer />
    </div>
  )
}

export default Donation