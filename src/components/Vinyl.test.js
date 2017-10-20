import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Vinyl from './Vinyl'

test('renders without crashing', () => {
  const component = shallow(<Vinyl />)
  expect(component).toMatchSnapshot()
})
