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
  it('renders <SongImage /> when a song is playing', () => {
    const component = shallow(<Player />)
    component.setState({ index: 1 })
    expect(component.find('SongImage')).toHaveLength(1)
  })
  it('renders <SongInfo /> when a song is playing', () => {
    const component = shallow(<Player />)
    component.setState({ index: 1 })
    expect(component.find('SongInfo')).toHaveLength(1)
  })
})
