import "./Asidebar.css";
import React, { useContext } from "react";

import Moon from "@material-ui/icons/Brightness2Rounded";
import Sun from "@material-ui/icons/WbSunnyRounded";

import { SidebarContext } from "../../contexts/SidebarContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import { firstPartData, secondPartData } from "./AsidebarData";

import AsidebarRow from "./AsidebarRow";

import MenuLeft from "../MenuLeft/MenuLeft";

const Asidebar = () => {
  const { sidebarToggle } = useContext(SidebarContext);
  const { toggleTheme, theme, bgColor, color } = useContext(ThemeContext);

  const renderThemeIcon = () => {
    if (theme === "light") {
      return <Moon onClick={toggleTheme} style={{ fill: color }} />;
    } else {
      return <Sun onClick={toggleTheme} style={{ fill: color }} />;
    }
  };

  return (
    <div
      className={`asidebar ${sidebarToggle && "asidebar__active"}`}
      style={{ background: bgColor }}
    >
      <div className="asidebar__header">
        <MenuLeft themeOption />
        <div className="asidebar__themeWrapper">{renderThemeIcon()}</div>
      </div>

      {firstPartData.map((item) => (
        <AsidebarRow
          key={item.title}
          title={item.title}
          Icon={item.icon}
          path={item.path}
        />
      ))}
      <hr />
      {secondPartData.map((item) => (
        <AsidebarRow
          key={item.title}
          title={item.title}
          Icon={item.icon}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Asidebar;
