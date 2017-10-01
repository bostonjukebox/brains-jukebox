import React from 'react'
import PropTypes from 'prop-types'

import marty from '../img/image2.jpg'
import covey from '../img/image3.jpg'

const SongImage = ({song}) =>
    <section>
        <img src={song.img} alt={`${song.title} from ${song.author}`} />
    </section>

SongImage.propTypes = {
    song: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired
}    

export default SongImage

