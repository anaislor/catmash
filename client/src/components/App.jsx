import React from 'react'
import './../css/App.css'
import { Switch, NavLink, Route } from 'react-router-dom'
import Home from './Home'
import VotePage from './VotePage'
import ScorePage from './ScorePage'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vote">Vote</NavLink>
        <NavLink to="/scoring">Scoring</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/vote" component={VotePage}></Route>
        <Route path="/scoring" component={ScorePage}></Route>
      </Switch>
    </div>
  )
}

export default App
