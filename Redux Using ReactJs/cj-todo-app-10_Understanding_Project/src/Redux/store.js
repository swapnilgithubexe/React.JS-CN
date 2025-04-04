import * as redux from "redux";
import { todoReducer } from "./Reducers/todoReducers";


export const store = redux.createStore(todoReducer)