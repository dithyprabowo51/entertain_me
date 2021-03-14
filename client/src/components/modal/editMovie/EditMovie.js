import React from 'react'
import './EditMovie.css'

// Components
import Form from '../../form/Form.js'

const EditMovie = props => {
  const hideFormEdit = () => {
    props.handleFormEdit(false)
  }
  return (
    <div className="edit-movie">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body text-dark">
          <h5 className="text-center mb-4">Edit Movie</h5>
          <Form movie={props.movie} hideFormEdit={hideFormEdit} type="edit" />
        </div>
      </div>
    </div>
  )
}

export default EditMovie