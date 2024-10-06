import React from 'react'
import './Presbyter.css'

const Presbyter = () => {
  return (
    <div className='presbyter'>
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="pastor.jpg" alt="pastor" className='pastor'/>
                </div>
                <div className="col-md-6 presbyter-right">
                    <span className="incharge">
                        Presbyter-in-Charge
                    </span>
                    <p className='rev'>
                        Rev. Dr. Kenseelan Azariah
                    </p>
                    <p className='pt-4 pb-3'>
                        <a href="mailto:ken_seelan@yahoo.com" className='email text-decoration-none text-dark mb-3'>
                            ken_seelan@yahoo.com
                        </a>
                    </p>
                    <b>
                        +91-9822602858
                    </b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presbyter