import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";


export interface UserState {
  firstName: string;
    lastName: string;
    email: string;
    questions : any;
    score : number;
}

const initialState: UserState = {
    firstName: "",
    lastName: "",
    email: "",
    questions : [],
    score : 0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.questions = action.payload.questions;
        state.score = action.payload.score;
    },
    setQuestion: (state, action: PayloadAction<any>) => {
        let question = action.payload.question;
        let answer = action.payload.answer;

        state.questions.push({question, answer})

    },
    setScore: (state, action: PayloadAction<any>) => {
        state.score = action.payload;
    },
    logout: (state) => {
        state.firstName = "";
        state.lastName = "";
        state.email = "";
        state.questions = [];
        state.score = 0;
    },
  },
});

export const { setUser , setQuestion , setScore } = userSlice.actions;

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
