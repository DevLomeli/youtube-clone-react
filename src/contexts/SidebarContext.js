import React, { useState } from "react";

export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handlerToggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  sidebarToggle && (document.querySelector("body").style.overflow = "hidden");
  !sidebarToggle && (document.querySelector("body").style.overflow = "unset");

  return (
    <SidebarContext.Provider value={{ sidebarToggle, handlerToggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
