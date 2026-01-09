import React from 'react'
import './Hero.css'
import { ArrowRight } from 'react-feather'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Zifeng Li</h1>
                <p>Virginia Tech Graduate, Full-Stack Developer</p>
                <button className='btn'>Learn More <ArrowRight className="btn-icon" /></button>
            </div>
        </div>
    )
}


export default Hero
