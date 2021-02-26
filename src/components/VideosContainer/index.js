import "./videosContainer.css";
import React from "react";
import VideoItem from "./VideoItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const VideosContainer = ({ titlePage, videosData, loading }) => {
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
