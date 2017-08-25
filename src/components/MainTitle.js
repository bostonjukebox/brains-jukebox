import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: transparent;
`
const Title = styled.h1`
    color: #000;
`
const SubTitle = styled.h2`
    color: #000;
`

class MainTitle extends Component {
    render() {
        return(
            <Container>
                <Title>Boston Jukebox</Title>
                <SubTitle>Touch and listen to music</SubTitle>
            </Container>
        )
    }
}

export default MainTitle
