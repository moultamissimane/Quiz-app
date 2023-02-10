import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";


export interface QuestionsState {
  questions : any[]
}

const initialState: QuestionsState = {
    questions : [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<any>) => {
        state.questions = action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export const selectQuestions = (state: AppState) => state.user;

export default questionsSlice.reducer;
