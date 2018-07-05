import React, { Component } from 'react';
import Nav from './components/Nav.js'
import TitleContainer from './components/TitleContainer.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <Nav/>
        <TitleContainer/>
        <AboutMe/>
        <Projects/>
      <Footer/>
      </div>
    );
  }
}

export default App;
