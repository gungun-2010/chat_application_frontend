import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Make sure this points exactly to this file!
import chatReducer from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});

export default store;
