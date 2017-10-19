import React from 'react'
import { shallow } from 'enzyme'
import Player from './Player'

describe('Player', () => {
  it('renders without crashing', () => {
    const component = shallow(<Player />)
    expect(component).toMatchSnapshot()
  })
  it('Song data is loaded', () => {
    const component = shallow(<Player />)
    expect(component.state().numberOfSongs).toBeGreaterThan(0)
  })
})
