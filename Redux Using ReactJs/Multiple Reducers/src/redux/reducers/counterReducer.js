// add counter action creators imports here

import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      }

    case RESET_COUNTER:
      return {
        ...state,
        count: 0
      }

    default:
      return state
  }
};
