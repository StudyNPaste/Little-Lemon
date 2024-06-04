import React from 'react'
import './Footer.css'
import footlogo from '../Assets/footer-logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <img className='footer-logo' src={footlogo} alt=''/>
        <div className='foot-menu'>
            <h1>Doormat Navigation</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Online Order</li>
                <li>Login</li>
            </ul>
        </div>
        <div className='contact'>
            <h1>Contact</h1>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div className='socials'>
            <h1>Social Media Links</h1>
            <ul>
                <li><a href="https://antuanfurtch.netlify.app" target='_blank'>Portfolio</a></li>
                <li><a href="https://www.linkedin.com/in/antuanfurtch" target='_blank'>LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}
