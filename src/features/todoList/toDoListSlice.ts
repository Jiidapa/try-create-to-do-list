import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface DataType {
  name: string;
  finish: boolean;
}

type ToDoListState = DataType[];

const initialState: ToDoListState = [];

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: any) => {
      console.log("action ", action);
      if (action.payload.name !== "") {
        state.push({ name: action.payload.name, finish: false });
      }
    },
    updateTask: (state, action: any) => {
      // change false to true
      state[action.payload.index].finish = !state[action.payload.index].finish;
    },
    removeTask: (state, action: any) => {
      state.splice(action.payload.index, 1);
    },
  },
});

export const { addToDo, updateTask, removeTask } = toDoListSlice.actions;
export const selectToDoList = (state: RootState) => state.toDoList;

export default toDoListSlice.reducer;
