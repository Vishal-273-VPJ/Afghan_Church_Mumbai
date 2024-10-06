import React from 'react'
import './PastorTeam.css'

const PastorTeam = () => {
  return (
    <div>
        <div className="mt-4 pastoraltext text-center">
            Pastoral Care Team
        </div>
        <div className="container pastoralcare">
            <div className="row"> {/* Add gap between columns */}
                <div className="col-md-5 pastoralteam">
                    <div className="row py-4">
                        <div className="col-md-6 d-flex flex-row">
                            <img src="church4.jpg" alt="church-4" className="church4 img-fluid" />
                        </div>
                        <div className="col-md-6 secretarycontent">
                            <span className="Secretary">
                                Hon. Secretary
                            </span>
                            <p className='Secretaryname pt-3'>
                                Mrs. Minoti Salvi
                            </p>
                            <p className='pt-3 pb-3'>
                                <a href="mailto:minotisalvi43@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                    minotisalvi43@gmail.com
                                </a>
                            </p>
                            <b>
                                +91-9503866567
                            </b>
                            <p className='mt-3 d-flex gap-3'>
                                <i className="fab fa-facebook" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-twitter" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-instagram" style={{ fontSize: '25px' }}></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 pastoralteam">
                    <div className="row py-4">
                        <div className="col-md-6 d-flex flex-row">
                            <img src="church3.jpg" alt="church-3" className="church3 img-fluid" />
                        </div>
                        <div className="col-md-6 secretarycontent">
                            <span className="Secretary">
                                Hon. Secretary
                            </span>
                            <p className='Secretaryname pt-3'>
                                Mr. S J V Chelliah
                            </p>
                            <p className='pt-3 pb-3'>
                                <a href="mailto:chelliah.dorcas@gmail.com" className='email text-decoration-none text-dark mb-3'>
                                    chelliah.dorcas@gmail.com
                                </a>
                            </p>
                            <b>
                                +91-9158506703
                            </b>
                            <p className='mt-3 d-flex gap-3'>
                                <i className="fab fa-facebook" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-twitter" style={{ fontSize: '25px' }}></i>
                                <i className="fab fa-instagram" style={{ fontSize: '25px' }}></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastorTeam