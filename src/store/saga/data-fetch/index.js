import { call, put, takeLatest } from "redux-saga/effects";
<<<<<<< HEAD
import { allUserData, getAllData } from "../../../servises/axios/get-all-data";

// worker
//allUserData.getUserData(payload) 
function* fetchUserData(action) {
  try {
    const userData = yield call(allUserData.getUserData, action.payload);
=======
import getAllData from "../../../servises/axios/get-all-data";

// worker
function* fetchUserData(action) {
  try {
    const userData = yield call(getAllData, action.payload);
>>>>>>> master
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
<<<<<<< HEAD
export function asyncFetchUserDataAction(userId) {
  return { type: "USER_DATA_FETCH_REQUESTED", payload: userId };
=======
export function asyncFetchUserDataAction() {
  return { type: "USER_DATA_FETCH_REQUESTED" };
>>>>>>> master
}
