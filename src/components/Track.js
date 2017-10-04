import React from "react"
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Icon = styled.img`
    width: 30px;
    height: 30px;
`

const Track = ({name, icon, playing}) =>
    <section>
        <Icon src={icon} alt={`${name} - icon`}/> 
        {name}
        {(playing) ?
            <button>Stop</button>
            : ''    
        }
        
    </section>

    Track.propTypes = {
        name: PropTypes.string,
        icon: PropTypes.string,
        playing: PropTypes.bool,
    }

export default Track