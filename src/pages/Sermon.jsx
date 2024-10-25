import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Video from '../components/Video/Video'

const Sermon = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Sermon | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <Video />
        <Footer />
    </div>
  )
}

export default Sermon