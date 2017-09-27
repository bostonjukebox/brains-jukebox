import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: transparent;
`
const Title = styled.h1`
    color: inherit;
`
const SubTitle = styled.h2`
    color: inherit;
`

const MainTitle = () =>
    <Container>
        <Title>Boston Touch Jukebox</Title>
        <SubTitle>Touch and listen to music</SubTitle>
    </Container>

export default MainTitle
