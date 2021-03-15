import React, { useState } from 'react'
import './Movie.css'

// components
import Card from '../../components/card/Card.js'
import AddMovie from '../../components/modal/addMovie/AddMovie.js'
import EditForm from '../../components/modal/editMovie/EditMovie.js'

// Graph
import { useQuery, useMutation, gql } from '@apollo/client'

const getMovies = gql`
  query getMovies {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id)
  }
`

const Movie = () => {
  const { data, loading } = useQuery(getMovies)
  const [deleteMovie] = useMutation(DELETE_MOVIE)
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormEdit, setShowFormEdit] = useState(false)
  const [movie, setMovie] = useState({})

  const handleSetMovie = value => {
    setMovie(value)
  }

  const handleFormAdd = value => {
    setShowFormAdd(value)
  }
  const handleFormEdit = value => {
    setShowFormEdit(value)
  }
  const handleDeleteMovie = id => {
    deleteMovie({
      variables: { id },
      refetchQueries: [{ query: getMovies }]
    })
  }
  return (
    <div className="movie">
      <h2 className="text-center text-warning mt-5 mb-4">List Movies</h2>
      <div className="text-center">
        <button onClick={handleFormAdd} className="btn btn-secondary">Add Movie</button>
      </div>
      {
        loading ?
          <div className="loading-list-movie">
            <div className="spinner-border text-danger" style={{ width: 100, height: 100 }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div className="movie-list mt-4">
            {
              data.movies.map(movie => {
                return <Card type="movie" handleDeleteMovie={id => handleDeleteMovie(id)} handleSetMovie={value => handleSetMovie(value)} handleFormEdit={value => handleFormEdit(value)} key={movie._id} movie={movie} />
              })
            }
          </div>
      }
      {
        showFormAdd ?
          <AddMovie handleFormAdd={(value) => handleFormAdd(value)} />
          :
          null
      }
      {
        showFormEdit ?
          <EditForm movie={movie} handleFormEdit={value => handleFormEdit(value)} />
          :
          null
      }
    </div>
  )
}

export default Movie