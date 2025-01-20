import { createSlice } from "@reduxjs/toolkit";
import { LogType } from "vite";
type initialStateType = {
  logArray: LogType[];
};
const initialState: initialStateType = {
  logArray: [],
};
const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {},
});

export const loggerReducer = loggerSlice.reducer;
