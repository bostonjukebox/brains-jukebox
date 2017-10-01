import React, { Component } from 'react';
import styled from 'styled-components'
import socketIoClient from 'socket.io-client'

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'
import Vinyl from './components/Vinyl'
import Menu from './components/Menu'

const MainContainer = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  transition: ${props => props.theme.transition};
`

const relaxedTheme = {
  background: '#ADD8E6',
  color: '#000',
  transition: 'background 3s linear, color 3s linear',
}
const defaultTheme = {
  background: '#F44336',
  color: '#FFF',
  transition: 'background 3s linear, color 3s linear',
}

class App extends Component {
  constructor(){
      super();
      this.state = {
          attention: null,
          signal: null,
          theme: defaultTheme,
          playing: false,
      }
  }

  componentWillMount() {
    this.socket = socketIoClient("http://localhost:9090");
    this.socket.on("attentionRate", (attentionLevel) => {
        this.setState({
            attention: attentionLevel
        });
        if(this.state.attention > 50) {
            this.setState({theme: relaxedTheme})
        } else {
            this.setState({theme: defaultTheme})
        }
    });
    this.socket.on("signalRate", (signalLevel) => {
        this.setState({
            signal: signalLevel
        })
    })
  }
  
  render() {
    return (
      <MainContainer theme={this.state.theme}>
        <SystemMessage signal={this.state.signal} />
        <MainTitle />
        <Player playing={this.state.playing} />
        <Vinyl playing={this.state.playing} />
        <Menu />
      </MainContainer>
    );
  }
}

export default App;
