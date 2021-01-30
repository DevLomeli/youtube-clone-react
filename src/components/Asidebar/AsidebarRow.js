import React from "react";

const AsidebarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`asidebarRow ${selected && "selected"}`}>
      <Icon className="asidebarRow__icon" />
      <h2 className="asidebarRow__title">{title}</h2>
    </div>
  );
};

export default AsidebarRow;
