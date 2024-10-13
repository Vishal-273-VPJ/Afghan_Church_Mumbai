import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import EventsDescriptionPage from '../components/EventsDescriptionPage/EventsDescriptionPage'
import RelatedEvents from '../components/RelatedEvents/RelatedEvents'

const EventDescription = () => {
  return (
    <div>
        <Header />
        <EventsDescriptionPage />
        <RelatedEvents />
        <Footer />
    </div>
  )
}

export default EventDescription