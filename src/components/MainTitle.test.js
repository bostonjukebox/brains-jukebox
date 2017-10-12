import React from 'react'
import renderer from 'react-test-renderer'


import { shallow } from 'enzyme'
import 'jest-styled-components'

import MainTitle, { Title } from './MainTitle'

test('renders without crashing', () => {
  const component = shallow(<MainTitle />)
  expect(component).toMatchSnapshot()
})

test('test if text is correct', () => {
  const title = renderer.create(<Title />)
  expect(title).text().toEqual('Boston Touch Jukebox')
})
