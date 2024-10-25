import React, { useEffect, useRef, useState } from 'react'
import './Story.css'

const Story = () => {
    const [isShareVisible, setShareVisible] = useState(true);
  const furtherReadingRef = useRef(null); // Create a ref for the specific tag

  useEffect(() => {
    const handleScroll = () => {
      const historyContent = document.querySelector('.story');
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
    <div className='story d-flex justify-content-center align-items-center'>
        <div className="col-md-6">
            <h3 className='pt-5 pb-2 text-center'>Story</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>St Edward's Church</h2>
            <img src="church3.jpg" alt="church 3" className='img-fluid w-100' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>St Edward's Church</h2>
            <img src="church3.jpg" alt="church 3" className='img-fluid w-100' />
            <p ref={furtherReadingRef}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
  )
}

export default Story