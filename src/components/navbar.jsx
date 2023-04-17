
import "./navbar.css"
import logo from "./logo.jpg"

import React, { useState } from 'react';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-menu">
        <button className="navbar-menu-toggle" onClick={toggleMenu}>
          {showMenu ? 'Close' : 'Menu'}
        </button>
        <ul className={`navbar-menu-items ${showMenu ? 'show' : ''}`}>
          <li><a href="#homec">Home</a></li>
             <li><a href="#heading">Services</a></li>
          <li><a href="#about-container">About</a></li>
       
          <li><a href="#con">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


  
