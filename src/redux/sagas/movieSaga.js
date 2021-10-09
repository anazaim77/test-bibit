import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  set_loading_done_rd,
  set_loading_rd,
  store_detail_rd,
  store_list_rd,
} from "../actions/movieAction";
import types from "../actions/types";

export function* movieSaga() {
  yield takeLatest(types.movie.LIST_SG, function* (action) {
    const { refresh, params, onSuccess } = action.payload;
    const { list, meta } = yield select((state) => state.movieReducer);
    yield put(set_loading_rd(refresh));
    let res = yield call(() =>
      axios.get("", { params: { page: 1, s: "batman" } })
    );
    if (res) {
      yield put(
        store_list_rd(refresh ? res.data.Search : [...list, ...res.data.Search])
      );
    }
    yield put(set_loading_done_rd());
  });
  yield takeLatest(types.movie.DETAIL_SG, function* (action) {
    const { refresh, params, onSuccess } = action.payload;
    const { list, meta } = yield select((state) => state.movieReducer);
    yield put(set_loading_rd(true));
    let res = yield call(() => axios.get("", { params }));
    if (res) {
      // console.log(`data`, res.data);
      yield put(store_detail_rd(res.data));
    }
    yield put(set_loading_done_rd());
  });
}
