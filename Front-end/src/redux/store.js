import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import joinFormReducer from "./joinFormSlice";

export default configureStore({
  reducer: {
    chat: chatReducer,
    joinForm: joinFormReducer,
  },
});
