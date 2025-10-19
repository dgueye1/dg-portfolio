import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Hero toggleTheme={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))} />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
};

export default App;