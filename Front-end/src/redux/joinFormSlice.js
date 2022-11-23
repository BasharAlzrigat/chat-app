import { createSlice } from "@reduxjs/toolkit";
import { HandlechangeUsername, HandlechangeRoom } from "./actionsHandlers";

const joinFormState = {
  username: "",
  room: "",
};

const initialState = joinFormState;

export const joinFormSlice = createSlice({
  name: "joinForm",
  initialState,
  reducers: {
    changeUsername: (state, action) => HandlechangeUsername(state, action),
    changeRoom: (state, action) => HandlechangeRoom(state, action),
  },
});

export const {
  changeUsername,
  changeRoom,
} = joinFormSlice.actions;

export default joinFormSlice.reducer;
