import React from 'react';
import './Quote.css';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Quote = () => {
  return (
    <div className='quote'>
      <blockquote>
        "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." 
        <footer>- Jeremiah 29:11</footer>
      </blockquote>
      <p className='quote-text'>
        If you're feeling lost, remember that you are not alone. 
      </p>
      <Link to="/" className='main-page-link'>Go back to the main page</Link>
    </div>
  );
}

export default Quote;
