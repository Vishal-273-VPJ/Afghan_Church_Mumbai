import React from 'react';
import './Banner4.css'; // Custom styles (if any)
/*import hosannaData from '../../data/hosannaPageData';*/

const Banner4 = () => {
  // Filter and sort the data to get the latest Order_of_service entry
  /*
  const latestOrderOfService = hosannaData
      .filter(item => item.type === 'Order_of_service')
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  */
  return (
    <div className="container mt-5 py-4 banner4">
      <div className="row align-items-center">
        {/* Column for the logo */}
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/logo.png" alt="Church Logo" />
        </div>
        
        {/* Column for the latest Order of Service */}
        <div className="col-md-6">
            <>
              <h2 className='mb-4'>Holy Communion Liturgy</h2>
              <p>June 2024</p>
              <a 
                href="/pdf/The_Lord's_Supper.pdf"
                className='btn btn-primary' // Add your desired button styles
                download // This attribute prompts a download
              >
                Download
              </a>
            </>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
