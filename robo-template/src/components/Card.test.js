import React from 'react';
import {shallow , mount , render} from 'enzyme';
import Card from './Card';

console.log(shallow(<Card/>));

it('expect to render card component' , () => {
    expect(shallow(<Card />)).toEqual(1);
});