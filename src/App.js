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

const relaxedTheme = {
  background: '#ADD8E6',
  color: '#000',
}
const defaultTheme = {
  background: '#F44336',
  color: '#FFF',
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
        if(this.state.attention > 70) {
            this.setState({theme: relaxedTheme})
        }
    });
    this.socket.on("signalRate", (signalLevel) =>{
        this.setState({
            signal: signalLevel
        })
    })
  }
  
  render() {
    console.log(this.state.theme)
    console.log(this.state.attention)
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
