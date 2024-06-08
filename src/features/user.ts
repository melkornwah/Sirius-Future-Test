import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type UserState = {
  email?: string,
  password?: string,
  username?: string,
  name?: string,
};

const initialUser: UserState = {
  username: "michael",
  name: "Михаил",
};

const initialState: UserState = {
  email: "",
  password: "",
  username: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      const newState = {
        ...action.payload,
        ...initialUser,
      };

      state.email = newState.email;
      state.name = newState.name;
      state.password = newState.password;
      state.username = newState.username;
    },
    changeUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.password = initialState.password;
      state.username = initialState.username;
    },
  },
});

export const { login, changeUser, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.userReducer;

export default userSlice.reducer;
