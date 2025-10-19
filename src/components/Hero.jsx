import React from 'react';

const Hero = ({ toggleTheme }) => (
  <header className="hero">
    <img src="/assets/headshot.jpg" alt="DG Headshot" className="hero-img" />
    <h1>Hi, I’m Doudou Gueye</h1>
    <p>Front-End Developer with 3 years of experience</p>
    <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
  </header>
);

export default Hero;