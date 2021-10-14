import React from 'react'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav className="main-nav">
        <div className="logo"></div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/register">Register</a>
          <a href="/signin">Sign In</a>
        </div>
      </nav>
      {/* <Navlink to='/'Home></Navlink>
      <Navlink to='/'About></Navlink>
      <Navlink to='/'Articles></Navlink> */}
    </header>
  )
}

export default Navbar
