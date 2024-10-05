import React from 'react'
import "./DonationDetails.css"

const Donation = () => {
  return (
    <div className="donation">
      <div className='container mt-5 pb-5'>
          <h1 className='mb-4'>Tithe/Donations/Subscription -</h1>
          <div className="donation-text mb-4">
            <p>
                All Donations in cash/cheque to the wings of St Paul’s Church, Pune – 1, viz. Sunday School, Youth Fellowship, Women’s Fellowship and Medical Fellowship, are to be given to the Hon Treasurer of the Church Pastorate Committee who will issue a Receipt and account the same and the information of the Donation will be intimated to the particular wing and given to them for the said purpose. All cheques are to be crossed and drawn in favour of <b>"The Society of St Paul’s Church"</b>
            </p>
            <p>
              Church Subscription / Freewill Offering / Tithe / Thanksgiving Offering / Donations in the form of financial giving can also be made through Bank Transfer.
            </p>
          </div>
          <div className="details mb-4">
            <div className='mb-1'>Details are as follows:</div>
            <div className='mb-1'>Bank Name: BANK OF INDIA, divune Main</div>
            <div className='mb-1'>Account Name: THE SOCIETY OF ST. divAUL’S CHURCH</div>
            <div className='mb-1'>Account No.: 050010100069789</div>
            <div className='mb-1'>IFSC Code: BKID0000500</div>
            <div className='mb-1'>MICR Code: 411013002</div>
          </div>
          <div className="remember mb-4">
            Kindly remember to inform the Hon Treasurer or send an Email to stpaulchurchpune@gmail.com mentioning your Name, Amount and Purpose of Giving.
          </div>
      </div>
    </div>
  )
}

export default Donation