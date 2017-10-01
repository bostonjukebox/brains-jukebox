import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Modal from './Modal'
import ModalForm from './ModalForm'

const Item = styled.li`
    list-style: none;
`

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            showModalWorks: false,
            showModalCredits: false,
            showModalSuggestion: false,
        }
    }

    toggleModalWorks() {
        this.setState({
            showModalWorks: !this.state.showModalWorks
        })
    }

    toggleModalCredits() {
        this.setState({
            showModalCredits: !this.state.showModalCredits
        })
    }

    toggleModalSuggestion() {
        this.setState({
            showModalSuggestion: !this.state.showModalSuggestion
        })
    }


    componentDidMount() {
        document.addEventListener('keyup', (event) => {
            if(event.keyCode === 27) {
                this.setState({dropdown: false})
                this.setState({showModal: false})
                this.setState({showConfirmation: false})
                this.setState({showError: false})
            }
        })
    }

    render() {
        return(
        <section>
            <nav>
                <Item><button onClick={() => this.toggleModalSuggestion()}>suggest a Song</button></Item>
                <Item><button onClick={() => this.toggleModalWorks()}>how it works</button></Item>
                <Item><button onClick={() => this.toggleModalCredits()}>credits</button></Item>
            </nav>
            {(this.state.showModalCredits) ?
                <Modal title={'Credits'} text={'this is the credits modal'} />
                : ''   
            }
            {(this.state.showModalWorks) ?
                <Modal title={'How it works'} text={'This is how it works'} />
                : ''
            }
            {(this.state.showModalSuggestion) ?
                <ModalForm title={'Suggest a song'} />
                : ''
            }
        </section>
        )
    }

}

export default Menu