import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Music.propTypes = {
    song: PropTypes.object.isRequired,
    volume: PropTypes.number,
}

export default Music