import React, { useState } from 'react';
import './EventsPage.css';
import eventsData from '../../data/eventsData'; // Import the events data

const EventsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 9;
    const [selectedCategory, setSelectedCategory] = useState('All Events'); // State to manage selected category

    // Function to filter events based on the selected category
    const filterEvents = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to the first page when changing category
    };

    const filteredEvents = selectedCategory === 'All Events'
        ? eventsData
        : eventsData.filter(event => {
            // Adjust this logic to fit your event categories
            if (selectedCategory === 'Special Services') return event.category === 'Special Services';
            if (selectedCategory === 'Choral and Music') return event.category === 'Choral and Music';
            if (selectedCategory === 'Family') return event.category === 'Family';
            if (selectedCategory === 'Lectures and Talks') return event.category === 'Lectures and Talks';
            if (selectedCategory === 'Special Tours and Events') return event.category === 'Special Tours and Events'; // Example condition
            return false;
        });

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='events'>
            <p className="pt-5 pb-0 mb-0 event-title text-center">Events at St. John The Evangelist Church</p>
            <div className="text-center">
                <span className="service-content px-5">
                    Special services, concerts, lectures, events for families and more – there’s something for everyone here! 
                    Many of our events are free and open to anyone.
                </span>
            </div>
            <div>
                <p className="find-an-event text-center">Find An Event</p>
            </div>
            <div className="text-center mb-3">
                <button onClick={() => filterEvents('All Events')} className="btn btn-outline-primary mx-1">All Events</button>
                <button onClick={() => filterEvents('Special Services')} className="btn btn-outline-primary mx-1">Special Services</button>
                <button onClick={() => filterEvents('Choral and Music')} className="btn btn-outline-primary mx-1">Choral and Music</button>
                <button onClick={() => filterEvents('Family')} className="btn btn-outline-primary mx-1">Family</button>
                <button onClick={() => filterEvents('Lectures and Talks')} className="btn btn-outline-primary mx-1">Lectures and Talks</button>
                <button onClick={() => filterEvents('Special Tours and Events')} className="btn btn-outline-primary mx-1">Special Tours and Events</button>
                <button onClick={() => filterEvents('Online Worship')} className="btn btn-outline-primary mx-1">Online Worship</button>
            </div>
            <div className="events-list container pb-5">
                <div className="row g-5"> 
                    {currentEvents.map(event => (
                        <div className="col-md-4 mb-4" key={event.id}>
                            <div className="p-3">
                                <a href={`/event/${event.id}`} className="card shadow text-center text-decoration-none">
                                    <img 
                                        src={event.image} 
                                        className="card-img-top" 
                                        alt={event.title} 
                                        style={{ height: '200px', objectFit: 'cover' }} 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text date">{event.date}</p>
                                        <p className="card-text place">{event.place}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <nav aria-label="Page navigation" className="text-center">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button onClick={() => handlePageChange(index + 1)} className="page-link">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default EventsPage;
