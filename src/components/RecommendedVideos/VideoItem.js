import "./RecommendedVideos.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";

const VideoItem = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoItem">
      <img src={image} alt="" className="videoItem__thumbnail" />
      <div className="videoItem__info">
        <Avatar
          className="videoItem__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoItem__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
