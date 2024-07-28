import React from 'react';

import { NavBar } from './NavBar/NavBar';
import { Hero } from './Hero/Hero';
import { About } from './About/About';
import { Services } from './Services/Services';
import { Reviews } from './Reviews/Reviews';
import { Footer } from './Footer/Footer';
import { Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Footer />
      <Routes></Routes>
    </div>
  );
}
