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
    const { refresh } = action.payload;
    const { list, meta } = yield select((state) => state.movieReducer);
    const currentPage = refresh ? 1 : meta.page + 1;
    yield put(set_loading_rd({ refresh }));
    let res = yield call(() =>
      axios.get("", { params: { page: currentPage, s: "batman" } })
    );
    if (res) {
      yield put(
        store_list_rd({
          list: refresh ? res.data.Search : [...list, ...res.data.Search],
          meta: {
            page: currentPage,
            total_page: Math.round(parseInt(res.data.totalResults) / 10),
            total_item: Math.round(res.data.totalResults),
          },
        })
      );
    }
    yield put(set_loading_done_rd());
  });

  yield takeLatest(types.movie.DETAIL_SG, function* (action) {
    const { params } = action.payload;
    yield put(set_loading_rd({ refresh: true }));
    let res = yield call(() => axios.get("", { params }));
    if (res) {
      yield put(store_detail_rd(res.data));
    }
    yield put(set_loading_done_rd());
  });
}
