import { createSlice } from "@reduxjs/toolkit";
import { BoardType } from "../../types";

type initialStateType = {
  modalActive: boolean;
  boardArray: BoardType[];
};

const initialState: initialStateType = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      list: [
        {
          listId: "list-0",
          listName: "list-0",
          tasks: [
            {
              taskId: "task-0",
              taskName: "task-0",
              taskDescription: "Descript",
              taskOwner: "hwang",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "list-1",
          tasks: [
            {
              taskId: "task-1",
              taskName: "task-1",
              taskDescription: "Descript",
              taskOwner: "hwang",
            },
          ],
        },
        {
          listId: "list-2",
          listName: "list-2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "task-2",
              taskDescription: "Descript",
              taskOwner: "hwang",
            },
          ],
        },
        {
          listId: "list-3",
          listName: "list-3",
          tasks: [
            {
              taskId: "task-3",
              taskName: "task-3",
              taskDescription: "Descript",
              taskOwner: "hwang",
            },
          ],
        },
      ],
    },
  ],
};
const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
