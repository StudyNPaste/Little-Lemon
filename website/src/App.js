
import { React, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import { AboutSection }  from './pages/AboutSection';
import { Menu } from './pages/Menu';
import { Main } from './pages/Main';
import { Booking } from './pages/Booking';
import { Confirmed } from './pages/Confirmed'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSection/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='login' element={<LoginSignup/>}/>
        <Route path='reservation' element={<Main />}></Route>
        <Route path='booking' element={<Booking/>}/>
        <Route path='/confirmed' element={<Confirmed/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;