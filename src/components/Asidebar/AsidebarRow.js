import React from "react";
import { NavLink } from "react-router-dom";
const AsidebarRow = ({ Icon, title, path }) => {
  return (
    <NavLink
      to={path}
      className="asidebarRow"
      exact
      activeClassName="asidebarRow--selected"
    >
      <Icon className="asidebarRow__icon" />
      <h2 className="asidebarRow__title">{title}</h2>
    </NavLink>
  );
};

export default AsidebarRow;
