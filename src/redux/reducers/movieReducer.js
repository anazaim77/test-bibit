import types from "../actions/types";
import _ from "lodash";

const initialState = {
  list: [],
  meta: {
    page: 1,
    total_page: 1,
    total_item: 0,
  },
  current: {},
  loading_refresh: false,
  loading_more: false,
  query: "batman",
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.movie.LIST_RD:
      return { ...state, ...payload };
    case types.movie.DETAIL_RD:
      return { ...state, current: payload };
    case types.movie.LOAD_RD:
      const { refresh } = payload;
      return { ...state, loading_more: !refresh, loading_refresh: true };
    case types.movie.LOAD_DONE_RD:
      return { ...state, loading_more: false, loading_refresh: false };
    case types.movie.SET_QUERY_RD:
      return { ...state, query: _.isEmpty(payload) ? "batman" : payload };
    default:
      return state;
  }
};
