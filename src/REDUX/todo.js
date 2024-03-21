import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../REDUX/Slices/todoSlice'


const todo = configureStore ({
  reducer: {
    todos: todoReducer,
  }
});
export default todo