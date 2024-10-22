import React from 'react'
import Res from '../../assets/Resume 2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Res} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA