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

  return (
    <div className='historyContent d-flex justify-content-center align-items-center'>
        <div className="col-md-6">
            <h3 className='pt-5 pb-2'>History</h3>
            <p className='font-weight-normal title-text'>History of Afghan Church</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>Further reading</h3>
            <div className='pb-2'><a href="google.com" target="_blank" >Treasures of Westminster Abbey by Tony Trowles,</a> revised edition 2018</div>
            <div className='pb-2'><a href="google.com" target="_blank" >Treasures of Westminster Abbey by Tony Trowles,</a> revised edition 2018</div>
            <div className='pb-2'><a href="google.com" target="_blank" >Treasures of Westminster Abbey by Tony Trowles,</a> revised edition 2018</div>
            <div className='pb-2'><a href="google.com" target="_blank" >Treasures of Westminster Abbey by Tony Trowles,</a> revised edition 2018</div>
            <h5>TAGS</h5>
            <div ref={furtherReadingRef}className="pb-2">
                <a href="google.com" target="_blank">Architecture</a> | <a href="google.com" target="_blank">Chirstianity</a> | <a href="google.com" target="_blank">History</a>
            </div>
        </div>
        {isShareVisible && (
            <div className="share-btn-group">
                <p>SHARE</p>
                <button className="btn btn-primary">
                    <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-primary">
                    <i className="fab fa-facebook"></i>
                </button>
                <button className="btn btn-primary">
                    <i className="fab fa-instagram"></i>
                </button>
                <button className="btn btn-primary">
                    <i className="fas fa-envelope"></i>
                </button>
            </div>
        )}
    </div>
  )
}

export default HistoryContent