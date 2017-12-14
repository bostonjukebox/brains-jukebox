import React from 'react'
import { shallow, mount } from 'enzyme'
import Player from '../components/Player'

describe('Player rendering', () => {
  it('renders without crashing', () => {
    const component = shallow(<Player />)
    expect(component).toHaveLength(1)
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
