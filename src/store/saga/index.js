import { all } from "redux-saga/effects";
import { watchFetchUserData } from "../saga/data-fetch/index";

export function* rootSaga() {
  yield all([watchFetchUserData()]);
}
