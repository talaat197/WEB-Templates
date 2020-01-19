import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';
require('../setup');


it('expect to render CardList component' , () => {
    const mockRobots = [
        {
            id : 1,
            name : 'tmt',
            username : 'tmt tmt',
            email : "tmt@tmt-sys.com"
        }
    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});

