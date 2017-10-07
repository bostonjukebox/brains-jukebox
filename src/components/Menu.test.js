import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

test('renders without crashing', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
});

test('button opens modal', () => {
    const menu = shallow(<Menu />);
    menu.find(<Button></Button>).simulate('click');
    expect(menu.find(<Modal />).prop('handleModal')).toEqual(true);
})