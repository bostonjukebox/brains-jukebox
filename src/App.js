import React, { Component } from 'react';
import styled from 'styled-components'
import socketIoClient from 'socket.io-client'

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'


const MainContainer = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const relaxTheme = {
  background: 'black',
  color: 'blue',
}
const defaultTheme = {
  background: 'white',
  color: 'black',
}

class App extends Component {
  constructor(){
      super();
      this.state = {
          attention: null,
          signal: null,
          theme: defaultTheme,
      }
  }

  componentWillMount() {
    this.socket = socketIoClient("http://localhost:9090");
    this.socket.on("attentionRate", (attentionLevel) => {
        this.setState({
            attention: attentionLevel
        });
    });
    this.socket.on("signalRate", (signalLevel) =>{
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
        <Player attention={this.state.attention} />
      </MainContainer>
    );
  }
}

export default App;
