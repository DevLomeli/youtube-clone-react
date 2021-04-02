import "./videosContainer.css";
import React, { useEffect, useRef, useCallback } from "react";

import { useDispatch } from "react-redux";
import { fetchNextVideosPage } from "../../redux/actions";

import VideoItem from "./VideoItem";

import CircularProgress from "@material-ui/core/CircularProgress";

const VideosContainer = ({ titlePage, videosData, loading, column }) => {
  const loader = useRef(null);
  const dispatch = useDispatch();

  const handleObserver = useCallback(entities => {
    const target = entities[0];
    if (target.isIntersecting) {
      dispatch(fetchNextVideosPage());
    }
  }, [dispatch]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "50px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);



  const renderVideos = () => {
    if (loading || !videosData) {
      return (
        <div className="videosContainer__spinnerWrapper">
          <CircularProgress />
        </div>
      );
    } else {
      return videosData.map((item, index) => {
        return <VideoItem key={index} videoData={item} />;
      });
    }
  };

  return (
    <div className="videosContainer ">
      {!titlePage ? (
        ""
      ) : (
        <h2 className="videosContainer__title">{titlePage}</h2>
      )}
      <div className="videosContainer__videos">
        {renderVideos()}
        <div ref={loader}>
          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default VideosContainer;
