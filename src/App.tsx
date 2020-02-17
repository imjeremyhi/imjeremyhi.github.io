import React from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Social } from './components/Social';

export const App = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
      <Social />
    </>
  );
}
