import "./Asidebar.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AsidebarRow from "./AsidebarRow";

const Asidebar = () => {
  return (
    <div className="asidebar">
      <AsidebarRow selected title="Home" Icon={HomeIcon} />
      <AsidebarRow title="Trending" Icon={WhatshotIcon} />
      <AsidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <AsidebarRow Icon={VideoLibraryIcon} title="Library" />
      <AsidebarRow Icon={HistoryIcon} title="History" />
      <AsidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <AsidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <AsidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <AsidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
    </div>
  );
};

export default Asidebar;
