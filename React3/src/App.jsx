import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

const App = () => {
  return (
   <>
   <Router>

    <Routes>
 
      <Route path='/' element={<Home />} />
      
      <Route path='/services' element={<Services />} />
      
      <Route path='/contact' element={<Contact />} />


    </Routes>




   </Router>
   </>
  )
}

export default App
