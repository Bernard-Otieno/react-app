import React from 'react';
import Project from './Project-display';

const Projects = () => {
  // Define your project data
  const projectsData = [
    {
      title: 'Master Rotation Plan',
      images: [
        { src: 'img/MRP 1.png', alt: 'Project 1 Image 1' },
        { src: 'img/MRP 5.png', alt: 'Project 1 Image 2' },
      ],
      description: [
        'This is an illustration of a the project Master Rotation Plan (MRP).',
        'REQUIREMENTS: To construct a web-based system capable of rotating student nurses at will.',
        'This project required extensive knowledge in website design.',
        'In essence HTML PHP Javascript and the Laravel framework.',
        'The project is currently running within Kenyatta University Hospital.',
      ],
    },
    {
      title: 'Fraud Detection System',
      images: [
        { src: 'img/IS_2 home.png', alt: 'Project 2 Image 1' },
        { src: 'img/IS_2.png', alt: 'Project 2 Image 2' },
      ],
      description: [
        'Financial Management System',
        'Explore my project, a sophisticated financial management system built for secure transactions and insightful analytics.',
        'Users can register, manage cards, and access detailed transaction analytics.',
        'Admins have elevated privileges for system-wide monitoring and fraud detection.',
        'Leveraging Laravel, the system ensures robustness and scalability.',
        'The user-friendly interface provides seamless navigation, making it a comprehensive solution for secure financial management and analytics.',
      ],
    },
    
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <strong> Click the project to reveal its description.</strong>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
