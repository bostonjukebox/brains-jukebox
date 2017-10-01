import React from 'react'
import PropTypes from 'prop-types'

const SongImage = ({song}) =>
    <section>
        <img alt={`${song.title} from ${song.author}`} />
    </section>

SongImage.propTypes = {
    song: PropTypes.object.isRequired,
}    

export default SongImage

