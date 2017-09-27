import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Container = styled.div`
    prespective: 1000px;
    width: 320px;
	height: 480px;
`
const Back = styled.div`
    width: 320px;
    height: 480px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
`
const Front = styled.div`
    width: 320px;
    height: 480px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
	transform: rotateY(0deg);
`

const Flipper = styled.div`
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
`


const FrontPlayer = ({children}) =>
    <Front>
        {children}
    </Front>

const BackPlayer = ({children}) =>
    <Back>
        {children}
    </Back>

class FlipPlayer extends Component {
    render(){
        return(
            <Container>
                <Flipper flipped={this.props.flipped}>
                    <FrontPlayer>Front</FrontPlayer>
                    <BackPlayer>Back</BackPlayer>
                </Flipper>
            </Container>
        )
    }
}

export default FlipPlayer