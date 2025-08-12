import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journal from './components/Journal';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
     <Journal/> 
     <Footer/>
    </>
  );
};

export default App;