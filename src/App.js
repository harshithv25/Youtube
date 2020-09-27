import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Recommended from './Recommended'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__page">
          <Switch>
            <Route path="/search/:querry">
              <Sidebar />
              <SearchPage />
            </Route>
            <Route path='/'>
              <Sidebar />
              <Recommended />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
