import * as courseActions from './courseActions';
import * as types from './actionTypes';
import { courses } from '../../../tools/mockData';
import thunk from "redux-thunk";
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

// Test an async action
/*We begin by setting up configuration, Configure-mock-store expects us to pass in an array of middleware.
This configuration configures the redux-mock-store that we will use within our thunk.*/
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

//the describe block is not necessary, but groups the test together.
describe("Async Actions", () => {
    afterEach(() => {
        //fetch-mock is used to mock the fetch call that happens in our thunks
        fetchMock.restore();
    });

    describe("Load Courses Thunk", () => {
      it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
        fetchMock.mock("*", {
          body: courses,
          headers: { "content-type": "application/json" },
        });

        const expectedActions = [
          { type: types.BEGIN_API_CALL },
          { type: types.LOAD_COURSES_SUCCESS, courses },
        ];

        const store = mockStore({ courses: [] });
        return store.dispatch(courseActions.loadCourses()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
})

/*This test confirms when I call the createCourseSuccess action creator,
I get Expected object shape back. */
describe("createCourseSuccess", () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
        //arrange pattern. Meaning first we will arrange our test
        const course = courses[0];
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        };

        //act
        const action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
    })
})