import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };
  test("should return init state", () => {
    expect(reducers.searchRobots()).toEqual(initialStateSearch);
  });

  test("should handle state CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "tmt"
      })
    ).toEqual({ searchField: "tmt" });
  });
});

describe("requestsRobot reducer", () => {
  const initState = {
    robots: [],
    isPending: false
  };

  test("should return init state", () => {
    expect(reducers.requestRobots()).toEqual(initState);
  });

  test("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(reducers.requestRobots(initState , {
        type : REQUEST_ROBOTS_PENDING,
    })).toEqual({
        robots: [],
        isPending: true
      });
  });

  test("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(reducers.requestRobots(initState , {
        type : REQUEST_ROBOTS_SUCCESS,
        payload : [{name : 'tmt' , 'address' : '6th oct'}]
    })).toEqual({
        robots: [{name : 'tmt' , 'address' : '6th oct'}],
        isPending: false
      });
  });

});
