import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import serviceReducer from "../features/services/serviceSlice";
import todoReducer from "../features/todos/todoSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    services: serviceReducer,
    todos: todoReducer,
  },
});
