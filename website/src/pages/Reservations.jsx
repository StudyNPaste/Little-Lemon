import React from 'react'
import './css/Reservations.css'
import { Home } from './Home'
import restaurant from '../components/Assets/restaurant.jpg'

export function Reservations() {
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new formData(e.target)
        const data = Object.fromEntries(formData)

        console.log(data)
    }
  return (
    <div className='form-background'>
        <div className='form'>
            <img className='pic' src={restaurant} alt=''/>
            <form className='form-class' onSubmit={handleSubmit}>
                <h1 className='header'>Little Lemon</h1>
                <h2 className='header'>Book a Table</h2>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' required/>
                </div>
                <div className='form-group'>
                    <label id='select' htmlFor="guestNumber">Guest Number</label>
                    <select type='number' id='guestNumber' name='guestNumber' required>
                        <option selected disabled>Choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' name='first_name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' name='last_name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' name='date' required/>
                </div>
                <div className='form-group'>
                    <label  htmlFor="time">Time</label>
                    <input type="time" id='time' name='time' required/>
                </div>
                <div>
                    <button className='formbtn' onClick={handleSubmit} type="submit">Book</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reservations()