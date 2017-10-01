import React, { Component } from 'react'
import ReactHowler from 'react-howler'


class Music extends Component {
    render() {
        const { song, volume } = this.props;
        const audioPath = require(`../audio/${song.path}`)
        
        return (
        <ReactHowler
            src={ audioPath }
            playing={false}
            html5={true}
            volume={volume}
        />
        )
    }
}

export default Music