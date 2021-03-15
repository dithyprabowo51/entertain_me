import React from 'react'
import { useHistory } from 'react-router-dom'

// Var
import { favoritesVar } from '../../config/Var.js'

const Card = props => {
  const history = useHistory()

  const toDetail = id => {
    history.push('/movies/' + id)
  }

  const handleFormEdit = value => {
    props.handleFormEdit(value)
    props.handleSetMovie(props.movie)
  }

  const handleDeleteMovie = () => {
    props.handleDeleteMovie(props.movie._id)
  }

  const handleAddToFavorite = () => {
    const existingFavorites = [...favoritesVar()]
    favoritesVar([...existingFavorites, props.movie])
  }

  return (
    <div className="card bg-dark m-3" style={{ width: '14rem' }}>
      <img onClick={() => toDetail(props.movie._id)} src={props.movie.poster_path} className="card-img-top" height="300px" alt="movie_poster" />
      <div className="card-body">
        <p className="card-text text-center">{props.movie.title}</p>
        {
          props.type !== 'favorite' ?
            <div className="text-center">
              <button onClick={handleAddToFavorite} className="btn btn-sm btn-info m-1">Add To Favorite</button>
              <div>
                <button onClick={() => handleFormEdit(true)} className="btn btn-sm btn-warning m-1">Edit</button>
                <button onClick={handleDeleteMovie} className="btn btn-sm btn-danger m-1">Delete</button>
              </div>
            </div>
            :
            null
        }
      </div>
    </div >
  )
}

export default Card