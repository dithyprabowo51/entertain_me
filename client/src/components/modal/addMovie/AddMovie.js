import React, { useState } from 'react'
import './AddMovie.css'

const AddMovie = () => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState([''])
  const handleAddRowTags = () => {
    setTags([...tags, ''])
  }
  const handleDeleteRowTags = index => {
    if (tags.length > 1) {
      const tagsCopy = [...tags]
      tagsCopy[index] = undefined
      const newTags = tagsCopy.filter(tag => tag !== undefined)
      setTags(newTags)
    }
  }
  const handleChangeTags = (event, index) => {
    const tagsCopy = [...tags]
    tagsCopy[index] = event.target.value
    setTags(tagsCopy)
  }
  const handleSubmit = () => {
    console.log(tags)
  }
  return (
    <div className="add-movie">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body text-dark">
          <h5 className="text-center mb-4">Add Movie</h5>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="overview" className="form-label">Overview</label>
            <input type="text" className="form-control" id="overview" />
          </div>
          <div className="mb-3">
            <label htmlFor="poster_path" className="form-label">Poster</label>
            <input type="text" className="form-control" id="poster_path" />
          </div>
          <div className="mb-3">
            <label htmlFor="popularity" className="form-label">Popularity</label>
            <input type="text" className="form-control" id="popularity" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Tags <button onClick={handleAddRowTags} className="btn btn-sm btn-secondary">Add Row</button>
            </label>
            {
              tags.map((item, index) => {
                return (
                  <div key={index} className="d-flex align-items-center input-tags" >
                    <input onChange={(event) => handleChangeTags(event, index)} value={tags[index]} type="text" className="form-control mb-2 me-2" />
                    <i onClick={() => handleDeleteRowTags(index)} className="fas fa-times-circle"></i>
                  </div>
                )
              })
            }
          </div>
          <div className="text-center">
            <button onClick={handleSubmit} className="btn btn-primary m-2">Save</button>
            <button className="btn btn-danger m-2">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMovie