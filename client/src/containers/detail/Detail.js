import React from 'react'
import './Detail.css'

// Routing
import { useParams } from 'react-router-dom'

// Components
import DetailContainer from '../../components/detail/DetailContainer.js'

// Graph
import { gql, useQuery } from '@apollo/client'
const getMovie = gql`
  query getMovieById($id: ID!) {
    movie (id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

const Detail = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(getMovie, {
    variables: { id }
  })

  return (
    <div className="detail">
      {
        loading ?
          <div className="loading-detail">
            <div className="spinner-border text-danger" style={{ width: 100, height: 100 }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div>
            {
              data.movie ?
                <div>
                  <h2 className="text-center text-warning mt-5 my-4">{data.movie.title}</h2>
                  <DetailContainer movie={data.movie} />
                </div>
                :
                <div>
                  <h2 className="text-center text-warning mt-5 my-4">Movie Not Found</h2>
                </div>
            }
          </div>
      }
    </div>
  )
}

export default Detail