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
    width: 25%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`

const Item = styled.li`
    list-style: none;
`

const Button = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    &:hover {
        color: #000;
    }
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
                <Item><Button onClick={() => this.toggleModalSuggestion()}>suggest a song</Button></Item>
                <Item><Button onClick={() => this.toggleModalWorks()}>how it works</Button></Item>
                <Item><Button onClick={() => this.toggleModalCredits()}>credits</Button></Item>
            </Navigation>
            {(this.state.showModalCredits) ?
                <Modal
                    title={'Credits'}
                    text={'Boston TouchJukebox started thesis project of Tiago Costa under the supervising of Ravi Jain (2017). Now is a sideproject in full development ;-) \n\ncontact: tiago@tiagocosta.co'}
                    handleModal={() => this.toggleModalCredits()} />
                : ''   
            }
            {(this.state.showModalWorks) ?
                <Modal
                    title={'How it works'} 
                    text={"The Boston TouchJukebox reads your mood and what you touch to offer a unique listening experience.\n\nWhen you wear the headband sensor, the Boston TouchJukebox starts to read your mood. According to how you feel, certain songs are available. \n\nFor example, if you're stressed and touch certain objects, the Boston TouchJukebox you recommend songs to keep you more relaxed. The interface of the TouchJukebox changes according to your mood. \n\nIf you notice that colors are changing, it is a signal that you're more or less concentrated on your experience. \n\nThe volume creates the same experience. If you get concentrated, the Boston TouchJukebox gets louder to provide you a more immersive experience with the song you're listening."} 
                    handleModal={() => this.toggleModalWorks()} />
                : ''
            }
            {(this.state.showModalSuggestion) ?
                <ModalForm 
                    title={'Suggest a song'} 
                    handleModal={() => this.toggleModalSuggestion()}
                    />
                : ''
            }
        </Container>
        )
    }

}

export default Menu