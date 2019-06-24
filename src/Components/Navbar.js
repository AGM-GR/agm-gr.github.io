import React, { Component } from 'react';
import './Navbar.css';

import {
  Nav,
  Button
} from 'reactstrap';

class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand" href="#">
          <span className="d-block d-lg-none">Alejandro Guerrero Martínez</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://avatars.githubusercontent.com/agm-gr" alt="Alejandro Guerrero Martínez Photo" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards">Awards</a>
            </li>*/}
          </ul>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
