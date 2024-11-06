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
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <i className="fab fa-youtube" style={{ fontSize: '30px' }}></i>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <form action="" className='mt-5'>
                        <div className="col-md-12 mb-2">
                            <label for="name">Name *</label>
                            <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter your name" />
                        </div>
                        <div className="col-md-12 mb-2">
                            <label for="address">Address *</label>
                            <input type="text" class="form-control" id="address" aria-describedby="address" placeholder="Enter your address" />
                        </div>
                        <div className="col-md-12 mb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="email">Email *</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter your email" />
                                </div>
                                <div className="col-md-6">
                                    <label for="phone">Phone *</label>
                                    <input type="tel" class="form-control" id="phone" aria-describedby="phone" placeholder="Enter your phone number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-2">
                            <label for="subject">Subject *</label>
                            <input type="text" class="form-control" id="subject" aria-describedby="subject" placeholder="Type your subject" />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label for="message">Message *</label>
                            <textarea type="text" class="form-control" rows="4" id="message" aria-describedby="message" placeholder="Type your message here" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="button">Confirm identity</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
