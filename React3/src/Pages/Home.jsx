import React from 'react'
import Navbar from '../components/Navbar'

const Home = (props) => {
    console.log(props)

    // props={username: 'Shanmukh', arr: Array(3), num: 23}

//    props={
//         username:"Shanmukh"
//     }
    

// let details={
//     name:"Shnamukh",
//     dept:"cse"
// }

// let {name,dept}=details



    // console.log(props)
  //  pubg= {firstanme:"Shanmukh"} 


    // props={
    //     username:"Shanmukh"
    // }
  return (
    <div>

        <Navbar  />
     hello {props.username}

      
    </div>
  )
}

export default Home




// function Greet(props){
//     console.log(props)
// }

// Greet("Shanmukh")