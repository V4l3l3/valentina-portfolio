import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Valentina Leon</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/valentina-leon-2027b6294/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/V4l3l3" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com"><FiInstagram/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Valentina Leon. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer