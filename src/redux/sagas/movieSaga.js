import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { set_loading_done_rd, set_loading_rd } from "../actions/movieAction";
import types from "../actions/types";

export function* movieSaga() {
  yield takeLatest(types.movie.LIST_SG, function* (action) {
    // const { refresh, params, onSuccess } = action.payload;
    const { list, meta } = yield select((state) => state.movieReducer);
    yield put(set_loading_rd(true));
    let res = yield call(() =>
      axios.get("", { params: { page: 1, s: "batman" } })
    );
    if (res) {
      console.log("asdasd", res, list, meta, action);
    }
    yield put(set_loading_done_rd());
  });
}
