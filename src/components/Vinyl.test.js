import React from 'react'
import renderer from 'react-test-renderer'
import Vinyl from './Vinyl'

test('renders well', () => {
    const tree = renderer.create(
        <Vinyl/> ).toJSON();
    expect(tree).toMatchSnapshot();
}); 