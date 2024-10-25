import React from 'react';
import './Banner4.css'; // Custom styles (if any)
import hosannaData from '../../data/hosannaPageData'; // Import your data

const Banner4 = () => {
  // Filter and sort the data to get the latest Order_of_service entry
  const latestOrderOfService = hosannaData
    .filter(item => item.type === 'Order_of_service') // Filter by type
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0]; // Sort by date and get the latest one

  return (
    <div className="container mt-5 py-4 banner4">
      <div className="row align-items-center">
        {/* Column for the logo */}
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/logo.png" alt="Church Logo" />
        </div>
        
        {/* Column for the latest Order of Service */}
        <div className="col-md-6">
          {latestOrderOfService ? ( // Check if there is a latest entry
            <>
              <h2 className='mb-4'>{latestOrderOfService.description}</h2>
              <p>{latestOrderOfService.date}</p>
              <a 
                href={latestOrderOfService.links} 
                className='btn btn-primary' // Add your desired button styles
                download // This attribute prompts a download
              >
                Download
              </a>
            </>
          ) : (
            <h2>No Order of Service available</h2> // Fallback if no data is available
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner4;
