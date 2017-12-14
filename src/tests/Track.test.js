import React from 'react'
import { shallow, mount } from 'enzyme'
import Track from '../components/Track'

describe('Track', () => {
  test('it renders without crashing', () => {
    const component = shallow(<Track />)
    expect(component).toHaveLength(1)
  })
  test('button is displayed when song is playing', () => {
    const component = mount(<Track playing />)
    const button = component.find('button')
    expect(button).toHaveLength(1)
  })
})
