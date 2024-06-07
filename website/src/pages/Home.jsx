import React from 'react'
import { Reservation } from '../components/Reservation/Reservation';
import { Specials } from '../components/Specials/Specials';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { About } from '../components/About/About';
import { Reservations } from './Reservations';

export const Home = () => {
  return (
    <div>
        {/*<Reservation />*/}
        {<Reservations/>}
        <Specials />
        <Testimonials />
        <About />
    </div>
  )
}
