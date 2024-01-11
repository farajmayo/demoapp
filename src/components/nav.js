import React from 'react'
import PropTypes from 'prop-types'
//import { Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/About">{props.aboutme}</a>
            </li>
          </ul>
          <div class={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2" htmlfor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
 
  )

}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutme: PropTypes.string.isRequired


}