import React from 'react'
import Board from './board'
import { shallow, mount } from 'enzyme'

//shallow rendering is used for isolated unit tests
it('renders without crashing', () => {
    shallow(<Board />);
});

//mount for component integration
//not working
it('calls onClick event on click of a board square', () => {
    let wrapper = mount(<Board />);
    const markSquare = jest.fn();
    wrapper.find('button.square').first().simulate('click');
    expect(markSquare).toBeCalledWith(0)
})

it('renders game status correctly', () => {
    const wrapper = mount(<Board />);
    const firstPlayer = wrapper.find('div.status');
    // const test = wrapper.find('div.status').children().first();
    // console.log(firstPlayer);
    expect(firstPlayer).toHaveLength(1);
    // expect(test).toEqual('Next player: X')
})