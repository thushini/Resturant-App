import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an Important Part of a Balanced Diet
            </h1>
            <p className='primary-text'>
            A balanced diet is essential for good health, and incorporating
             a variety of nutritious foods ensures the body functions optimally.
            </p>
            <div className='about-button-container'>
                <button className='secondary-button'>Learn More</button>
                
            </div>
        </div>
      
    </div>
  )
}

export default About
