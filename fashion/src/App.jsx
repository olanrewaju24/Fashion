import { useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journal from './components/Journal';
import Journal2 from './components/Journal2';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
     <Journal/> 
     <Journal2/>
     <Footer/>
    </>
  );
};

export default App;