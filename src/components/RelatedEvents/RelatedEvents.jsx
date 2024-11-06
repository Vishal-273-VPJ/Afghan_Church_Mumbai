import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import eventsData from '../../data/eventsData'; // Import the events data
import './RelatedEvents.css';

const RelatedEvents = () => {
  const { id } = useParams(); // Get the current event ID from the URL
  const currentEventId = parseInt(id); // Convert it to a number
  
  // Filter out the current event and keep the rest
  const filteredEvents = eventsData.filter(event => event.id !== currentEventId);
  
  // Get the first 3 events
  const eventsToDisplay = filteredEvents.slice(0, 3);
  
  // Initialize useNavigate for navigation
  const navigate = useNavigate();

  // Handle button click to navigate to the events page
  const handleShowAllClick = () => {
    navigate('/events'); // Navigate to the '/events' path
  };

  return (
    <div className='related-events'>
      <div>
        <p className="related-event-title text-center pb-4">Find An Event</p>
      </div>
      <div className="events-list container pb-5">
        <div className="row g-5"> {/* Larger gutter spacing */}
          {eventsToDisplay.map(event => (
            <div className="col-md-4 mb-4" key={event.id}> {/* Add margin bottom for spacing */}
              <div className="p-3">
                <div className="card shadow text-center">
                  <img 
                    src={event.image} 
                    className="card-img-top" 
                    alt={event.title} 
                    style={{ height: '200px', objectFit: 'cover' }} // Fixed height for consistent image size
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text date">{event.date}</p>
                    <p className="card-text place">{event.place}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button centered below the events */}
        <div className="d-flex justify-content-center align-items-center mt-4"> {/* Center the button */}
          <button className="button all-events shadow" onClick={handleShowAllClick}>
            All Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default RelatedEvents;
