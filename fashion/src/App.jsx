import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journal from './components/Journal';
import Journal2 from './components/Journal2';
import Footer from './components/Footer';
import About from './components/About';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
     <Journal/> 
     <Journal2/>
     <About/>
     <Newsletter/>
     <Footer/>
     
    </>
  );
};

export default App;