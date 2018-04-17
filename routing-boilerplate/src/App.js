import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/HomeScreen'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' render={() => <h1>About</h1>}/>
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
