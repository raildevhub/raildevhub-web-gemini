import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import SuccessStories from '../components/SuccessStories';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <SuccessStories />
      <Contact />
    </>
  );
};

export default HomePage;