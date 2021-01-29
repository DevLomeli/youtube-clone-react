import "./Header.css";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import Avatar from "../Avatar";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header>
      <div className="header__left">
        <MenuIcon />
        <YouTubeIcon />
      </div>

      <SearchBar className="header__searchBar" />

      <div className="header__iconsWrapper">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
