import './Navbar.css'
import logo from '../Assets/logo.jpg'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='' />
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reseravtion</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </div>
  )
}
