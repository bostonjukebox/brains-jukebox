import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import FlipCard from 'react-flipcard'

import SongInfo from './SongInfo'
import SongImage from './SongImage'
import MultiTrack from './MultiTrack'
import Music from './Music'

import data from '../data/songs.json'

class Player extends Component {
    constructor() {
        super()
        this.state = {
            numberOfSongs: 0,
            index: 0,
            songs: {},
            flipped: false,
            playing: false,
            volume: 1.0,
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

    componentWillMount() {
        const that = this;
            that.setState ({
                songs: data.songs,
                numberOfSongs: data.songs.length
            })
    }
    

    render(){
        const { songs, index, volume } = this.state
        const { playing } = this.props

        console.log(songs[index]);

        return(
            <FlipCard
                disabled={true}
                flipped={this.state.flipped}
                >
                <section>
                    {(index === null) ?
                        <div>No song playing :-(</div> :
                        <SongInfo
                                song={songs[index]}
                        />                    
                    }
                    <SongImage song={songs[index]} />
                    <Music song={songs[index]} volume={volume} />
                    <button type="button" onClick={() => this.showBack()}>Go to multitrack mode</button>     
                </section>
                <section>
                    <MultiTrack playing={playing} />
                    <button type="button" ref="backButton" onClick={() => this.showFront()}>Go to single track mode</button>
                </section>
            </FlipCard>
         
        )
    }
}

Player.propTypes = {
    playing: PropTypes.bool
}

export default Player