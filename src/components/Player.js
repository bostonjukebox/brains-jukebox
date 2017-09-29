import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FlipCard from 'react-flipcard'

import data from '../data/songs.json'

class Player extends Component {
    constructor() {
        super();
        this.state = {
            songs: {},
            numberOfSongs: 0,
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
                songs: data,
                numberOfSongs: data.songs.length
            })
    }
    

    render(){
        return(
            <FlipCard
                disabled={true}
                flipped={this.state.flipped}
                >
                <section>
                    <div>{this.state.numberOfSongs}</div>
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