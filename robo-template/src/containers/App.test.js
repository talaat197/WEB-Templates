import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App';
require('../setup');
let wrapper;
beforeEach( () => {
    const mockProps = {
        onRequestRobots : jest.fn(),
        robots: [],
        searchField : "",
        isPending : false
    }
    wrapper = shallow(<App {...mockProps} />);
});

it('renders main page without crashes' , () => {
    expect(wrapper).toMatchSnapshot();
})




