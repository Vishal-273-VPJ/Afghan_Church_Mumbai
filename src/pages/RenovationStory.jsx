import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Story from '../components/Story/Story'

const RenovationStory = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Renovation Story | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <Story />
        <Footer />
    </div>
  )
}

export default RenovationStory