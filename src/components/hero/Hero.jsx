import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/nidhi-black(1).jpeg'
import profile_img from '../../assets/n4.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Nidhi Rajawat</span>, frontend developer based in India.</h1>
        <p>I specialize in building user-friendly and visually appealing web applications. I am passionate about coding, design, and creating seamless user experiences.</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero