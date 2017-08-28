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
            signal: 0
        }
      }

    componentWillMount() {
        subscribeToMind((err, data) => 
                this.setState({signal: data})
        );        
    }
    
    render() {
        console.log(this.state.signal);
        return (
            <Container>
                {(this.state.signal === 200) ?
                        <Text>Your BrainSensor doesn't have a good connection</Text>
                   :
                        <Text>Your BrainSensor is ready!</Text>
                }    
            </Container>
        )
    }
}

export default SystemMessage;