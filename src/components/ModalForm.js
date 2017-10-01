import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const ModalForm = ({title}) =>
    <section>
        <section>
            <h1>{title}</h1>
            <textarea></textarea>
        </section>
    </section>

ModalForm.propTypes = {
    title: PropTypes.string.isRequired
}

export default ModalForm