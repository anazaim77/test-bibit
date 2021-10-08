import { call, put, takeLatest } from "redux-saga/effects";
import types from "../actions/types";

const BASE_URL_LIST = "https://nextar.flip.id/frontend-test";

export function* movieSaga() {
  yield takeLatest(types.movie.LIST_SG, function* (action) {
    console.log("asdasd");
  });
}
