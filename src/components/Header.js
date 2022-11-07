import React from 'react'
import PropTypes from 'prop-types'
import './component-styles/head-style.css'
import navbarBrandLogo from '../assets/logo192.png';
import { Link } from 'react-router-dom';
const Header = (props) => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light  border-dark border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title} <img id='brand-img' src={navbarBrandLogo} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <ul className='navbar-nav '>
          <li className="nav-item ">
              <Link className="nav-link btn  text-dark mx-2 p-1 my-2 my-sm-0 " to="/AboutUs">About App</Link>
            </li> 
          <li className="nav-item">
              <Link className="nav-link btn btn-outline-dark mx-2 m p-1 my-2 my-sm-0 dd" to="/sub-components/Upload">Upload</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link btn btn-outline-dark mx-2 p-1 my-2 my-sm-0 dd" to="./sub-components/Download">Download</Link>
            </li> 
            
          </ul>
        </div>
      </div>
    </nav></>
  )
}

export default Header

Header.propTypes = {
    title : PropTypes.string,
    isSearchBar: PropTypes.bool
}