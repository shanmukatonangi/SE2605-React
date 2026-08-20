import React, { useState } from 'react'

const App = () => {
  let [task,setTask]=useState("")
  // let count=0
  //  let [count,setCount]=useState(0)

  // function Counter(){
  //   console.log("hello")
  //  // count++
  //  setCount(count+1)
  //   console.log(count)
  // }
let [todoitems,setTodoitems]=useState([
  {
  task:"study react",
  time:"6pm"
},
{
   task:"study js",
  time:"9pm"

}
])
function handlechange(e){
  setTask(e.target.value)
  console.log(task)
}
function Add(){
  setTodoitems([...todoitems,{task:task}])
 // todoitems.push({task:task})

}

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={Counter}>+</button> */}
      <input value={task} onChange={handlechange}/>
      <button onClick={Add}>Add</button>
      <ul>
        {todoitems?.map((todo)=>
          <li>{todo.task}</li>
        )}
      </ul>
      {/* [<li>study react</li>,<li>study js</li>] */}


      
    </div>
  )
}

export default App
