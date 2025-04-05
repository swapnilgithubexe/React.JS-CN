// todo constants
export const START_TIMER = "Start Timer";
export const PAUSE_TIMER = "Pause Timer";
export const RESET_TIMER = "Reset Timer";
export const INCREMENT_TIMER = "Increment Timer";

// action creators
export const startTimer = () => ({ type: START_TIMER });
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const resetTimer = () => ({ type: RESET_TIMER });
export const incrementTimer = () => ({ type: INCREMENT_TIMER });
