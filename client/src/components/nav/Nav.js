import React from 'react'
import './Nav.css'

// Routing
import { useHistory } from 'react-router-dom'

const Nav = () => {
  const history = useHistory()
  const changePage = value => {
    history.push(value)
  }
  return (
    <div className="nav-component">
      <div onClick={() => changePage('/')}>Home</div>
      <div onClick={() => changePage('/movies')}>Movies</div>
      <div onClick={() => changePage('/favorites')}>Favorites</div>
    </div>
  )
}

export default Nav