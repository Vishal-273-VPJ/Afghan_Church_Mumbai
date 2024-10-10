import React from 'react';
import './HistoryQuote.css';

const HistoryQuote = () => {
  return (
    <div className="historyquote d-flex justify-content-center align-items-center">
      <div className="col-md-10 col-lg-8 text-center quote">
        <p className='py-4'>
            &quot;You are surrounded by history at the Abbey, not like a museum where it’s just displayed, 
            but here you are standing where history has happened.&quot;
        </p>
        <img src="logo.png" alt="Logo" className='pb-4' />
        <p className='pb-4'>Gerlinde - Abbey Marshal</p>
      </div>
    </div>
  );
}

export default HistoryQuote;
