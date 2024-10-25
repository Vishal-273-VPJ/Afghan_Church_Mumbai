import React from 'react';
import './SupportContent.css';

const SupportContent = () => {
  return (
    <div className='supportcontent'>
      <h4 id='liturgical' className='text-center'>
        Lets's join the Liturgical Service
      </h4>
      <h1 id='gatherings' className='text-center pb-3'>
        Our Gatherings
      </h1>
      <h3 id='wednesday' className='text-center pb-3'>
        Worship With Us
      </h3>
      <p id='sunday' className='text-center'>
        Sunday Service
      </p>
      <div id='service1' className='text-center pb-3'>
        8:45 am: Holy Communion Service
      </div>
      <p id='sunday' className='text-center'>
        Visiting Hours
      </p>
      <div id='service2' className='text-center pb-3'>
      9 am - 5 pm: Every Day
      </div>
      <p id='sunday' className='text-center'>
        Online Liturgical Service
      </p>
      <div id='service3' className='text-center'>
        8:00 am: Saturday
      </div>
    </div>
  );
};

export default SupportContent;
