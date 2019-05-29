import React from 'react';
import Home from './Home/Home.js'
import Nav from './Nav/Nav.js'
import {Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path= '/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
