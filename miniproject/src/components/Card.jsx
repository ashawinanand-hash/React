import React from 'react'

const Card = (props) => {
  return (
    <div style={{border:'5px solid white ',width:'600px'}}>        
        <h1>Student Record</h1>
        <img src={props.img} style={{borderRadius:'50%'}} />
        <h3>Student Name :{props.name}</h3>
        <h3>Student class:{props.class}</h3>
    </div>
  )
}

export default Card