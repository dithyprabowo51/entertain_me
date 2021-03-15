import React from 'react'
import './Favorite.css'

// Var
import { useReactiveVar } from '@apollo/client'
import { favoritesVar } from '../../config/Var.js'

// Components
import Card from '../../components/card/Card.js'

const Favorite = () => {
  const favorites = useReactiveVar(favoritesVar)
  console.log(favorites)
  return (
    <div className="favorites">
      <h2 className="text-center mt-5 mb-4 text-warning">Favorites Movie</h2>
      <div className="favorites-list">
        {
          favorites.map(favorite => {
            return (
              <Card key={favorite._id} type="favorite" movie={favorite} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Favorite