import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

const App = () => {

let username="Shanmukh"
let arr=[1,2,3]
let  num=23

  return (
   <>
   <Router>

    <Routes>
  {/* {firstanme:"Shanmukh"} */}
  {/* {username:"Shanmukh"} */}
      <Route path='/' element={<Home username={username} arr={arr} num={num} />} />
      
      <Route path='/services' element={<Services />} />
      
      <Route path='/contact' element={<Contact />} />


    </Routes>




   </Router>
   </>
  )
}

export default App
