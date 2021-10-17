import React from 'react'
import { NavLink } from 'react-router-dom'
// import {Navbar} from 'react-bootstrap'

const Navbar = ({ handleLogOut, user }) => {
  let signedIn

  if (user) {
    signedIn = (
      <nav className="right-top-nav ">
        {/* <NavLink className="a" to="/user/account">
          <button className="log-but">Account</button>
        </NavLink> */}
        <NavLink to="/">
          <button onClick={handleLogOut} className="sign-but">
            Sign Out
          </button>
        </NavLink>
      </nav>
    )
  }

  const notSignedIn = (
    <nav className="right-top-nav">
      <NavLink to="/signin">
        <button className="log-but">Sign In</button>
      </NavLink>
      <NavLink to="/signup">
        <button className="sign-but">Sign Up</button>
      </NavLink>
    </nav>
  )

  return (
    <header>
      <nav className="top-nav">
        <section className="left-top-nav">
          <NavLink className="logo" to="/">
            <h1>Post Blog</h1>
          </NavLink>
        </section>

        {user ? signedIn : notSignedIn}
      </nav>

      <nav className="bottom-nav">
        <section className="right-bottom-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allarticles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </section>
      </nav>
    </header>
  )
}

export default Navbar
