import "./videosContainer.css";
import React from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const VideosContainer = ({ titlePage, videosData }) => {
  const { loading } = useSelector((state) => state.videos);

  console.log(loading);
  const renderVideos = () => {
    if (loading) {
      return (
        <div className="videosContainer__spinnerWrapper">
          <CircularProgress />
        </div>
      );
    }
    return videosData.map((item, index) => {
      return <VideoItem key={index} videoData={item} />;
    });
  };

  return (
    <div className="videosContainer">
      {!titlePage ? (
        ""
      ) : (
        <h2 className="videosContainer__title">{titlePage}</h2>
      )}
      <div className="videosContainer__videos">{renderVideos()}</div>
    </div>
  );
};

export default VideosContainer;
