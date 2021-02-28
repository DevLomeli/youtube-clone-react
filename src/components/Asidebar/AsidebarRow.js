import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { SidebarContext } from "../../contexts/SidebarContext";
const AsidebarRow = ({ Icon, title, path }) => {
  const { handlerToggleSidebar } = useContext(SidebarContext);

  const handlerOnClick = () => {
    setTimeout(() => {
      handlerToggleSidebar();
    }, 250);
  };
  return (
    <NavLink
      to={path}
      className="asidebarRow"
      exact
      activeClassName="asidebarRow--selected"
      onClick={handlerOnClick}
    >
      <Icon className="asidebarRow__icon" />
      <h2 className="asidebarRow__title">{title}</h2>
    </NavLink>
  );
};

export default AsidebarRow;
