/*This is an integration test, where we are going to test the integration of our action creators,
our store, and our reducer. */

import { createStore } from "redux";
import rootReducer from "./reducers/index";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("Should handle creating courses", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
