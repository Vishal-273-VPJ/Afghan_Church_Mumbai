import React from 'react'
import "./DonationDetails.css"

const Donation = () => {
  return (
    <div className="donation">
      <div className='container mt-5 pb-5'>
          <h1 className='mb-4'>Tithes/Donations/Subscriptions</h1>
          <div className="donation-text mb-4">
            <p>
            Please donate generously towards the maintenance of this recently renovated Church.
            You may transfer directly to the Church Account details as under: 
            </p>
          </div>
          <div className="details mb-4">
            <div className='mb-1'>Details are as follows:</div>
            <div className='mb-1'>Bank Name: BANK OF BARODA</div>
            <div className='mb-1'>Account Name: ST. JOHN'S CHURCH, COLABA</div>
            <div className='mb-1'>Account No.: 99200100008351</div>
            <div className='mb-1'>IFSC Code: BARB0DBCOLA (5th character is zero)</div>
          </div>
          <div className="remember mb-4">
            All cheques are to be crossed and drawn in favour of "ST. JOHN'S CHURCH, COLABA".
          </div>
      </div>
    </div>
  )
}

export default Donation