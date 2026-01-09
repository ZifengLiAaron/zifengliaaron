import React from 'react'
import './NavBar.css'
import logo from '../../assets/Logo.png'

const NavBar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li>About Me</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Work Experience</li>
                <li><button className='btn'>Contact</button></li>
            </ul>
        </nav>
    )
}

export default NavBar
