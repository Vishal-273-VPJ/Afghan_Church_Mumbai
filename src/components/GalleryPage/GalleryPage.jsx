import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const images = [
    '4241.jpg', '4245.jpg', '4283.jpg', '4295.jpg', '4314.jpg',
    '4349.jpg', '4389.jpg', '4419.jpg', '4481.jpg', '4499.jpg',
    '4550.jpg', '4592.jpg', '4612.jpg', '4635.jpg', '4676.jpg',
    '4682.jpg', '4724.jpg', '4757.jpg', '4806.jpg', '4819.jpg',
    '4861.jpg', '5689.jpg', '5705.jpg', '5708.jpg', '5732.jpg',
    '5745.jpg', '7983.jpg', '8137.jpg', '8250.jpg', '8293.jpg',
    '8326.jpg', '8414.jpg', '8426.jpg', '8492.jpg'
  ];

  return (
    <div className='galleryPage pb-3'>
      <h3 className="text-center pb-3">Gallery</h3>
      <div className="container">
        <div className="row g-5">
          {images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-3 bg-light shadow-lg rounded"> {/* Bootstrap shadow-lg and rounded corners */}
                <img
                  src={`/gallery/${image}`}
                  alt={`Gallery item ${index + 1}`}
                  className="img-fluid rounded" // Optional: rounded corners on images as well
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
