import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./messages";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  ui: uiReducer,
});

export default rootReducer;
