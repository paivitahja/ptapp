import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
  return (

  <nav className="navbar navbar-expand-lgnavbar-light bg-light">
    <button className="navbar-togglernavbar-toggler-right" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Togglenavigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">My ReactPage</Link>
    <div className="collapsenavbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-navmr-auto">
        <li className="nav-itemactive">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>


  );
}

export default Navigator;