import React from "react"
import {Link } from "react-router-dom"

const NavBar = props => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Users <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/Comments">Comments</Link>
      </li>
      
    </ul>
  </div>
</nav>


);

export default NavBar;
