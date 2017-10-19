import React from 'react'
import { shallow, mount } from 'enzyme'
import Menu from './Menu'

test('renders without crashing', () => {
  const component = shallow(<Menu />)
  expect(component).toHaveLength(1)
})

test('if modalSuggestions opens with button click', () => {
  const menu = mount(<Menu />)
  const button = menu.find('button').at(0)
  button.simulate('click')
  expect(menu.state().showModalSuggestion).toEqual(true)
})

test('if modalWorks opens with button click', () => {
  const menu = mount(<Menu />)
  const button = menu.find('button').at(1)
  button.simulate('click')
  expect(menu.state().showModalWorks).toEqual(true)
})

test('if modalCredits opens with button click', () => {
  const menu = mount(<Menu />)
  const button = menu.find('button').at(2)
  button.simulate('click')
  expect(menu.state().showModalCredits).toEqual(true)
})
