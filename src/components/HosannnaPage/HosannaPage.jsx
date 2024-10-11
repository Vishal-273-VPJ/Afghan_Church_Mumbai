import React, { useState } from 'react';
import './HosannaPage.css';

const HosannaPage = () => {
    const Data = [
        { type: 'Newsletter', description: 'Sunday Service Worship Order', date: "October 2024", links: "/pdf/WesleyChurch.pdf" },
        { type: 'Newsletter', description: 'Sunday Service Worship Order', date: "September 2024", links: "/pdf/WesleyChurch.pdf" },
        { type: 'Hymnal', description: 'Hymn for Praise', date: "August 2024", links: "/pdf/WesleyChurchHymnal.pdf" },
        { type: 'Hymnal', description: 'Hymn for Worship', date: "July 2024", links: "/pdf/WesleyChurchHymnal.pdf" },
        { type: 'Liturgy', description: 'Holy Communion Liturgy', date: "June 2024", links: "/pdf/WesleyChurchLiturgy.pdf" },
        { type: 'Liturgy', description: 'Baptism Liturgy', date: "May 2024", links: "/pdf/WesleyChurchLiturgy.pdf" },
        { type: 'Newsletter', description: 'Sunday Service Worship Order', date: "April 2024", links: "/pdf/WesleyChurch.pdf" },
        { type: 'Newsletter', description: 'Sunday Service Worship Order', date: "March 2024", links: "/pdf/WesleyChurch.pdf" },
        { type: 'Hymnal', description: 'Worship Hymn', date: "February 2024", links: "/pdf/WesleyChurchHymnal.pdf" },
        { type: 'Liturgy', description: 'Service Liturgy', date: "January 2024", links: "/pdf/WesleyChurchLiturgy.pdf" },
        { type: 'Newsletter', description: 'Sunday Service Worship Order', date: "December 2023", links: "/pdf/WesleyChurch.pdf" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('All'); // Filter state
    const itemsPerPage = 5; // Number of items to display per page

    // Calculate total pages
    const totalPages = Math.ceil(Data.length / itemsPerPage);

    // Get the current items to display based on filter
    const currentItems = Data
        .filter(item => filter === 'All' || item.type === filter)
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle filter change
    const handleFilterChange = (type) => {
        setFilter(type);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <div className='hosanna pb-5'>
            <h3 className="pt-5 pb-3 hosanna-title text-center">Church Service and Other Materials</h3>
            <p className='text-center news'>Afghan Church Newsletter</p>

            {/* Filter Buttons */}
            <div className="text-center mb-4">
                <button className="btn btn-secondary mx-2" onClick={() => handleFilterChange('All')}>All</button>
                <button className="btn btn-secondary mx-2" onClick={() => handleFilterChange('Newsletter')}>Newsletter</button>
                <button className="btn btn-secondary mx-2" onClick={() => handleFilterChange('Hymnal')}>Hymnal</button>
                <button className="btn btn-secondary mx-2" onClick={() => handleFilterChange('Liturgy')}>Liturgy</button>
            </div>

            <div className="container">
                {currentItems.map((item, index) => (
                    <div className="row mb-3 pdf" key={index}>
                        <div className="col-md-4 text-center">
                            <img src="logo.png" alt="Afghan Church Logo" className='img' />
                        </div>
                        <div className="col-md-4 align-self-center">
                            <h4>{item.description}</h4>
                            <p>{item.date}</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <a 
                                className="btn btn-primary download_button" 
                                href={item.links}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                ))}
                {/* Pagination */}
                {totalPages > 1 && (
                    <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li 
                                    key={i} 
                                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    <span className="page-link">{i + 1}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default HosannaPage;
