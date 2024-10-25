import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GalleryPage from '../components/GalleryPage/GalleryPage';

const Gallery = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Gallery | Afghan Church';
  }, []);

  return (
    <div>
      {/* Render the header */}
      <Header />

      {/* Render the gallery page */}
      <GalleryPage />

      {/* Render the footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
