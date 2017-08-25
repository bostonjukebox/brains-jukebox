import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background: red;
    border-radius: 10px;
    width: 60%;
    margin: 0 auto;
    padding: .31em;
    text-align: left;
`
const Text = styled.p`
    color: #fff;
`

class SystemMessage extends Component {
    render() {
        return (
            <Container>
                <Text>No Messages</Text>
            </Container>
        )
    }
}

export default SystemMessage;