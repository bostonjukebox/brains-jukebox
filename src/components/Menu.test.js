import React from 'react'
import { shallow, mount } from 'enzyme'
import Menu from './Menu'

test('renders without crashing', () => {
  const component = shallow(<Menu />)
  expect(component).toHaveLength(1)
})

test('if button opens modal suggestions', () => {
  const menu = mount(<Menu />)
  const button = menu.find('button').first()
  button.simulate('click')
  expect(menu.state().showModalSuggestion).toEqual(true)
})
