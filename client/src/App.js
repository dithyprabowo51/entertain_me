import React from 'react'
import './App.css'

// Routing
import { Route, Switch } from 'react-router-dom'

// Components
import Home from './containers/home/Home.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
