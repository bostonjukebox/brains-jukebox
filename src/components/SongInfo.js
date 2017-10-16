import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
`

const Title = styled.h1`
    font-size: 1.2rem;
    color: #000;
`
const Author = styled.h2`
    font-size: 1rem;
    margin-top: -1.2em;
`

const SongInfo = ({ song }) =>
  <Container>
    <Title>{song.title}</Title>
    <Author>{song.author}</Author>
  </Container>

export default SongInfo

SongInfo.propTypes = {
  song: PropTypes.object.isRequired,
}
