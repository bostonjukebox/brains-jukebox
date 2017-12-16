import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: transparent;
`
const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    color: inherit;
`
const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: inherit;
`

const MainTitle = () =>
  <Container>
    <Title>Boston Brains Jukebox</Title>
    <SubTitle>Touch, think and listen to local music</SubTitle>
  </Container>

export default MainTitle
