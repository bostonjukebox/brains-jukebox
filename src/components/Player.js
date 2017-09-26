import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Container = styled.div`
    background-color: green;
    width: 60%;
    margin: 0 auto;
    height: 200px;
`

class Player extends Component {
    render(){
        console.log(this.props.attention);
        return(
            <Container>
                This is the player
                {this.props.attention}
            </Container>
        )
    }
}


Player.propTypes = {
    attention: PropTypes.number
}

export default Player