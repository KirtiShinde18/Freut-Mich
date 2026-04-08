import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Fashions from './pages/Fashions'
import Watches from './pages/Watches'
import Shoe from './pages/Shoe'
import Shades from './pages/Shades'
import Belts from './pages/Belts'

const App = () => {
  return <>
      <BrowserRouter>

      {/* navbar  */}
      <Navbar/>


      {/* routes  */}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/fashion' element={<Fashions />} />
          <Route path='/watches' element={<Watches />} />
          <Route path='/shoe' element={<Shoe />} />
          <Route path='/shades' element={<Shades />} />
          <Route path='/belts' element={<Belts />} />

          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      <Footer/>


      </BrowserRouter>
  </>
}

export default App