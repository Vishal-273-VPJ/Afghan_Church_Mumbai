import React from 'react';
import './Banner2.css'; // Custom styles (if any)

const Banner2 = () => {
  return (
    <div className="mt-5 banner2">
      <div className="row align-items-center">
        {/* Column for the image */}
        <div className="col-md-6">
          <img src="/banner2.jpg" alt="Church exterior" className="church-img" />
        </div>

        {/* Column for the text */}
        <div className="col-md-6 banner-text">
          <h1 className='mb-4 mx-5'>Our Doors are Open</h1>
          <p className='mx-5'>
          Join us every Sunday morning at 8:45 AM for our uplifting worship service. We invite you to be part of our community as we come together to celebrate the Holy Sacraments, share in fellowship, and inspire one another. We look forward to welcoming you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
