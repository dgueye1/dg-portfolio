import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ toggleTheme }) => (
  <header className="hero">
    <img src="/assets/headshot.jpg" alt="DG Headshot" className="hero-img" />
    <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
    >
     Welcome to DG’s Blog
    </motion.h1>
    <p>Front-End Developer with 3 years of experience</p>
    <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
  </header>
);

export default Hero;