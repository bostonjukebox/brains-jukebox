import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FlipCard from 'react-flipcard'

import data from '../data/songs.json'

class Player extends Component {
    constructor() {
        super();
        this.state = {
            player: {},
            numberOfSongs: 0,
            index: 1,
            flipped: false
        }
    }

    showBack() {
        this.setState({
          flipped: true
        });
    }
    
    showFront() {
        this.setState({
          flipped: false
        });
    }

    componentDidMount() {
        const that = this;
            that.setState ({
                player: data,
                numberOfSongs: data.songs.length
            })
    }
    

    render(){
        const { player } = this.state
        console.log(this.state.index)
        return(
            <FlipCard
                disabled={true}
                flipped={this.state.flipped}
                >
                <section>
                    <div>{this.state.numberOfSongs}</div>
                    <div>{this.state.player[this.state.index]}</div>
                    <button type="button" onClick={() => this.showBack()}>Go to multitrack mode</button>     
                </section>
                <section>
                    <div>Back</div>
                    <button type="button" ref="backButton" onClick={() => this.showFront()}>Go to single track mode</button>
                </section>
            </FlipCard>
         
        )
    }
}


Player.propTypes = {
    attention: PropTypes.number
}

export default Player