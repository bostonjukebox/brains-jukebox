import React, { Component } from 'react';
import styled from 'styled-components'

import SystemMessage from './components/SystemMessage'
import MainTitle from './components/MainTitle'
import Player from './components/Player'

const MainContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <MainContainer>
        <SystemMessage />
        <MainTitle />
        <Player />
      </MainContainer>
    );
  }
}

export default App;
