import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <div className="container-fluid">
         <Link className="navbar-brand" to="/">TextUtils</Link>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>               if we want to add contact and services you can add it later.
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
         <label className="form-check-label" htmlFor="switchCheckDefault">enable dark mode</label>
      </div>
      </div>
      </div>
      </nav>
        </div>
    )
}