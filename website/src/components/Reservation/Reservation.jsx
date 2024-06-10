import './Reservation.css'
import hero from '../Assets/hero.jpg'
import { Link } from 'react-router-dom'

export const Reservation = () => {
  return (
    <div className='hero'>
        <div className='left-hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, located on Maldore Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.
            </p>
            <Link to='/booking'><button>Reserve a table</button></Link>
        </div>
        <div className='right-hero'>
            <img src={ hero } alt="" />
        </div>
    </div>
  )
}
