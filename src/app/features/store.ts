import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import questionsSlice from "./questions/questionsSlice";
import userSlice from "./user/userSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userSlice,
      questions: questionsSlice,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
