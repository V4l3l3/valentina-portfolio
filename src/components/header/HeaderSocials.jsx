import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaSquareInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/valentina-leon-2027b6294/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/V4l3l3" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/v4lelele/" target="_blank"><FaSquareInstagram/></a>
    </div>
  )
}

export default HeaderSocials