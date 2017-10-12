import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .31em;
`
const Icon = styled.img`
    width: 30px;
    height: 30px;
`
const Button = styled.button`
    appearance: none;
    background-color: #000;
    color: #fff;
    border: 0;
    border-radius: 5px;
    outline: 0;
    font-size: .8rem;
    padding: .6em;
    cursor: pointer;
`

const Track = ({ name, icon, playing }) =>
  <Container>
    <Icon src={icon} alt={`${name} - icon`} />
    {name}
    {(playing) ?
      <Button>Stop</Button>
            : ''
        }

  </Container>

Track.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  playing: PropTypes.bool,
}

export default Track
