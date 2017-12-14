import React from 'react'
import { shallow, mount } from 'enzyme'

import SystemMessage from './SystemMessage'

describe('System Message', () => {
  test('runs without crashing', () => {
    const component = shallow(<SystemMessage />)
    expect(component).toHaveLength(1)
  })
  test('correct message is displayed when the signal is low', () => {
    const component = mount(<SystemMessage signal={200} />)
    const errorMessage = component.find('p').at(0)
    expect(errorMessage.text()).toBe('Your BrainSensor doesn\'t have a good connection')
  })
})
