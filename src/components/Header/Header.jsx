import React from 'react'
import "./Header.scss"

function Header() {
    
  return (
    <header className='header'>
      <div className='header__logo'>MM</div>
      <div className='header__nav'>
        <ul className='header__links'>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header