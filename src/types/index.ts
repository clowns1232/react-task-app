export interface TaskType {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}

export interface LogType {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}

export interface BoardType {
  boardId: string;
  boardName: string;
  list: BoardListType[];
}
export interface BoardListType {
  listId: string;
  listName: string;
  tasks: TaskType[];
}
