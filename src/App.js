import React, { Component } from 'react'
import styled from 'styled-components'
import socketIoClient from 'socket.io-client'

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'
import Menu from './components/Menu'

const MainContainer = styled.div`
  font-family: 'Montserrat', Verdana, sans-serif;
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
  constructor() {
    super()
    this.state = {
      attention: null,
      signal: null,
      theme: defaultTheme,
      volume: 1.0,
    }
  }

  componentWillMount() {
    this.socket = socketIoClient('http://localhost:9090')
    this.socket.on('attentionRate', (attentionLevel) => {
      setTimeout(() => {
        this.setState({
          attention: attentionLevel,
          volume: attentionLevel / 100,
        })
      }, 3000)
      if (this.state.attention > 60) {
        this.setState({ theme: relaxedTheme })
      } else {
        this.setState({ theme: defaultTheme })
      }
    })
    this.socket.on('signalRate', (signalLevel) => {
      this.setState({
        signal: signalLevel,
      })
    })
  }


  render() {
    return (
      <MainContainer theme={this.state.theme}>
        <SystemMessage signal={this.state.signal} />
        <MainTitle />
        <Player volume={this.state.volume} />
        <Menu />
      </MainContainer>
    )
  }
}

export default App
