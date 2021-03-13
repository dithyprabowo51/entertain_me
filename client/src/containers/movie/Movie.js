import React from 'react'
import './Movie.css'

// components
import Card from '../../components/card/Card.js'
import AddMovie from '../../components/modal/addMovie/AddMovie.js'

// Graph
import { useQuery, gql } from '@apollo/client'

const getMovies = gql`
  query getMovies {
    movies {
      _id
      title
      overview
      poster_path
      tags
    }
  }
`

const Movie = () => {
  const { data, loading } = useQuery(getMovies)
  console.log(data)
  return (
    <div className="movie">
      <h2 className="text-center text-warning mt-5 mb-4">List Movies</h2>
      <div className="text-center">
        <button className="btn btn-secondary">Add Movie</button>
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
                return <Card key={movie._id} movie={movie} />
              })
            }
          </div>
      }
      <AddMovie />
    </div>
  )
}

export default Movie