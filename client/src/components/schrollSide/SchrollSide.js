import React from 'react'
import './SchrollSide.css'

const SchrollSide = props => {
  return (
    <div className="schroll_side container">
      <h3>{props.title}</h3>
      <div id="container">
        {
          props.data.map(item => {
            return <img key={item._id} src={item.poster_path} width="200px" height="250px" alt="poster" />
          })
        }
      </div>
    </div>
  )
}

export default SchrollSide