import React from 'react';
import './Banner.css'; // Import the CSS file

const Banner = () => {
  return (
    <div className='banner'>
      <img src="/church.jpg" alt="Church" className="banner-image" /> {/* Add alt attribute for accessibility */}
      <h1 className="text-center mx-5">
        Welcome to The Church of St. John the Evangelist
      </h1>
    </div>
  );
}

export default Banner;
