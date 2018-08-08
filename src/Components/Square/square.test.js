import React from 'react'
import Square from './square'
import { shallow } from 'enzyme'

//shallow rendering is used for isolated unit tests
it('renders without crashing', () => {
    shallow(<Square />);
});