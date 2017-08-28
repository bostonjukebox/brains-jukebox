import React, { Component } from 'react'
import styled from 'styled-components'

import { subscribeToMind } from '../api';

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
    constructor() {
        super();
        this.state = {
            signal: null
        }
      }

    componentWillMount() {
        subscribeToMind((err, data) => 
                this.setState({signal: data.poorSignalLevel})
        );        
    }
    
    render() {
        console.log(this.state.signal);
        return (
            <Container>
                {(this.state.signal === 200 || this.state.signal === null) ?
                        <Text>Your BrainSensor doesn't have a good connection</Text>
                   :
                        <Text>Your BrainSensor is ready!</Text>
                }    
            </Container>
        )
    }
}

export default SystemMessage;