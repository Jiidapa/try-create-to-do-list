import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoListReducer from "../features/todoList/toDoListSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDoList: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
