
import { React, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Reservation } from './components/Reservation/Reservation';
import { Specials } from './components/Specials/Specials';
import { Testimonials } from './components/Testimonials/Testimonials';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import { AboutSection }  from './pages/AboutSection';
import { Menu } from './pages/Menu'
import { Reservations } from './pages/Reservations';
import { OnlineOrder } from './pages/OnlineOrder';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSection/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservations/>}/>
        <Route path='/order' element={<OnlineOrder/>}/>
        <Route path='login' element={<LoginSignup/>}/>
      </Routes>
      {/*<Reservation/>}
      {<Specials/>}
      {<Testimonials/>}
  {<About/>*/}
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;