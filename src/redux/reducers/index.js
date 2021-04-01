import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import loginReducer from './loginReducer'
export default combineReducers({
  videos: videosReducer,
  login: loginReducer
});
