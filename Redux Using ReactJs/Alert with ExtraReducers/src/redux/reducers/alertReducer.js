import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    clearAlert: (state, action) => {
      state.message = null
    }
  },
  extraReducers: {
    "timer/startTimer": (state, action) => {
      state.message = "Timer has started."
    },
    "timer/pauseTimer": (state, action) => {
      state.message = "Timer is paused."
    },
    "timer/resetTimer": (state, action) => {
      state.message = `Timer set to 0`
    }
  }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;

// create and export alert selector function here
export const alertSelector = (state) => state.alertReducer.message;

export const clearAlert = alertSlice.actions.clearAlert;
