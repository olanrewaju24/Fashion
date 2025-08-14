import { useState } from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
                <span className="brand"> Haute  </span>
                <span className="accent">Threads</span>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li className="dropdown">
                    <span className="dropbtn">Categories</span>
                    <div className="dropdown-content"> 
                        <a> Skincare</a>
                        <a>Bags</a>
                        <a>Makeup</a>
                        <a>Accessories</a>
                    </div>
                    </li>
                <li>About</li>    
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar;