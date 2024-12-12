import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("user")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem("user");
    },
    setUser: (state) => {
      const storedUser = sessionStorage.getItem("user");
      state.user = storedUser ? JSON.parse(storedUser) : null;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
