import React from 'react';
import './Footer.css'; // Optional: You can add custom styles in this file

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container text-center pt-5 pb-4"> {/* Reduced padding */}
        <p>&copy; {new Date().getFullYear()} Afghan Church. All rights reserved.</p> {/* Using <small> tag for smaller text */}
      </div>
    </footer>
  );
};

export default Footer;
