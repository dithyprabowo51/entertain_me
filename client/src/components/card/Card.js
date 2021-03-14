import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = props => {
  const history = useHistory()

  const toDetail = id => {
    history.push('/movies/' + id)
  }

  const handleFormEdit = value => {
    props.handleFormEdit(value)
    props.handleSetMovie(props.movie)
  }

  return (
    <div className="card bg-dark m-3" style={{ width: '14rem' }}>
      <img src={props.movie.poster_path} className="card-img-top" height="300px" alt="movie_poster" />
      <div className="card-body">
        <p className="card-text text-center">{props.movie.title}</p>
        <div className="text-center">
          <button onClick={() => toDetail(props.movie._id)} className="btn btn-sm btn-info m-1">Detail</button>
          <button onClick={() => handleFormEdit(true)} className="btn btn-sm btn-warning m-1">Edit</button>
          <button className="btn btn-sm btn-danger m-1">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Card