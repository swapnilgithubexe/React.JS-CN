import { counterReducer } from "./redux/reducers/counterReducer";

const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");

// combine the reducer functions here
const result = redux.combineReducers({
  timer: timerReducer,
  counter: counterReducer
});

// add the root reducer function to store here
export const store = redux.createStore(result);
