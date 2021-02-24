import "./SearchPage.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined";
const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  verified,
  description,
}) => {
  return (
    <div className="searchpage__channelRow">
      <Avatar src={image} className="channelRow__avatarChannel" alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
