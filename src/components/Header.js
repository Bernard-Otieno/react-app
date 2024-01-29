import './CSS/header.css';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="profile-container">
        <img src="./img/Passport photo.JPG" alt="my picture" id="profile-picture" style={{ height: '100px', width: '100px' }} />
        <h1>Bernard Otieno.</h1>
       
      </div>
       <h1 className='Head'>Web developer</h1>
      <nav className="left-aligned">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
