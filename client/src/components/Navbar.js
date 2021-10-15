import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/allarticles">Post Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
