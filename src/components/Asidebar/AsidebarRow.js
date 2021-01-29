import React from "react";

const AsidebarRow = ({ Icon, title }) => {
  return (
    <div className="asidebarRow">
      <Icon className="asidebarRow__icon" />
      <h2 className="asidebarRow__title">{title}</h2>
    </div>
  );
};

export default AsidebarRow;
