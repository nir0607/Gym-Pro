
import 'font-awesome/css/font-awesome.min.css';
import {  Link } from 'react-router-dom';
import React from 'react';
import './Header.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const DropdownIcon = () => (
  <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
    <path d="M7.293 11.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L8 9.586 4.707 6.293A1 1 0 0 0 3.293 7.707l4 4z"/>
  </svg>
);


const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/Registration');
  };

  return (
    
    <div>
      <div className="contact-info">
        <p className='contact'>+91 7777963874  | niralimoghariya@gmail.com</p>
        <p className='content'>Welcome to Gym</p>
        <i className=" fa fa-lg fa-facebook-square" aria-hidden="true"></i>
        <i className=" fa fa-lg fa-twitter-square" aria-hidden="true"></i>
        <i className=" fa fa-lg fa-instagram" aria-hidden="true"></i>
        <i className=" fa fa-lg fa-youtube" aria-hidden="true"></i>
        <i className=" fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">   
          <img src="gym logo2.jpg" alt="logo" style={{ height: "50px", width: "auto" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="site-navigation"
            aria-expanded="false"
            aria-label="Menu"
          >

            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link text-dark" href="#" id="navbarDropdownMaster" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home <DropdownIcon />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMaster">
                  <li><a className="dropdown-item" href="#">Department</a></li>
                  <li><a className="dropdown-item" href="#">Employee</a></li>
                  <li><a className="dropdown-item" href="#">Material category</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-dark" href="#" id="navbarDropdownMaster" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Programs <DropdownIcon />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMaster">
                  <li><a className="dropdown-item" href="#">Corporate Membership </a></li>
                  <li><a className="dropdown-item" href="#">Personal Training Program</a></li>
                  <li><a className="dropdown-item" href="#">Group Program</a></li>
                  <li><a className="dropdown-item" href="#">Corporate Wellness Program</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Services</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success mx-2 btn-sm" type="button" onClick={handleLoginClick}>
                Login
              </button>
              <button className="btn btn-outline-success mx-2 btn-sm" type="button" onClick={handleRegisterClick}>
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr style={{border: "2px solid black",marginTop:"0px"}}/>
    </div>
    
  );
};

export default Header;
