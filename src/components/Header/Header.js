import "./Header.css";
import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import Avatar from "../Avatar";
import SearchBar from "../SearchBar/SearchBar";
import MenuLeft from "../MenuLeft/MenuLeft";

const Header = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <header className="header" style={{ background: bgColor }}>
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
