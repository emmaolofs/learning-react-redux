import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;

/*When you create e new reducer, you need to reference it here in your root reducer. */