import types from "./types";

export const fetch_list_sg = (payload) => {
  console.log(`payload`, payload);
  return {
    type: types.movie.LIST_SG,
    payload,
  };
};

export const store_list_sg = (payload) => ({
  type: types.movie.LIST_RD,
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
