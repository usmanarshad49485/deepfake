import { combineReducers } from "redux";

import authReducer from "./auth";
import messageReducer from "./messages";

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
});

export default rootReducer;
