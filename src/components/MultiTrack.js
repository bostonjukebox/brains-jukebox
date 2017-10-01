import React from 'react'
import PropTypes from 'prop-types'

import Track from './Track'

import vocals from "../img/icon-vocals.svg"
import guitar from "../img/icon-guitar.svg"
import drums from "../img/icon-drums.svg"

const MultiTrack = ({playing}) =>
        <section>
            <Track name={'vocal'} icon={vocals} playing={playing} />
            <Track name={'guitar'} icon={guitar} playing={playing}/>
            <Track name={'drums'} icon={drums} playing={playing}/>
        </section>

MultiTrack.propTypes = {
    playing: PropTypes.bool,
}    

export default MultiTrack