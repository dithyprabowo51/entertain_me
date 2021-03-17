import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Var
import { favoritesVar } from '../../config/Var.js'

const Card = props => {
  const [errMessage, setErrMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
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
    const findMovie = existingFavorites.find(movie => {
      return movie._id === props.movie._id
    })
    if (!findMovie) {
      favoritesVar([...existingFavorites, props.movie])
      setSuccessMessage('Add to favorite success')
      setTimeout(() => {
        setSuccessMessage('')
      }, 1000)
    } else {
      setErrMessage('Movie has been added to favorite!')
      setTimeout(() => {
        setErrMessage('')
      }, 1000)
    }
  }

  return (
    <div className="card bg-dark m-3" style={{ width: '14rem' }}>
      <img onClick={() => toDetail(props.movie._id)} src={props.movie.poster_path} className="card-img-top" height="300px" alt="movie_poster" />
      <div className="card-body">
        <p className="card-text text-center">{props.movie.title}</p>
        {
          errMessage ?
            <p className="text-center text-danger" style={{ fontSize: '14px' }}>{errMessage}</p>
            :
            null
        }
        {
          successMessage ?
            <p className="text-center text-success" style={{ fontSize: '14px' }}>{successMessage}</p>
            :
            null
        }
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