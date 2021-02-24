import { sidebarActions } from "./types";

export const sidebarToggle = () => {
  return {
    type: sidebarActions.SIDEBAR_TOGGLE,
  };
};
