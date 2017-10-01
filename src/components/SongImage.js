import React from 'react'

const SongImage = ({song}) =>
    <section>
        <img src={song.img} alt={`${song.title} from ${song.author}`} />
    </section>

export default SongImage

