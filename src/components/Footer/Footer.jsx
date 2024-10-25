import React from 'react';
import './Footer.css'; // Optional: You can add custom styles in this file

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container text-center pt-5 pb-4"> {/* Reduced padding */}
        <p>
          <a href="https://www.facebook.com/afghanchurch.colaba.31" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/afghanchurchcolaba" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Afghan Church. All rights reserved.</p> {/* Optional: You could wrap this in <small> for smaller text */}
      </div>
    </footer>
  );
};

export default Footer;
