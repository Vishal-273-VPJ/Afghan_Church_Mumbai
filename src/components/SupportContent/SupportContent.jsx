import React from 'react';
import './SupportContent.css';

const SupportContent = () => {
  return (
    <div className='supportcontent'>
      <div className="container d-flex justify-content-center pb-5">
        <div className='col-md-6'>
          <div className='card shadow'>
            <div className='card-body'>
              <h1 id='gatherings' className='text-center mb-4'>
                Our Gatherings
              </h1>

              {/* Worship With Us Section */}
              <h3 id='wednesday' className='card-title text-center'>
                Worship With Us
              </h3>
              <h5 id='online-service' className='card-title text-center'>Holy Communion Service</h5>
              <div id='service1' className='text-center pb-3'>
                8:45 am: Every Sunday
              </div>

              {/* Visiting Hours Section */}
              <h5 id='visiting-hours' className='card-title text-center'>
                Visiting Hours
              </h5>
              <div id='service2' className='text-center pb-3'>
                9 am - 5 pm: Every Day
              </div>

              {/* Online Liturgical Service Section */}
              <h5 id='online-service' className='card-title text-center'>
                Online Liturgical Service
              </h5>
              <div id='service3' className='text-center pb-3'>
                8:00 am: Every Saturday
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 id='liturgical' className='text-center'>
        Lets's join the Liturgical Service
      </h4>
    </div>
  );
};

export default SupportContent;
