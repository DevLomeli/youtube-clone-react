import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_videos } from "../../redux/actions";
import VideosContainer from "../../components/VideosContainer";

const Trending = () => {
  const { loading, videos } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_videos("trending"));
  }, [dispatch]);

  return (
    <section className="container">
      <VideosContainer
        titlePage="Trending"
        loading={loading}
        videosData={videos}
      />
    </section>
  );
};

export default Trending;
