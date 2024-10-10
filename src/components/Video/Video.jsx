import React, { useState } from 'react';
import './Video.css';

const Video = () => {
  const videoData = [
    {
      title: 'Church Video 1',
      description: 'This is a description of the first church video.',
      date: 'October 10, 2024',
      src: '/videos/sample_video.mp4',
    },
    {
      title: 'YouTube Video 1',
      description: 'This is a description of another church video.',
      date: 'October 10, 2024',
      src: 'https://www.youtube.com/embed/another_video_id',
      isYouTube: true,
    },
    // Add more video objects here
    {
      title: 'Church Video 2',
      description: 'This is a description of the second church video.',
      date: 'October 11, 2024',
      src: '/videos/sample_video_2.mp4',
    },
    {
      title: 'YouTube Video 2',
      description: 'This is a description of another church video.',
      date: 'October 11, 2024',
      src: 'https://www.youtube.com/embed/another_video_id_2',
      isYouTube: true,
    },
    {
      title: 'Church Video 3',
      description: 'This is a description of the third church video.',
      date: 'October 12, 2024',
      src: '/videos/sample_video_3.mp4',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of videos to display per page

  // Calculate total pages
  const totalPages = Math.ceil(videoData.length / itemsPerPage);

  // Get the current items to display
  const currentVideos = videoData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="video-section container pb-5">
      {currentVideos.map((video, index) => (
        <div className="row d-flex justify-content-center align-items-center mb-5" key={index}>
          <div className="col-md-8 video-block">
            {video.isYouTube ? (
              // YouTube video iframe
              <div className="video-iframe">
                <iframe
                  width="100%"
                  height="400"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // HTML5 video element
              <video
                width="100%"
                height="400"
                controls
                onError={() => console.error('Video load failed')}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Church Name */}
            <h2 className="mt-4">{video.title}</h2>

            {/* Video Description */}
            <p className="video-description mt-2">{video.description}</p>

            {/* Date or Additional Info */}
            <p className="video-date">Published on: {video.date}</p>
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
  );
};

export default Video;
