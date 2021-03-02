import { videosTypes } from "./types";
import youtubeAPI from "../../apis/youtubeAPI";

export const setLoading = () => {
  return { type: videosTypes.LOADING };
};

export const fetch_videos = (term) => async (dispatch) => {
  dispatch(setLoading());
  const { data } = await youtubeAPI.get("/search", {
    params: {
      q: term,
      part: "snippet",
      maxResults: 5,
      type: "video",
    },
  });
  dispatch({
    type: videosTypes.FETCH_VIDEOS,
    payload: { data, term },
  });
};

export const fetch_video = (id) => async (dispatch) => {
  dispatch({ type: videosTypes.LOADING });
  const { data } = await youtubeAPI.get("/videos", {
    params: {
      part: "snippet",
      id,
    },
  });
  const { categoryId } = data.items[0].snippet;
  dispatch({
    type: videosTypes.FETCH_VIDEO_SELECTED,
    payload: data.items[0],
  });

  dispatch(fetch_videos_by_categoryId(categoryId));
};

export const fetch_videos_by_categoryId = (videoCategoryId) => async (
  dispatch
) => {
  dispatch({ type: videosTypes.LOADING });
  const { data } = await youtubeAPI.get("/videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      videoCategoryId,
    },
  });

  dispatch({
    type: videosTypes.FETCH_VIDEOS,
    payload: { data },
  });
};

export const fetchNextVideosPage = () => async (dispatch, getState) => {
  const {
    videos: { termToSearch, nextPageToken },
  } = await getState();

  const { data } = await youtubeAPI.get("/search", {
    params: {
      part: "snippet",
      q: termToSearch,
      maxResults: 5,
      pageToken: nextPageToken,
      type: "video",
    },
  });
  dispatch({
    type: videosTypes.FETCH_MORE_VIDEOS,
    payload: { data },
  });
};
