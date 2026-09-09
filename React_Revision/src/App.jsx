import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {

  let username="shanmukh"

  function Hello(){
    console.log("hello")
  }
  return (
    <div>
      <Navbar data={username}/>
      <Hero />
      <Gallery data={username} functiondata={Hello} />
      <Footer />
    </div>
  )
}

export default App
