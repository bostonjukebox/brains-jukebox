import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.6);    
`
const Content = styled.section`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    min-height: 15em;
    background-color: #fff;
    color: #000;
    padding: 0 1em;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);     
`
const Title = styled.h1`
    color: #F44336;
    font-size: 1.2rem;
`
const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    white-space: pre-wrap;
`

const Modal = ({title, text}) =>
    <Container>
        <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Content>
    </Container>

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Modal