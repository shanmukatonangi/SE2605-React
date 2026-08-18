import React from 'react'
import Navbar from '../components/Navbar'

const Home = (pubg) => {

    // console.log(props)
  //  pubg= {firstanme:"Shanmukh"} 


    // props={
    //     username:"Shanmukh"
    // }
  return (
    <div>

        <Navbar  />
     hello {pubg.firstname}

      
    </div>
  )
}

export default Home




// function Greet(props){
//     console.log(props)
// }

// Greet("Shanmukh")