import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="" />
      <img src={LogoSubtitle} alt="" />
    </Link>
    <nav>
      <NavLink>
        <FontAwesomeIcon
          exact="true"
          activeclassname="active"
          to="/"
          icon={faHome}
          color="#4d4d4e"
        />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/safet-duranovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kremsnita420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kremsnita420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
