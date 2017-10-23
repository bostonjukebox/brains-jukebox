import React from 'react'
import { shallow, mount } from 'enzyme'

import Vinyl from './Vinyl'


describe('Vinyl', () => {
  test('renders without crashing', () => {
    const component = shallow(<Vinyl />)
    expect(component).toMatchSnapshot()
  })

  test('amimation is running when song is played', () => {
    const component = mount(<Vinyl playing />)
    const animation = component.find('img')
    expect(animation.props().alt).toBe('Vinyl moving')
  })
})

