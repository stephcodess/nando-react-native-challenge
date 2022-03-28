import React from 'react';
import renderer from 'react-test-renderer';

import RestaurantsItem from '../RestaurantsItem';

jest.useFakeTimers()

describe('<RestaurantsItem />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<RestaurantsItem />).toJSON();
        expect(tree.children.length).toBe(1);
    });
});