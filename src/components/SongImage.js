import React, { Component } from 'react'
import PropTypes from 'prop-types'


class SongImage extends Component {
    render(){
        const { song } = this.props;
        const source = require(`../img/${song.img}`);

        return (
        <section>
            <img src={source} alt={`${song.title} from ${song.author}`} />
        </section>
        )
    }
}

SongImage.propTypes = {
    song: PropTypes.object.isRequired
}    

export default SongImage

