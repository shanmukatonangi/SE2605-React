import React from 'react'
import Grandchild from './Grandchild'

const Navbar = (props) => {

    //props={data:"Shanmukh"}
    // let data=props.data
  return (
    <div>
      <h1>im navbar</h1>
      <Grandchild data={data} />
    </div>
  )
}

export default Navbar
