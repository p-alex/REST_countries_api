import { combineReducers } from "redux";
import data from "./data";
import search from "./search";
import filter from "./filter";
export default combineReducers({
  data,
  search,
  filter,
});
