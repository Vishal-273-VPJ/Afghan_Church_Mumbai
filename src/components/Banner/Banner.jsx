import React from 'react';
import './Banner.css'; // Import the CSS file

const Banner = () => {
  return (
    <div className='banner'>
      <img src="/banner1.jpg" alt="Church" className="banner-image" /> {/* Add alt attribute for accessibility */}
      <h1 className="text-center mx-5">
        Welcome To St. John The Evangelist Church
      </h1>
    </div>
  );
}

export default Banner;
