import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Image = styled.img`
    border-radius: 10px;
`
const Container = styled.section`
    position: absolute;
    top: 5px;
    right: 15px;
`

const SongImage = ({ song }) => {
  const source = require(`../img/${song.img}`)
  return (
    <Container>
      <Image src={source} alt={`${song.title} from ${song.author}`} />
    </Container>
  )
}

SongImage.propTypes = {
  song: PropTypes.arrayOf(PropTypes.object),
}

export default SongImage

