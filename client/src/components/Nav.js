import React from "react";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/allpost">Posts</a>
      </div>
    </nav>
  )
}

export default Navbar