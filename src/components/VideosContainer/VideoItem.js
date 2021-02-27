import "./videosContainer.css";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const VideoItem = ({ videoData }) => {
  const image = videoData.snippet.thumbnails.default.url;
  const channel = videoData.snippet.channelTitle;
  const title = videoData.snippet.title;
  const timestamp = videoData.snippet.publishedAt;

  const handlerLinkTo = () => {
    if (videoData.id.videoId) {
      const { videoId } = videoData.id;
      return `/video/${videoId}`;
    }
    const videoId = videoData.id;
    return `/video/${videoId}`;
  };

  return (
    <Link className="videoItem" to={handlerLinkTo}>
      <img src={image} alt="" className="videoItem__thumbnail" />
      <div className="videoItem__info">
        <Avatar className="videoItem__avatar" alt={channel} />
        <div className="videoItem__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>'2M' {timestamp}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
