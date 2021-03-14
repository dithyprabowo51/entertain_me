import React, { useEffect, useState } from 'react'
import './Form.css'

// Graph
import { gql, useMutation } from '@apollo/client'
const ADD_MOVIE = gql`
  mutation addMovie($title: String, $overview: String, $poster_path: String, $popularity: Int, $tags: [String]) {
    addMovie(title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags)
  }
`

const EDIT_MOVIE = gql`
  mutation updateMovie($id: ID!, $title: String, $overview: String, $poster_path: String, $popularity: Int, $tags: [String]) {
    updateMovie(id: $id ,title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags)
  }
`

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

const Form = props => {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [poster_path, setPoster_path] = useState('')
  const [popularity, setPopularity] = useState('')
  const [tags, setTags] = useState([''])

  useEffect(() => {
    if (props.type === 'edit') {
      setTitle(props.movie.title)
      setOverview(props.movie.overview)
      setPoster_path(props.movie.poster_path)
      setPopularity(props.movie.popularity)
      setTags(props.movie.tags)
    }
    // eslint-disable-next-line
  }, [])

  const [add_movie] = useMutation(ADD_MOVIE)
  const [edit_movie] = useMutation(EDIT_MOVIE)

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }
  const handleChangeOverview = event => {
    setOverview(event.target.value)
  }
  const handleChangePoster = event => {
    setPoster_path(event.target.value)
  }
  const handleChangePopularity = event => {
    setPopularity(event.target.value)
  }

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
  const hideForm = () => {
    if (props.type === "add") {
      props.hideFormAdd()
    } else {
      props.hideFormEdit()
    }
  }
  const handleSubmit = () => {
    if (props.type === 'add') {
      add_movie({
        variables: { title, overview, poster_path, popularity: Number(popularity), tags }, refetchQueries: [{
          query: getMovies
        }]
      })
    } else {
      edit_movie({
        variables: { id: props.movie._id, title, overview, poster_path, popularity: Number(popularity), tags }, refetchQueries: [{
          query: getMovies
        }]
      })
    }
    hideForm()
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input value={title} onChange={handleChangeTitle} type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="overview" className="form-label">Overview</label>
        <input value={overview} onChange={handleChangeOverview} type="text" className="form-control" id="overview" />
      </div>
      <div className="mb-3">
        <label htmlFor="poster_path" className="form-label">Poster</label>
        <input value={poster_path} onChange={handleChangePoster} type="text" className="form-control" id="poster_path" />
      </div>
      <div className="mb-3">
        <label htmlFor="popularity" className="form-label">Popularity</label>
        <input value={popularity} onChange={handleChangePopularity} type="text" className="form-control" id="popularity" />
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
        <button onClick={hideForm} className="btn btn-danger m-2">Cancel</button>
      </div>
    </div>
  )
}

export default Form