import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return <>
      <BrowserRouter>

      {/* navbar  */}
      <Navbar/>


      {/* routes  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>

      </BrowserRouter>
  </>
}

export default App