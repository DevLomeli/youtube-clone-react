import "./Asidebar.css";
import React, { useContext } from "react";

import SidebarContext from "../../contexts/SidebarContext";

import { firstPartData, secondPartData } from "./AsidebarData";

import AsidebarRow from "./AsidebarRow";

import MenuLeft from "../MenuLeft/MenuLeft";

const Asidebar = () => {
  const { sidebarToggle } = useContext(SidebarContext);

  return (
    <div className={`asidebar ${sidebarToggle && "asidebar__active"}`}>
      <MenuLeft />

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
