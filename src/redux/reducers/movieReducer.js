import types from "../actions/types";

const initialState = {
  list: [],
  meta: {},
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
