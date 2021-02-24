import "./SearchPage.css";
import React from "react";
import { Link } from "react-router-dom";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  videoId,
}) => {
  return (
    <Link className="videoRow" to={`/video/${videoId}`}>
      <img src={image} alt={description} className="videoRow__imageVideo" />
      <div className="videoRow__text">
        <h3 className="videoRow__title">{description}</h3>
        <p className="videoRow__headline">
          {channel}{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </Link>
  );
};

export default VideoRow;
