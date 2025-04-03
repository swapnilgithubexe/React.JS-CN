const redux = require("redux");
const { fetchReducer } = require("./redux/reducers/fetchReducer");

export const store = redux.createStore(fetchReducer);
