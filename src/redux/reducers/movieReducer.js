import types from "../actions/types";

const initialState = {
  list: [],
  meta: {
    page: 1,
    total_page: 0,
    total_item: 0,
  },
  current: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movie.LIST_RD:
      return { ...state };
    default:
      return state;
  }
};
