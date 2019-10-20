import React from 'react'
import './../css/App.css'
import { Switch, NavLink, Route } from 'react-router-dom'
import VotePage from './VotePage'
import ScorePage from './ScorePage'

function App() {
  return (
    <div className="App">
      <nav id="navigation">
        <NavLink to="/">
          <h1>CAT MASH</h1>
        </NavLink>
        <NavLink to="/scoring">Voir les plus beaux chats</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={VotePage}></Route>
        <Route path="/scoring" component={ScorePage}></Route>
      </Switch>
    </div>
  )
}

export default App
