import React from 'react'
import Navigation from './components/Navigation'
import Survey from './components/Survey'
import Landing from './components/Landing'
import ExportData from './components/ExportData'
import {Switch, Route} from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Route path='/'render={() => (<Navigation className="navigationElement" />)} />
        <Switch>
            <Route exact path='/' render={() => (<Landing />)} />
            <Route path='/survey' render={() => (<Survey />)} />
            <Route path='/exportData' render={() => (<ExportData />)} />
        </Switch>
       </div>
    </div>
  )
}

export default App
