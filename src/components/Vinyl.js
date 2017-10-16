import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import source from '../img/vinyl.png'

const Container = styled.section`
    margin-top: 2em;
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Icon = styled.img`
    width: 100px;
    height: 100px;
`

const IconAnimated = Icon.extend`
    animation: ${spin} 4s linear infinite;
`

const Vinyl = ({ playing }) =>
  <Container>
    {(playing) ?
      <IconAnimated src={source} alt="Vinyl" />
      : <Icon src={source} alt="Vinyl" />
    }
  </Container>

Vinyl.propTypes = {
  playing: PropTypes.bool,
}

export default Vinyl
