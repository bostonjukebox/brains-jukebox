import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from './Modal'
import ModalForm from './ModalForm'

const Container = styled.section`
    width: 100%;
    height: 100%;
`
const Navigation = styled.nav`
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 20%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`

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
                this.setState({showModalCredits: false})
                this.setState({showModalSuggestion: false})
                this.setState({showModalWorks: false})
            }
        })
    }

    render() {
        return(
        <Container>
            <Navigation>
                <Item><button onClick={() => this.toggleModalSuggestion()}>suggest a Song</button></Item>
                <Item><button onClick={() => this.toggleModalWorks()}>how it works</button></Item>
                <Item><button onClick={() => this.toggleModalCredits()}>credits</button></Item>
            </Navigation>
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
        </Container>
        )
    }

}

export default Menu