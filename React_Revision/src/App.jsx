import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {

  // let username="shanmukh"

  // function Hello(){
  //   console.log("hello")
  // }

  // function Cliked(name){
  //   console.log("clicked",name)
  // }
  let loggedin=true
  let user="Shanmukh"

  //and- evrything should be true to return true
  //or  - one true to return true


  return (
    <div>
      {/* <Navbar data={username}/>
      <Hero />
      <Gallery data={username} functiondata={Hello} />
      <Footer /> */}

      {/* <button onClick={()=>Cliked("shanmukh")}>Click me</button> */}




     {/* {!loggedin && <h1>Hello User, Please Login</h1> }
     {loggedin && <h1>hello {user}, Have a Great day</h1>} */}

      {/* <h1>Hello User, Please Login</h1>

      <h1>hello Shanmukh, Have a Great day</h1> */}

      {loggedin==true ? <h1>hello {user}, Have a Great day</h1> :<h1>Hello User, Please Login</h1> }





    </div>
  )
}

export default App
