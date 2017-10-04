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