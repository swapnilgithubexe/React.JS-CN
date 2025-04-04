import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./Reducers/todoReducers";

export const store = createStore(todoReducer)