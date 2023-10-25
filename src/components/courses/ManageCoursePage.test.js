import React from "react";
import { ManageCoursePage } from "./ManageCoursePage";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    /*Passed from React Router in real app. */
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  /*Calling mount will render our component and it's children in memory.*/
  return mount(<ManageCoursePage {...props} />);
}

/*The component is rendered, find the form and then simulate a form submit using enzymes simulate.
Simulate allows you to simulate user interactions like clicks and hovers. */
it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
