import React, { useState } from 'react'

const App = () => {

 // let count=0
  let [count,setCount]=useState(0)

  function Plus(){
   // count=count+1
   setCount(count+1)
    console.log(count)
  }
  //count=0 ->user clicked on plus with the help of setcount now count="shanmukh"

  
  return (
    <div>
      <button onClick={Plus}>+</button>
      {count}

      {/* //task-> create a event managment system */}
      
    </div>
  )
}

export default App
