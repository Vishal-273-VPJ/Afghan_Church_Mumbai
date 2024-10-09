import React, { useState } from 'react';
import './HosannaPage.css';

const HosannaPage = () => {
    const Data = [
        { description: 'Sunday Service Worship Order', date: "October 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "September 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "August 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "July 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "June 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "May 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "April 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "March 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "February 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "January 2024", links: "/pdf/WesleyChurch.pdf" },
        { description: 'Sunday Service Worship Order', date: "December 2023", links: "/pdf/WesleyChurch.pdf" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    // Calculate total pages
    const totalPages = Math.ceil(Data.length / itemsPerPage);

    // Get the current items to display
    const currentItems = Data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='hosanna pb-5'>
            <h3 className="pt-5 pb-3 hosanna-title text-center">Hosana</h3>
            <p className='text-center news pb-5'>Afghan Church newsletter</p>
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
                                Download Service Order
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
