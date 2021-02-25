import "./videosContainer.css";
import React from "react";
import VideoItem from "./VideoItem";
import CircularProgress from "@material-ui/core/CircularProgress";
const VideosContainer = ({ titlePage, videosData }) => {
  const renderVideos = () => {
    if (videosData) {
      return videosData.map((item, index) => (
        <VideoItem
          key={index}
          title={item.title}
          views={item.views}
          timestamp={item.timestamp}
          channelImage={item.channelImage}
          channel={item.channel}
          image={item.image}
        />
      ));
    }
    return (
      <div className="videosContainer__spinnerWrapper">
        <CircularProgress />
      </div>
    );
  };

  return (
    <div className="videosContainer">
      <h2 className="videosContainer__title">{titlePage}</h2>
      <div className="videosContainer__videos">{renderVideos()}</div>
    </div>
  );
};

export default VideosContainer;
