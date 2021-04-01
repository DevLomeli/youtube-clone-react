import "./Header.css";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { ThemeContext } from "../../contexts/ThemeContext";

import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Avatar from '@material-ui/core/Avatar';


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
        <Link to="/login">
          <Avatar style={{ width: '50px' }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
