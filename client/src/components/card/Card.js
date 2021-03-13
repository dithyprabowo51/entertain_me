import React from 'react'

const Card = props => {
  return (
    <div className="card bg-dark m-3" style={{ width: '14rem' }}>
      <img src={props.movie.poster_path} className="card-img-top" height="300px" alt="movie_poster" />
      <div className="card-body">
        <p className="card-text text-center">{props.movie.title}</p>
        <div className="text-center">
          <button className="btn btn-sm btn-info m-1">Detail</button>
          <button className="btn btn-sm btn-warning m-1">Edit</button>
          <button className="btn btn-sm btn-danger m-1">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Card