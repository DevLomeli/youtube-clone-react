import { videosTypes } from "../actions/types";

const INIT_STATE = {
  loading: false,
  videos: [],
  videoSelected: null,
  prevPageToken: "",
  nextPageToken: "",
  termToSearch: "",
};

const videosReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case videosTypes.LOADING:
      return { ...state, loading: true };

    case videosTypes.FETCH_VIDEO_SELECTED:
      return { ...state, videoSelected: payload, loading: false };

    case videosTypes.FETCH_VIDEOS:
      return {
        ...state,
        loading: false,
        videos: payload.data.items,
        nextPageToken: payload.data.nextPageToken,
        termToSearch: payload.term,
      };

    case videosTypes.FETCH_MORE_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...payload.data.items],
        nextPageToken: payload.data.nextPageToken,
        prevPageToken: payload.data.prevPageToken,
      };
    default:
      return state;
  }
};

export default videosReducer;
