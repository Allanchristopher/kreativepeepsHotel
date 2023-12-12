import React from 'react';
import "./About.css";
import aboutimg from "../assets/aboutimg.svg";
function About() {
  return (
    <div className='About'>
    <div className='About-container'>
        <div className='about-container-1'>
            <img src={aboutimg} alt="about-image" className='aboutimg'/>
        </div>
        <div className='about-container-2'>
          <p className='about-heading'>About Us</p>
          <p className='about-small-text'>At F1 Tyre city, we are passionate about providing top-notch wheel alignment and tire services to ensure your vehicle's safety, performance, and longevity. With years of industry experience and a team of skilled technicians, we are committed to delivering unparalleled service and customer satisfaction.</p>
        </div>
    </div>  
    </div>
  )
}

export default About
