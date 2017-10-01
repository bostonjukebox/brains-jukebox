import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Modal = ({title, text}) =>
    <section>
        <section>
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    </section>

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Modal