import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'

test('renders ok', () => {
  const modal = shallow(<Modal />)
  expect(modal).toMatchSnapshot()
})
