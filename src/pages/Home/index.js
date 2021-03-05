import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideosContainer from "../../components/VideosContainer";
import { fetch_videos } from "../../redux/actions";

const Home = () => {
  const { videos, loading } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_videos("recommended"));
  }, [dispatch]);

  return (
    <section className="container mt-6">
      <VideosContainer
        titlePage="Recommended"
        videosData={videos}
        loading={loading}
      />
    </section>
  );
};

export default Home;
