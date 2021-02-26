import { videosTypes } from "./types";
import youtubeAPI from "../../apis/youtubeAPI";

export const setLoading = () => {
  return { type: videosTypes.LOADING };
};

export const fetch_videos = (term) => async (dispatch) => {
  dispatch(setLoading());
  const { data } = await youtubeAPI("/search", {
    params: {
      q: term,
      part: "snippet",
      maxResults: 20,
      type: "video",
    },
  });
  dispatch({
    type: videosTypes.FETCH_VIDEOS,
    payload: data,
  });
};

export const fetch_video = (id) => async (dispatch) => {
  dispatch({ type: videosTypes.LOADING });
  const { data } = await youtubeAPI("/videos", {
    params: {
      part: "snippet",
      id,
    },
  });
  const { categoryId } = data.items[0].snippet;

  dispatch(fetch_videos_by_categoryId(categoryId));

  dispatch({
    type: videosTypes.FETCH_VIDEO_SELECTED,
    payload: data.items[0],
  });
};

export const fetch_videos_by_categoryId = (videoCategoryId) => async (
  dispatch
) => {
  dispatch({ type: videosTypes.LOADING });
  const { data } = await youtubeAPI("/videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      videoCategoryId,
    },
  });

  dispatch({
    type: videosTypes.FETCH_VIDEOS,
    payload: data,
  });
};
