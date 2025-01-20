import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../types";

type InitialStateType = {
  boardId: string;
  listId: string;
  task: TaskType;
};
const initialState: InitialStateType = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task-0",
    taskDescription: "task-descript",
    taskOwner: "task-0",
  },
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});
export const modalReducer = modalSlice.reducer;
