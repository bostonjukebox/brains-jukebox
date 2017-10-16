import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactHowler from 'react-howler'


const Music = ({ volume }) => {
  const audioPath = require(`../audio/${song.path}`)
  
  render() {
    return (
      <ReactHowler
        src={audioPath}
        playing={false}
        html5
        volume={volume}
      />
    )
  }
}

Music.propTypes = {
  song: PropTypes.func,
  volume: PropTypes.number,
}

export default Music
