import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_videos } from "../../redux/actions";
import VideosContainer from "../../components/VideosContainer";

import CircularProgress from "@material-ui/core/CircularProgress";

const Trending = () => {
  const { loading, videos } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_videos("trending"));
  }, [dispatch]);

  return (
    <section className="section container">
      {loading
        ? <CircularProgress size="6rem" />
        : <VideosContainer
          titlePage="Trending"
          loading={loading}
          videosData={videos}
        />}

    </section>
  );
};

export default Trending;
