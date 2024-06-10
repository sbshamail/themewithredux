import { combineReducers } from "@reduxjs/toolkit";

import themeReducer  from "./slices/themeChangeSlice/themeChangeSlice";

const rootReducer = combineReducers({
  themes: themeReducer,
});

export default rootReducer;
