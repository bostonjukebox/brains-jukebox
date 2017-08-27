import React, { Component } from 'react'
import styled from 'styled-components'

import { subscribeToMind } from './api';


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
    constructor(props) {
        super(props);
        
        subscribeToMind((err, mindEvent) => this.setState({ 
          mindEvent 
        }));
      }
    render() {
        return (
            <Container>
                <Text>No message</Text>
            </Container>
        )
    }
}

export default SystemMessage;