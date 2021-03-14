import React from 'react'
import './DetailContainer.css'

const DetailContainer = props => {
  return (
    <div className="detail-container bg-dark">
      <div>
        <img src={props.movie.poster_path} width="300px" height="500px" alt="movie_poster" />
      </div>
      <div className="p-3 position-relative">
        <div className="d-flex mt-4 mb-3">
          <div className="key">Title</div>
          <div className="value">: {props.movie.title}</div>
        </div>
        <div className="d-flex mb-3">
          <div className="key">Overview</div>
          <div className="value">: {props.movie.overview}</div>
        </div>
        <div className="d-flex mb-3">
          <div className="key">Popularity</div>
          <div className="value">: {props.movie.popularity}</div>
        </div>
        <div className="d-flex mb-3">
          <div className="key">Tags</div>
          <div className="value">: {props.movie.tags.join(', ')}</div>
        </div>
        <div className="mt-3">
          <button className="btn btn-warning">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default DetailContainer