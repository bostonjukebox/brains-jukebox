import React from 'react'

import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import MainTitle from './MainTitle'

describe('MainTitle', () => {
  test('renders without crashing', () => {
    const component = shallow(<MainTitle />)
    expect(component).toMatchSnapshot()
  })

  test('if there is a title', () => {
    const component = mount(<MainTitle />)
    const title = component.find('h1')
    expect(title.isEmpty()).toEqual(false)
  })

  test('if there is a subtitle', () => {
    const component = mount(<MainTitle />)
    const subtitle = component.find('h2')
    expect(subtitle.isEmpty()).toEqual(false)
  })
})

