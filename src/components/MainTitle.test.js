import React from 'react'
import { shallow } from 'enzyme'
import MainTitle from './MainTitle'

test('renders without crashing', () => {
    const component = shallow(<MainTitle />);
    expect(component).toMatchSnapshot();
});