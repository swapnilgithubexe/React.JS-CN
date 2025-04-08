import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

export const store = configureStore({
  reducer: { timerReducer, counterReducer }
});
