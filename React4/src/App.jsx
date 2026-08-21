import React, { useState } from 'react'
import "./App.css"

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
function Delete(taskname){
  //taskname=playcricket
  //study react != play cricket
  //study js  != play cricket
  //play cricket != playcricket  false
  let updatedtodos=todoitems.filter((todoitem)=> todoitem.task != taskname)
setTodoitems(updatedtodos)

}

  return (
    <div id='todobox'>
      {/* <h1>{count}</h1>
      <button onClick={Counter}>+</button> */}
      <input id='taskadd'  value={task} onChange={handlechange}/>
      {/* <input  /> */}
      <button id='addbutton' onClick={Add}>Add</button>
      <div id='todoitemsbox'>
        {todoitems.map((todo)=>
         (<div className='cards'>
         <h1>{todo.task} {todo.time}</h1>
         <button onClick={()=>Delete(todo.task)}>delete</button>
         </div> )
        )}
      </div>
      {/* [<li>study react</li>,<li>study js</li>] */}


      
    </div>
  )
}

export default App
