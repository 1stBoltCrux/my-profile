import React, { Component } from 'react';
import Nav from './components/Nav.js'
import TitleContainer from './components/TitleContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <Nav/>
        <TitleContainer/>
      </div>
    );
  }
}

export default App;
