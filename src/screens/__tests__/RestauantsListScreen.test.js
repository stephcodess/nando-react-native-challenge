import React from 'react';
import renderer from 'react-test-renderer';

import RestauantsListScreen from '../RestauantsListScreen';

jest.useFakeTimers()

describe('<RestauantsListScreen />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<RestauantsListScreen />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});