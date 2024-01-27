import './CSS/Projects.css';

import React, { useState } from 'react';

const Project = ({ title, images, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  // Initialize the state variable `showDetails` to false

  const toggleProjectDetails = () => {
    setShowDetails(!showDetails);
  };
  /*
  Define a function `toggleProjectDetails` that toggles the value of `showDetails`
  when called
  */

  return (
    <div className="project" onClick={toggleProjectDetails}>
      <h3>{title}</h3>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={`Project ${index + 1}`} style={{ height: '300px', width: '700px' }} />
        ))}
      </div>
      {showDetails && (
        <div className="project-details">
          {/* Add your project details here */}
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
