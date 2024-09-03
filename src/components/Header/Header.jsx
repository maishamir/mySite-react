import React from 'react'
import "./Header.scss"

function Header() {
    
  return (
    <header className='header'>
      <div>MM</div>
      <div className='header__nav'>
        <ul className='header__links'>
          <li><a href="#">projects</a></li>
          <li><a href="#">about</a></li>
          <li><a href="">experience</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header