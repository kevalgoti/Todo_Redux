// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import selectTodo from "./features/todoSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        todo: selectTodo,
    },
});

export default store;
