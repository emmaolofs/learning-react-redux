import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/*Determines if the action type ends in success by using sub string */
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    /*If the action type ends in success we will decrement the number of apiCallsInProgress.*/
    return state - 1;
  }
  return state;
}
