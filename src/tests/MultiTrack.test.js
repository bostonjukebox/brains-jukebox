import React from 'react'
import { shallow } from 'enzyme'
import MultiTrack from '../components/MultiTrack'

test('renders without crashing', () => {
  const component = shallow(<MultiTrack />)
  expect(component).toMatchSnapshot()
})

