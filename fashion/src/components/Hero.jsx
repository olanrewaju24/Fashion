import { useState } from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                 <h1 className="hero-title">CLOSET CONFETTI</h1>   
                 <p className ="hero-subtitle">Color. Confidence. Closet</p>  
                 <button className="hero-button">Eplore Our World</button>   
            </div>
        </section>
    )
}

export default Hero;