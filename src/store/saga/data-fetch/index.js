import { call, put, takeLatest } from "redux-saga/effects";
import getAllData from "../../../servises/axios/get-all-data";

// worker
function* fetchUserData(action) {
  try {
    const userData = yield call(getAllData, action.payload);
    yield put({ type: "USER_DATA_FETCH", payload: userData });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// watcher
export function* watchFetchUserData() {
  yield takeLatest("USER_DATA_FETCH_REQUESTED", fetchUserData);
}

//async action
export function asyncFetchUserDataAction() {
  return { type: "USER_DATA_FETCH_REQUESTED" };
}
