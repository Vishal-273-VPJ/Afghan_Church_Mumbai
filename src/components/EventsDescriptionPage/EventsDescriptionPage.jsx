import React from 'react';
import { useParams } from 'react-router-dom';
import './EventsDescriptionPage.css';
import eventsData from '../../data/eventsData';

const EventsDescriptionPage = () => {
    const { id } = useParams();
    const event = eventsData.find(event => event.id === parseInt(id)); // Find the event by ID

    if (!event) {
        return <p>Event not found.</p>; // Handle event not found case
    }

    return (
        <div className='EventsDescriptionPage d-flex justify-content-center align-items-center'>
            <div className="col-md-6">
                <div className="container">
                    <h3 className="text-center event-title pb-5">{event.title}</h3>
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className='img-fluid pb-5' // Added Bootstrap class for responsiveness
                        style={{ height: '100%', objectFit: 'cover', width: '100%' }} // Set fixed height and responsive width
                    />
                    <p className="pb-3">
                        {event.description || "No description available."}
                    </p>
                    <p className="pb-3"><strong>Date:</strong> {event.date}</p>
                    <p className="pb-1"><strong>Place:</strong> {event.place}</p>
                </div>
            </div>
        </div>
    );
};

export default EventsDescriptionPage;
