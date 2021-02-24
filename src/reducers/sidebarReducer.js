import { sidebarActions } from "../actions/types";
const INIT_STATE = {
  actived: true,
};
const sidebarReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case sidebarActions.SIDEBAR_TOGGLE:
      return { actived: !state.actived };
    default:
      return state;
  }
};

export default sidebarReducer;
