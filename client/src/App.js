import React from 'react'
import './App.css'

// Routing
import { Route, Switch } from 'react-router-dom'

// Components
import Home from './containers/home/Home.js'
import Nav from './components/nav/Nav.js'
import Movie from './containers/movie/Movie.js'
import Detail from './containers/detail/Detail.js'
import Favorite from './containers/favorite/Favorite.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/movies/:id'>
          <Detail />
        </Route>
        <Route path='/movies'>
          <Movie />
        </Route>
        <Route path='/favorites'>
          <Favorite />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
