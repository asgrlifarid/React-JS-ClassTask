import React from 'react'
import './index.css'
const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h1>{props.surname}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default Card