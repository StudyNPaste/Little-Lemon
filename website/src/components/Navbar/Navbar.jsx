import './Navbar.css'
import logo from '../Assets/logo.jpg'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='' />
      <ul className='links'>
        <li><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
        <li><Link style={{textDecoration: 'none'}} to='/about'>About</Link></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reseravtion</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}
