import React, { Component } from 'react'
import styled from 'styled-components'
import socketIoClient from 'socket.io-client'

const Container = styled.div`
    background: red;
    border-radius: 10px;
    width: 60%;
    margin: 8em auto 0 auto;
    padding: .31em;
    text-align: left;
`
const Text = styled.p`
    font-size: .8rem;
    color: #fff;
`
class SystemMessage extends Component {
    render() {
        console.log(this.props.signal);
        return (
            <Container>
                {(this.props.signal === 200 || this.props.signal === null || this.props.signal === -1) ?
                        <Text>Your BrainSensor doesn't have a good connection</Text>
                   :
                        <Text>Your BrainSensor is ready!</Text>
                }    
            </Container>
        )
    }
}

export default SystemMessage;