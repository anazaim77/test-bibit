import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import types from "../actions/types";

export function* movieSaga() {
  yield takeLatest(types.movie.LIST_SG, function* (action) {
    // const { refresh, params, onSuccess } = action.payload;
    const { list, meta } = yield select((state) => state.movieReducer);

    let res = yield call(() =>
      axios.get("", { params: { page: 1, s: "batman" } })
    );
    if (res) {
      console.log("asdasd", res, list, meta);
    }
  });
}
