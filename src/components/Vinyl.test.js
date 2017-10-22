import React from 'react'
import { shallow, mount } from 'enzyme'
import styled, { keyframes } from 'styled-components'
import 'jest-styled-components'

import Vinyl from './Vinyl'

const spin = keyframes`
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
`

const Icon = styled.img`
  width: 100px;
  height: 100px;
`

const IconAnimated = Icon.extend`
  animation: ${spin} 4s linear infinite;
`

test('renders without crashing', () => {
  const component = shallow(<Vinyl />)
  expect(component).toMatchSnapshot()
})

test('amimation is running when song is played', () => {
  const component = mount(<Vinyl playing />)
  const animation = component.find(<IconAnimated />)
  console.log(animation)
})
