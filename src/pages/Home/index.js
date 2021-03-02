import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import VideosContainer from "../../components/VideosContainer";
import { fetch_videos } from "../../redux/actions";

const Home = () => {
  const { pathname } = useLocation();
  const { videos, loading } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetch_videos("recommended"));
  }, [dispatch]);

  return (
    <section className="container">
      <VideosContainer
        titlePage="Recommended"
        videosData={videos}
        loading={loading}
      />
    </section>
  );
};

export default Home;
