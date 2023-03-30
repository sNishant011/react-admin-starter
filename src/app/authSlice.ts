import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

// dummy auth mechanism
const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsAuthenticated(state, action: { type: string; payload: boolean }) {
      localStorage.setItem("isLoggedIn", action.payload.toString());
      state.isAuthenticated = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { setIsAuthenticated, logout } = authSlice.actions;
export default authSlice;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthState = (state: RootState) => state.auth;
