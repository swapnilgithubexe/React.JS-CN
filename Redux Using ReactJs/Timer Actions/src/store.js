const redux = require("redux");
const { timerReducer } = require("./redux/reducers/timerReducer");

export const store = redux.createStore(timerReducer);
