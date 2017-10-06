import React from 'react'
import renderer from 'react-test-renderer'
import Vinyl from './Vinyl'

test('renders without crashing', () => {
    const tree = renderer.create(
        <Vinyl/> ).toJSON();
    expect(tree).toMatchSnapshot();
}); 