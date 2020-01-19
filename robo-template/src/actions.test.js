import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import configureMockStore from "redux-mock-store";
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([
    thunkMiddleware
]);


test('test setSearchfield actions' , () => {
    expect(actions.setSearchField('tmt')).toEqual({
        type : CHANGE_SEARCHFIELD,
        payload : 'tmt'
    })
})

test('test requestRobots actions' , () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

})