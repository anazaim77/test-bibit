import types from "../actions/types";

const initialState = {
  list: [],
  meta: {
    page: 1,
    total_page: 0,
    total_item: 0,
  },
  current: {},
  loading_refresh: false,
  loading_more: false,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.movie.LIST_RD:
      return { ...state, list: payload };
    case types.movie.LOAD_RD:
      const { refresh } = payload;
      return { ...state, loading_more: !refresh, loading_refresh: refresh };
    case types.movie.LOAD_DONE_RD:
      return { ...state, loading_more: false, loading_refresh: false };
    default:
      return state;
  }
};
