import React from 'react'
import './PastorTeam.css'

const PastorTeam = () => {
  return (
    <div>
        <div className="mt-4 pastoraltext text-center">
            Office Bearers
        </div>
        <div className="container pastoralcare">
            <div class="row g-5 mb-5">
                <div class="col-md-6 pastoralteam">
                    <div class="p-3 border bg-light pastoralteam">
                        <div className="secretarycontent">
                            <span className="Secretary">
                                Hon. Secretary
                            </span>
                            <p className='Secretaryname pt-3'>
                                Mr. Christopher Elisha
                            </p>
                            <p className='pt-3 pb-3'>
                                <a href="mailto:abc@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                    abc@gmail.com
                                </a>
                            </p>
                            <b>
                                +91-8879405069
                            </b>
                            {/*<p className='mt-3 d-flex gap-3'>
                                <i className="fab fa-facebook" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-twitter" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-instagram" style={{ fontSize: '25px' }}></i>
                            </p>*/}
                        </div>
                    </div>
                </div>
                <div class="col-md-6 pastoralteam">
                    <div class="p-3 border bg-light">
                        <div className="secretarycontent">
                            <span className="Secretary">
                                Hon. Treasurer
                            </span>
                            <p className='Secretaryname pt-3'>
                                Cmde Mathew Lathra, NM IN (Retd)
                            </p>
                            <p className='pt-3 pb-3'>
                                <a href="mailto:abc@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                    abc@gmail.com
                                </a>
                            </p>
                            <b>
                                +91-8879405069
                            </b>
                            {/*<p className='mt-3 d-flex gap-3'>
                                <i className="fab fa-facebook" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-twitter" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-instagram" style={{ fontSize: '25px' }}></i>
                            </p>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5"> {/* Larger gutter spacing */}
                <div className="col-md-4">
                    <div className="p-3 border bg-light"> {/* Adjust padding as necessary */}
                        <p className='Secretaryname pt-3'>
                            Mr. Raj Elisha
                        </p>
                        <p className='pt-3 pb-3'>
                            <a href="mailto:abc@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                abc@gmail.com
                            </a>
                        </p>
                        <b>+91-8879405069</b>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 border bg-light"> {/* Adjust padding as necessary */}
                        <p className='Secretaryname pt-3'>
                            Dr. Asha Mathew
                        </p>
                        <p className='pt-3 pb-3'>
                            <a href="mailto:abc@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                abc@gmail.com
                            </a>
                        </p>
                        <b>+91-8879405069</b>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 border bg-light"> {/* Adjust padding as necessary */}
                        <p className='Secretaryname pt-3'>
                            Mr. Loren Franklin
                        </p>
                        <p className='pt-3 pb-3'>
                            <a href="mailto:abc@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                abc@gmail.com
                            </a>
                        </p>
                        <b>+91-8879405069</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastorTeam