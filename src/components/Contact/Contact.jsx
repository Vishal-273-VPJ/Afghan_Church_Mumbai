import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact mt-5 pb-5">
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-6">
                    <h2 className='mt-5 mb-4'>Contact Us</h2>
                    <div className="address mb-4">
                        <pre>St. John The Evangelist Church CNI (The Afghan War Memorial Church),</pre>
                        <pre>Duxbury Lane,</pre>
                        <pre>Colaba, Navy Nagar,</pre>
                        <pre>Mumbai - 400005,</pre>
                        <pre>Maharashtra, India.</pre>
                    </div>
                    <p className='email mb-4'>pcafghanchurch@gmail.com</p>
                    <p className='number mb-4'>+91-8879405069</p>
                    <div className="social-icons"> {/* Centering container */}
                        <p>
                            <a href="https://www.facebook.com/afghanchurch.colaba.31" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <i className="fab fa-facebook" style={{ fontSize: '30px' }}></i>
                            </a>
                            <a href="https://www.instagram.com/afghanchurchcolaba" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <i className="fab fa-instagram" style={{ fontSize: '30px' }}></i>
                            </a>
                            <a href="https://www.youtube.com/@afghanchurchcolabamumbai9221" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <i className="fab fa-youtube" style={{ fontSize: '30px' }}></i>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 text-center">
                    <div className="donation-text mt-5 mb-4">
                        <h2>
                            Scan to contact
                        </h2>
                    </div>
                    <img src="/contact_qrcode.png" alt="QR Code" className="img-fluid mb-3" style={{ maxWidth: '310px' }} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
