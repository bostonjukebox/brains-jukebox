import React, {Component} from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: green;
    width: 60%;
    margin: 0 auto;
    height: 200px;
`


class Player extends Component {
    constructor(){
        super();
        this.state = {
            attention: null
        }
    }

    componentWillMount() {
        // subscribeToMind((err, data) =>
        //     this.setState({attention: data.eSense.attention})
        // );
    }

    render(){
        console.log(this.state.attention);
        return(
            <Container>
                This is the player
                {this.state.attention}
            </Container>
        )
    }
}

export default Player