import React, {Component} from 'react'
import styled from 'styled-components'

import FlipCard from 'react-flipcard'

import SongInfo from './SongInfo'
import SongImage from './SongImage'
import MultiTrack from './MultiTrack'

import data from '../data/songs.json'

class Player extends Component {
    constructor() {
        super()
        this.state = {
            numberOfSongs: 0,
            index: 0,
            songs: {},
            flipped: false,
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
        const { songs, index } = this.state
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
                    <button type="button" onClick={() => this.showBack()}>Go to multitrack mode</button>     
                </section>
                <section>
                    <MultiTrack />
                    <button type="button" ref="backButton" onClick={() => this.showFront()}>Go to single track mode</button>
                </section>
            </FlipCard>
         
        )
    }
}

export default Player