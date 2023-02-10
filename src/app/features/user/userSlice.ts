import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";


export interface UserState {
  firstName: string;
    lastName: string;
    email: string;
}

const initialState: UserState = {
    firstName: "",
    lastName: "",
    email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
    },
    logout: (state) => {
        state.firstName = "";
        state.lastName = "";
        state.email = "";
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
