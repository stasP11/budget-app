import { all } from "redux-saga/effects";
import { watchFetchUserData } from "../saga/data-fetch/index";
<<<<<<< HEAD
import { watchUpdateUserData, watchAddNewUserData } from "../saga/data-update/index";

export function* rootSaga() {
  yield all([watchFetchUserData(), watchUpdateUserData(), watchAddNewUserData()]);
=======

export function* rootSaga() {
  yield all([watchFetchUserData()]);
>>>>>>> master
}
