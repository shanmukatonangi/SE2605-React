import React from 'react'

const Gallery = (props) => {
    console.log(props)
    //props={
    // data:"Shanmukh"
    //}

    // let details={
    //     name:"shan"
    // }

    props={
        data: 'shanmukh', 
        functiondata: function(){
        console.log("hello")
  }}

  return (
    <div>
      im gall {props.data}
    </div>
  )
}

export default Gallery
