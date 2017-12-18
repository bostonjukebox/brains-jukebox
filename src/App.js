import React, { Component } from 'react'
import styled from 'styled-components'
import socketIoClient from 'socket.io-client'

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'
import Menu from './components/Menu'

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

  componentDidMount() {
    this.socket = socketIoClient('http://localhost:9090')
    this.socket.on('attentionRate', (attentionLevel) => {
      this.setState({
        attention: attentionLevel,
        volume: Math.round((attentionLevel * 10) / 100),
      })

      if (this.state.attention >= 80) {
        this.setState({ theme: relaxedTheme })
      } else if (this.state.attention <= 40) {
        this.setState({ theme: stressedTheme })
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

  componentWillUnmount() {

  }

  render() {
    console.log(this.state.volume)
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
  transition: 'background 8s linear, color 8s linear',
}
const defaultTheme = {
  background: '#F44336',
  color: '#FFF',
  transition: 'background 8s linear, color 8s linear',
}
const stressedTheme = {
  background: '#f1c40f',
  color: '#000',
  transition: 'background 8s linear, color 8s linear',
}
