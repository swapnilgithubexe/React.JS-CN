// remove the timer action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };


const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    start: (state) => {
      state.isRunning = true
    },
    pause: (state) => {
      state.isRunning = false
    },
    reset: (state) => {
      state.elapsedTime = 0;
      state.isRunning = false
    },
    increment: (state) => {
      state.elapsedTime += 1
    }
  }
})

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;
// refactor to use the createSlice method
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

// export the timer reducer function and action creators here
