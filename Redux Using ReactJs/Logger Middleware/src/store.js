import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./redux/middlewares/loggerMiddleware";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

// import middleware function here

// add the middleware function below
export const store = configureStore({
  reducer: { timerReducer, counterReducer },
  middleware: [loggerMiddleware]
});
