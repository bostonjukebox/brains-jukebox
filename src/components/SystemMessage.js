import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
    background-color: #D32F2F;
    border-radius: 10px;
    width: 60%;
    margin: 8em auto 0 auto;
    padding: .6em;
`
const Text = styled.p`
    font-size: .9rem;
    font-weight: 400;
    color: #fff;
    text-align: left;
    transition: all 3s linear;
`
const SystemMessage = ({signal}) =>
            <Container>
                {(signal === 200 || signal === null || signal === -1) ?
                        <Text>Your BrainSensor doesn't have a good connection</Text>
                   :
                        <Text>Your BrainSensor is ready!</Text>
                }    
            </Container>

SystemMessage.propTypes = {
    signal: PropTypes.number
}

export default SystemMessage;