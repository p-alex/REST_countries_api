import { combineReducers } from "redux";
import data from "./data";
import search from "./search";
import filter from "./filter";
import borders from "./borders";
import theme from "./theme";
export default combineReducers({
  data,
  search,
  filter,
  borders,
  theme,
});
