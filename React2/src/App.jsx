

// const App = () => {
//   return (
//     <div>
//       hi
//     </div>
//   )
// }

import Shanmukh from "./components/Shanmukh"
import Random from "./Random"

function App(){

  // let username="Shanmukh"
  // let num=23

  // let arr=[1,2,3,4]

  // let details={
  //   name:"Shanmukh"
  // }

  let user

  //let num=0 let num let num=undefined  ---? false

  // let num="."
  

  return(
    <>
    {/* <h1>{username + 23}</h1>
    <h1>{arr[1]}</h1>

    <h2>{details.name}</h2>

    {"Shanmukh"} */}

    //conditional rendering with logical

    {/* { user && <h1>Hello and {user}</h1>   }

     { user || <h2>Hello or {user}</h2>   } */}


     //conditional with terenary

     {user ? <h1>Hello {user}</h1> : <h1>hello please login </h1>}
    
    </>
  )

}

export default App
