import React from 'react';
import './Banner2.css'; // Custom styles (if any)

const Banner2 = () => {
  return (
    <div className="mt-5 banner2">
      <div className="row align-items-center">
        {/* Column for the image */}
        <div className="col-md-6">
          <img src="/church2.jpg" alt="Church exterior" className="church-img" />
        </div>

        {/* Column for the text */}
        <div className="col-md-6 banner-text">
          <h1 className='mb-4 mx-5'>Our Doors are Open</h1>
          <p className='mx-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
