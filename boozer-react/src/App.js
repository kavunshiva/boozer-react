import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './CocktailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CocktailsContainer />
        </Router>
      </div>
    );
  }
}

export default App;
