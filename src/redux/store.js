import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburgerSlice.js";
import chatSlice from "./chatSlice.js";

const store = configureStore({
  reducer: {
    // all actions
    hamburger: hamburgerReducer,
    chat: chatSlice,
  },
});
export default store;
