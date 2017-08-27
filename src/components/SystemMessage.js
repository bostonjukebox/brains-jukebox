import React, { Component } from 'react'
import styled from 'styled-components'

import { subscribeToMind } from '../api';


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
    constructor() {
        super();
        this.state = {
            message: "No Message"
        }
      }

    componentWillMount() {
        subscribeToMind((cb) => this.setState({
            message: cb
        }));
    }  
    render() {
        return (
            <Container>
                <Text>{this.state.message}</Text>
            </Container>
        )
    }
}

export default SystemMessage;