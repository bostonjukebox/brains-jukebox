import React from "react"
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

export default Track