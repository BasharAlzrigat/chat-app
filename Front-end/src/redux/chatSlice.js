import { createSlice } from "@reduxjs/toolkit";

const chatState = {
  username: "",
  room: "",
  currentMessage: "",
  messageList: [],
};

const initialState = chatState;

export const chatSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    changeUsername: (state, action) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    changeRoom: (state, action) => {
      return {
        ...state,
        room: action.payload,
      };
    },
    changeCurrentMessage: (state, action) => {
      return {
        ...state,
        currentMessage: action.payload,
      };
    },
    changeMessageList: (state, action) => {
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    },
  },
});

export const {
  changeUsername,
  changeRoom,
  changeCurrentMessage,
  changeMessageList,
} = chatSlice.actions;

export default chatSlice.reducer;
