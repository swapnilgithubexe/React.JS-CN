
// const redux = require("redux");

import * as redux from "redux";
import { combineReducers } from "redux"
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const result = combineReducers({
  todos: todoReducer,
  notes: noteReducer
})

export const store = redux.createStore(result);

