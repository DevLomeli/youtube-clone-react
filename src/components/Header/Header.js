import "./Header.css";
import React from "react";

import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import Avatar from "../Avatar";
import SearchBar from "../SearchBar/SearchBar";
import MenuLeft from "../MenuLeft/MenuLeft";

const Header = () => {
  return (
    <header className="header">
      <MenuLeft />

      <SearchBar />

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
