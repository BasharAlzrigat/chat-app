import { createSlice } from "@reduxjs/toolkit";
import {
  HandlechangeCurrentMessage,
  HandlechangeMessageList,
} from "./actionsHandlers";

const chatState = {
  currentMessage: "",
  messageList: [],
};

const initialState = chatState;

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeCurrentMessage: (state, action) =>
      HandlechangeCurrentMessage(state, action),
    changeMessageList: (state, action) =>
      HandlechangeMessageList(state, action),
  },
});

export const {
  changeCurrentMessage,
  changeMessageList,
} = chatSlice.actions;

export default chatSlice.reducer;
