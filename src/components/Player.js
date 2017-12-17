import React, { Component } from 'react'
import socketIoClient from 'socket.io-client'
// import firebase from 'firebase'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FlipCard from 'react-flipcard'
import data from '../data/songs.json'

import SongInfo from './SongInfo'
import SongImage from './SongImage'
import MultiTrack from './MultiTrack'
import Music from './Music'
import Vinyl from './Vinyl'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      index: null,
      songs: {},
      flipped: false,
      playing: false,
      textButton: true,
    }
    this.showBack = this.showBack.bind(this)
    this.showFront = this.showFront.bind(this)
    this.handlePauseClick = this.handlePauseClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
  }

  componentWillMount() {
    const that = this
    that.setState({
      songs: data.songs,
    })
    that.socket = socketIoClient('http://localhost:9091')
    that.socket.on('objectTouched', (object) => {
      const index = object.toString()
      that.setState({
        index,
        playing: true,
      })
    })
  }

  showBack() {
    this.setState({
      flipped: true,
      playing: false,
      index: null,
    })
  }

  showFront() {
    this.setState({
      flipped: false,
      playing: false,
      index: null,
    })
  }

  handlePauseClick() {
    this.setState({
      playing: !this.state.playing,
      textButton: !this.state.textButton,
    })
  }

  handleStopClick() {
    this.setState({
      playing: false,
      textButton: true,
      index: null,
    })
  }

  render() {
    const {
      songs, index, playing,
    } = this.state
    return (
      <section>
        <FlipCard
          disabled
          flipped={this.state.flipped}
        >
          <Content>
            {(index === null) ?
              <Text>No song playing :-(</Text>
                        : <SongInfo
                          song={songs[index]}
                        />
                    }
            {(index != null) ?
              <SongImage song={songs[index]} />
                        : ''
                    }
            {(index != null) ?
              <Music song={songs[index]} volume={this.props.volume} playing={playing} />
                        : ''
                    }
            <Button type="button" onClick={this.showBack}>Go to multitrack mode</Button>
            <ButtonPrimary onClick={this.handlePauseClick}>{this.state.textButton ? 'pause' : 'play '}</ButtonPrimary>
            <ButtonPrimary2 onClick={this.handleStopClick}>Stop</ButtonPrimary2>
          </Content>
          <Content>
            <MultiTrack playing={playing} />
            <Button type="button" ref="backButton" onClick={this.showFront}>Go to single track mode</Button>
          </Content>
        </FlipCard>
        <Vinyl playing={playing} />
      </section>
    )
  }
}

export default Player

Player.propTypes = {
  volume: PropTypes.number,
}

const Content = styled.section`
  padding: 1em;
  position: relative;
  margin-top: -1em;
`

const Text = styled.p`
  margin-top: 1em;
`
const Button = styled.button`
  appearance: none;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: .8rem;
  padding: .31em .62em;
  position: absolute;
  top: 12em;
  left: .62em;
  cursor: pointer;
`
const ButtonPrimary = styled.button`
  appearance: none;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: .8rem;
  padding: .31em .62em;
  position: absolute;
  top: 12em;
  left: 13em;
  cursor: pointer;
`
const ButtonPrimary2 = styled.button`
  appearance: none;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: .8rem;
  padding: .31em .62em;
  position: absolute;
  top: 12em;
  left: 18em;
  cursor: pointer;
`
