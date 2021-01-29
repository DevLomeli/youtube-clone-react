import "./Asidebar.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import AsidebarRow from "./AsidebarRow";

const Asidebar = () => {
  return (
    <div className="asidebar">
      <AsidebarRow title="Home" Icon={HomeIcon} />
      <AsidebarRow title="Trending" Icon={WhatshotIcon} />
      <AsidebarRow title="Subscription" Icon={SubscriptionsIcon} />
    </div>
  );
};

export default Asidebar;
