import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.section`
    position: absolute,
    top: 0,
    left: 0,
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);    
`

const Content = styled.section`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 15em;
    background-color: #fff;
    color: #000;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);     
`

const Modal = ({title, text}) =>
    <Container>
        <Content>
            <h1>{title}</h1>
            <p>{text}</p>
        </Content>
    </Container>

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Modal