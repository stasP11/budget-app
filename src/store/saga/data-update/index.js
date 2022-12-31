import { call, put, takeLatest } from "redux-saga/effects";
import { allUserData } from "../../../servises/axios/get-all-data";

// update existing data
// worker
function* updateUserData(action) {
  try {
    const userData = yield call(allUserData.updateUserData, {id: 'user1',  ...action.payload});
    yield put({ type: "USER_DATA_UPDATE", payload: userData });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// watcher
export function* watchUpdateUserData() {
  yield takeLatest("USER_DATA_UPDATE_REQUESTED", updateUserData);
}

//async action
export function asyncFetchUserDataAction(updatedUser) {
  console.log(updatedUser, 'dispatched data')
  return { type: "USER_DATA_UPDATE_REQUESTED", payload: updatedUser };
}


// add new category/item

function* addNewUserData(action) {
  console.log(action)
  try {
    const userData = yield call(allUserData.addNewData, {id: 'user1',  ...action.payload});
   yield put({ type: "USER_DATA_ADD", payload: userData });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// watcher
export function* watchAddNewUserData() {
  yield takeLatest("USER_DATA_ADD_REQUESTED", addNewUserData);
}

//async action
export function asyncAddNewDataAction(updatedUser) {
  console.log(updatedUser, 'dispatched data')
  return { type: "USER_DATA_ADD_REQUESTED", payload: updatedUser };
}
