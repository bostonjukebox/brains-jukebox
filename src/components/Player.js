import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FlipPlayer from './FlipPlayer'

const Container = styled.div`
    background-color: green;
    width: 60%;
    margin: 0 auto;
    height: 200px;
`

class Player extends Component {
    constructor() {
        super();
        this.state = {
            flipped: false
        }
    }

    handleClick() {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    render(){
        console.log(this.state.flipped)
        return(
            <Container>
                <FlipPlayer flippped={this.state.flipped} />
                <button onClick={() => this.handleClick()}>Change to multiple track</button> 
            </Container>
        )
    }
}


Player.propTypes = {
    attention: PropTypes.number
}

export default Player