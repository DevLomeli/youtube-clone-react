import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { SidebarContext } from "../../contexts/SidebarContext";
import { ThemeContext } from '../../contexts/ThemeContext'
const AsidebarRow = ({ Icon, title, path }) => {
  const { handlerToggleSidebar } = useContext(SidebarContext);
  const { color } = useContext(ThemeContext)

  const handlerOnClick = () => {
    setTimeout(() => {
      handlerToggleSidebar();
    }, 250);
  };

  if (title === "Profile") {
    return (
      <NavLink
        to={path}
        className="asidebarRow asidebarRow__profile"
        exact
        activeClassName="asidebarRow--selected"
        onClick={handlerOnClick}
        style={{ color }}
      >
        <Icon className="asidebarRow__icon" />
        <h2 className="asidebarRow__title">{title}</h2>
      </NavLink>
    )
  }
  return (
    <NavLink
      to={path}
      className="asidebarRow"
      exact
      activeClassName="asidebarRow--selected"
      onClick={handlerOnClick}
      style={{ color }}
    >
      <Icon className="asidebarRow__icon" />
      <h2 className="asidebarRow__title">{title}</h2>
    </NavLink>
  );
};

export default AsidebarRow;
