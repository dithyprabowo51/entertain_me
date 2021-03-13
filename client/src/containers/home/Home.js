import React from 'react'
import './Home.css'

// Components
import Carousel from '../../components/carousel/Carousel.js'
import SchrollSide from '../../components/schrollSide/SchrollSide.js'

// Graph
import { useQuery, gql } from '@apollo/client'

const getMoviesAndTvSeries = gql`
  query getMoviesAndTv {
    movies {
      _id
      title
      overview
      poster_path
      tags
    }
    
    tvSeries {
      _id
      title
      overview
      poster_path
      tags
    }
  }
`

const Home = () => {
  const { data, loading } = useQuery(getMoviesAndTvSeries)
  console.log(data)
  return (
    <div className="home">
      {
        loading ?
          <div className="loading">
            <div className="spinner-border text-danger" style={{ width: 100, height: 100 }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div>
            <Carousel />
            <SchrollSide title="Movies" data={data.movies} />
            <SchrollSide title="TV Series" data={data.tvSeries} />
          </div>
      }
    </div>
  )
}

export default Home