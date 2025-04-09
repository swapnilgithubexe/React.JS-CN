import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "./redux/reducers/alertReducer";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
// import and include the alert reducer function inside the store

export const store = configureStore({
  reducer: { timerReducer, counterReducer, alertReducer }
});
