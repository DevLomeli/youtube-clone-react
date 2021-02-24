import "./MenuLeft.css";
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";

import SidebarContext from "../../contexts/SidebarContext";

const MenuLeft = (props) => {
  const { setSidebarToggle } = useContext(SidebarContext);
  return (
    <div className="header__left">
      <MenuIcon onClick={() => setSidebarToggle((value) => !value)} />
      <Link to="/">
        <YouTubeIcon />
      </Link>
    </div>
  );
};

export default MenuLeft;
