import { all } from "redux-saga/effects";
import { watchFetchUserData } from "../saga/data-fetch/index";
import { watchUpdateUserData, watchAddNewUserData } from "../saga/data-update/index";

export function* rootSaga() {
  yield all([watchFetchUserData(), watchUpdateUserData(), watchAddNewUserData()]);
}
