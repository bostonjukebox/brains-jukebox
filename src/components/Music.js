import React from 'react'
import PropTypes from 'prop-types'

import ReactHowler from 'react-howler'


const Music = ({ song, volume }) => {
  const audioPath = require(`../audio/${song.path}`)
  return (
    <ReactHowler
      src={audioPath}
      playing={false}
      html5
      volume={volume}
    />
  )
}

Music.propTypes = {
  song: PropTypes.arrayOf(PropTypes.object),
  volume: PropTypes.number,
}

export default Music
