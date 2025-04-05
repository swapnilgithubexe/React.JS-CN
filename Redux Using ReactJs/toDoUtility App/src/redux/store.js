
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";

export const store = redux.createStore(todoReducer);

