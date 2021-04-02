import "./Header.css";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { ThemeContext } from "../../contexts/ThemeContext";

import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Avatar from '@material-ui/core/Avatar';


import SearchBar from "../SearchBar/SearchBar";
import MenuLeft from "../MenuLeft/MenuLeft";

const Header = () => {
  const { user } = useSelector(state => state.login);
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
          <Avatar style={{ width: '50px', height: '50px' }} src={user ? user.photoURL ? user.photoURL : '' : ''} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
