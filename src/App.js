import React, { Component } from 'react';
import './App.css';
import GenerateMotion from './components/GenerateMotion/GenerateMotion';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GenerateMotion/>
      </div>
    );
  }
}

export default App;
