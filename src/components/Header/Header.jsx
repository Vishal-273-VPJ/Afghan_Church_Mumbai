import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setMenuToggle((prevToggle) => !prevToggle);
    };

    const handleLink = (path) => {
        // Check if the current path is the gallery page
        if (location.pathname === '/gallery' && path === '/gallery/') {
            return '/gallery'; // Prevent adding the trailing slash
        }
        return path; // Return the original path otherwise
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
                <div className="container">
                    {/* Navbar Logo */}
                    <a className="navbar-brand" href="/">
                        <img src='/logo.png' alt="Logo" className="logo-img" />
                        <span className="logo-text">St. John The Evangelist Church</span>
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
                                <a className="nav-link" href={handleLink("/services")}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/leadership")}>Leadership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/sermon")}>Meditation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/events")}>Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/history")}>History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/renovation")}>Renovation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/gallery")}>Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/donation")}>Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/downloads")}>Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={handleLink("/contact")}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
