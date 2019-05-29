import React from 'react';
import Home from './Home/Home.js'
import Nav from './Nav/Nav.js'
import About from './About/About.js'
import './App.css';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
