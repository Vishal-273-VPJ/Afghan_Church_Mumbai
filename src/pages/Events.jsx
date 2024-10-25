import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EventsPage from '../components/EventsPage/EventsPage'

const Events = () => {
  useEffect(() => {
    // Set the document title when this component mounts
    document.title = 'Events | Afghan Church';
  }, []);
  return (
    <div>
        <Header />
        <EventsPage />
        <Footer />
    </div>
  )
}

export default Events