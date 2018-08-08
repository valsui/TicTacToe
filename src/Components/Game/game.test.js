import React from 'react'
import Game from './game'
import { shallow } from 'enzyme'

//shallow rendering is used for isolated unit tests
it('renders without crashing', () => {
    shallow(<Game />);
});