// define counter action constants here
export const INCREMENT_COUNTER = "Increment Counter"
export const DECREMENT_COUNTER = "Decrement Counter"
export const RESET_COUNTER = "Reset Counter"

// define counter action creators here
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const resetCounter = () => ({
  type: RESET_COUNTER
});
