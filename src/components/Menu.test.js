import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

test('renders without crashing', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
});
