import React from 'react'
import { shallow } from 'enzyme'
import ModalForm from './ModalForm'

describe('ModalForm', () => {
  it('renders without crashing', () => {
    const component = shallow(<ModalForm />)
    expect(component).toMatchSnapshot()
  })
})
