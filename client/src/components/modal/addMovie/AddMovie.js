import React from 'react'
import './AddMovie.css'

// Components
import Form from '../../form/Form.js'

const AddMovie = props => {
  const hideFormAdd = () => {
    props.handleFormAdd(false)
  }
  return (
    <div className="add-movie">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body text-dark">
          <h5 className="text-center mb-4">Add Movie</h5>
          <Form hideFormAdd={hideFormAdd} type="add" />
        </div>
      </div>
    </div>
  )
}

export default AddMovie