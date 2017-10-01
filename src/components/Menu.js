import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'


const Item = styled.li`
    list-style: none;
`

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return(
        <nav>
            <Item><button onClick={() => this.toggleModal()}>suggest a Song</button></Item>
            <Item><button onClick={() => this.toggleModal()}>how it works</button></Item>
            <Item><button onClick={() => this.toggleModal()}>credits</button></Item>
        </nav>
        )
    }

}

export default Menu