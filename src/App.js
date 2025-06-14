import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './assets/styles/tailwind.css';
import {useEffect} from 'react';



function App() {
   useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <div className="bg-dark text-light font-sans">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
