import { createSlice } from "@reduxjs/toolkit";

// type initialStateType = {
//   modalActive: boolean;
//   boardArray: Array<>;
// };

const initialState = {
  modalActive: false,
  boardArray: [],
};
const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
