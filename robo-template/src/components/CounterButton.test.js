import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from './CounterButton';
require('../setup');

const mockColor = "red";
const wrapper = shallow(<CounterButton color={mockColor} />);

it('expect to render CounterButton component' , () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('test counter increasing correctly ' , () => {
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({counter : 2});
    expect(wrapper.props().color).toEqual(mockColor);
});


