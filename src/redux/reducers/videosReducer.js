import { videosTypes } from "../actions/types";

const INIT_STATE = {
  loading: false,
  videos: [],
  videoSelected: null,
};

const videosReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case videosTypes.LOADING:
      return { ...state, loading: true };

    case videosTypes.FETCH_VIDEO_SELECTED:
      return { ...state, videoSelected: payload, loading: false };
      
    case videosTypes.FETCH_VIDEOS:
      return { ...state, videos: payload.items, loading: false };

    default:
      return state;
  }
};

export default videosReducer;
