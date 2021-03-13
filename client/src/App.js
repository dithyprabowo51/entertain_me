import React from 'react'
import './App.css'

// Routing
import { Route, Switch } from 'react-router-dom'

// Components
import Home from './containers/home/Home.js'
import Nav from './components/nav/Nav.js'
import Movie from './containers/movie/Movie.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/movies'>
          <Movie />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
