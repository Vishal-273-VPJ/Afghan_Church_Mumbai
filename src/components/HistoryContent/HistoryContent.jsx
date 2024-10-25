import React, { useEffect, useRef, useState } from 'react'
import './HistoryContent.css'

const HistoryContent = () => {

    const [isShareVisible, setShareVisible] = useState(true);
  const furtherReadingRef = useRef(null); // Create a ref for the specific tag

  useEffect(() => {
    const handleScroll = () => {
      const historyContent = document.querySelector('.historyContent');
      const rect = historyContent.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      // Check if the further reading section is in view
      if (furtherReadingRef.current) {
        const furtherReadingRect = furtherReadingRef.current.getBoundingClientRect();
        // Hide share buttons if the further reading section is in view
        if (furtherReadingRect.top < window.innerHeight && furtherReadingRect.bottom > 0) {
          setShareVisible(false);
        } else {
          setShareVisible(isVisible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing history article!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  const shareOnInstagram = () => {
    // Redirect to Instagram profile or share message
    window.open('https://www.instagram.com/yourusername/', '_blank');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent('Interesting History Article');
    const body = encodeURIComponent(`Check out this article: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className='historyContent d-flex justify-content-center align-items-center'>
        <div className="col-md-6">
            <h1 className='pt-5 pb-2'>History and Architecture of the Church</h1>
            <p>St. John The Evangelist Church, a.k.a The Afghan War Memorial Church, known simply as the "Afghan Church" was the first Anglican church in the Navy Nagar district and began as a small thatched chapel a kilometer south in what was then known as the "Sick Bungalows" (now the INHS Asvini). Later, this Church was built with the hope that the church's spire would serve as a useful landmark for ships entering the harbour.
            </p>
            <p>The church is the principal memorial to the casualties of the First Anglo-Afghan War (1838-1843). Many of the casualties came from the East India Company's Bombay Army and Bengal Army. Plans for the quintessentially English Gothic Revival architecture of the church were designed in 1847 by English civil engineer and Gothic Revival architect, Henry Conybeare. The foundation stone of the church was laid on the 4 December 1847 by then-Governor of Bombay, Sir George Russell Clerk.
            </p>
            <p>Renowned Victorian architect William Butterfield designed the decorative tile Reredos (The ornamental screen covering the wall at the back of the altar), the elegant metal screen inside at the entrance to the Nave, the exquisite wooden Choir stalls, the Chancel furniture and the pews. All except the first 6 rows of pews were provided with slots as gunrests. The imposing edifice designed in the English Gothic Revival architecture style was constructed using locally available BUFF-COLOURED BASALT (PORBUNDER STONE). Inside, it is known for its wide gothic arches and beautiful stained glass windows. The chapel has a nave and aisle with a chancel 50 ft (15 m) in length and 27 ft (7 m) in width. The entire floor of the Nave and Aisles is in unpolished stone slabs, while the original Encaustic floor tiles (from England) of the Chancel was replaced in 1902 with White, Grey and Black marble laid in a geometric pattern to match the Sanctuary Floor (laid in 1882).
            </p>
            <p>The Church was consecrated on 7th January 1858 by Bishop Harding and is dedicated to St. John The Evangelist.
            </p>
            <img src="banner1.jpg" alt="church 3" className='img-fluid w-100' />
        </div>
    </div>
  )
}

export default HistoryContent