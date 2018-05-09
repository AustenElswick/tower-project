import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header-flex'>
      <img src='./margs-and-tacos.jpg' className='header-image' alt='tacos and margs'></img>
      <div className='logo-flex'>
        <h1>Taco and Margs Finder</h1>
      </div>
    </header>
  )
}

export default Header
