import types from "./types";

export const fetch_list_sg = (payload) => ({
  type: types.movie.LIST_SG,
  payload,
});
