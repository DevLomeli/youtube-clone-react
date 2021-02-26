import { videosTypes } from "../actions/types";

const INIT_STATE = {
  loading: false,
  videos: [],
};

const videosReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case videosTypes.LOADING:
      return { ...state, loading: true };
    case videosTypes.FETCH_VIDEOS:
      return { videos: payload.items, loading: false };
    default:
      return state;
  }
};

export default videosReducer;
