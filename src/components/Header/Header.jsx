import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const toggleMenu = () => {
        setMenuToggle((prevToggle) => !prevToggle);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
                <div className="container">
                    {/* Navbar Logo */}
                    <a className="navbar-brand" href="/">
                        <img src='/logo.png' alt="Logo" className="logo-img" />
                        <span className="logo-text">Afghan Church</span>
                    </a>

                    {/* Toggle button for mobile view */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleMenu} 
                        aria-controls="navbarNav" 
                        aria-expanded={menuToggle ? "true" : "false"} 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className={`collapse navbar-collapse ${menuToggle ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="leadership">Leadership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="donation">Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="hosanna">Downloads</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
