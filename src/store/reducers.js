import { combineReducers } from "redux";

function userDataReducer(state = {}, action) {
  switch (action.type) {
    case "USER_DATA_FETCH":
      return { ...action?.payload };
    default:
      return state;
  }
}

export default combineReducers({
  userData: userDataReducer,
});
