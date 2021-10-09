import types from "./types";

export const fetch_list_sg = (payload) => {
  // console.log(`payload`, payload);
  return {
    type: types.movie.LIST_SG,
    payload,
  };
};
export const fetch_detail_sg = (payload) => ({
  type: types.movie.DETAIL_SG,
  payload,
});

export const store_list_rd = (payload) => ({
  type: types.movie.LIST_RD,
  payload,
});
export const store_detail_rd = (payload) => ({
  type: types.movie.DETAIL_RD,
  payload,
});

export const set_loading_rd = (payload) => ({
  type: types.movie.LOAD_RD,
  payload,
});

export const set_loading_done_rd = (payload) => ({
  type: types.movie.LOAD_DONE_RD,
  payload,
});
export const set_query_rd = (payload) => ({
  type: types.movie.SET_QUERY_RD,
  payload,
});
