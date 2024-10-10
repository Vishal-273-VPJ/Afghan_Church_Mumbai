import React from 'react';
import './Banner3.css'; // Custom styles (if any)

const Banner2 = () => {
  return (
    <div className="container mt-5 banner3">
      <div className="row align-items-center">
        {/* Column for the text */}
        <div className="col-md-6">
          <h2 className='mb-4'>House Of Prayer</h2>
          <p>
          “Even them will I bring to my holy mountain, and make them joyful in my house of prayer: their burnt offerings and their sacrifices shall be accepted upon mine altar; for mine house shall be called an house of prayer for all people.”
          Isaiah 56:7
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
