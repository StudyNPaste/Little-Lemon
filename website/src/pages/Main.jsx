import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Reservation } from '../components/Reservation/Reservation';
import { Booking } from './Booking';
import Confirmed from './Confirmed';


export const Main = () => {
  return (
    <div className='main'>
            <Routes>
                <Route path='/' element={<Reservation/>}/>
                <Route path='booking' element={<Booking/>}/>
                <Route path='confirmed' element={<Confirmed/>}/>
            </Routes>
    </div>
  )
}

export default Main
