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
    border-radius: 10px;
    padding: 0 1em;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 15em;
    background-color: #fff;
    color: #000;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);     
`

const Title = styled.h1`
    color: #F44336;
    font-size: 1.2rem;
`

const TextArea = styled.textarea`
    display: block;
    height: 6em;
    width: 100%;
    margin-bottom: 1em;
    font-size: 1rem;
`

const ButtonForm = styled.button`
    appearance: none;
    background-color: #000;
    color: #fff;
    border: 0;
    outline: 0;
    font-size: 1rem;
    padding: .31em .62em;
    cursor: pointer;
`
const Button = styled.button`
    appearance: none;
    background-color: transparent;
    color: #F44336;
    border: none;
    outline: none;
    font-size: 1rem;
    position: absolute;
    top: .6em;
    right: .6em;
    cursor: pointer;
`

const ModalForm = ({title, handleModal}) =>
    <Container>
        <Content>
            <Button onClick={handleModal}>close</Button>
            <Title>{title}</Title>
            <TextArea></TextArea>
            <ButtonForm>Send</ButtonForm>
        </Content>
    </Container>

ModalForm.propTypes = {
    title: PropTypes.string.isRequired,
    handleModal: PropTypes.func.isRequired
}

export default ModalForm