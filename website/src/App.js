import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Reservation } from './components/Reservation/Reservation';
import { Specials } from './components/Specials/Specials';
import { Testimonials } from './components/Testimonials/Testimonials';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Reservation/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  )
}


export default App;