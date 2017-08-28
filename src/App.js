import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SystemMessage />
        <MainTitle />
        <Player />
      </div>
    );
  }
}

export default App;
