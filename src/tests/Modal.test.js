import React from 'react'
import { shallow, mount } from 'enzyme'
import Modal from '../components/Modal'

test('renders ok', () => {
  const modal = shallow(<Modal />)
  expect(modal).toMatchSnapshot()
})

