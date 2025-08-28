

import React, { useState } from 'react';
import './Businesscard.css'; // We will create this file next
import profilePic from '../assets/profile.png'; // Make sure to have an image in src/assets

// You can create an 'assets' folder inside 'src' for your images
// For example: src/assets/laura-smith.png

const BusinessCard = () => {
  // State to manage the current theme, defaulting to 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // The main container's class changes based on the theme state
    <div className={`business-card-container ${theme}-mode`}>
      <div className="business-card">
        <img src={profilePic} alt="profile pic" className="card-image" />

        <div className="card-content">
          <h1 className="card-name">Israel Orizu</h1>
          <h2 className="card-title">Frontend Developer</h2>
          <a href='https://github.com/Emmyginger' className="card-website">Check out my profile on Github </a>

          <div className="card-buttons">
            <a href="mailto:israelorizu@gmail.com" className="btn btn-email">
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/israel-orizu-7467b0209/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
              🔗 LinkedIn
            </a>
          </div>

          <div className="card-section">
            <h3>About</h3>
            <p>
              I am a frontend developer with a particular interest in making things
              simple and automating daily tasks. I try to keep up with security
              and best practices, and am always looking for new things to learn.
            </p>
          </div>

          <div className="card-section">
            <h3>Interests</h3>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>

      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode 🎨
      </button>
    </div>
  );
};

export default BusinessCard;