import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userInfoSlice";

const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    todoState: todoSlice.reducer,
    userState: userSlice.reducer,
  },
});

export default store;
