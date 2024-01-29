import './CSS/Projects.css'
import React, { useState } from 'react';

const Projects = () => {
  // State to track which project details to show
  const [showProjectDetails, setShowProjectDetails] = useState({ project1: false, project2: false });

  // Function to toggle project details visibility
  const toggleProjectDetails = (projectId) => {
    setShowProjectDetails((prevDetails) => ({ ...prevDetails, [projectId]: !prevDetails[projectId] }));
  };

  return (
    <section id="projects">
      <h1>Projects</h1>
      <strong>Click the project to reveal its description.</strong>

      <div className="project" onClick={() => toggleProjectDetails('project1')}>
        <h3>Master Rotation Plan</h3>
        <div className="image-container">
          <img src="img/MRP 1.png" alt="Project 1"/>
          <img src="img/MRP 5.png" alt="Project 1"/>
        </div>

        {showProjectDetails.project1 && (
          <div id="project1-details">
            <p className="h4">This is an illustration of the project <strong>Master Rotation Plan (MRP).</strong></p>
            <p><strong>REQUIREMENTS:</strong>To construct a web-based system capable of rotating student nurses at will.</p>
            <p>This project required extensive knowledge in website design.</p>
            <p>In essence HTML, PHP, Javascript, and the Laravel framework.</p>
            <p>The project is currently running within Kenyatta University Hospital.</p>
            {/* Add more details or images as needed */}
          </div>
        )}
      </div>

      <div className="project" onClick={() => toggleProjectDetails('project2')}>
        <h3>Fraud Detection System</h3>
        <div className="image-container">
          <img src="img/IS_2 home.png" alt="Project 2"/>
          <img src='img/IS_2.png' alt="Project 2"/>
        </div>

        {showProjectDetails.project2 && (
          <div id="project2-details">
            <h2>Financial Management System</h2>
            <p>Explore my project, a sophisticated financial management system built for secure transactions and insightful analytics.</p>
            <p>Users can register, manage cards, and access detailed transaction analytics.</p>
            <p>Admins have elevated privileges for system-wide monitoring and fraud detection.</p>
            <p>Leveraging Laravel, the system ensures robustness and scalability.</p>
            <p>The user-friendly interface provides seamless navigation, making it a comprehensive solution for secure financial management and analytics.</p>
            {/* Add more details or images as needed */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
