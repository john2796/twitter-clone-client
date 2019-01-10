import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import footerReducer from "./footerReducer";
import commentBoxReducers from "./commentBoxReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  footer: footerReducer,
  comments: commentBoxReducers
});
