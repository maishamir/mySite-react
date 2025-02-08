import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header() {

  const [isActive, setIsActive] = useState(false)


  function toggleIsActive() {
    setIsActive(prev => !prev)
  }

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
      document.documentElement.classList.remove("menu-open")
    }
  }, [isActive])

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          MM
        </a>

        <ul className={`navbar__menu ${isActive ? 'active' : ""}`}>
          <li className="navbar__menu-item">
            <a href="#projects" className="navbar__menu-link" onClick={() => setIsActive(false)}>
              Projects
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#about-me" className="navbar__menu-link" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#contact" className="navbar__menu-link" onClick={() => setIsActive(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className={`navbar__hamburger ${isActive ? 'active' : ""}`} onClick={toggleIsActive}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
