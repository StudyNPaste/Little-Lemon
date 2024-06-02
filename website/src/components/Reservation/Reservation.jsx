import './Reservation.css'
import hero from '../Assets/hero.jpg'

export const Reservation = () => {
  return (
    <div className='hero'>
        <div className='left-hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, located on Maldore Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a table</button>
        </div>
        <div className='right-hero'>
            <img src={ hero } alt="" />
        </div>
    </div>
  )
}
