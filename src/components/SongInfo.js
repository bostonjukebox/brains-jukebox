import React from 'react'
import PropTypes from 'prop-types'

const SongInfo = ({song}) => 
    <section>
      <h1>{song.title}</h1>
      <h2>{song.author}</h2>      
    </section>

export default SongInfo

SongInfo.propTypes = {
  song: PropTypes.object.isRequired,
}