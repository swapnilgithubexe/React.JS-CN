import {
  INCREMENT_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  START_TIMER
} from "../actions/timerActions";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

export const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, isRunning: true };
    case PAUSE_TIMER:
      return { ...state, isRunning: false };

    case RESET_TIMER:
      return { isRunning: false, elapsedTime: 0 };
    case INCREMENT_TIMER:
      return { ...state, elapsedTime: ++state.elapsedTime };
    default:
      return state;
  }
};
