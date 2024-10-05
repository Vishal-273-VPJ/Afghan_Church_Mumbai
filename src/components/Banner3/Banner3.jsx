import React from 'react';
import './Banner3.css'; // Custom styles (if any)

const Banner2 = () => {
  return (
    <div className="container mt-5 banner3">
      <div className="row align-items-center">
        {/* Column for the text */}
        <div className="col-md-6">
          <h2 className='mb-4'>Our Doors are Open</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-6">
          <img src="/bible.jpg" alt="Church exterior" className="church-img" />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
