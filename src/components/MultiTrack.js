import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Track from './Track'

import vocals from '../img/icon-vocals.svg'
import guitar from '../img/icon-guitar.svg'
import drums from '../img/icon-drums.svg'

const Container = styled.section`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const MultiTrack = ({ playing }) =>
  <Container>
    <Track name="vocal" icon={vocals} playing={playing} />
    <Track name="guitar" icon={guitar} playing={playing} />
    <Track name="drums" icon={drums} playing={playing} />
  </Container>

MultiTrack.propTypes = {
  playing: PropTypes.bool,
}

export default MultiTrack
