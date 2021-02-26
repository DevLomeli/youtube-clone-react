import { videosTypes } from "./types";
import youtubeAPI from "../../apis/youtubeAPI";

export const setLoading = () => {
  console.log("setLoading");
  return {
    type: videosTypes.LOADING,
  };
};

export const fetch_videos = (term) => async (dispatch) => {
  dispatch({ type: videosTypes.LOADING });
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
